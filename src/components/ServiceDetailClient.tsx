'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Code2, Smartphone, Cloud, Briefcase, Brain } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import type { Service } from '@/types'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const getServiceIcon = (iconName: string) => {
  const icons = {
    Code2,
    Smartphone,
    Cloud,
    Briefcase,
    Brain,
  }
  return icons[iconName as keyof typeof icons] || Code2
}

interface ServiceDetailClientProps {
  service: Service
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const Icon = getServiceIcon(service.icon)
  const isNeonmorph = service.slug === 'ai-ml-solutions' || service.slug === 'cloud-devops'
  const isClaymorphic = service.slug === 'software-development'
  const isGlassmorph = service.slug === 'mobile-app-development' || service.slug === 'business-consultancy'

  return (
    <>
      {/* Hero Section - Neonmorphism for AI/ML & Cloud, Claymorphism for Software Dev, Glassmorphism for Mobile & Business */}
      {isNeonmorph ? (
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-100 dark:from-[#0a0e27] dark:via-[#1a1a2e] dark:to-[#0a0e27] py-20 sm:py-32 transition-colors duration-300">
          {/* Neon Grid Background (Dark mode only) */}
          <div className="absolute inset-0 opacity-0 dark:opacity-20 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Glowing Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Orb 1 - Cyan glow */}
            <motion.div
              className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-sky-400/20 dark:bg-cyan-400/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Orb 2 - Magenta glow */}
            <motion.div
              className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-purple-400/20 dark:bg-fuchsia-500/30 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Orb 3 - Green glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-400/20 dark:bg-emerald-400/20 blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
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
              className="relative max-w-4xl mx-auto text-center"
            >
              {/* Neon Panel */}
              <div className="relative bg-white/80 dark:bg-[#0a0e27]/80 backdrop-blur-md border-2 border-sky-500 dark:border-cyan-400 rounded-2xl shadow-[0_0_10px_rgba(14,165,233,0.3),0_0_20px_rgba(14,165,233,0.2)] dark:shadow-[0_0_20px_rgba(0,217,255,0.5),0_0_40px_rgba(0,217,255,0.3)] p-8 sm:p-12 md:p-16">
                {/* Icon with neon glow */}
                <motion.div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-sky-500 dark:bg-cyan-400 text-white dark:text-slate-900 shadow-lg shadow-sky-500/50 dark:shadow-cyan-400/50"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(14, 165, 233, 0.5)',
                      '0 0 30px rgba(14, 165, 233, 0.7)',
                      '0 0 20px rgba(14, 165, 233, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)'
                  }}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl"
                  style={{
                    textShadow: 'var(--text-glow, none)'
                  }}
                >
                  {service.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-200"
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          </Container>

          {/* Add custom CSS for dark mode text glow */}
          <style jsx>{`
            @media (prefers-color-scheme: dark) {
              h1 {
                --text-glow: 0 0 10px rgba(0, 217, 255, 0.3);
              }
            }
          `}</style>
        </section>
      ) : isClaymorphic ? (
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 py-20 sm:py-32 transition-colors duration-300">
          {/* Floating Clay Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Clay Shape 1 - Top Left */}
            <motion.div
              className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-pink-200 dark:bg-slate-700"
              style={{
                boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.5)'
              }}
              animate={{
                y: [0, 20, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Clay Shape 2 - Bottom Right */}
            <motion.div
              className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-purple-200 dark:bg-slate-600"
              style={{
                boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.5)'
              }}
              animate={{
                y: [0, -25, 0],
                x: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Clay Shape 3 - Middle */}
            <motion.div
              className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-orange-200 dark:bg-slate-650"
              style={{
                boxShadow: '6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.5)'
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 6,
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
              className="relative max-w-4xl mx-auto text-center"
            >
              {/* Clay Panel with Neomorphic Shadows */}
              <div className="relative bg-slate-100 dark:bg-slate-800 rounded-[30px] p-8 sm:p-12 md:p-16"
                style={{
                  boxShadow: '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 2px 2px 4px rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Icon with Clay Effect */}
                <div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200 dark:bg-slate-700 text-primary-600 dark:text-primary-400"
                  style={{
                    boxShadow: '4px 4px 8px rgba(163, 177, 198, 0.6), -4px -4px 8px rgba(255, 255, 255, 0.5)'
                  }}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold tracking-tight text-gray-800 dark:text-slate-100 sm:text-5xl"
                >
                  {service.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300"
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          </Container>
        </section>
      ) : isGlassmorph ? (
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
              className="relative max-w-4xl mx-auto text-center"
            >
              {/* Glass Panel */}
              <div className="relative bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-slate-400/20 rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/40 p-8 sm:p-12 md:p-16">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 dark:border-slate-600/30 text-white dark:text-primary-400">
                  <Icon className="h-8 w-8" />
                </div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold tracking-tight text-white dark:text-white sm:text-5xl"
                >
                  {service.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-lg leading-8 text-white/90 dark:text-slate-300"
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          </Container>
        </section>
      ) : (
        <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-20 sm:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600 text-white">
                <Icon className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
            </motion.div>
          </Container>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Comprehensive {service.title.toLowerCase()} solutions
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {service.features.map((feature) => (
              <motion.div key={feature} variants={item}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 dark:text-slate-300">{feature}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
              Technologies We Use
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Industry-leading tools and frameworks
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {service.technologies.map((tech) => (
              <motion.div key={tech} variants={item}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="px-6 py-3">
                    <span className="font-medium text-slate-900 dark:text-slate-100">{tech}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              A structured approach to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
          >
            {[
              { step: 1, title: 'Discovery', description: 'Understanding your requirements and goals' },
              { step: 2, title: 'Planning', description: 'Creating a detailed roadmap and strategy' },
              { step: 3, title: 'Development', description: 'Building your solution with best practices' },
              { step: 4, title: 'Delivery', description: 'Deployment, testing, and ongoing support' },
            ].map((phase) => (
              <motion.div key={phase.step} variants={item}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white text-xl font-bold">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{phase.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{phase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16 sm:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
              Let&apos;s discuss your {service.title.toLowerCase()} needs and create a solution
              that drives real business value.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary-600 hover:bg-slate-100 border-white"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
