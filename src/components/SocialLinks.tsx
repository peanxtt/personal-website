import { Github, Linkedin } from 'lucide-react'
import { MotionDiv } from '@/hooks/useFramerMotion'
import { socialLinks } from '@/config/CONSTANTS'

const SocialLinks = () => {
  return (
    <div className='fixed left-4 lg:left-10 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-10'>
      <MotionDiv delay={8}>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href={socialLinks.github}
          className='text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:-translate-y-1 transition-all duration-200'
          aria-label='GitHub'
        >
          <Github size={20} />
        </a>
      </MotionDiv>
      <MotionDiv delay={9}>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href={socialLinks.linkedin}
          className='text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:-translate-y-1 transition-all duration-200'
          aria-label='LinkedIn'
        >
          <Linkedin size={20} />
        </a>
      </MotionDiv>
      <MotionDiv delay={10}>
        <div className='w-px h-20 lg:h-24 bg-[var(--border)] mt-6'></div>
      </MotionDiv>
    </div>
  )
}

export default SocialLinks
