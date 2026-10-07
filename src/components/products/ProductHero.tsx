import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { StatusBadge } from '@/components/products/StatusBadge'
import { ProductLinkButton } from '@/components/products/ProductLinkButton'
import { ProductPreview } from '@/components/products/ProductPreview'
import { kitchenConnectPartner } from '@/lib/data/products'
import type { Product, ProductLink } from '@/types'

const secondaryCta = (product: Product): ProductLink | undefined => {
  if (product.status === 'coming-soon') return { label: 'Partner with us', href: kitchenConnectPartner }
  if (product.video) return { label: 'Watch the video', href: '#see-it-in-action' }
  return undefined
}

export function ProductHero({ product }: { product: Product }) {
  const secondary = secondaryCta(product)
  const screenshot = product.screenshots[0]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-product-tint via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
      {/* Decorative brand glow + dot grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-product/20 blur-3xl" />
        <div className="absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-product-accent/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
          style={{
            backgroundImage: 'radial-gradient(rgb(var(--product-brand) / 0.25) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <Link href="/" className="hover:text-slate-900 dark:hover:text-slate-200">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link href="/products" className="hover:text-slate-900 dark:hover:text-slate-200">
                Products
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li aria-current="page" className="font-medium text-slate-900 dark:text-slate-100">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="motion-safe:animate-slide-up">
            <div className="inline-flex rounded-2xl dark:bg-white dark:p-3">
              <Image
                src={product.logo.src}
                alt={`${product.name} logo`}
                width={product.logo.width}
                height={product.logo.height}
                priority
                className={product.logo.width / product.logo.height < 2.2 ? 'h-20 w-auto sm:h-24' : 'h-16 w-auto sm:h-20'}
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <StatusBadge status={product.status} />
              <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700">
                {product.category}
              </span>
            </div>
            {product.fullName && (
              <p className="mt-4 text-sm font-medium text-product-strong dark:text-slate-300">{product.fullName}</p>
            )}
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 text-balance dark:text-slate-50 sm:text-5xl">
              {product.hero.headline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{product.hero.subheadline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ProductLinkButton link={product.primaryCta} />
              {secondary && <ProductLinkButton link={secondary} variant="outline" />}
            </div>
            <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
              Built for <span className="font-semibold text-slate-800 dark:text-slate-200">{product.audience}</span>
            </p>
          </div>

          <div className="motion-safe:animate-fade-in lg:pl-4">
            {screenshot ? (
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="rounded-xl shadow-2xl ring-1 ring-slate-900/10"
              />
            ) : (
              <ProductPreview product={product} />
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
