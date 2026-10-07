import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products, getProductBySlug } from '@/lib/data/products'
import { productThemeStyle } from '@/lib/productTheme'
import { ProductHero } from '@/components/products/ProductHero'
import {
  ProductHighlights,
  ProblemSection,
  HowItWorks,
  ProductMedia,
  FeatureGrid,
  Personas,
  Spotlight,
  BuiltByPatheya,
  ProductCtaBand,
  OtherProducts,
} from '@/components/products/ProductSections'
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'

export const dynamicParams = false

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  const url = `https://patheya.tech/products/${product.slug}`
  const title = `${product.seo.title} | Patheya Technologies`

  // Open Graph / Twitter images come from the sibling opengraph-image.tsx
  return {
    title,
    description: product.seo.description,
    keywords: [...product.seo.keywords, 'Patheya Technologies'],
    openGraph: {
      title,
      description: product.seo.description,
      url,
      siteName: 'Patheya Technologies',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: product.seo.description,
    },
    alternates: {
      canonical: url,
    },
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://patheya.tech' },
    { name: 'Products', url: 'https://patheya.tech/products' },
    { name: product.name, url: `https://patheya.tech/products/${product.slug}` },
  ]

  return (
    <div style={productThemeStyle(product.brand)}>
      <SoftwareApplicationSchema product={product} />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductHero product={product} />
      <ProductHighlights product={product} />
      <ProblemSection product={product} />
      <HowItWorks product={product} />
      <ProductMedia product={product} />
      <FeatureGrid product={product} />
      <Personas product={product} />
      <Spotlight product={product} />
      <BuiltByPatheya product={product} />
      <ProductCtaBand product={product} />
      <OtherProducts product={product} />
    </div>
  )
}
