'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ServiceHeroSection } from '@/components/sections/ServiceHeroSection'
import { services, getServiceIcon } from '@/lib/data/services'

// Color scheme for each service icon
const getServiceColors = (iconName: string) => {
  const colorSchemes = {
    Code2: {
      bg: 'bg-blue-100 dark:bg-blue-950',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'hover:border-blue-300 dark:hover:border-blue-700',
      checkmark: 'text-blue-600 dark:text-blue-400',
    },
    Smartphone: {
      bg: 'bg-purple-100 dark:bg-purple-950',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'hover:border-purple-300 dark:hover:border-purple-700',
      checkmark: 'text-purple-600 dark:text-purple-400',
    },
    Cloud: {
      bg: 'bg-sky-100 dark:bg-sky-950',
      text: 'text-sky-600 dark:text-sky-400',
      border: 'hover:border-sky-300 dark:hover:border-sky-700',
      checkmark: 'text-sky-600 dark:text-sky-400',
    },
    Briefcase: {
      bg: 'bg-amber-100 dark:bg-amber-950',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'hover:border-amber-300 dark:hover:border-amber-700',
      checkmark: 'text-amber-600 dark:text-amber-400',
    },
    Brain: {
      bg: 'bg-emerald-100 dark:bg-emerald-950',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'hover:border-emerald-300 dark:hover:border-emerald-700',
      checkmark: 'text-emerald-600 dark:text-emerald-400',
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

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section with Matrix Effect */}
      <ServiceHeroSection />

      {/* Services Grid Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            {services.map((service) => {
              const Icon = getServiceIcon(service.icon)
              const colors = getServiceColors(service.icon)
              return (
                <motion.div key={service.id} variants={item}>
                  <Card className={`h-full hover:shadow-xl ${colors.border} transition-all duration-300`}>
                    <CardHeader>
                      <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature) => (
                            <li key={feature} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                              <span className={`${colors.checkmark} mr-2`}>✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/services/${service.slug}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Let&apos;s have a conversation about your project requirements. We&apos;ll help you determine
              the best approach for your specific needs.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
