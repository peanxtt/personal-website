'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='fixed top-0 left-0 w-full h-1 z-[100] bg-transparent'>
      <div
        className='h-full bg-gradient-to-r from-[var(--accent)] to-[var(--text-primary)] transition-all duration-150 ease-out'
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
