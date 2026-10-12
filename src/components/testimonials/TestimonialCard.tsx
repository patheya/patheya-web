import Image from 'next/image'
import { Quote, Star } from 'lucide-react'
import { Avatar } from '@/components/ui/Avatar'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/types'

export function TestimonialAuthor({
  testimonial,
  showSecondaryRole = false,
  nameAs: NameTag = 'p',
}: {
  testimonial: Testimonial
  showSecondaryRole?: boolean
  nameAs?: React.ElementType
}) {
  return (
    <div className="flex items-center gap-3">
      {testimonial.logo ? (
        <span className="flex h-11 w-16 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 ring-1 ring-slate-200 dark:ring-slate-700">
          <Image
            src={testimonial.logo.src}
            alt=""
            width={testimonial.logo.width}
            height={testimonial.logo.height}
            sizes="64px"
            className="max-h-full w-auto object-contain"
          />
        </span>
      ) : (
        <Avatar name={testimonial.name} image={testimonial.image} size="md" />
      )}
      <div className="min-w-0">
        <NameTag className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">
          {testimonial.name}
        </NameTag>
        <p className={cn('text-xs text-slate-600 dark:text-slate-400', !showSecondaryRole && 'line-clamp-2')}>
          {testimonial.role} at {testimonial.company}
        </p>
        {showSecondaryRole && testimonial.secondaryRole && (
          <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">{testimonial.secondaryRole}</p>
        )}
      </div>
    </div>
  )
}

export function TestimonialRating({ rating }: { rating?: number }) {
  if (!rating) return null
  return (
    <>
      <span className="flex gap-0.5" aria-hidden="true">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
        ))}
      </span>
      <span className="sr-only">Rated {rating} out of 5 stars</span>
    </>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
  onOpen: (testimonial: Testimonial, trigger: HTMLElement) => void
  /** Repeat copy in a marquee: clickable, but out of the Tab order */
  decorative?: boolean
}

/** Fixed-size card: the quote is clamped and the whole card opens the full text */
export function TestimonialCard({ testimonial, onOpen, decorative = false }: TestimonialCardProps) {
  return (
    <article className="relative flex h-[18.5rem] w-[19rem] shrink-0 flex-col rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary-500 hover:shadow-md dark:bg-slate-900 dark:ring-slate-800 sm:w-[21rem] sm:p-6">
      <div className="flex items-center justify-between">
        <Quote className="h-6 w-6 fill-primary-100 text-primary-500 dark:fill-primary-900" aria-hidden="true" />
        <TestimonialRating rating={testimonial.rating} />
      </div>

      <p className="mt-3 line-clamp-4 shrink-0 text-[0.9375rem] leading-relaxed text-slate-700 dark:text-slate-300">
        {testimonial.content.replace(/\s*\n\s*\n\s*/g, ' ')}
      </p>

      <button
        type="button"
        data-testimonial={testimonial.id}
        tabIndex={decorative ? -1 : undefined}
        onClick={(event) => onOpen(testimonial, event.currentTarget)}
        className="mt-2 self-start text-sm font-semibold text-primary-700 after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none dark:text-primary-300"
      >
        Read more<span className="sr-only">: full testimonial from {testimonial.name}</span>
      </button>

      <div className="mt-auto border-t border-slate-200 pt-4 dark:border-slate-800">
        <TestimonialAuthor testimonial={testimonial} />
      </div>
    </article>
  )
}
