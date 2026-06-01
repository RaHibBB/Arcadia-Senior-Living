import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import WashougalFloorPlanCards from '../WashougalFloorPlanCards'
import FloorPlanFAQ from './FloorPlanFAQ'
import RoomCarousel from './RoomCarousel'

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is included in the monthly base rate for Lookout Ridge floor plans?',
      acceptedAnswer: { '@type': 'Answer', text: 'The monthly base rate at Arcadia Lookout Ridge is determined by your specific apartment selection. Our studio apartments start at $4,225 and include a kitchenette, individual climate control, all community amenities, three chef-prepared meals per day, local transportation, and a full calendar of social activities.' },
    },
    {
      '@type': 'Question',
      name: 'Are the apartments pet friendly and what are the fees?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. There is a $1,000 non-refundable pet fee and a $50 monthly pet fee for residents bringing pets to Lookout Ridge.' },
    },
    {
      '@type': 'Question',
      name: 'How do the floor plans accommodate mobility aids like walkers or wheelchairs?',
      acceptedAnswer: { '@type': 'Answer', text: 'Studios range from 325–375 sq ft and one-bedrooms offer 500–600 sq ft. Every bathroom has a walk-in shower and grab bars. Staff are trained in one and two-person transfers and Hoyer lift use.' },
    },
    {
      '@type': 'Question',
      name: 'Can we furnish and customize the apartments?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, residents are encouraged to bring their own furniture. Avoid throw rugs (tripping hazard). The boutique size allows for room orientation preferences.' },
    },
    {
      '@type': 'Question',
      name: 'What happens if care needs increase or if we only need a short-term stay?',
      acceptedAnswer: { '@type': 'Answer', text: 'Care increases are handled in-place using a point-based system at $27/point — no room changes needed. Respite care (30-day minimum) is also available.' },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Floor Plans | Arcadia Senior Living Washougal, WA',
  description: 'Explore private studios and one-bedroom suites at Arcadia Senior Living Lookout Ridge in Washougal, WA. No buy-in fees or long-term lease commitments, starting at $4,225/month.',
  alternates: { canonical: 'https://arcadiaretirement.com/washougal/floor-plans' },
  openGraph: {
    title: 'Floor Plans | Arcadia Senior Living Washougal',
    description: 'Private studios and one-bedroom suites — no buy-in fees, starting at $4,225/month.',
    images: [{ url: '/images/washougal/washougal-room-living.jpg', width: 1200, height: 630 }],
  },
}

export default function WashougalFloorPlansPage() {
  return (
    <>
    <Script id="washougal-fp-faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="relative min-h-[260px] md:min-h-[320px] flex items-center bg-[#2d5a5c] overflow-hidden">
        <img
          src="/images/washougal/washougal-room-living.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          alt="" aria-hidden="true"
        />
        <div className="relative z-10 w-full text-center px-6 py-16">
          <p className="text-white/70 text-sm uppercase tracking-[0.4em] mb-3">Arcadia Senior Living Washougal</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">Floorplans</h1>
        </div>
      </section>

      {/* ── INTRO + FLOOR PLAN CARDS ── */}
      <section className="bg-white py-14 md:py-20" id="floor-plans">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <p className="text-[#454038] text-lg leading-relaxed mb-10 max-w-3xl">
            Arcadia is designed to provide life-enriching accommodations for your loved one. We offer private studios and one-bedroom suites, thoughtfully tailored to meet personal preferences and financial needs. With{' '}
            <strong><u>no buy-in fees or long-term lease commitments</u></strong>, our suites include all amenities and programs, starting at <u>$4,225 per month.</u>
          </p>
          <WashougalFloorPlanCards />
        </div>
      </section>

      {/* ── ROOM PHOTO CAROUSEL ── */}
      <section className="bg-[#f9f9f9] py-14 md:py-20">
        <div className="max-w-[1340px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-[#2d5a5c] mb-8 text-center">A Glimpse Inside Your New Home</h2>
          <RoomCarousel />
        </div>
      </section>

      {/* ── VISIT US FOR A TOUR ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-3">Visit Us for a Tour</h2>
          <p className="text-[#888] text-base italic mb-3"><strong>A life well-lived, made brighter with Arcadia!</strong></p>
          <p className="text-[#555] text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Discover how Arcadia Senior Living Lookout Ridge in Washougal, WA, provides a welcoming and supportive setting where seniors can flourish, explore new opportunities, and enjoy life to the fullest each day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/washougal/tour"
              className="inline-flex items-center justify-center gap-2 bg-[#c06448] text-white px-8 py-4 text-base font-medium hover:bg-[#a85038] transition-colors">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 448 512" fill="currentColor">
                <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zM448 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/>
              </svg>
              Request A Tour
            </a>
            <Link href="/washougal/contact-us"
              className="inline-flex items-center justify-center border border-[#c06448] text-[#c06448] px-8 py-4 text-base font-medium hover:bg-[#c06448] hover:text-white transition-colors">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* ── FLOOR PLAN FAQs ── */}
      <section className="bg-[#f9f9f9] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10">Floor Plan FAQs</h2>
          <FloorPlanFAQ />
        </div>
      </section>

    </main>
    </>
  )
}
