'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/products/StatusBadge'
import { products } from '@/lib/data/products'
import { cn } from '@/lib/utils'
// Theme toggle commented out until dark theme is fully ready
// import { ThemeToggle } from '@/components/ui/ThemeToggle'

type NavItem = { name: string; href: string } | { name: string; products: true }

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', products: true },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

const isActive = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

const linkClasses =
  'text-sm font-semibold leading-6 text-slate-900 dark:text-slate-50 hover:text-primary-700 dark:hover:text-primary-400 transition-colors data-[active]:text-primary-700 dark:data-[active]:text-primary-400'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const productsActive = isActive(pathname, '/products')

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close the mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileProductsOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            {mounted ? (
              <Image
                src={resolvedTheme === 'dark' ? '/images/logo-light.png' : '/images/logo-dark.png'}
                alt="Patheya Technologies"
                width={220}
                height={55}
                priority
                className="h-12 w-auto sm:h-14 transition-opacity duration-300"
              />
            ) : (
              <div className="h-8 w-[180px] sm:h-10" />
            )}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <NavigationMenu.Root aria-label="Main" className="relative hidden lg:flex" delayDuration={100}>
          <NavigationMenu.List className="flex items-center gap-x-8">
            {navigation.map((item) =>
              'products' in item ? (
                <NavigationMenu.Item key={item.name} className="relative">
                  <NavigationMenu.Trigger
                    className={cn(linkClasses, 'group inline-flex items-center gap-1 rounded-md outline-none')}
                    data-active={productsActive ? '' : undefined}
                  >
                    {item.name}
                    <ChevronDown
                      className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute left-1/2 top-full z-50 mt-4 w-[34rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 data-[state=open]:animate-scale-in dark:border-slate-800 dark:bg-slate-900">
                    <ul className="grid gap-1 p-3">
                      {products.map((product) => (
                        <li key={product.slug}>
                          <NavigationMenu.Link asChild active={isActive(pathname, `/products/${product.slug}`)}>
                            <Link
                              href={`/products/${product.slug}`}
                              className="flex items-start gap-4 rounded-xl p-3 outline-none transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-primary-500 data-[active]:bg-slate-50 dark:hover:bg-slate-800 dark:focus-visible:bg-slate-800 dark:data-[active]:bg-slate-800"
                            >
                              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white p-1.5 ring-1 ring-slate-200">
                                <Image src={product.icon} alt="" width={48} height={48} className="h-full w-full object-contain" />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="flex items-center gap-2">
                                  <span className="font-semibold text-slate-900 dark:text-slate-50">{product.name}</span>
                                  <StatusBadge status={product.status} />
                                </span>
                                <span className="mt-0.5 block text-sm leading-5 text-slate-600 dark:text-slate-400">
                                  {product.oneLiner}
                                </span>
                              </span>
                            </Link>
                          </NavigationMenu.Link>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-3 dark:border-slate-800 dark:bg-slate-950">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Software we build and run</span>
                      <NavigationMenu.Link asChild active={pathname === '/products'}>
                        <Link
                          href="/products"
                          className="inline-flex items-center gap-1 rounded text-sm font-semibold text-primary-700 hover:text-primary-800 dark:text-primary-400"
                        >
                          View all products <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </NavigationMenu.Link>
                    </div>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              ) : (
                <NavigationMenu.Item key={item.name}>
                  <NavigationMenu.Link asChild active={isActive(pathname, item.href)}>
                    <Link
                      href={item.href}
                      className={linkClasses}
                      aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              )
            )}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-2 lg:items-center">
          {/* Theme Toggle - Commented out until dark theme is fully ready */}
          {/* <ThemeToggle /> */}
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-h-[calc(100vh-5rem)] overflow-y-auto space-y-1 border-t border-slate-200 dark:border-slate-800 px-4 pb-3 pt-2"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {'products' in item ? (
                    <div>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-slate-50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        aria-expanded={mobileProductsOpen}
                        aria-controls="mobile-products"
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn('h-5 w-5 transition-transform duration-200', mobileProductsOpen && 'rotate-180')}
                          aria-hidden="true"
                        />
                      </button>
                      {mobileProductsOpen && (
                        <ul id="mobile-products" className="mt-1 space-y-1 pl-3">
                          {products.map((product) => (
                            <li key={product.slug}>
                              <Link
                                href={`/products/${product.slug}`}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                aria-current={pathname === `/products/${product.slug}` ? 'page' : undefined}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white p-1 ring-1 ring-slate-200">
                                  <Image src={product.icon} alt="" width={36} height={36} className="h-full w-full object-contain" />
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
                                    {product.name}
                                    {product.status === 'coming-soon' && <StatusBadge status={product.status} />}
                                  </span>
                                  <span className="block truncate text-xs text-slate-600 dark:text-slate-400">
                                    {product.category}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/products"
                              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-primary-700 dark:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View all products <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-slate-50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
                className="pt-2 space-y-2"
              >
                {/* Theme Toggle - Commented out until dark theme is fully ready */}
                {/* <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">Theme</span>
                  <ThemeToggle />
                </div> */}
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
