import { Container } from '@/components/ui/Container'
import { ProductCard } from '@/components/products/ProductCard'
import { getProductsForService } from '@/lib/data/products'

interface ServiceProductsProps {
  serviceSlug: string
  serviceTitle: string
}

/** "Built with this expertise" strip on service pages, linking to our products. */
export function ServiceProducts({ serviceSlug, serviceTitle }: ServiceProductsProps) {
  const related = getProductsForService(serviceSlug)
  if (related.length === 0) return null

  return (
    <section aria-labelledby="service-products-heading" className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-400">
            Proof in production
          </p>
          <h2
            id="service-products-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            Our own products, built with this expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Our {serviceTitle} practice also powers the SaaS products we build and run ourselves.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
