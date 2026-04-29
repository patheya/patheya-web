import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Patheya Technologies',
  description: 'Explore Patheya Technologies\' 2026 business portfolio — showcasing our software development, mobile app, cloud, and AI/ML projects delivered for clients across India and beyond.',
  keywords: [
    'Patheya portfolio',
    'software projects Pune',
    'IT consultancy case studies',
    'mobile app portfolio India',
    'web development portfolio',
    'business portfolio 2026',
  ],
  openGraph: {
    title: 'Portfolio | Patheya Technologies',
    description: 'Explore our 2026 business portfolio — software development, mobile, cloud, and AI/ML projects.',
    url: 'https://patheya.tech/portfolio',
    siteName: 'Patheya Technologies',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Patheya Technologies Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Patheya Technologies',
    description: 'Explore our 2026 business portfolio — software, mobile, cloud, and AI/ML projects.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://patheya.tech/portfolio',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
