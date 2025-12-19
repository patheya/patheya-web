import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/lib/data/services'
import { ServiceDetailClient } from '@/components/ServiceDetailClient'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  // Create service-specific metadata
  const title = `${service.title} Services | Patheya Technologies`
  const description = `${service.description} Expert ${service.title.toLowerCase()} services in Pune, India. ${service.features.slice(0, 3).join(', ')}.`

  return {
    title,
    description,
    keywords: [
      service.title.toLowerCase(),
      ...service.technologies.map(tech => tech.toLowerCase()),
      `${service.title.toLowerCase()} services`,
      `${service.title.toLowerCase()} company Pune`,
      'Patheya Technologies',
    ],
    openGraph: {
      title,
      description,
      url: `https://patheya.tech/services/${service.slug}`,
      siteName: 'Patheya Technologies',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: `${service.title} - Patheya Technologies`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-image.png'],
    },
    alternates: {
      canonical: `https://patheya.tech/services/${service.slug}`,
    },
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}
