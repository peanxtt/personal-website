import { socialLinks } from '@/config/CONSTANTS'
import { Github, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='text-center py-8 lg:py-12'>
      <div className='lg:hidden flex justify-center space-x-6 mb-6'>
        <a
          href={socialLinks.github}
          className='text-gray-400 hover:text-accent transition-colors duration-300'
        >
          <Github size={24} />
        </a>
        {/* <a
          href={socialLinks.instagram}
          className='text-gray-400 hover:text-accent transition-colors duration-300'
        >
          <Instagram size={24} />
        </a> */}
        <a
          href={socialLinks.linkedin}
          className='text-gray-400 hover:text-accent transition-colors duration-300'
        >
          <Linkedin size={24} />
        </a>
      </div>
      <a
        href='https://github.com/peanxtt/peanxtt.github.io'
        className='text-gray-400 hover:text-accent font-mono text-xs transition-colors duration-300'
        target='_blank'
        rel='noopener noreferrer'
      >
        © 2025 huasheng
      </a>
    </footer>
  )
}

export default Footer
