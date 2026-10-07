'use client'

import { motion, MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Render as a list item when used directly inside ul/ol */
  as?: 'div' | 'li'
}

/**
 * Fades content up as it scrolls into view. Lets server components opt into
 * motion without becoming client components; honours prefers-reduced-motion.
 */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Component = as === 'li' ? motion.li : motion.div
  return (
    <MotionConfig reducedMotion="user">
      <Component
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        className={className}
      >
        {children}
      </Component>
    </MotionConfig>
  )
}
