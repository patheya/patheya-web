import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { cn, lowerFirst } from '@/lib/utils'
import { productThemeStyle } from '@/lib/productTheme'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { StatusBadge } from '@/components/products/StatusBadge'
import { ProductLinkButton } from '@/components/products/ProductLinkButton'
import { ProductPreview } from '@/components/products/ProductPreview'
import type { Product } from '@/types'

interface ProductShowcaseProps {
  product: Product
  reverse?: boolean
}

/** Large alternating product row for the /products landing page. */
export function ProductShowcase({ product, reverse = false }: ProductShowcaseProps) {
  return (
    <section
      aria-labelledby={`${product.slug}-heading`}
      style={productThemeStyle(product.brand)}
      className={cn(
        'relative overflow-hidden py-16 sm:py-24',
        reverse ? 'bg-slate-50 dark:bg-slate-900' : 'bg-white dark:bg-slate-950'
      )}
    >
      <div aria-hidden="true" className={cn('pointer-events-none absolute top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-product/10 blur-3xl', reverse ? '-left-40' : '-right-40')} />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className={cn(reverse && 'lg:order-2')}>
            <div className="inline-flex rounded-2xl dark:bg-white dark:p-3">
              <Image
                src={product.logo.src}
                alt={`${product.name} logo`}
                width={product.logo.width}
                height={product.logo.height}
                className="h-14 w-auto sm:h-16"
              />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <StatusBadge status={product.status} />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {product.category} · For {lowerFirst(product.audience)}
              </span>
            </div>
            <h2
              id={`${product.slug}-heading`}
              className="mt-4 text-3xl font-bold tracking-tight text-slate-900 text-balance dark:text-slate-50 sm:text-4xl"
            >
              {product.hero.headline}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{product.summary}</p>
            <ul className="mt-6 space-y-3">
              {product.features.slice(0, 3).map((feature) => (
                <li key={feature.title} className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-product-strong dark:text-slate-300" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{feature.title}.</span>{' '}
                    {feature.description}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <ProductLinkButton link={{ label: `Explore ${product.name}`, href: `/products/${product.slug}` }} />
              <ProductLinkButton link={product.primaryCta} variant="outline" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className={cn(reverse && 'lg:order-1')}>
            <ProductPreview product={product} />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
