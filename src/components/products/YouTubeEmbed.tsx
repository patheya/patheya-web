'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface YouTubeEmbedProps {
  youtubeId: string
  title: string
}

/**
 * Click-to-load YouTube player. Shows a lightweight thumbnail until the
 * visitor asks to play, so the page doesn't pay for YouTube's ~1MB of
 * scripts up front (keeps LCP and TBT low). Uses the privacy-enhanced domain.
 */
export function YouTubeEmbed({ youtubeId, title }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/10">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${youtubeId}/sddefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
            <Play className="ml-1 h-7 w-7 fill-product-strong text-product-strong sm:h-8 sm:w-8" aria-hidden="true" />
          </span>
          <span className="absolute bottom-4 left-4 right-4 text-left text-sm font-semibold text-white sm:text-base">
            {title}
          </span>
        </button>
      )}
    </div>
  )
}
