'use client'

import { useEffect, useState } from 'react'

import Navbar from '@/components/Navbar'
import MailLink from '@/components/MailLink'
import HeroSection from '@/components/Sections/HeroSection'
import SocialLinks from '@/components/SocialLinks'
import AboutSection from '@/components/Sections/AboutSection'
import ExperienceSection from '@/components/Sections/ExperienceSection'
import ContactSection from '@/components/Sections/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.scrollTo(0, 0)

    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='bg-nero text-gray1 min-h-screen'>
      <style jsx global>{`
        .skill-item::before {
          content: '◦';
          color: #cdc3b6;
          margin-right: 0.75rem;
          font-size: 0.875rem;
        }

        .job-responsibility::before {
          content: '◦';
          color: var(--accent);
          margin-right: 1rem;
          font-size: 0.875rem;
        }

        .mobile-menu-enter {
          transform: translateY(-100%);
          opacity: 0;
        }

        .mobile-menu-enter-active {
          transform: translateY(0);
          opacity: 1;
          transition: all 0.3s ease-out;
        }

        .mobile-menu-exit {
          transform: translateY(0);
          opacity: 1;
        }

        .mobile-menu-exit-active {
          transform: translateY(-100%);
          opacity: 0;
          transition: all 0.3s ease-in;
        }

        @media (max-width: 768px) {
          .project-grid-mobile {
            grid-template-columns: 1fr;
          }

          .project-content-mobile {
            background: rgba(37, 37, 37, 0.9);
            padding: 2rem;
            border-radius: 0.5rem;
            position: relative;
            z-index: 10;
          }
        }

        .stagger-animation {
          animation: staggerIn 0.6s ease-out forwards;
        }

        @keyframes staggerIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <Navbar scrolled={scrolled} />
      <SocialLinks />
      <MailLink />
      <main className='px-4 sm:px-6 lg:px-16 xl:px-20 max-w-7xl mx-auto'>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
