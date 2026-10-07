import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, MonitorSmartphone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/products/SectionHeading'
import { ProductLinkButton } from '@/components/products/ProductLinkButton'
import { YouTubeEmbed } from '@/components/products/YouTubeEmbed'
import { ProductCard } from '@/components/products/ProductCard'
import { lowerFirst } from '@/lib/utils'
import { getProductIcon, products, kitchenConnectPartner } from '@/lib/data/products'
import { getServiceBySlug, getServiceIcon } from '@/lib/data/services'
import { companyInfo } from '@/lib/data/company'
import type { Product, Service } from '@/types'

export function ProductHighlights({ product }: { product: Product }) {
  return (
    <section aria-label={`${product.name} at a glance`} className="relative bg-white dark:bg-slate-950">
      <Container>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-800 lg:grid-cols-4">
          {product.highlights.map((highlight) => (
            <div key={highlight.label} className="flex flex-col bg-white px-6 py-6 dark:bg-slate-900">
              <dt className="order-2 mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{highlight.label}</dt>
              <dd className="order-1 text-2xl font-bold tracking-tight text-product-strong dark:text-slate-50 sm:text-3xl">
                {highlight.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

export function ProblemSection({ product }: { product: Product }) {
  return (
    <section aria-labelledby="problem-heading" className="bg-white py-16 dark:bg-slate-950 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            id="problem-heading"
            eyebrow="The problem"
            title={product.problem.title}
            description={product.problem.intro}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {product.problem.points.map((point, index) => {
            const Icon = getProductIcon(point.icon)
            return (
              <Reveal key={point.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{point.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export function HowItWorks({ product }: { product: Product }) {
  return (
    <section aria-labelledby="how-heading" className="bg-product-tint/60 py-16 dark:bg-slate-900 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            id="how-heading"
            eyebrow="How it works"
            title={`From first step to done, with ${product.name}`}
          />
        </Reveal>
        <div className="relative mt-14">
          {/* Connector line on large screens */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-0.5 bg-gradient-to-r from-product/20 via-product/50 to-product/20 lg:block"
          />
          <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {product.steps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 0.1} className="flex flex-col items-center text-center">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-product-strong text-lg font-bold text-white shadow-lg shadow-product/30 ring-4 ring-white dark:ring-slate-900">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-slate-50">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-400">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

export function ProductMedia({ product }: { product: Product }) {
  if (!product.video && product.screenshots.length === 0) return null

  return (
    <section
      id="see-it-in-action"
      aria-labelledby="media-heading"
      className="scroll-mt-24 bg-white py-16 dark:bg-slate-950 sm:py-24"
    >
      <Container maxWidth="5xl">
        <Reveal>
          <SectionHeading
            id="media-heading"
            eyebrow="See it in action"
            title={`Take a closer look at ${product.name}`}
          />
        </Reveal>
        {product.video && (
          <Reveal className="mt-12">
            <YouTubeEmbed youtubeId={product.video.youtubeId} title={product.video.title} />
          </Reveal>
        )}
        {product.screenshots.length > 0 && (
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {product.screenshots.map((shot) => (
              <Reveal key={shot.src}>
                <figure>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="rounded-xl shadow-lg ring-1 ring-slate-900/10"
                  />
                  {shot.caption && (
                    <figcaption className="mt-3 text-sm text-slate-600 dark:text-slate-400">{shot.caption}</figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

export function FeatureGrid({ product }: { product: Product }) {
  return (
    <section aria-labelledby="features-heading" className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            id="features-heading"
            eyebrow="Features"
            title="Everything you need, nothing you don’t"
            description={product.summary}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature, index) => {
            const Icon = getProductIcon(feature.icon)
            return (
              <Reveal key={feature.title} delay={(index % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-product/40 hover:shadow-xl hover:shadow-product/10 dark:border-slate-800 dark:bg-slate-950">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-product-tint text-product-strong dark:bg-slate-800 dark:text-slate-100">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-slate-50">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{feature.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export function Personas({ product }: { product: Product }) {
  const columns = product.personas.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
  return (
    <section aria-labelledby="personas-heading" className="bg-white py-16 dark:bg-slate-950 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            id="personas-heading"
            eyebrow="Who it’s for"
            title={`Built for ${lowerFirst(product.audience)}`}
            description="One platform, with a focused experience for every role."
          />
        </Reveal>
        <div className={`mt-12 grid gap-6 sm:grid-cols-2 ${columns}`}>
          {product.personas.map((persona, index) => {
            const Icon = getProductIcon(persona.icon)
            return (
              <Reveal key={persona.title} delay={index * 0.08}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-product to-product-accent" />
                  <Icon className="h-7 w-7 text-product-strong dark:text-slate-200" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">{persona.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{persona.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export function Spotlight({ product }: { product: Product }) {
  return (
    <section aria-labelledby="spotlight-heading" className="relative overflow-hidden bg-slate-900 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-product/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-product-accent/20 blur-3xl" />
      </div>
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-300">
              <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-product-accent" />
              {product.spotlight.eyebrow}
            </p>
            <h2 id="spotlight-heading" className="mt-3 text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              {product.spotlight.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">{product.spotlight.description}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {product.spotlight.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-200 backdrop-blur"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export function BuiltByPatheya({ product }: { product: Product }) {
  const relatedServices = product.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is Service => service !== undefined)

  return (
    <section aria-labelledby="built-heading" className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <SectionHeading
              id="built-heading"
              align="left"
              eyebrow="Built by Patheya"
              title="Designed, engineered and run in-house"
              description={`${product.name} is built and operated by the same team that delivers our client projects — the same practices, the same standards.`}
            />
            <div className="mt-8 space-y-3">
              {product.platforms.map((platform) => (
                <p key={platform} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <MonitorSmartphone className="mt-0.5 h-5 w-5 flex-shrink-0 text-product-strong dark:text-slate-300" aria-hidden="true" />
                  {platform}
                </p>
              ))}
            </div>
            {product.technologies.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                {product.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          <div className="lg:col-span-3">
            <Reveal>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                The expertise behind it
              </h3>
            </Reveal>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {relatedServices.map((service, index) => {
                const Icon = getServiceIcon(service.icon)
                return (
                  <Reveal key={service.slug} delay={index * 0.08}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:hover:border-primary-700"
                    >
                      <Icon className="h-6 w-6 text-primary-700 dark:text-primary-400" aria-hidden="true" />
                      <span className="mt-4 font-semibold text-slate-900 dark:text-slate-50">{service.title}</span>
                      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-primary-700 dark:text-primary-400">
                        Explore service
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  </Reveal>
                )
              })}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-6 text-slate-600 dark:text-slate-400">
                Have a product idea of your own?{' '}
                <Link href="/contact" className="font-semibold text-primary-700 underline-offset-4 hover:underline dark:text-primary-400">
                  Let&apos;s build it together
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function ProductCtaBand({ product }: { product: Product }) {
  const isComingSoon = product.status === 'coming-soon'
  const enquiry = {
    label: 'Talk to our team',
    href: `mailto:${companyInfo.email}?subject=${encodeURIComponent(`${product.name} – Enquiry`)}`,
  }

  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-product-strong py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-black/10 blur-2xl" />
      </div>
      <Container className="relative text-center">
        <Reveal>
          <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            {isComingSoon ? `Want ${product.name} for your kitchen?` : `Ready to see ${product.name} in action?`}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {isComingSoon
              ? 'Join the early-access list or partner with us ahead of launch. We’ll reach out personally.'
              : `Explore ${product.name} on its own website, or write to us and we’ll walk you through it.`}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ProductLinkButton link={product.primaryCta} variant="inverse" />
            <ProductLinkButton
              link={isComingSoon ? { label: 'Partner with us', href: kitchenConnectPartner } : enquiry}
              variant="inverse-outline"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export function OtherProducts({ product }: { product: Product }) {
  const others = products.filter((other) => other.slug !== product.slug)
  return (
    <section aria-labelledby="other-products-heading" className="bg-white py-16 dark:bg-slate-950 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="other-products-heading" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            More from Patheya
          </h2>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-800 dark:text-primary-400"
          >
            All products <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {others.map((other) => (
            <ProductCard key={other.slug} product={other} headingLevel="h3" />
          ))}
        </div>
      </Container>
    </section>
  )
}
