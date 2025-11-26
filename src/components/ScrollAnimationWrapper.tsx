'use client'

import { useEffect, ReactNode } from 'react'

export function ScrollAnimationWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Enable scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    const sections = document.querySelectorAll('.section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return <div className='min-h-screen'>{children}</div>
}
