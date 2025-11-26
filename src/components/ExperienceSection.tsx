'use client'

import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Animalia',
    location: 'Kuala Lumpur, Malaysia',
    period: 'March 2024 - January 2025',
    description: [
      'Write modern, performant, maintainable code for in-house projects',
      'Built frontend UIs and backend APIs, and integrate services into applications',
      'Contributed to smart contract development and blockchain integration',
    ],
    technologies: [
      'React',
      'Node.js',
      'TypeScript',
      'Blockchain',
      'Solidity',
    ],
    current: false,
  },
  {
    title: 'Software Engineer',
    company: 'Payment Network Malaysia (PayNet)',
    location: 'Kuala Lumpur, Malaysia',
    period: 'August 2023 - March 2024',
    description: [
      'Developed and maintained responsive web applications using Vue.js and Nuxt.js',
      'Built reusable UI components and implemented modern frontend architectures',
      'Collaborated with design and backend teams to deliver seamless user experiences',
      'Implemented security best practices for financial web applications',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'Tailwind CSS'],
    current: false,
  },
  {
    title: 'Software Engineer',
    company: 'LITKOD',
    location: 'Kuala Lumpur, Malaysia',
    period: 'December 2021 - April 2023',
    description: [
      'Built responsive web applications for diverse clients',
      'Worked on various platforms and business websites',
      'Collaborated with design teams to deliver pixel-perfect UIs',
      'Implemented and integrated API endpoints based on requirements'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Amazon Web Service', 'Tailwind CSS'],
    current: false,
  },
]

export function ExperienceSection() {
  return (
    <section id='experience' className='py-20 md:py-32 section'>
      <div className='container-custom'>
        {/* Section Header */}
        <div className='mb-12 md:mb-16'>
          <h2 className='mb-4'>Experience</h2>
          <div className='w-16 h-1 bg-[var(--accent)] rounded-full'></div>
        </div>

        {/* Experience Cards */}
        <div className='space-y-8 md:space-y-12'>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className='glassmorphism p-6 md:p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all duration-300'
            >
              <div className='space-y-4 md:space-y-6'>
                {/* Header */}
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3'>
                  <div>
                    <h3 className='text-2xl md:text-3xl font-sora font-semibold text-[var(--text-primary)] mb-1'>
                      {experience.title}
                    </h3>
                    <p className='text-lg md:text-xl text-[var(--text-secondary)] font-inter'>
                      {experience.company}
                    </p>
                  </div>
                  {experience.current && (
                    <span className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[var(--accent)] text-[var(--bg)] w-fit'>
                      Current
                    </span>
                  )}
                </div>

                {/* Meta Info */}
                <div className='flex flex-col sm:flex-row gap-4 text-sm md:text-base text-[var(--text-secondary)] font-inter'>
                  <div className='flex items-center gap-2'>
                    <Calendar className='w-4 h-4' />
                    <span>{experience.period}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <MapPin className='w-4 h-4' />
                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className='space-y-2 md:space-y-3'>
                  {experience.description.map((item, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-3 text-base md:text-lg text-[var(--text-secondary)]'
                    >
                      <span className='w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0'></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2 pt-2'>
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1.5 bg-[var(--surface)] text-[var(--text-secondary)] rounded-full text-sm font-inter font-medium hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors duration-200'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
