import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Patheya Technologies - Software Development & Consultancy',
  description: 'Leading software development company specializing in web, mobile, cloud, and DevOps solutions. Building at the speed of innovation.',
  keywords: ['software development', 'mobile app development', 'cloud services', 'DevOps', 'ReactJS', 'Next.js', 'Pune'],
  authors: [{ name: 'Patheya Technologies' }],
  creator: 'Patheya Technologies',
  publisher: 'Patheya Technologies',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://patheya.tech',
    siteName: 'Patheya Technologies',
    title: 'Patheya Technologies - Software Development & Consultancy',
    description: 'Leading software development company specializing in web, mobile, cloud, and DevOps solutions.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Patheya Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patheya Technologies - Software Development & Consultancy',
    description: 'Leading software development company specializing in web, mobile, cloud, and DevOps solutions.',
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
