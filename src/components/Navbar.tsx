'use client'

import React, { useState } from 'react'
import Icon from './Icon'
import { X, Menu } from 'lucide-react'
import { MotionDiv } from '@/hooks/useFramerMotion'

type navbarProps = {
  scrolled: boolean
}

const Navbar = ({ scrolled }: navbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-nero/95 backdrop-blur-md shadow-lg border-b border-[#373737]'
          : 'bg-transparent'
      }`}
    >
      <nav className='flex justify-between items-center px-4 sm:px-6 lg:px-16 h-16 lg:h-20'>
        <MotionDiv delay={1}>
          <a
            href='/'
            className='text-gray1 text-2xl lg:text-3xl font-nunito font-bold hover:text-accent transition-colors'
          >
            <Icon />
          </a>
        </MotionDiv>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center space-x-8'>
          <ul className='flex space-x-8 font-nunito text-sm'>
            {['About', 'Experience', 'Contact'].map((item, index) => (
              <MotionDiv key={item} delay={index + 2}>
                <li className='nav-item'>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className='hover:text-milk2 transition-colors duration-300 text-gray2'
                  >
                    {item}
                  </a>
                </li>
              </MotionDiv>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className='lg:hidden'>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='text-accent hover:text-accent transition-colors p-2'
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className='bg-gray-900/98 backdrop-blur-md border-t border-gray-800 px-4 py-6'>
          <ul className='space-y-6 font-mono text-center'>
            {['About', 'Experience', 'Contact'].map((item, index) => (
              <li key={item} className='nav-item'>
                <a
                  href={`#${item.toLowerCase()}`}
                  className='block text-gray-300 hover:text-accent transition-colors duration-300 py-2'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
