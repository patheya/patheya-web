import { cn } from '@/lib/utils'
import { productStatusLabel } from '@/lib/data/products'
import type { ProductStatus } from '@/types'

interface StatusBadgeProps {
  status: ProductStatus
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const isLive = status === 'live'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset',
        isLive
          ? 'bg-emerald-50 text-emerald-800 ring-emerald-600/20 dark:bg-emerald-950 dark:text-emerald-300 dark:ring-emerald-400/30'
          : 'bg-amber-50 text-amber-800 ring-amber-600/20 dark:bg-amber-950 dark:text-amber-300 dark:ring-amber-400/30',
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn('h-1.5 w-1.5 rounded-full', isLive ? 'bg-emerald-500' : 'bg-amber-500')}
      />
      {productStatusLabel[status]}
    </span>
  )
}
