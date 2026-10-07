import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'center', className, id }: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl', className)}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-product-strong dark:text-slate-300">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="mt-2 text-3xl font-bold tracking-tight text-slate-900 text-balance dark:text-slate-50 sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </div>
  )
}
