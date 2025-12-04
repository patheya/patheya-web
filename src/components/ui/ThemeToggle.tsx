'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './Button'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
        <div className="h-8 w-8" />
        <div className="h-8 w-8" />
        <div className="h-8 w-8" />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme('light')}
        className={cn(
          'h-8 w-8 px-0 transition-colors',
          theme === 'light'
            ? 'bg-white dark:bg-slate-700 shadow-sm'
            : 'hover:bg-slate-200 dark:hover:bg-slate-700'
        )}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme('dark')}
        className={cn(
          'h-8 w-8 px-0 transition-colors',
          theme === 'dark'
            ? 'bg-white dark:bg-slate-700 shadow-sm'
            : 'hover:bg-slate-200 dark:hover:bg-slate-700'
        )}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme('system')}
        className={cn(
          'h-8 w-8 px-0 transition-colors',
          theme === 'system'
            ? 'bg-white dark:bg-slate-700 shadow-sm'
            : 'hover:bg-slate-200 dark:hover:bg-slate-700'
        )}
        aria-label="System mode"
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </div>
  )
}
