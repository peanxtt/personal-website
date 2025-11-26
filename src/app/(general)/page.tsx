'use client'

import { useEffect } from 'react'
import { LoadingScreen } from '@/components/LoadingScreen'
import { Navigation } from '@/components/Navigation'
import MailLink from '@/components/MailLink'
import { HeroSection } from '@/components/HeroSection'
import SocialLinks from '@/components/SocialLinks'
import { AboutSection } from '@/components/AboutSection'
import { FunFactsSection } from '@/components/FunFactsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ContactSection } from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper'
import { StructuredData } from '@/components/StructuredData'
import { ScrollProgress } from '@/components/ScrollProgress'

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <StructuredData />
      <ScrollProgress />
      <LoadingScreen />
      <ScrollAnimationWrapper>
        <Navigation />
        <SocialLinks />
        <MailLink />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <FunFactsSection />
          <ContactSection />
        </main>
        <Footer />
      </ScrollAnimationWrapper>
    </>
  )
}
