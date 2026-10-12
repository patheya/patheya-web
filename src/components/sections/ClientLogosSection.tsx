import Image from 'next/image'
import type { CSSProperties } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { clients } from '@/data/clients'
import type { Client } from '@/types'

/*
 * Logos come in very different shapes (Light House is 4.4:1, Sparc is nearly
 * square). Giving every logo the same visible area, rather than the same box,
 * keeps their visual weight even: wide logos get wider, square ones taller.
 */
const LOGO_AREA = 4200
const MAX_LOGO_WIDTH = 150
const MAX_LOGO_HEIGHT = 60

function logoSize({ width, height, scale = 1 }: Client) {
  const ratio = width / height
  let w = Math.sqrt(LOGO_AREA * ratio) * scale
  let h = w / ratio
  if (w > MAX_LOGO_WIDTH) {
    w = MAX_LOGO_WIDTH
    h = w / ratio
  }
  if (h > MAX_LOGO_HEIGHT) {
    h = MAX_LOGO_HEIGHT
    w = h * ratio
  }
  return { width: Math.round(w), height: Math.round(h) }
}

function ClientLogoTile({ client }: { client: Client }) {
  const size = logoSize(client)

  return (
    // Logos sit on white in both themes: most have dark ink and no dark-mode variant
    <figure className="flex h-full flex-col items-center justify-between gap-3 rounded-2xl bg-white px-3 pb-3 pt-5 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:shadow-md motion-safe:hover:-translate-y-0.5 dark:ring-slate-700 sm:px-4 sm:pt-6">
      <div className="flex h-12 w-full items-center justify-center sm:h-16">
        <Image
          src={client.logo}
          alt=""
          width={size.width}
          height={size.height}
          sizes={`${size.width}px`}
          style={{ '--logo-w': size.width } as CSSProperties}
          className="h-auto max-h-full w-[calc(var(--logo-w)*0.7px)] max-w-full object-contain sm:w-[calc(var(--logo-w)*1px)]"
        />
      </div>
      <figcaption className="flex min-h-[2.5em] items-center text-center text-xs font-medium leading-tight text-slate-700 sm:text-sm">
        {client.name}
      </figcaption>
    </figure>
  )
}

export function ClientLogosSection() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24"
    >
      <Container>
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2
            id="clients-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Trusted by Leading Companies
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Partnering with businesses across industries to deliver exceptional results
          </p>
        </Reveal>

        {/* Flex rather than grid so a part-filled last row stays centred */}
        <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 sm:gap-4">
          {clients.map((client) => (
            <li
              key={client.id}
              className="w-[calc((100%-1.5rem)/3)] sm:w-[calc((100%-3rem)/4)] lg:w-[calc((100%-4rem)/5)]"
            >
              <ClientLogoTile client={client} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
