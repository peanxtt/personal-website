'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function AboutSection() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // About section starts fading in when hero is halfway faded out
  const aboutStart = mounted ? window.innerHeight * 0.5 : 0
  const aboutEnd = mounted ? window.innerHeight : 1
  const aboutOpacity = Math.min(Math.max((scrollY - aboutStart) / (aboutEnd - aboutStart), 0), 1)
  const aboutTranslateY = (1 - aboutOpacity) * 50

  return (
    <section
      id='about'
      className='py-20 md:py-32 section'
      style={{
        opacity: aboutOpacity,
        transform: `translateY(${aboutTranslateY}px)`,
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
      }}
    >
      <div className='container-custom'>
        {/* Section Header */}
        <div className='mb-12 md:mb-16'>
          <h2 className='mb-4'>About Me</h2>
          <div className='w-16 h-1 bg-[var(--accent)] rounded-full'></div>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start'>
          {/* Image Column */}
          <div className='lg:col-span-2'>
            <div className='relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-[var(--surface)]'>
              <Image
                src='/hero.png'
                alt='Hua Sheng Tan'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>

          {/* Text Column */}
          <div className='lg:col-span-3 space-y-6'>
            {/* Biography */}
            <div className='space-y-4'>
              <p className='text-lg md:text-xl leading-relaxed'>
                Hey! I&apos;m Hua Sheng, a software engineer based in Kuala Lumpur
                with 3+ years of experience building web applications. I specialize
                in React, Next.js, and Node.js, and I love crafting clean, performant
                solutions that people actually enjoy using.
              </p>
              <p className='text-lg md:text-xl leading-relaxed'>
                I work across the entire stack — whether it&apos;s architecting scalable
                backends, optimizing frontend performance, or bridging the gap between
                design and development. My focus is on writing maintainable code and
                delivering user experiences that just work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
