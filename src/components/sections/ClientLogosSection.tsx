'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Container } from '@/components/ui/Container'
import { clients } from '@/data/clients'
import type { Client } from '@/types'

function ClientLogoTile({ client }: { client: Client }) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const hasThemeVariant = Boolean(client.logoDark)
  const src = hasThemeVariant && mounted && resolvedTheme === 'dark' ? client.logoDark! : client.logo

  return (
    <div className="group flex w-40 shrink-0 flex-col items-center gap-3 px-6 sm:w-48">
      {hasThemeVariant && !mounted ? (
        <div className="h-12 w-full" aria-hidden="true" />
      ) : (
        <div className="relative h-12 w-full">
          <Image
            src={src}
            alt={client.alt || `${client.name} logo`}
            fill
            className="object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            sizes="160px"
          />
        </div>
      )}
      <span
        aria-hidden="true"
        title={client.name}
        className="w-full truncate text-center text-xs text-slate-500 dark:text-slate-400"
      >
        {client.name}
      </span>
    </div>
  )
}

export function ClientLogosSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-16 sm:py-20"
    >
      <Container className='bg-primary-50 max-w-full px-0 sm:px-0 lg:px-0 py-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Trusted by Leading Companies
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Partnering with businesses across industries to deliver exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900 sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 sm:w-32" />

          {shouldReduceMotion ? (
            <div className="flex flex-wrap items-start justify-center gap-y-8">
              {clients.map((client) => (
                <ClientLogoTile key={client.id} client={client} />
              ))}
            </div>
          ) : (
            <div className="flex w-max items-start animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
              <div className="flex items-start">
                {clients.map((client) => (
                  <ClientLogoTile key={client.id} client={client} />
                ))}
              </div>
              <div className="flex items-start" aria-hidden="true">
                {clients.map((client) => (
                  <ClientLogoTile key={`${client.id}-dup`} client={client} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
