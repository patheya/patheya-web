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

// Color scheme for each service icon
const getServiceColors = (iconName: string) => {
  const colorSchemes = {
    Code2: {
      bg: 'bg-blue-100 dark:bg-blue-950',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'hover:border-blue-300 dark:hover:border-blue-700',
    },
    Smartphone: {
      bg: 'bg-purple-100 dark:bg-purple-950',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'hover:border-purple-300 dark:hover:border-purple-700',
    },
    Cloud: {
      bg: 'bg-sky-100 dark:bg-sky-950',
      text: 'text-sky-600 dark:text-sky-400',
      border: 'hover:border-sky-300 dark:hover:border-sky-700',
    },
    Briefcase: {
      bg: 'bg-amber-100 dark:bg-amber-950',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'hover:border-amber-300 dark:hover:border-amber-700',
    },
    Brain: {
      bg: 'bg-emerald-100 dark:bg-emerald-950',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'hover:border-emerald-300 dark:hover:border-emerald-700',
    },
  }
  return colorSchemes[iconName as keyof typeof colorSchemes] || colorSchemes.Code2
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
            const colors = getServiceColors(service.icon)
            return (
              <motion.div key={service.title} variants={item}>
                <Link href={`/services/${service.slug}`}>
                  <Card className={`h-full ${colors.border} hover:shadow-lg transition-all duration-300 cursor-pointer`}>
                    <CardHeader className='flex items-start justify-start'>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className={`mb-4 inline-flex h-24 w-24 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}
                      >
                        <Icon className="h-12 w-12" />
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
