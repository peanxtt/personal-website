export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hua Sheng Tan',
    url: 'https://huashengtan.com',
    image: 'https://huashengtan.com/hero.png',
    jobTitle: 'Full Stack Developer',
    description: 'Full Stack Developer with 3+ years of experience building scalable web applications',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuala Lumpur',
      addressCountry: 'Malaysia',
    },
    sameAs: [
      'https://github.com/peanxtt',
      'https://www.linkedin.com/in/huashengtan/',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Web Development',
      'Full Stack Development',
      'Frontend Development',
      'Backend Development',
      'Tailwind CSS',
      'Blockchain',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Software Engineering Education',
    },
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Animalia',
        description: 'Software Engineer',
        startDate: '2024-03',
        endDate: '2025-01',
      },
      {
        '@type': 'Organization',
        name: 'Payment Network Malaysia (PayNet)',
        description: 'Software Engineer',
        startDate: '2023-08',
        endDate: '2024-03',
      },
      {
        '@type': 'Organization',
        name: 'LITKOD',
        description: 'Software Engineer',
        startDate: '2021-12',
        endDate: '2023-04',
      },
    ],
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
