import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Patheya Technologies - Let\'s Build Your Digital Future Together',
  description: 'Get in touch with Patheya Technologies. Located in Pune, India. Reach us via email at connect@patheya.tech or connect on LinkedIn. Let\'s discuss your project requirements.',
  keywords: [
    'contact Patheya Technologies',
    'software development inquiry',
    'Pune software company contact',
    'project consultation',
    'technology solutions quote',
  ],
  openGraph: {
    title: 'Contact Patheya Technologies - Let\'s Build Together',
    description: 'Get in touch with our team in Pune, India. Email us at connect@patheya.tech or connect on LinkedIn.',
    url: 'https://patheya.tech/contact',
    siteName: 'Patheya Technologies',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Patheya Technologies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Patheya Technologies - Let\'s Build Together',
    description: 'Get in touch with our team in Pune, India. Let\'s discuss your project.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://patheya.tech/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
