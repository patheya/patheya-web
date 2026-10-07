import Link from 'next/link'
import { ArrowRight, ExternalLink, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ProductLink } from '@/types'

interface ProductLinkButtonProps {
  link: ProductLink
  variant?: 'solid' | 'outline' | 'inverse' | 'inverse-outline'
  size?: 'md' | 'lg'
  className?: string
}

const variants = {
  solid: 'bg-product-strong text-white hover:bg-product-strong/90 focus-visible:ring-product-strong',
  outline:
    'border-2 border-product-strong text-product-strong bg-white hover:bg-product-tint focus-visible:ring-product-strong dark:bg-transparent dark:border-slate-300 dark:text-slate-100 dark:hover:bg-slate-800',
  inverse: 'bg-white text-product-strong hover:bg-slate-100 focus-visible:ring-white',
  'inverse-outline': 'border-2 border-white/80 text-white hover:bg-white/10 focus-visible:ring-white',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

/**
 * Button-styled link that picks the right element and affordance for
 * internal routes, external sites (new tab) and mailto links.
 */
export function ProductLinkButton({ link, variant = 'solid', size = 'lg', className }: ProductLinkButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    className
  )
  const isMail = link.href.startsWith('mailto:')
  const isInternal = link.href.startsWith('/') || link.href.startsWith('#')

  if (isInternal) {
    return (
      <Link href={link.href} className={classes}>
        {link.label}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    )
  }

  if (isMail) {
    return (
      <a href={link.href} className={classes}>
        <Mail className="h-4 w-4" aria-hidden="true" />
        {link.label}
      </a>
    )
  }

  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={classes}>
      {link.label}
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}
