'use client'

import { HTMLAttributes, forwardRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  image?: string
  size?: 'sm' | 'md' | 'lg'
  ring?: boolean
}

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-12 w-12 text-base',
  lg: 'h-16 w-16 text-xl',
}

const imageSizes = {
  sm: '32px',
  md: '48px',
  lg: '64px',
}

const colorClasses = [
  'bg-primary-500',
  'bg-conifer-500',
  'bg-primary-600',
  'bg-conifer-600',
]

// Honorifics such as "Prof." or "Shri." are skipped so initials come from the person's name
const HONORIFIC = /^(shri|smt|prof|dr|mr|mrs|ms)\.?$/i

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter((word) => !HONORIFIC.test(word))
  const first = words[0]?.[0] ?? ''
  const last = words.length > 1 ? words[words.length - 1]?.[0] ?? '' : ''
  return (first + last).toUpperCase()
}

function getColorClass(name: string): string {
  const hash = name
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return colorClasses[hash % colorClasses.length]
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, name, image, size = 'md', ring = false, ...props }, ref) => {
    const [imageError, setImageError] = useState(false)
    const showImage = Boolean(image) && !imageError

    return (
      <div
        ref={ref}
        className={cn(
          'relative shrink-0 overflow-hidden rounded-full',
          sizeClasses[size],
          ring && 'ring-2 ring-primary-400/50 ring-offset-2 ring-offset-white dark:ring-offset-slate-900',
          className
        )}
        {...props}
      >
        {showImage ? (
          <Image
            src={image as string}
            alt={name}
            fill
            sizes={imageSizes[size]}
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className={cn(
              'flex h-full w-full items-center justify-center font-semibold text-white',
              getColorClass(name)
            )}
          >
            {getInitials(name)}
          </div>
        )}
      </div>
    )
  }
)
Avatar.displayName = 'Avatar'

export { Avatar }
