import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BrowserFrameProps {
  url?: string
  children: ReactNode
  className?: string
}

export function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 dark:border-slate-700 dark:shadow-black/40',
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        {url && (
          <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-slate-600 ring-1 ring-slate-200">
            {url}
          </span>
        )}
      </div>
      <div className="bg-white">{children}</div>
    </div>
  )
}

interface PhoneFrameProps {
  children: ReactNode
  className?: string
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        'relative mx-auto w-[260px] rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl shadow-slate-900/25 sm:w-[280px]',
        className
      )}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
      <div className="overflow-hidden rounded-[1.9rem] bg-white">{children}</div>
    </div>
  )
}
