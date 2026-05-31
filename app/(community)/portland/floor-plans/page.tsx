import type { Metadata } from 'next'
import Link from 'next/link'
import FloorPlanCards from '../FloorPlanCards'
import ApartmentCarousel from './ApartmentCarousel'

export const metadata: Metadata = {
  title: 'Floor Plans | Arcadia Senior Living Portland',
  description: 'Explore private studios and one-bedroom suites at Arcadia Senior Living Portland. Life-enriching accommodations with no buy-in fees or long-term lease commitments, starting at $5,843/month.',
  alternates: { canonical: 'https://arcadiaretirement.com/portland/floor-plans' },
  openGraph: {
    title: 'Floor Plans | Arcadia Senior Living Portland',
    description: 'Private studios and one-bedroom suites — no buy-in fees, starting at $5,843/month.',
    images: [{ url: '/images/portland-apt-living.jpg', width: 1200, height: 630 }],
  },
}

export default function FloorPlansPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="relative min-h-[260px] md:min-h-[320px] flex items-center bg-[#2d5a5c] overflow-hidden">
        <img
          src="/images/portland-apt-living.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          alt="" aria-hidden="true"
        />
        <div className="relative z-10 w-full text-center px-6 py-16">
          <p className="text-white/70 text-sm uppercase tracking-[0.4em] mb-3">Arcadia Senior Living Portland</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">
            Floorplans
          </h1>
        </div>
      </section>

      {/* ── INTRO + FLOOR PLAN CARDS ── */}
      <section className="bg-white py-14 md:py-20" id="floor-plans">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">

          {/* Intro */}
          <p className="text-center text-[#555] text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Arcadia is designed to provide life-enriching accommodations for your loved one. We offer private studios and one-bedroom suites, thoughtfully tailored to meet personal preferences and financial needs. With{' '}
            <strong className="text-[#333] font-semibold">no buy-in fees or long-term lease commitments</strong>, our suites include all amenities and programs, starting at $5,843 per month.
          </p>

          {/* Cards with lightbox */}
          <FloorPlanCards />
        </div>
      </section>

      {/* ── APARTMENT INTERIOR CAROUSEL ── */}
      <section className="bg-[#f5f5f5] py-10 md:py-14">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-6">
          <ApartmentCarousel />
        </div>
      </section>

      {/* ── VISIT US FOR A TOUR ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-3">
            Visit Us for a Tour
          </h2>
          <p className="text-[#888] text-base italic mb-3">
            <strong className="text-[#555] not-italic">A life well-lived, made brighter with Arcadia!</strong>
          </p>
          <p className="text-[#555] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Discover how Arcadia Senior Living in Portland, OR, creates a warm and supportive environment where seniors can thrive, embrace new possibilities, and enjoy each day to the fullest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/portland/tour"
              className="inline-flex items-center justify-center gap-2 bg-[#c06448] text-white px-8 py-4 text-base font-medium hover:bg-[#a85038] transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 448 512" fill="currentColor">
                <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zM448 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/>
              </svg>
              Request A Tour
            </a>
            <Link href="/portland/contact-us"
              className="inline-flex items-center justify-center border border-[#c06448] text-[#c06448] px-8 py-4 text-base font-medium hover:bg-[#c06448] hover:text-white transition-colors">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}



