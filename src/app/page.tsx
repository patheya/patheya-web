import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ClientLogosSection } from '@/components/sections/ClientLogosSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TechnologyStackSection } from '@/components/sections/TechnologyStackSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Patheya Technologies - Software Development Company in Pune, India',
  description: 'Leading software development company in Pune specializing in web development, mobile apps, cloud services, AI/ML solutions, and DevOps. 15+ happy clients, 25+ projects delivered. Build at the speed of innovation.',
  keywords: [
    'software development company Pune',
    'mobile app development India',
    'cloud DevOps services',
    'AI ML solutions',
    'React development company',
    'Next.js development',
    'Flutter app development',
    'AWS cloud services Pune',
    'software consultancy India',
    'custom software development',
  ],
  openGraph: {
    title: 'Patheya Technologies - Build at the Speed of Innovation',
    description: 'Leading software development company in Pune. Web, mobile, cloud, AI/ML, and DevOps solutions. Trusted by 15+ clients with 25+ successful projects.',
    url: 'https://patheya.tech',
    siteName: 'Patheya Technologies',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Patheya Technologies - Software Development Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patheya Technologies - Build at the Speed of Innovation',
    description: 'Leading software development company in Pune. Web, mobile, cloud, AI/ML, and DevOps solutions.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://patheya.tech',
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ClientLogosSection />
      <ServicesSection />
      <TechnologyStackSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
