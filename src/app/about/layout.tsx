import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Patheya Technologies - Our Story, Values & Mission',
  description: 'Learn about Patheya (पाथेय) - meaning supportive provisions for a journey. A software development company in Pune with 5+ years experience, 15+ clients, and a passionate team committed to innovation, quality, and transparency.',
  keywords: [
    'about Patheya Technologies',
    'software company Pune history',
    'technology consultancy India',
    'company values',
    'innovation culture',
    'Pune tech startup',
  ],
  openGraph: {
    title: 'About Patheya Technologies - Our Story & Values',
    description: 'Founded in Pune, India. Patheya (पाथेय) means supportive provisions for a journey. We equip businesses with technology solutions for their digital transformation.',
    url: 'https://patheya.tech/about',
    siteName: 'Patheya Technologies',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Patheya Technologies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Patheya Technologies - Our Story & Values',
    description: 'Founded in Pune, India. Patheya (पाथेय) means supportive provisions for a journey.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://patheya.tech/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
