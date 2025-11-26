import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ContactSection } from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { LoadingScreen } from '@/components/LoadingScreen'
import SocialLinks from '@/components/SocialLinks'
import MailLink from '@/components/MailLink'

export default function DevPage() {
  return (
    <>
      <LoadingScreen />
      <div className='min-h-screen'>
        <Navigation />
        <SocialLinks />
        <MailLink />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
