'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'
import { cn } from '@/lib/utils'
import { testimonials } from '@/lib/data/testimonials'

const AUTOPLAY_INTERVAL = 6000
const SWIPE_THRESHOLD = 80
const SWIPE_VELOCITY_THRESHOLD = 500

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -40 : 40 }),
}

const reducedSlideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
}

export function TestimonialsSection() {
  const [[activeIndex, direction], setActive] = useState<[number, number]>([0, 0])
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const total = testimonials.length
  const testimonial = testimonials[activeIndex]

  const goTo = useCallback(
    (index: number) => {
      setActive(([current]) => {
        const nextDirection = index > current ? 1 : -1
        return [((index % total) + total) % total, nextDirection]
      })
    },
    [total]
  )

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const previous = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -SWIPE_VELOCITY_THRESHOLD) {
        next()
      } else if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > SWIPE_VELOCITY_THRESHOLD) {
        previous()
      }
    },
    [next, previous]
  )

  useEffect(() => {
    if (isPaused || shouldReduceMotion === true || total <= 1) return
    timeoutRef.current = setTimeout(() => {
      goTo(activeIndex + 1)
    }, AUTOPLAY_INTERVAL)
    return () => clearTimeout(timeoutRef.current)
  }, [activeIndex, isPaused, shouldReduceMotion, total, goTo])

  if (total === 0 || !testimonial) return null

  const variants = shouldReduceMotion ? reducedSlideVariants : slideVariants

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary-500/5 dark:bg-primary-500/10 blur-3xl"
          animate={
            shouldReduceMotion ? undefined : { y: [0, 20, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary-500/5 dark:bg-secondary-500/10 blur-3xl"
          animate={
            shouldReduceMotion ? undefined : { y: [0, -20, 0], x: [0, -15, 0], scale: [1, 1.15, 1] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="flex items-center gap-3 sm:gap-6">
            {total > 1 && (
              <Button
                variant="outline"
                size="sm"
                className="hidden h-10 w-10 shrink-0 rounded-full p-0 sm:flex"
                onClick={previous}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </Button>
            )}

            <motion.div
              layout
              drag={total > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="min-w-0 flex-1 touch-pan-y"
            >
              <Card className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 shadow-xl backdrop-blur-md hover:shadow-xl dark:border-slate-700/40 dark:bg-slate-900/60">
                <div className="p-6 sm:p-10">
                  <Quote
                    className="mb-4 h-10 w-10 text-primary-200 dark:text-primary-800"
                    aria-hidden="true"
                  />

                  <div className="mb-4 flex gap-1" aria-hidden="true">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="sr-only">Rated {testimonial.rating} out of 5 stars</span>

                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={testimonial.id}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <p className="min-h-[9rem] text-lg italic text-slate-600 dark:text-slate-400 sm:min-h-[7rem] sm:text-xl">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6 dark:border-slate-700">
                        <Avatar name={testimonial.name} image={testimonial.image} size="lg" ring />
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-slate-50">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {testimonial.role} at {testimonial.company}
                            {testimonial.projectType ? ` · ${testimonial.projectType}` : ''}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>

            {total > 1 && (
              <Button
                variant="outline"
                size="sm"
                className="hidden h-10 w-10 shrink-0 rounded-full p-0 sm:flex"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            )}
          </div>

          {total > 1 && (
            <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
              <Button
                variant="outline"
                size="sm"
                className="h-10 w-10 rounded-full p-0"
                onClick={previous}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 w-10 rounded-full p-0"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          )}

          {total > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === activeIndex ? 'true' : undefined}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                    i === activeIndex
                      ? 'w-6 bg-primary-500'
                      : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
                  )}
                />
              ))}
            </div>
          )}

          <div aria-live="polite" aria-atomic="true" className="sr-only">
            Showing testimonial {activeIndex + 1} of {total}: {testimonial.name},{' '}
            {testimonial.role} at {testimonial.company}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
