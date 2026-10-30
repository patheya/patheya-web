'use client'

import { useRef } from 'react'
import { motion, MotionConfig, useInView, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

// Fixed coordinates (not random) so server and client render identically
const noisyDots = [
  [40, 70], [95, 130], [150, 55], [210, 105], [275, 60], [310, 140],
  [60, 200], [125, 240], [190, 190], [245, 255], [300, 215], [35, 290],
  [100, 315], [170, 300], [235, 325], [295, 290], [140, 150], [215, 160],
] as const

const noisyLines = [
  'M25 110 L70 60 L105 170 L150 90 L190 230 L240 120 L290 200 L325 150',
  'M30 260 L85 300 L120 225 L175 330 L230 250 L280 310 L325 255',
]

const bars = [34, 52, 48, 70, 88]

// Lanes carrying data into / out of the hub. Inbound timing is deliberately
// irregular (messy data); outbound is evenly spaced (clean data).
const lanes = [
  { y: 145, inDur: 2.1, inDelay: 0 },
  { y: 175, inDur: 1.6, inDelay: 0.7 },
  { y: 205, inDur: 2.5, inDelay: 0.3 },
  { y: 235, inDur: 1.9, inDelay: 1.1 },
]

const hubX = 380
const hubW = 200
const outX = hubX + hubW
const rightX = 630

// One chart cycle: draw in, hold, fade out, repeat
const CYCLE = 7

export function DataTransformationSection() {
  // Observe the whole SVG: a zero-height bar (scaleY 0) can never intersect, so whileInView would never fire on it
  const svgRef = useRef<SVGSVGElement>(null)
  const inView = useInView(svgRef, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const run = inView && !reduce

  const loop = { repeat: Infinity, ease: 'linear' as const }
  const cycle = { duration: CYCLE, repeat: Infinity, ease: 'easeInOut' as const }

  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
      <Container maxWidth="6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            From scattered data to clear decisions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Your data lives in spreadsheets, databases and documents. We turn it into one trusted picture, and look ahead with it.
          </p>
        </div>

        <MotionConfig reducedMotion="user">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8">
            <svg
              ref={svgRef}
              viewBox="0 0 960 380"
              role="img"
              aria-labelledby="dt-title dt-desc"
              className="h-auto w-full"
            >
              <title id="dt-title">Raw data transformed into insight</title>
              <desc id="dt-desc">
                Scattered, irregular data points on the left flow continuously through Patheya Data Analytics in the
                centre and emerge on the right as a smooth trend line, bar chart and forecast.
              </desc>

              <defs>
                <clipPath id="dt-hub-track">
                  <rect x={hubX + 30} y={244} width={hubW - 60} height={6} rx={3} />
                </clipPath>
              </defs>

              {/* Left: haphazard data */}
              <g>
                {noisyLines.map((d, i) => (
                  <motion.path
                    key={d}
                    d={d}
                    fill="none"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeDasharray="10 8"
                    className="stroke-amber-500/60"
                    animate={reduce ? undefined : { strokeDashoffset: [0, -36] }}
                    transition={{ ...loop, duration: 2.5 + i }}
                  />
                ))}
                {noisyDots.map(([cx, cy], i) => (
                  <motion.circle
                    key={`${cx}-${cy}`}
                    cx={cx}
                    cy={cy}
                    r={i % 3 === 0 ? 7 : 5}
                    className={i % 2 === 0 ? 'fill-amber-500' : 'fill-slate-400'}
                    animate={{ cx: [cx, cx + (i % 2 ? 12 : -10), cx + 6, cx], cy: [cy, cy + (i % 3 ? -12 : 10), cy - 6, cy] }}
                    transition={{ duration: 3 + (i % 5) * 0.7, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
                <text x="175" y="365" textAnchor="middle" className="fill-slate-700 text-[15px] font-semibold dark:fill-slate-300">
                  Raw, scattered data
                </text>
              </g>

              {/* Streams in and out of the hub */}
              {lanes.map((lane, i) => (
                <g key={lane.y}>
                  <line x1={330} y1={lane.y} x2={hubX} y2={lane.y} strokeWidth={2} strokeDasharray="4 6" className="stroke-slate-300 dark:stroke-slate-700" />
                  <line x1={outX} y1={lane.y} x2={rightX} y2={lane.y} strokeWidth={2} className="stroke-indigo-200 dark:stroke-indigo-900" />
                  {[0, 1].map((n) => (
                    <g key={n}>
                      <motion.circle
                        cy={lane.y}
                        cx={330}
                        r={4}
                        className="fill-amber-500"
                        initial={{ opacity: 0 }}
                        animate={reduce ? undefined : { cx: [330, hubX], opacity: [0, 1, 0] }}
                        transition={{ ...loop, duration: lane.inDur, delay: lane.inDelay + n * lane.inDur * 0.5 }}
                      />
                      <motion.circle
                        cy={lane.y}
                        cx={outX}
                        r={4}
                        className="fill-indigo-600 dark:fill-indigo-400"
                        initial={{ opacity: 0 }}
                        animate={reduce ? undefined : { cx: [outX, rightX], opacity: [0, 1, 0] }}
                        transition={{ ...loop, duration: 1.6, delay: i * 0.4 + n * 0.8 }}
                      />
                    </g>
                  ))}
                </g>
              ))}

              {/* Centre: Patheya */}
              <g>
                <motion.rect
                  x={hubX - 8}
                  y={112}
                  width={hubW + 16}
                  height={156}
                  rx={26}
                  fill="none"
                  strokeWidth={2}
                  className="stroke-indigo-400"
                  style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                  animate={{ scale: [1, 1.06, 1], opacity: [0.7, 0.2, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <rect x={hubX} y={120} width={hubW} height={140} rx={20} className="fill-indigo-600" />
                <text x={hubX + hubW / 2} y={170} textAnchor="middle" className="fill-white text-[26px] font-bold">
                  Patheya
                </text>
                <text x={hubX + hubW / 2} y={198} textAnchor="middle" className="fill-indigo-100 text-[15px] font-medium">
                  Data Analytics
                </text>
                <text x={hubX + hubW / 2} y={222} textAnchor="middle" className="fill-indigo-100 text-[13px]">
                  Pipelines · BI · Prediction
                </text>
                {/* Processing shimmer */}
                <rect x={hubX + 30} y={244} width={hubW - 60} height={6} rx={3} className="fill-white/25" />
                <g clipPath="url(#dt-hub-track)">
                  <motion.rect
                    x={hubX + 30}
                    y={244}
                    width={50}
                    height={6}
                    rx={3}
                    className="fill-white"
                    animate={reduce ? undefined : { attrX: [hubX + 30 - 50, hubX + hubW - 30] }}
                    transition={{ ...loop, duration: 1.8 }}
                  />
                </g>
              </g>

              {/* Right: clear insight, redrawn every cycle */}
              <g>
                <line x1={650} y1={310} x2={935} y2={310} strokeWidth={2} className="stroke-slate-300 dark:stroke-slate-700" />
                {bars.map((h, i) => {
                  const grow = 0.08 + i * 0.05
                  return (
                    <motion.rect
                      key={i}
                      x={662 + i * 50}
                      y={310 - h}
                      width={30}
                      height={h}
                      rx={4}
                      className="fill-indigo-200 dark:fill-indigo-900"
                      style={{ transformBox: 'fill-box', transformOrigin: 'bottom' }}
                      initial={{ scaleY: 0 }}
                      animate={
                        reduce
                          ? inView ? { scaleY: 1 } : undefined
                          : run
                            ? { scaleY: [0, 0, 1, 0.82, 1, 1, 0] }
                            : undefined
                      }
                      transition={
                        reduce
                          ? { duration: 0.8 }
                          : { ...cycle, times: [0, grow, grow + 0.18, 0.6, 0.75, 0.92, 1] }
                      }
                    />
                  )
                })}
                <motion.path
                  d="M655 280 C700 270 720 225 765 215 S830 170 870 150"
                  fill="none"
                  strokeWidth={4}
                  strokeLinecap="round"
                  className="stroke-indigo-600 dark:stroke-indigo-400"
                  initial={{ pathLength: 0 }}
                  animate={
                    reduce
                      ? inView ? { pathLength: 1 } : undefined
                      : run
                        ? { pathLength: [0, 1, 1, 1], opacity: [1, 1, 1, 0] }
                        : undefined
                  }
                  transition={reduce ? { duration: 1.6 } : { ...cycle, times: [0, 0.4, 0.9, 1] }}
                />
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={
                    reduce
                      ? inView ? { opacity: 1 } : undefined
                      : run
                        ? { opacity: [0, 0, 1, 1, 0] }
                        : undefined
                  }
                  transition={reduce ? { duration: 0.6 } : { ...cycle, times: [0, 0.38, 0.45, 0.9, 1] }}
                >
                  <circle cx={870} cy={150} r={7} className="fill-indigo-600 dark:fill-indigo-400" />
                  <motion.path
                    d="M870 150 C890 140 910 125 932 105"
                    fill="none"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeDasharray="2 9"
                    className="stroke-emerald-600 dark:stroke-emerald-400"
                    animate={reduce ? undefined : { strokeDashoffset: [0, -22] }}
                    transition={{ ...loop, duration: 1.2 }}
                  />
                  <text x={925} y={85} textAnchor="end" className="fill-emerald-700 text-[14px] font-semibold dark:fill-emerald-400">
                    Forecast
                  </text>
                </motion.g>
                <text x={795} y={365} textAnchor="middle" className="fill-slate-700 text-[15px] font-semibold dark:fill-slate-300">
                  Clear, actionable insight
                </text>
              </g>
            </svg>
          </div>
        </MotionConfig>
      </Container>
    </section>
  )
}
