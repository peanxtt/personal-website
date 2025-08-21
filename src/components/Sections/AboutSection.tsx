/* eslint-disable @next/next/no-img-element */
import { FadeInSection } from '@/hooks/useFramerMotion'

const AboutSection = () => {
  return (
    <section
      id='about'
      className='flex flex-col mx-auto max-w-4xl py-16 lg:py-24 select-none'
    >
      <FadeInSection delay={1}>
        <h2 className=' text-milk3 text-2xl lg:text-3xl font-jetBrain font-bold mb-12 lg:mb-12 flex items-center'>
          About
          <div className='ml-4 lg:ml-8 h-px bg-gray-700 flex-1 max-w-xs'></div>
        </h2>
      </FadeInSection>
      <div className='grid lg:grid-cols-3 gap-8 lg:gap-12 font-nunito'>
        <div className='lg:col-span-2'>
          <FadeInSection delay={2}>
            <div className='space-y-4 text-milk3 text-base lg:text-lg'>
              <p className='font-semibold text-gray1'>{`"Coding with flow. Designing with soul."`}</p>
              <p>
                I am Hua Sheng, a developer with 3 plus years of experience in
                web development. I enjoy solving problems with clean, efficient
                code while also creating interfaces that feel intuitive and
                engaging.
              </p>
              <p>
                I enjoy working across the stack — from building robust backend
                systems to crafting polished front-end experiences. What excites
                me most is bringing ideas to life with modern technologies.
              </p>
              <p>{`Here's a snapshot of the tech I've been working with recently:`}</p>
              <ul className='grid grid-cols-2 gap-2 text-sm lg:text-base mt-4 text-milk2'>
                {[
                  'JavaScript (ES6+)',
                  'TypeScript',
                  'React / Next.js',
                  'Vue / Nuxt.js',
                  'Node.js',
                  'Amazon Web Services',
                ].map((skill, index) => (
                  <li
                    key={skill}
                    className='skill-item'
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
        <FadeInSection delay={3}>
          <div className='relative max-w-sm mx-auto lg:max-w-none'>
            <div className='relative bg-accent rounded-lg overflow-hidden group'>
              <img
                src='/hero.png'
                alt='Hua Sheng'
                className='w-full h-auto rounded-full filter grayscale contrast-100 mix-blend-multiply group-hover:filter-none group-hover:mix-blend-normal transition-all duration-300'
              />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default AboutSection
