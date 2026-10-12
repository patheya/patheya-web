'use client'

import type { RefObject } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Quote, X } from 'lucide-react'
import { TestimonialAuthor, TestimonialRating } from '@/components/testimonials/TestimonialCard'
import type { Testimonial } from '@/types'

interface TestimonialDialogProps {
  testimonial: Testimonial | null
  onClose: () => void
  returnFocusTo: RefObject<HTMLElement | null>
}

/** Full-text view of a testimonial. Radix handles the focus trap and Esc; focus returns to the opening card. */
export function TestimonialDialog({ testimonial, onClose, returnFocusTo }: TestimonialDialogProps) {
  return (
    <Dialog.Root open={testimonial !== null} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm motion-safe:animate-fade-in" />
        <Dialog.Content
          onCloseAutoFocus={(event) => {
            event.preventDefault()
            returnFocusTo.current?.focus()
          }}
          className="fixed left-1/2 top-1/2 z-50 flex max-h-[85vh] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 focus:outline-none dark:bg-slate-900 dark:ring-slate-800">
          {testimonial && (
            <>
              <div className="overflow-y-auto p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 pr-10">
                  <Quote className="h-8 w-8 fill-primary-100 text-primary-500 dark:fill-primary-900" aria-hidden="true" />
                  <TestimonialRating rating={testimonial.rating} />
                </div>
                <Dialog.Description asChild>
                  <blockquote className="mt-4 space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
                    {testimonial.content.split(/\n\s*\n/).map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </blockquote>
                </Dialog.Description>
                <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
                  <TestimonialAuthor testimonial={testimonial} showSecondaryRole nameAs={Dialog.Title} />
                </div>
              </div>
              <Dialog.Close
                aria-label="Close"
                className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </Dialog.Close>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
