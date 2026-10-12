'use client'

import { useCallback, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { TestimonialCard } from '@/components/testimonials/TestimonialCard'
import { TestimonialDialog } from '@/components/testimonials/TestimonialDialog'
import { cn } from '@/lib/utils'
import { testimonials } from '@/lib/data/testimonials'
import type { Testimonial } from '@/types'

// Card width plus gap, in px, and scroll speed: keeps both rows at a calm, even pace
const CARD_STEP = 352
const PIXELS_PER_SECOND = 28

// Second row starts part-way through so the same card isn't stacked above itself
const secondRow = [
  ...testimonials.slice(Math.ceil(testimonials.length / 2)),
  ...testimonials.slice(0, Math.ceil(testimonials.length / 2)),
]

interface MarqueeRowProps {
  items: Testimonial[]
  reverse?: boolean
  paused: boolean
  /** The first row is the accessible one; the second repeats the same testimonials */
  decorative?: boolean
  onOpen: (testimonial: Testimonial, trigger: HTMLElement) => void
}

function MarqueeRow({ items, reverse = false, paused, decorative = false, onOpen }: MarqueeRowProps) {
  const duration = `${Math.round((items.length * CARD_STEP) / PIXELS_PER_SECOND)}s`

  const list = (copy: 'main' | 'loop') => (
    <ul
      aria-hidden={copy === 'loop' ? true : undefined}
      aria-label={copy === 'main' ? 'Testimonials' : undefined}
      className={cn('flex shrink-0 gap-4 pr-4', copy === 'loop' && 'motion-reduce:hidden')}
    >
      {items.map((testimonial) => (
        <li key={testimonial.id} className="flex snap-start">
          {/* Repeat copies stay clickable but are skipped by Tab and screen readers */}
          <TestimonialCard testimonial={testimonial} onOpen={onOpen} decorative={decorative || copy === 'loop'} />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      aria-hidden={decorative ? true : undefined}
      className={cn(
        'group/row mx-auto max-w-screen-2xl overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]',
        // With reduced motion the row is a plain, swipeable list instead of a marquee
        'motion-reduce:snap-x motion-reduce:snap-mandatory motion-reduce:scroll-px-4 motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]',
        decorative && 'motion-reduce:hidden'
      )}
    >
      <div
        style={{ animationDuration: duration }}
        className={cn(
          'flex w-max motion-reduce:animate-none motion-reduce:pl-4',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
          // Hover, press-and-hold (touch) and keyboard focus pause the row
          'group-hover/row:[animation-play-state:paused] group-focus-within/row:[animation-play-state:paused] group-active/row:[animation-play-state:paused]',
          paused && '[animation-play-state:paused]'
        )}
      >
        {list('main')}
        {list('loop')}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const [userPaused, setUserPaused] = useState(false)
  const [selected, setSelected] = useState<Testimonial | null>(null)

  // The card that opened the dialog gets focus back when it closes (Safari doesn't focus clicked buttons)
  const triggerRef = useRef<HTMLElement | null>(null)

  const open = useCallback((testimonial: Testimonial, trigger: HTMLElement) => {
    // A repeat copy isn't keyboard-reachable, so return focus to the same testimonial's main card
    triggerRef.current =
      trigger.tabIndex === -1
        ? document.querySelector<HTMLElement>(`[data-testimonial="${testimonial.id}"]:not([tabindex="-1"])`)
        : trigger
    setSelected(testimonial)
  }, [])
  const close = useCallback(() => setSelected(null), [])

  if (testimonials.length === 0) return null

  const paused = userPaused || selected !== null

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white py-16 dark:bg-slate-950 sm:py-24"
    >
      <Container>
        <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            What people say about working with us
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Founders, directors and domain experts on building with Patheya
          </p>
        </Reveal>
      </Container>

      <div className="space-y-4">
        <MarqueeRow items={testimonials} paused={paused} onOpen={open} />
        <MarqueeRow items={secondRow} reverse paused={paused} decorative onOpen={open} />
      </div>

      {/* Persistent stop control for moving content (WCAG 2.2.2) */}
      <div className="mt-8 flex justify-center motion-reduce:hidden">
        <button
          type="button"
          onClick={() => setUserPaused((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-300 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800"
        >
          {userPaused ? (
            <Play className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Pause className="h-4 w-4" aria-hidden="true" />
          )}
          {userPaused ? 'Play testimonials' : 'Pause testimonials'}
        </button>
      </div>

      <TestimonialDialog testimonial={selected} onClose={close} returnFocusTo={triggerRef} />
    </section>
  )
}
