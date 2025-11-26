import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hua Sheng Tan - Full Stack Developer',
  description:
    'Full Stack Developer based in Kuala Lumpur, Malaysia. 3+ years experience in web development, creating useful and beautiful applications.',
  keywords:
    'Full Stack Developer, Web Developer, React, Next.js, TypeScript, JavaScript, Kuala Lumpur, Malaysia',
  authors: [{ name: 'Hua Sheng Tan' }],
  creator: 'Hua Sheng Tan',
  openGraph: {
    title: 'Hua Sheng Tan - Full Stack Developer',
    description:
      'Full Stack Developer based in Kuala Lumpur, Malaysia. 3+ years experience in web development.',
    url: 'https://huashengtan.com',
    siteName: 'Hua Sheng Tan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hua Sheng Tan - Full Stack Developer',
    description:
      'Full Stack Developer based in Kuala Lumpur, Malaysia. 3+ years experience in web development.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth dark'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
