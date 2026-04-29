'use client'

import { Container } from '@/components/ui/Container'

const PDF_PATH = '/business_portfolio_2026.pdf'
const PDF_SRC = `${PDF_PATH}#toolbar=0&navpanes=0`

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 py-12 transition-colors">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                Patheya Technologies
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
                Our Portfolio
              </h1>
              <p className="mt-3 max-w-xl text-base text-slate-600 dark:text-slate-400">
                A comprehensive overview of our services, projects, and capabilities — compiled in our 2026 business portfolio.
              </p>
            </div>

            {/* Action buttons */}
            {/* <div className="flex flex-shrink-0 flex-wrap gap-3">
              <Button asChild variant="outline">
                <a href={PDF_PATH} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                  Open in tab
                </a>
              </Button>
              <Button asChild>
                <a href={PDF_PATH} download="Patheya_Business_Portfolio_2026.pdf">
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  Download PDF
                </a>
              </Button>
            </div> */}
          </div>
        </Container>
      </section>

      {/* PDF viewer */}
      <section className="py-6">
        <Container>
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <iframe
              src={PDF_SRC}
              title="Patheya Technologies Business Portfolio 2026"
              className="w-full"
              style={{ height: '85vh', minHeight: '600px' }}
            />
          </div>
          {/* <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-500">
            Having trouble viewing?{' '}
            <a
              href={PDF_PATH}
              download="Patheya_Business_Portfolio_2026.pdf"
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              Download the PDF
            </a>{' '}
            instead.
          </p> */}
        </Container>
      </section>
    </main>
  )
}
