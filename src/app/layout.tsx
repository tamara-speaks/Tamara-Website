import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import AppProviders from '@/components/providers/AppProviders'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tamara Figueroa-Guzman | Motivational Speaker & Purpose/Success Specialist',
  description: 'Aim for the top because the bottom is already crowded. Create your own runway. International motivational speaker empowering students and leaders worldwide.',
  keywords: [
    'motivational speaker',
    'keynote speaker',
    'student success',
    'leadership',
    'purpose specialist',
    'success coach',
    'school speaker',
    'corporate speaker',
  ],
  authors: [{ name: 'Tamara Figueroa-Guzman' }],
  openGraph: {
    title: 'Tamara Figueroa-Guzman | Motivational Speaker',
    description: 'Create your own runway. International motivational speaker empowering students and leaders worldwide.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tamara Figueroa-Guzman | Motivational Speaker',
    description: 'Create your own runway. International motivational speaker empowering students and leaders worldwide.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  )
}
