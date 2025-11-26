'use client'

import { useState, useEffect } from 'react'

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    // Start fade out after 1 second
    const fadeTimer = setTimeout(() => {
      setOpacity(0)
    }, 1000)

    // Remove from DOM after fade animation completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className='loading-overlay' style={{ opacity }}>
      <div className='text-center space-y-6'>
        {/* Logo/Name */}
        <div className='text-5xl md:text-7xl font-sora font-bold text-[var(--text-primary)] animate-fade-in'>
          Hua Sheng
        </div>
        {/* Loading bar */}
        <div className='w-32 h-1 bg-[var(--surface)] rounded-full overflow-hidden mx-auto'>
          <div className='h-full bg-[var(--text-primary)] animate-loading-bar rounded-full'></div>
        </div>
      </div>
    </div>
  )
}
