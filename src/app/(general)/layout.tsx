import type { Metadata } from 'next'
import { Sora, Inter, JetBrains_Mono } from 'next/font/google'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Hua Sheng Tan | Software Engineer',
  description: 'Software Engineer based in Kuala Lumpur with 3+ years of experience. Building products people love.',
  openGraph: {
    title: 'Hua Sheng Tan | Software Engineer',
    description: 'Software Engineer with 3+ years of experience. Specializing in React, Next.js, and Node.js.',
    url: 'https://huashengtan.com',
    images: [
      {
        url: 'https://huashengtan.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hua Sheng Tan',
      },
    ],
  },
}

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--inter',
  display: 'swap',
})

const jetBrain = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--jetBrain',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`antialiased font-inter ${sora.variable} ${inter.variable} ${jetBrain.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
