'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { services, getServiceIcon } from '@/lib/data/services'

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-20 sm:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Comprehensive technology solutions tailored to your business needs. From concept to deployment,
              we handle every aspect of your digital transformation.
            </p>
          </motion.div>
        </Container>
      </section>

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
              return (
                <motion.div key={service.id} variants={item}>
                  <Card className="h-full hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
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
                              <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
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
              Let's have a conversation about your project requirements. We'll help you determine
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
