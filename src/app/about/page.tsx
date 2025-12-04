'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, Lightbulb, Shield, TrendingUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { companyInfo, companyValues, whyChooseUs } from '@/lib/data/company'
import type { Metadata } from 'next'

const valueIcons = [Lightbulb, Award, Users, Shield, TrendingUp, Target]

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

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 sm:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              About Patheya Technologies
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {companyInfo.tagline}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-center mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg text-slate-600 dark:text-slate-300 space-y-4">
              <p>
                Founded in Pune, India, Patheya Technologies has grown from a passionate team of developers
                into a trusted partner for businesses seeking digital transformation. Our name "Patheya" (पथेय)
                means "provisions for a journey" in Sanskrit, reflecting our commitment to equipping businesses
                with the tools they need for their digital journey.
              </p>
              <p>
                With over 5 years of experience, we've successfully delivered 25+ projects to 15+ happy clients
                across various industries. Our team of 15 skilled professionals brings expertise in modern web
                technologies, mobile development, cloud infrastructure, and business consulting.
              </p>
              <p>
                We believe in building long-term partnerships with our clients, understanding their unique
                challenges, and delivering solutions that drive real business value. Innovation, quality, and
                transparency are at the core of everything we do.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              The principles that guide our work and relationships
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {companyValues.map((value, index) => {
              const Icon = valueIcons[index]
              return (
                <motion.div key={value.title} variants={item}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {value.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              What sets us apart from the competition
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {whyChooseUs.map((reason) => (
              <motion.div key={reason.title} variants={item}>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  )
}
