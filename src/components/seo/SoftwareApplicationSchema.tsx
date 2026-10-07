import type { Product } from '@/types'

interface SoftwareApplicationSchemaProps {
  product: Product
}

export function SoftwareApplicationSchema({ product }: SoftwareApplicationSchemaProps) {
  const pageUrl = `https://patheya.tech/products/${product.slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    ...(product.fullName && { alternateName: product.fullName }),
    description: product.summary,
    url: product.url ?? pageUrl,
    mainEntityOfPage: pageUrl,
    image: `https://patheya.tech${product.logo.src}`,
    applicationCategory: product.seo.applicationCategory,
    operatingSystem: product.seo.operatingSystem,
    featureList: product.features.map((feature) => feature.title),
    audience: {
      '@type': 'BusinessAudience',
      audienceType: product.audience,
    },
    ...(product.status === 'coming-soon' && { releaseNotes: 'Coming soon — early access available on request.' }),
    creator: {
      '@type': 'Organization',
      name: 'Patheya Technologies',
      url: 'https://patheya.tech',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Patheya Technologies',
      url: 'https://patheya.tech',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
