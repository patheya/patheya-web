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
  return (
    <>
      {/* Hero Section */}
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
              Let's discuss your {service.title.toLowerCase()} needs and create a solution
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
