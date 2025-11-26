'use client'

import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

export function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:huasheng.work@gmail.com'
  }

  return (
    <section id='contact' className='py-20 md:py-32 section'>
      <div className='container-custom'>
        <div className='max-w-3xl mx-auto text-center space-y-8 md:space-y-12'>
          {/* Header */}
          <div className='space-y-4'>
            <h2>Let&apos;s Chat!</h2>
            <div className='w-16 h-1 bg-[var(--accent)] mx-auto rounded-full'></div>
          </div>

          {/* Description */}
          <p className='text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto'>
            Got a project in mind? Want to collaborate? Or just want to say hi?
            Drop me a message — I&apos;d love to hear from you!
          </p>

          {/* Email CTA */}
          <div className='pt-4'>
            <button
              onClick={handleEmailClick}
              className='inline-flex items-center px-8 py-4 md:px-10 md:py-5 bg-[var(--text-primary)] text-[var(--bg)] rounded-full font-inter font-medium text-lg transition-all duration-200 hover:bg-[var(--accent)] hover:scale-105 group'
            >
              <Mail className='w-5 h-5 mr-3' />
              Say Hello
            </button>
          </div>

          {/* Contact Info Card */}
          <div className='pt-8'>
            <div className='glassmorphism p-8 md:p-10 rounded-2xl max-w-lg mx-auto'>
              <div className='space-y-6'>
                <div className='text-center'>
                  <p className='text-sm uppercase tracking-widest text-[var(--text-secondary)] mb-3 font-inter'>
                    Email
                  </p>
                  <a
                    href='mailto:huasheng.work@gmail.com'
                    className='text-lg md:text-xl font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors'
                  >
                    huasheng.work@gmail.com
                  </a>
                </div>

                <div className='border-t border-[var(--border)] pt-6'>
                  <p className='text-sm uppercase tracking-widest text-[var(--text-secondary)] mb-4 font-inter'>
                    Connect
                  </p>
                  <div className='flex justify-center space-x-4'>
                    <a
                      href='https://github.com/peanxtt'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 rounded-full bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200 hover:scale-110'
                      aria-label='GitHub'
                    >
                      <Github className='w-5 h-5' />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/huashengtan/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 rounded-full bg-[var(--surface)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-200 hover:scale-110'
                      aria-label='LinkedIn'
                    >
                      <Linkedin className='w-5 h-5' />
                    </a>
                  </div>
                </div>

                <div className='border-t border-[var(--border)] pt-6 flex items-center justify-center gap-2 text-[var(--text-secondary)]'>
                  <MapPin className='w-4 h-4' />
                  <span className='font-inter'>Kuala Lumpur, Malaysia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
