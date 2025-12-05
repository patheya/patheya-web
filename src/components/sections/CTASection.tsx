'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function CTASection() {
  return (
    <section className="bg-primary-600 dark:bg-primary-700 py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to start your project?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Let&apos;s discuss how we can help bring your vision to life
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary-600 hover:bg-slate-100 border-white"
              asChild
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
