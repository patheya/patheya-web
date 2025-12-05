'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-sky-500 to-purple-400 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 py-20 sm:py-32 transition-colors duration-300">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Orb 1 - Top Left */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary-400/30 to-secondary-400/20 dark:from-blue-500/20 dark:to-purple-500/10 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Orb 2 - Bottom Right */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-secondary-400/30 to-primary-400/20 dark:from-purple-500/20 dark:to-blue-500/10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Orb 3 - Center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-300/20 to-secondary-300/20 dark:from-blue-400/10 dark:to-purple-400/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-slate-400/20 rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/40 p-8 sm:p-12 md:p-16"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl font-bold tracking-tight text-white dark:text-slate-50 sm:text-5xl md:text-6xl"
            >
              Build at the speed of{' '}
              <span className="text-primary-800 dark:text-primary-400">innovation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-6 text-lg leading-8 text-white/90 dark:text-slate-300 max-w-2xl mx-auto"
            >
              Patheya Technologies delivers cutting-edge software solutions that transform your ideas into reality.
              From web and mobile apps to cloud infrastructure, we&apos;re your trusted technology partner.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="mt-10 flex items-center justify-center gap-4 flex-wrap"
            >
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
