import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/lib/data/services'
import { ServiceDetailClient } from '@/components/ServiceDetailClient'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}
