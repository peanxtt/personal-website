'use client'

import { Code2, Database, Cloud, Wrench } from 'lucide-react'

const skillsData = [
  {
    category: 'Frontend',
    icon: Code2,
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React / Next.js',
      'Vue / Nuxt.js',
      'HTML5 & CSS3',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend',
    icon: Database,
    skills: [
      'Node.js',
      'REST APIs',
      'Prisma ORM',
      'MySQL',
      'PostgreSQL',
    ],
  },
  {
    category: 'DevOps',
    icon: Cloud,
    skills: [
      'Amazon Web Services',
      'Git & GitHub',
      'CI/CD',
      'Linux',
    ],
  },
  {
    category: 'Tools & Others',
    icon: Wrench,
    skills: [
      'VS Code',
      'Postman',
      'Solidity',
    ],
  },
]

export function SkillsSection() {
  return (
    <section id='skills' className='py-20 md:py-32 section'>
      <div className='container-custom'>
        {/* Section Header */}
        <div className='mb-12 md:mb-16'>
          <h2 className='mb-4'>Skills & Technologies</h2>
          <div className='w-16 h-1 bg-[var(--accent)] rounded-full'></div>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {skillsData.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.category}
                className='skill-card glassmorphism p-6 md:p-8 rounded-2xl'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className='mb-6'>
                  <div className='w-12 h-12 rounded-lg bg-[var(--accent)] flex items-center justify-center mb-4'>
                    <Icon className='w-6 h-6 text-[var(--bg)]' />
                  </div>
                  <h3 className='text-xl md:text-2xl font-sora font-semibold text-[var(--text-primary)]'>
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className='space-y-3'>
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className='flex items-center text-[var(--text-secondary)] font-inter'
                    >
                      <span className='w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-3 flex-shrink-0'></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className='mt-12 md:mt-16 text-center'>
          <p className='text-lg text-[var(--text-secondary)] max-w-3xl mx-auto'>
            I&apos;m always learning and exploring new technologies. Currently diving deeper into
            serverless architectures, microservices, and modern DevOps practices.
          </p>
        </div>
      </div>
    </section>
  )
}
