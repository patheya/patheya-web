'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail, MapPin } from 'lucide-react'
import { useTheme } from 'next-themes'

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Software Development', href: '/services/software-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
    { name: 'Business Consultancy', href: '/services/business-consultancy' },
  ],
  contact: [
    {
      name: 'connect@patheya.tech',
      href: 'mailto:connect@patheya.tech',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/patheya-technologies',
      icon: Linkedin,
    },
    {
      name: 'Pune, India',
      href: '#',
      icon: MapPin,
    },
  ],
}

export function Footer() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 transition-colors" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="block">
              {mounted ? (
                <Image
                  src={resolvedTheme === 'dark' ? '/images/logo-light.png' : '/images/logo-light.png'}
                  alt="Patheya Technologies"
                  width={200}
                  height={50}
                  className="h-10 w-auto transition-opacity duration-300"
                />
              ) : (
                <div className="h-10 w-[200px]" />
              )}
            </Link>
            <p className="text-base text-slate-400 dark:text-slate-500 max-w-xs">
              Building at the speed of innovation. Your trusted partner for software development and IT consultancy.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/patheya-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white dark:text-slate-500 dark:hover:text-slate-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:connect@patheya.tech"
                className="text-slate-400 hover:text-white dark:text-slate-500 dark:hover:text-slate-200 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {/* Company links */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white dark:text-slate-100">Company</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-slate-400 hover:text-white dark:text-slate-500 dark:hover:text-slate-200 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white dark:text-slate-100">Services</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-slate-400 hover:text-white dark:text-slate-500 dark:hover:text-slate-200 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-slate-800 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-2 text-sm text-slate-400 dark:text-slate-500">
              <MapPin className="h-4 w-4" />
              <span>Pune, India</span>
            </div>
            <p className="mt-4 text-sm text-slate-400 dark:text-slate-500 md:mt-0">
              &copy; {new Date().getFullYear()} Patheya Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
