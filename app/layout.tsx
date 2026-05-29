import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Arcadia Senior Living Communities | Care, Purpose, Happiness',
  description:
    'Arcadia Senior Living communities across Oregon & Washington provide compassionate care and services, including independent living, assisted living, and respite care.',
  metadataBase: new URL('https://arcadiaretirement.com'),
  openGraph: {
    title: 'Arcadia Senior Living Communities | Care, Purpose, Happiness',
    description:
      'Arcadia Senior Living communities across Oregon & Washington provide compassionate care and services, including independent living, assisted living, and respite care.',
    siteName: 'Arcadia Senior Living',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
