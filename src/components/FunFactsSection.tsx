'use client'

import { Coffee, MapPin, Code2, Target } from 'lucide-react'

const funFacts = [
  {
    icon: MapPin,
    title: 'Working Holiday',
    description: 'Just got back from New Zealand — amazing scenery, met cool people, came back with new ideas',
  },
  {
    icon: Coffee,
    title: 'Coffee Enthusiast',
    description: 'Best code is written with a good cup of coffee (or three)',
  },
  {
    icon: Code2,
    title: 'Tech Curious',
    description: 'Always trying out new frameworks and libraries — breaking things is how you learn, right?',
  },
  {
    icon: Target,
    title: 'Badminton Player',
    description: 'When I\'m not debugging code, I\'m smashing shuttlecocks on the court',
  },
]

export function FunFactsSection() {
  return (
    <section className='py-20 md:py-32 section'>
      <div className='container-custom'>
        {/* Section Header */}
        <div className='mb-12 md:mb-16 text-center'>
          <h2 className='mb-4'>Fun Facts</h2>
          <div className='w-16 h-1 bg-[var(--accent)] rounded-full mx-auto'></div>
        </div>

        {/* Fun Facts Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {funFacts.map((fact, index) => {
            const Icon = fact.icon
            return (
              <div
                key={index}
                className='glassmorphism p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group'
              >
                <div className='space-y-4'>
                  {/* Icon */}
                  <div className='w-12 h-12 rounded-full bg-[var(--surface)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors duration-300'>
                    <Icon className='w-6 h-6 text-[var(--text-primary)] group-hover:text-[var(--bg)]' />
                  </div>

                  {/* Title */}
                  <h3 className='text-xl font-sora font-semibold text-[var(--text-primary)]'>
                    {fact.title}
                  </h3>

                  {/* Description */}
                  <p className='text-base text-[var(--text-secondary)] leading-relaxed'>
                    {fact.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
