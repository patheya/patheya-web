'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const stats = [
  { label: 'Happy Clients', value: 15, suffix: '+' },
  { label: 'Projects Completed', value: 25, suffix: '+' },
  { label: 'Team Members', value: 15, suffix: '' },
  { label: 'Years Experience', value: 5, suffix: '+' },
]

function CountUpAnimation({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="text-4xl font-bold text-primary-600 dark:text-primary-400">
      {count}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="bg-white dark:bg-slate-800 py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <CountUpAnimation end={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
