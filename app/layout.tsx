import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arcadia Senior Living Communities | Care, Purpose, Happiness',
  description:
    'Arcadia Senior Living communities across Oregon & Washington provide compassionate care and services, including assisted living and respite care.',
  metadataBase: new URL('https://arcadiaretirement.com'),
  openGraph: {
    title: 'Arcadia Senior Living Communities | Care, Purpose, Happiness',
    description:
      'Arcadia Senior Living communities across Oregon & Washington provide compassionate care and services, including assisted living and respite care.',
    siteName: 'Arcadia Senior Living',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Arcadia Senior Living' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arcadia Senior Living Communities | Care, Purpose, Happiness',
    description:
      'Arcadia Senior Living communities across Oregon & Washington provide compassionate care and services, including assisted living and respite care.',
    images: ['/images/hero.jpg'],
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Arcadia Senior Living',
  url: 'https://arcadiaretirement.com',
  logo: 'https://arcadiaretirement.com/images/logo-dark.png',
  description:
    'Locally owned and operated senior living communities in Oregon and Washington, providing assisted living and respite care.',
  areaServed: [
    { '@type': 'State', name: 'Oregon' },
    { '@type': 'State', name: 'Washington' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Senior Living Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Assisted Living' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Respite Care' } },
    ],
  },
}

const localBusinessesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://arcadiaretirement.com/portland',
    name: 'Arcadia Senior Living',
    description: 'Assisted living and respite care community in Portland, Oregon.',
    url: 'https://arcadiaretirement.com/portland',
    image: 'https://arcadiaretirement.com/images/hero.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Portland',
      addressRegion: 'OR',
      addressCountry: 'US',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://arcadiaretirement.com/washougal',
    name: 'Arcadia Lookout Ridge',
    description: 'Senior living community in Washougal, Washington overlooking the Columbia Gorge.',
    url: 'https://arcadiaretirement.com/washougal',
    image: 'https://arcadiaretirement.com/images/respite-care.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Washougal',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessesSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
