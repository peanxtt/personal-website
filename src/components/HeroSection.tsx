'use client'

import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate fade based on viewport height
  const heroOpacity = Math.max(1 - scrollY / window.innerHeight, 0)
  const heroScale = Math.max(1 - scrollY / (window.innerHeight * 2), 0.95)

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center pt-24 pb-20 section relative overflow-hidden'
      style={{
        opacity: heroOpacity,
        transform: `scale(${heroScale})`,
        pointerEvents: heroOpacity === 0 ? 'none' : 'auto',
      }}
    >
      <div className='container-custom relative z-10'>
        <div className='max-w-4xl mx-auto text-center space-y-8 lg:space-y-12'>
          {/* Greeting */}
          <div className='animate-fade-in'>
            <p className='text-sm md:text-base uppercase tracking-[0.3em] text-[var(--text-secondary)] font-inter font-light'>
              Hi, my name is
            </p>
          </div>

          {/* Name */}
          <div className='animate-slide-up'>
            <h1 className='mb-4'>
              Hua Sheng Tan
            </h1>
            <div className='text-2xl md:text-3xl lg:text-4xl font-inter font-light text-[var(--text-secondary)]'>
              I build{' '}
              {mounted && (
                <TypeAnimation
                  sequence={[
                    'products people love',
                    2000,
                    'fast, scalable apps',
                    2000,
                    'seamless experiences',
                    2000,
                  ]}
                  wrapper='span'
                  speed={50}
                  className='text-[var(--text-primary)] font-medium'
                  repeat={Infinity}
                />
              )}
            </div>
          </div>

          {/* Description */}
          <div className='animate-fade-in max-w-2xl mx-auto' style={{ animationDelay: '0.2s' }}>
            <p className='text-lg md:text-xl leading-relaxed'>
              Based in Kuala Lumpur, Malaysia. I enjoy creating useful, beautiful
              apps. With 3+ years in full-stack development, I thrive on solving
              problems and making technology feel simple.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up'
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='px-8 py-3 md:px-10 md:py-4 bg-[var(--text-primary)] text-[var(--bg)] rounded-full font-inter font-medium transition-all duration-200 hover:bg-[var(--accent)] hover:scale-105'
            >
              View Resume
            </a>
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className='px-8 py-3 md:px-10 md:py-4 border-2 border-[var(--text-primary)] text-[var(--text-primary)] rounded-full font-inter font-medium transition-all duration-200 hover:bg-[var(--text-primary)] hover:text-[var(--bg)] hover:scale-105'
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
