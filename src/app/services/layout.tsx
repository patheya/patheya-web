import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Software, Mobile, Cloud, AI/ML Solutions | Patheya Technologies',
  description: 'Comprehensive technology solutions: Software Development, Mobile App Development, Cloud & DevOps, AI & Machine Learning, and Business Consultancy. Transform your business with cutting-edge technology.',
  keywords: [
    'software development services',
    'mobile app development services',
    'cloud DevOps solutions',
    'AI ML services',
    'business technology consultancy',
    'React development',
    'Flutter development',
    'AWS cloud migration',
    'machine learning consulting',
  ],
  openGraph: {
    title: 'Our Services - Complete Technology Solutions',
    description: 'Software Development, Mobile Apps, Cloud & DevOps, AI/ML, and Business Consultancy. Comprehensive technology solutions tailored to your business needs.',
    url: 'https://patheya.tech/services',
    siteName: 'Patheya Technologies',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Patheya Technologies Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Complete Technology Solutions',
    description: 'Software Development, Mobile Apps, Cloud & DevOps, AI/ML, and Business Consultancy.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://patheya.tech/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
