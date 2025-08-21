'use client'

import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

import { MotionDiv } from '@/hooks/useFramerMotion'

const HeroSection = () => {
  const handlePopup = useState(true)

  return (
    <section className='min-h-screen flex flex-col justify-center py-0 font-nunito select-none'>
      <div className='max-w-4xl'>
        <MotionDiv delay={1}>
          <h1 className='text-milk text-base sm:text-lg mb-4'>
            Hi, my name is
          </h1>
        </MotionDiv>
        <MotionDiv delay={2}>
          <h2 className='text-milk3 text-2xl sm:text-5xl lg:text-7xl font-bold mb-2 leading-tight font-jetBrain'>
            Hua Sheng Tan
          </h2>
        </MotionDiv>
        <MotionDiv delay={3}>
          <h3 className='text-milk text-base sm:text-lg mb-4'>I am a</h3>
        </MotionDiv>
        <MotionDiv delay={4}>
          <h4 className='text-milk3 text-2xl sm:text-5xl lg:text-6xl font-bold mb-2 leading-tight font-work'>
            <TypeAnimation
              sequence={['Software Engineer', 3000, 'Web Developer', 3000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h4>
        </MotionDiv>
        <MotionDiv delay={5}>
          <p className='text-milk2 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 lg:mb-12'>
            based in <b>Kuala Lumpur, Malaysia</b>. I enjoy creating useful,
            beautiful apps. With 3+ years in full-stack development, I thrive on
            solving problems and making technology feel simple.
          </p>
        </MotionDiv>
        <div className='flex flex-row gap-2 font-jetBrain'>
          <MotionDiv delay={6}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='/resume.pdf'
              className='text-gray1 font-medium border border-milk3 px-6 lg:px-7 py-4 lg:py-5 rounded text-sm hover:bg-milk3 hover:text-nero transition-all duration-300 inline-block'
            >
              Resume
            </a>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
