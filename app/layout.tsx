import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
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
    icon: '/images/logo-box.png',
    apple: '/images/logo-box.png',
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
        <ScrollToTop />
      </body>
    </html>
  )
}
