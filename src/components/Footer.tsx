'use client'

import { socialLinks } from '@/config/CONSTANTS'
import { Github, Linkedin, MapPin } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <footer className='border-t border-[var(--border)] bg-[var(--bg)]'>
      <div className='container-custom py-12 lg:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8'>
          {/* Brand & Location */}
          <div className='text-center md:text-left'>
            <h3 className='font-sora text-xl font-bold text-[var(--text-primary)] mb-4'>
              Hua Sheng Tan
            </h3>
            <p className='text-[var(--text-secondary)] text-sm mb-3'>
              Full Stack Developer
            </p>
            <div className='flex items-center justify-center md:justify-start gap-2 text-[var(--text-secondary)] text-sm'>
              <MapPin className='w-4 h-4' />
              <span>Kuala Lumpur, Malaysia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className='text-center'>
            <h4 className='font-sora text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4'>
              Quick Links
            </h4>
            <nav className='flex flex-col space-y-2'>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className='text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 text-sm'
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className='text-center md:text-right'>
            <h4 className='font-sora text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4'>
              Connect
            </h4>
            <div className='flex justify-center md:justify-end space-x-4 mb-4'>
              <a
                href={socialLinks.github}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200'
                aria-label='GitHub'
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200'
                aria-label='LinkedIn'
              >
                <Linkedin size={20} />
              </a>
            </div>
            <a
              href='mailto:huasheng.work@gmail.com'
              className='text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 text-sm inline-block'
            >
              huasheng.work@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-[var(--border)] pt-8 text-center'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-[var(--text-secondary)] font-inter text-sm'>
              © {new Date().getFullYear()} Hua Sheng Tan. All rights reserved.
            </p>
            <a
              href='https://github.com/peanxtt/peanxtt.github.io'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-mono text-sm transition-colors duration-200'
            >
              View Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
