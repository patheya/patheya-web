'use client'

import { Code2, Smartphone, Cloud, Briefcase, Brain } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card'
import { services } from '@/lib/data/services'

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ServicesSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24 transition-colors">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon)
            return (
              <motion.div key={service.title} variants={item}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400"
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
