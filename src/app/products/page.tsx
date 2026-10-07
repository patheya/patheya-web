import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { ProductShowcase } from '@/components/products/ProductShowcase'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { products } from '@/lib/data/products'

const description =
  'TasKram, EASIE and KitchenConnect — SaaS products designed, built and run by Patheya Technologies for compliance firms, educational institutions and food businesses.'

export const metadata: Metadata = {
  title: 'Our Products – TasKram, EASIE & KitchenConnect | Patheya Technologies',
  description,
  keywords: [
    'Patheya products',
    'SaaS products India',
    'TasKram',
    'EASIE',
    'KitchenConnect',
    'AI task management for CA firms',
    'NAAC software',
    'cloud kitchen management software',
  ],
  openGraph: {
    title: 'Our Products – Software We Build and Run | Patheya Technologies',
    description,
    url: 'https://patheya.tech/products',
    siteName: 'Patheya Technologies',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Patheya Technologies Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Products – Software We Build and Run | Patheya Technologies',
    description,
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://patheya.tech/products',
  },
}

export default function ProductsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://patheya.tech' },
    { name: 'Products', url: 'https://patheya.tech/products' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#3F8ED9]/25 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#3A8B80]/20 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#C2570E]/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center motion-safe:animate-slide-up">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">Our Products</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
              Software we build, ship and run ourselves
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Alongside our client work, we design, engineer and operate our own SaaS products — each one solving a
              real problem for a specific industry. It&apos;s the same craft we bring to every project we deliver.
            </p>
          </div>

          <nav aria-label="Jump to a product" className="mx-auto mt-12 max-w-4xl">
            <ul className="grid gap-4 sm:grid-cols-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <a
                    href={`#${product.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
                      <Image src={product.icon} alt="" width={48} height={48} className="h-full w-full object-contain" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-white">{product.name}</span>
                      <span className="block truncate text-sm text-slate-300">{product.category}</span>
                    </span>
                    <ArrowDown
                      className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform group-hover:translate-y-0.5 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {/* Product showcases */}
      {products.map((product, index) => (
        <div key={product.slug} id={product.slug} className="scroll-mt-20">
          <ProductShowcase product={product} reverse={index % 2 === 1} />
        </div>
      ))}

      {/* Services tie-in */}
      <section className="bg-primary-700 py-16 sm:py-20">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Have a product idea of your own?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              We build products for clients with the same team, process and standards behind TasKram, EASIE and
              KitchenConnect.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white text-primary-700 hover:bg-slate-100"
                asChild
              >
                <Link href="/contact">Start a conversation</Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 dark:text-white" asChild>
                <Link href="/services">
                  Explore our services <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
