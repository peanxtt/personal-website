'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      // Update glassmorphism on scroll
      setIsScrolled(window.scrollY > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='container-custom'>
        <div className='flex justify-between items-center py-5 lg:py-6'>
          <div className='flex-shrink-0'>
            <button
              onClick={() => scrollToSection('#home')}
              className='font-sora text-xl lg:text-2xl font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200'
            >
              Hua Sheng
            </button>
          </div>

          {/* Desktop Navigation - Top on mobile/tablet, flexible */}
          <div className='hidden md:flex items-center space-x-1 lg:space-x-2'>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`nav-link px-4 py-2 text-sm lg:text-base font-medium font-inter transition-colors duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className='flex items-center space-x-3'>
            {/* Theme Toggle - Temporarily disabled for static export */}
            {/* TODO: Re-enable when migrating to Vercel or implementing custom solution */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2 rounded-lg bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200'
              aria-label='Toggle menu'
            >
              {isMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden pb-4 animate-fade-in'>
            <div className='flex flex-col space-y-1'>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`nav-link text-left px-4 py-3 text-base font-medium font-inter transition-colors duration-200 rounded-lg ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[var(--text-primary)] bg-[var(--surface)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
