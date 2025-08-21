import { useState } from 'react'

import { jobs } from '@/config/CONSTANTS'
import { FadeInSection } from '@/hooks/useFramerMotion'

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('animalia')
  const [isTabChanging, setIsTabChanging] = useState(false)

  const handleTabChange = (newTab: string) => {
    if (newTab === activeTab) return

    setIsTabChanging(true)
    setTimeout(() => {
      setActiveTab(newTab)
      setTimeout(() => {
        setIsTabChanging(false)
      }, 50)
    }, 150)
  }

  return (
    <section id='experience' className='py-16 lg:py-24'>
      <FadeInSection delay={1}>
        <h2 className='numbered-heading text-milk3 text-2xl lg:text-3xl font-bold mb-12 lg:mb-16 flex items-center select-none'>
          Experience
          <div className='ml-4 lg:ml-8 h-px bg-gray-700 flex-1 max-w-xs'></div>
        </h2>
      </FadeInSection>
      <div className='flex flex-col lg:flex-row'>
        <FadeInSection delay={2}>
          <div className='flex-shrink-0 mb-8 lg:mb-0'>
            {/* Mobile: Horizontal scrolling tabs */}
            <div className='lg:hidden'>
              <div className='flex overflow-x-auto pb-4 border-b-2 border-gray-700'>
                {Object.entries(jobs).map(([key, job]) => (
                  <button
                    key={key}
                    onClick={() => handleTabChange(key)}
                    className={`flex-shrink-0 px-6 py-3 font-mono text-sm border-b-2 transition-all duration-300 mr-4 ${
                      activeTab === key
                        ? 'text-gray1 border-gray1'
                        : 'text-gray3 border-transparent hover:text-gray1'
                    }`}
                  >
                    {job.company}
                  </button>
                ))}
              </div>
            </div>
            {/* Desktop: Vertical tabs */}
            <div className='hidden lg:flex lg:flex-col border-l-2 border-gray-700'>
              {Object.entries(jobs).map(([key, job]) => (
                <button
                  key={key}
                  onClick={() => handleTabChange(key)}
                  className={`text-left px-6 py-3 font-mono text-sm border-l-2 transition-all duration-300 ${
                    activeTab === key
                      ? 'text-gray1 border-milk2 bg-[#3a3a3a] -ml-0.5'
                      : 'text-gray3 border-transparent hover:text-accent'
                  }`}
                >
                  {job.company}
                </button>
              ))}
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={3}>
          <div className='lg:ml-8 flex-1 select-none'>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isTabChanging
                  ? 'opacity-0 transform translate-x-4'
                  : 'opacity-100 transform translate-x-0'
              }`}
            >
              {jobs[activeTab as keyof typeof jobs] && (
                <div>
                  <h3 className='text-milk1 text-xl lg:text-2xl font-semibold mb-1'>
                    {jobs[activeTab as keyof typeof jobs].title}{' '}
                    <span className='text-accent'>
                      @ {jobs[activeTab as keyof typeof jobs].company}
                    </span>
                  </h3>
                  <p className='text-milk3 font-mono text-sm mb-6'>
                    {jobs[activeTab as keyof typeof jobs].range}
                  </p>
                  <ul className='space-y-3'>
                    {jobs[activeTab as keyof typeof jobs].responsibilities.map(
                      (item, index) => (
                        <li
                          key={index}
                          className='text-gray2 job-responsibility text-base leading-relaxed'
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default ExperienceSection
