'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { companyInfo } from '@/lib/data/company'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Reach out to us via email',
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    action: 'Send Email',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Connect with us on LinkedIn',
    value: 'Patheya Technologies',
    href: companyInfo.linkedin,
    action: 'Visit LinkedIn',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Find us at',
    value: companyInfo.location,
    href: '#',
    action: '',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'We are available',
    value: 'Monday - Friday, 9:00 AM - 6:00 PM IST',
    href: '#',
    action: '',
  },
]

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

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://patheya.tech' },
    { name: 'Contact', url: 'https://patheya.tech/contact' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {/* Hero Section */}
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
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold tracking-tight text-white dark:text-white sm:text-5xl"
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg leading-8 text-white/90 dark:text-slate-300"
              >
                Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
                Reach out to us through any of the channels below.
              </motion.p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950">
        <Container>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <motion.div key={method.title} variants={item}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{method.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-900 dark:text-slate-100 font-medium mb-4">{method.value}</p>
                      {method.action && (
                        <Button
                          asChild
                          variant={method.icon === Mail ? 'primary' : 'outline'}
                        >
                          <a
                            href={method.href}
                            target={method.icon === Linkedin ? '_blank' : undefined}
                            rel={method.icon === Linkedin ? 'noopener noreferrer' : undefined}
                          >
                            {method.action}
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
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
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
              Whether you have a detailed project plan or just an idea, we&apos;re here to help.
              Let&apos;s have a conversation about how we can work together.
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
                <a href={`mailto:${companyInfo.email}`}>Send Us an Email</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <a
                  href={companyInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
