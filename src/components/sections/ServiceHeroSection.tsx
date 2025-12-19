'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { MatrixRain } from '@/components/effects/MatrixRain'
import { CodeScrollPanel } from '@/components/effects/CodeScrollPanel'

export function ServiceHeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-5 sm:py-32">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950">
        {/* CSS animated gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 animate-gradient-shift"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 50% 80%, rgba(96, 165, 250, 0.2) 0%, transparent 50%)
              `,
            }}
          />
        </div>
      </div>

      {/* Matrix rain effect */}
      <MatrixRain className="pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <Container>
        <div className="relative z-10">
          {/* Code scroll panel - positioned above hero content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <CodeScrollPanel />
          </motion.div>

          {/* Glassmorphic hero content panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Glassmorphic card */}
            <div className="relative bg-white/5 dark:bg-slate-900/30 backdrop-blur-xl border border-white/10 dark:border-primary-500/20 rounded-3xl shadow-2xl shadow-black/20 p-8 sm:p-12 md:p-16">
              {/* Gradient border glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/20 via-transparent to-purple-500/20 -z-10 blur-xl" />

              <div className="text-center relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-block mb-4"
                >
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary-500/10 text-primary-300 border border-primary-500/20">
                    <span className="w-2 h-2 rounded-full bg-primary-400 mr-2 animate-pulse" />
                    Technology Solutions
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
                >
                  Our{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
                    Services
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto"
                >
                  Comprehensive technology solutions tailored to your business needs. From concept to deployment,
                  we handle every aspect of your digital transformation.
                </motion.p>

                {/* Tech stack indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-8 flex flex-wrap justify-center gap-3"
                >
                  {['React', 'Node.js', 'AWS', 'Python', 'Kubernetes'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      className="px-3 py-1 text-xs font-mono text-blue-300 bg-blue-950/50 border border-blue-500/30 rounded-md"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom floating particles effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: 0,
                }}
                animate={{
                  y: [-20, -80, -20],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* Add custom CSS animation for gradient shift */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(10%, -5%) scale(1.1);
          }
          66% {
            transform: translate(-5%, 5%) scale(0.95);
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
