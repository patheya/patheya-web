'use client'

import { useEffect, useRef } from 'react'

interface MatrixRainProps {
  className?: string
}

export function MatrixRain({ className = '' }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Characters to display - mix of code symbols and characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|~`'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Array to store y-position for each column
    const drops: number[] = Array(columns).fill(1)

    // Color palette - subtle blue/purple brand colors
    const colors = [
      'rgba(96, 165, 250, 0.8)',  // blue-400
      'rgba(147, 197, 253, 0.7)', // blue-300
      'rgba(168, 85, 247, 0.7)',  // purple-500
      'rgba(192, 132, 252, 0.6)', // purple-400
    ]

    let frameCount = 0
    const animate = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.08)' // slate-900 with low opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Render only every 2nd frame for subtle effect
      frameCount++
      if (frameCount % 2 !== 0) {
        requestAnimationFrame(animate)
        return
      }

      ctx.font = `${fontSize}px 'Courier New', monospace`

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters[Math.floor(Math.random() * characters.length)]

        // Use random color from brand palette
        const color = colors[Math.floor(Math.random() * colors.length)]
        ctx.fillStyle = color

        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        // Reset drop randomly after it crosses the screen
        // Lower probability for more subtle effect
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0
        }

        // Increment Y coordinate for next frame
        drops[i]++
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      setCanvasSize()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      style={{ opacity: 0.4 }} // Subtle opacity for professional look
    />
  )
}
