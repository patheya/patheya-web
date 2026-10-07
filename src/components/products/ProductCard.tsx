import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { productThemeStyle } from '@/lib/productTheme'
import { StatusBadge } from '@/components/products/StatusBadge'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  headingLevel?: 'h2' | 'h3'
  className?: string
}

/** Compact, fully clickable product card. Carries its own brand theme. */
export function ProductCard({ product, headingLevel: Heading = 'h3', className }: ProductCardProps) {
  return (
    <article
      style={productThemeStyle(product.brand)}
      className={cn(
        'group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 focus-within:ring-2 focus-within:ring-product-strong hover:-translate-y-1 hover:border-product/40 hover:shadow-xl hover:shadow-product/10 dark:border-slate-800 dark:bg-slate-900 sm:p-7',
        className
      )}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-product to-product-accent" />
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 -z-10 h-40 w-40 rounded-full bg-product-tint opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:hidden"
      />
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200">
          <Image src={product.icon} alt="" width={56} height={56} className="h-full w-full object-contain" />
        </div>
        <StatusBadge status={product.status} />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-product-strong dark:text-slate-400">
        {product.category}
      </p>
      <Heading className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-50">
        <Link href={`/products/${product.slug}`} className="focus:outline-none">
          {/* Stretched link: the whole card is the click target */}
          <span aria-hidden="true" className="absolute inset-0 z-10" />
          {product.name}
        </Link>
      </Heading>
      <p className="mt-1 text-sm font-medium italic text-slate-600 dark:text-slate-400">{product.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{product.summary}</p>
      <p className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-product-strong dark:text-slate-200">
        Explore {product.name}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </p>
    </article>
  )
}
