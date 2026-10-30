import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { industries, getIndustryBySlug, getIndustryIcon } from '@/lib/data/industries'

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustryBySlug(params.slug)
  if (!industry) return { title: 'Industry Not Found' }

  const title = `${industry.name} Data Analytics & Prediction Solutions | Patheya Technologies`
  const description = `${industry.summary} Data analytics, reporting and prediction engines from Patheya Technologies, Pune.`
  const url = `https://patheya.tech/industries/${industry.slug}`

  return {
    title,
    description,
    keywords: [...industry.keywords, 'Patheya Technologies'],
    openGraph: {
      title,
      description,
      url,
      siteName: 'Patheya Technologies',
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: `${industry.name} analytics - Patheya Technologies` }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.png'] },
    alternates: { canonical: url },
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug)
  if (!industry) notFound()

  const Icon = getIndustryIcon(industry.icon)
  const breadcrumbs = [
    { name: 'Home', url: 'https://patheya.tech' },
    { name: 'Services', url: 'https://patheya.tech/services' },
    { name: industry.name, url: `https://patheya.tech/industries/${industry.slug}` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-sky-100 py-20 dark:from-slate-950 dark:to-slate-900">
        <Container maxWidth="5xl">
          <Reveal>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">
              {industry.name}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
              {industry.tagline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-700 dark:text-slate-300">{industry.summary}</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {industry.heroPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700"
                >
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Discuss your use case <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services/data-analytics">Our analytics services</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
        <Container>
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
              What we can build
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Representative capabilities for {industry.name.toLowerCase()} teams
            </p>
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.useCases.map((useCase, i) => (
              <Reveal as="li" key={useCase.title} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{useCase.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">{useCase.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
        <Container maxWidth="5xl">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
              How we work
            </h2>
          </Reveal>
          <ol className="grid gap-8 sm:grid-cols-2">
            {industry.approach.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.08} className="flex gap-4">
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{step.title}</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
        <Container maxWidth="5xl">
          <Reveal className="mb-10 text-center">
            <h2 className="flex items-center justify-center gap-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
              <ShieldCheck className="h-8 w-8 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              Built for trust
            </h2>
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-3">
            {industry.trust.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.08}>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-50">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          {/* TODO: add NDA-cleared case studies and a productised prediction-engine demo here */}
        </Container>
      </section>

      <section className="bg-primary-600 py-16 dark:bg-primary-700 sm:py-20">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Have data and a question worth answering?</h2>
            <p className="mt-4 text-lg text-primary-100">Tell us about your {industry.name.toLowerCase()} use case and we will share how we would approach it.</p>
            <Button size="lg" variant="outline" className="mt-8 border-white bg-white text-primary-600 hover:bg-slate-100" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
