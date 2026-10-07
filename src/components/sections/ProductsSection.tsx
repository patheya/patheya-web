import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ProductCard } from '@/components/products/ProductCard'
import { products } from '@/lib/data/products'

export function ProductsSection() {
  return (
    <section id="products" aria-labelledby="products-heading" className="relative overflow-hidden bg-white py-16 dark:bg-slate-950 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800"
      />
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-400">
            Our Products
          </p>
          <h2
            id="products-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            We build our own products, too
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Beyond client work, we design, build and run SaaS products for real industries — proof of the craft we
            bring to every engagement.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.1} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-1 font-semibold text-primary-700 hover:text-primary-800 dark:text-primary-400"
          >
            Explore all products <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
