import { FadeInSection } from '@/hooks/useFramerMotion'

const ContactSection = () => {
  return (
    <section
      id='contact'
      className='py-16 lg:py-24 text-center max-w-2xl mx-auto select-none'
    >
      <FadeInSection delay={1}>
        <h2 className='numbered-heading text-milk3 text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 justify-center'>
          Contact
        </h2>
      </FadeInSection>
      <FadeInSection delay={2}>
        <h3 className='text-gray1 text-3xl lg:text-5xl font-bold mb-4 lg:mb-6'>
          Code. Create. Connect.
        </h3>
      </FadeInSection>
      <FadeInSection delay={3}>
        <p className='text-milk1 text-base lg:text-lg leading-relaxed mb-8 lg:mb-12 px-4'>
          Got a question or just feel like saying hi? My inbox is always ready
          for a message, and I will try my best to get back to you!
        </p>
      </FadeInSection>
      <FadeInSection delay={4}>
        <a
          href='mailto:huasheng.work@gmail.com'
          className='text-gray1 font-medium border border-milk3 px-6 lg:px-7 py-4 lg:py-5 rounded text-sm hover:bg-milk3 hover:text-nero transition-all duration-300 inline-block select-auto'
        >
          Catch Me Here
        </a>
      </FadeInSection>
    </section>
  )
}

export default ContactSection
