'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, Lightbulb, Shield, TrendingUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { companyInfo, companyValues, whyChooseUs } from '@/lib/data/company'
import { Eczar } from 'next/font/google'

const eczar = Eczar({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

const valueIcons = [Lightbulb, Award, Users, Shield, TrendingUp, Target]

// Color scheme for each core value icon
const valueColors = [
  {
    // Lightbulb - Innovation
    bg: 'bg-amber-100 dark:bg-amber-950',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'hover:border-amber-300 dark:hover:border-amber-700',
  },
  {
    // Award - Excellence
    bg: 'bg-violet-100 dark:bg-violet-950',
    text: 'text-violet-600 dark:text-violet-400',
    border: 'hover:border-violet-300 dark:hover:border-violet-700',
  },
  {
    // Users - Collaboration
    bg: 'bg-blue-100 dark:bg-blue-950',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'hover:border-blue-300 dark:hover:border-blue-700',
  },
  {
    // Shield - Integrity/Security
    bg: 'bg-emerald-100 dark:bg-emerald-950',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'hover:border-emerald-300 dark:hover:border-emerald-700',
  },
  {
    // TrendingUp - Growth
    bg: 'bg-sky-100 dark:bg-sky-950',
    text: 'text-sky-600 dark:text-sky-400',
    border: 'hover:border-sky-300 dark:hover:border-sky-700',
  },
  {
    // Target - Focus
    bg: 'bg-rose-100 dark:bg-rose-950',
    text: 'text-rose-600 dark:text-rose-400',
    border: 'hover:border-rose-300 dark:hover:border-rose-700',
  },
]

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
  const breadcrumbs = [
    { name: 'Home', url: 'https://patheya.tech' },
    { name: 'About', url: 'https://patheya.tech/about' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-sky-500 to-purple-400 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 py-20 transition-colors duration-300">
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
            className="relative max-w-5xl mx-auto bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-white/20 dark:border-slate-400/20 rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/40 p-8 sm:p-12 md:p-16"
          >
            {/* Title */}
            <div className="text-center mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold tracking-tight text-white dark:text-white sm:text-5xl"
              >
                About Pātheya Technologies
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-lg leading-8 text-white/90 dark:text-slate-300"
              >
                {companyInfo.tagline}
              </motion.p>
            </div>

            {/* Philosophy Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Divider */}
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-indigo-500 mx-auto rounded-full" />

              {/* Philosophy Title */}
              <h2 className="text-2xl font-bold text-center text-white dark:text-white sm:text-3xl">
                Philosophy Behind the Name
              </h2>

              {/* Sanskrit Meaning */}
              <div className="text-center">
                <p className="text-xl leading-relaxed text-white/95 dark:text-slate-200">
                  <span className="font-semibold text-white">Pātheya</span>{' '}
                  <span lang="sa-Deva" className={`${eczar.className} text-3xl align-middle font-medium text-white-300 dark:text-primary-300`}>
                    (पाथेय)
                  </span>
                </p>
                <p className="mt-2 text-base text-white/80 dark:text-slate-300 italic">
                  Sanskrit - supportive provisions made for a journey
                </p>
              </div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <p className="text-lg leading-relaxed text-white/90 dark:text-slate-200 text-center">
                  Here at <span className="font-semibold text-white">Pātheya</span>,
                  this is exactly what we have our motive to give all technological supportive provisions
                  and consultations to our valued customers in the journey of their Products. We are a
                  startup working with esteemed clients all across India and Globe, who are supported by
                  our enthusiast team members.
                </p>
              </motion.div>
            </motion.div>
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
                Founded in Pune, India(Bharat), Pātheya Technologies has grown from a passionate team of developers
                into a trusted partner for businesses seeking digital transformation. With a name rooted in Sanskrit,
                we&apos;re committed to equipping businesses with the tools they need for their digital journey.
              </p>
              <p>
                With over 5 years of experience, we&apos;ve successfully delivered 25+ projects to 15+ happy clients
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
              const colors = valueColors[index]
              return (
                <motion.div key={value.title} variants={item}>
                  <Card className={`h-full ${colors.border} hover:shadow-lg transition-all duration-300`}>
                    <CardHeader>
                      <div className={`mb-4 inline-flex h-24 w-24 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}>
                        <Icon className="h-12 w-12" />
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
