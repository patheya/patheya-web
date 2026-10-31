import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { industries, getIndustryIcon } from '@/lib/data/industries'

export function IndustriesSection() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 sm:py-24 transition-colors">
      <Container>
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Data Analytics for Finance &amp; Healthcare
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Dashboards, automated reporting and prediction engines that turn your data into decisions
          </p>
        </Reveal>
        <ul className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {industries.map((industry, i) => {
            const Icon = getIndustryIcon(industry.icon)
            return (
              <Reveal as="li" key={industry.slug} delay={i * 0.1}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-700"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-slate-50">{industry.name}</h3>
                  <p className="mt-2 flex-1 text-slate-600 dark:text-slate-400">{industry.tagline}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {industry.heroPoints.map((point) => (
                      <li key={point} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary-700 dark:text-primary-400">
                    Explore capabilities
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </ul>
        <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          Looking for the technology behind it? See our{' '}
          <Link href="/services/data-analytics" className="font-semibold text-primary-700 underline-offset-2 hover:underline dark:text-primary-400">
            Data Analytics &amp; Insights service
          </Link>
          .
        </p>
      </Container>
    </section>
  )
}
