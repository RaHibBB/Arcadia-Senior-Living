import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import PortlandCarousel from './PortlandCarousel'
import FloorPlanCards from './FloorPlanCards'
import GoogleReviews from './GoogleReviews'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Arcadia Senior Living Portland',
  url: 'https://arcadiaretirement.com/portland',
  telephone: '+15032068930',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '13031 SE Foster Rd',
    addressLocality: 'Portland',
    addressRegion: 'OR',
    postalCode: '97236',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 45.4745, longitude: -122.5894 },
  description: 'Boutique assisted living and respite care in Portland, OR. Compassionate care, chef-prepared meals, and vibrant community life.',
  image: 'https://arcadiaretirement.com/images/portland-hero.jpg',
  priceRange: '$$',
  openingHours: 'Mo-Su 00:00-24:00',
  hasMap: 'https://maps.app.goo.gl/xUKjKEMHAnT2w2HJ6',
}

export const metadata: Metadata = {
  title: 'Arcadia Senior Living – Portland, Oregon | Assisted Living & Respite Care',
  description: 'Arcadia Senior Living in Portland, OR offers boutique assisted living and respite care. Compassionate care, chef-prepared meals, and vibrant community on SE Foster Road.',
  alternates: { canonical: 'https://arcadiaretirement.com/portland' },
  openGraph: {
    title: 'Arcadia Senior Living – Portland, Oregon',
    description: 'Boutique assisted living and respite care on SE Foster Road, Portland, OR.',
    images: [{ url: '/images/portland-hero.jpg', width: 1200, height: 630 }],
  },
}

const amenities = [
  'Theater', 'Salon and Spa', 'Fitness Area & Classes',
  'Activity & Games Room', 'Arts & Crafts Studio', 'Private Dining Room',
  'Library', 'Grand Dining Room', 'Gardening',
  'Shuttle Bus', 'Local Portland Events',
]
const programs = [
  'Happy Hour', 'Garden Program', 'Senior Fitness Classes',
  'Activity & Games', 'Cooking & Baking', 'Salon and Barbershop',
  'Animal Therapy', 'Visiting Foot/Hand Care',
]

const wayCards = [
  {
    img: '/images/community-1.jpg',
    title: 'Wellness At The Core',
    body: 'Locally owned and warmly boutique in spirit, Arcadia offers personalized care, chef-crafted dining, and endless opportunities to discover joy, purpose, and community.',
  },
  {
    img: '/images/community-2.jpg',
    title: 'Our Philosophy of Care',
    body: 'Senior living should feel like home, built on dignity, respect, and compassion, where every resident is known and genuinely cared for.',
  },
  {
    img: '/images/community-3.jpg',
    title: 'Community Connected',
    body: 'Arcadia fosters belonging with vibrant events, meaningful relationships, and strong ties to the local Portland community that make life richer and more fulfilling.',
  },
]

export default function PortlandPage() {
  return (
    <>
    <Script id="portland-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <main>

      {/* ── HERO ── */}
      <section className="relative min-h-[480px] md:min-h-[580px] flex items-center bg-[#2d5a5c] overflow-hidden">
        <img
          src="/images/portland-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="" aria-hidden="true"
        />
        <div className="relative z-10 w-full text-center px-6 py-24">
          <p className="text-white/80 text-xl md:text-2xl font-light tracking-[0.3em] uppercase mb-3">Welcome to</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
            Arcadia Senior Living
          </h1>
          <p className="text-white/80 text-base md:text-lg font-light uppercase tracking-[0.2em]">
            Locally Owned &amp; Operated Senior Living Community In Portland, Oregon
          </p>
        </div>
      </section>

      {/* ── ADVANTAGE + CARE/PURPOSE/HAPPINESS ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-6">
                The Arcadia Senior Living Advantage
              </h2>
              <p className="text-[#555] text-lg leading-relaxed mb-8">
                At Arcadia Senior Living, life isn't winding down, it's just beginning. Our residents aren't closing chapters; they're embracing vibrant new ones. Locally owned and warmly boutique in spirit, Arcadia offers personalized care, chef-crafted dining, and endless opportunities to discover joy, purpose, and community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/portland/tour"
                  className="inline-flex items-center justify-center gap-2 bg-[#c06448] text-white px-6 py-3.5 text-base font-medium hover:bg-[#a85038] transition-colors">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zM448 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/>
                  </svg>
                  Request A Tour
                </a>
                <Link href="/portland/contact-us"
                  className="inline-flex items-center justify-center border border-[#c06448] text-[#c06448] px-6 py-3.5 text-base font-medium hover:bg-[#c06448] hover:text-white transition-colors">
                  Contact Us Today
                </Link>
              </div>
            </div>

            {/* Care / Purpose / Happiness */}
            <div className="bg-[#2d5a5c] p-8 self-start">
              <ul className="space-y-6">
                {['Care', 'Purpose', 'Happiness'].map(item => (
                  <li key={item} className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/>
                    </svg>
                    <span className="font-serif text-2xl font-light text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGO DIVIDER ── */}
      <section className="hidden md:block bg-white py-5 border-t border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-[3px] bg-gradient-to-r from-[#c06448] to-[#4a7c7e]" />
            <img src="/images/Transparent-Logo-with-box.png" className="h-16 w-auto" alt="Arcadia Senior Living" />
            <div className="flex-1 h-[3px] bg-gradient-to-l from-[#c06448] to-[#4a7c7e]" />
          </div>
        </div>
      </section>

      {/* ── WELL-BEING + CAROUSEL ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-5">We do well-being really well.</h2>
          <p className="text-[#555] text-lg leading-relaxed mb-12 max-w-2xl">
            From our hospitality-based care to our signature programming, we take a beyond-the-body approach to well-being that goes beyond the basics because we know you're anything but. We're paying attention, providing new and innovative ways to help seniors rediscover, reinvigorate and occasionally even reinvent themselves.
          </p>
          <PortlandCarousel />
        </div>
      </section>

      {/* ── AMENITIES & ACTIVITIES ── */}
      <section className="bg-[#2d5a5c] py-16 md:py-24" id="Amenities">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-3">Amenities &amp; Activities</h2>
          <p className="text-white/70 text-base mb-12 max-w-2xl">
            At Arcadia Senior Living, you can expect not only exceptional care but a supportive setting where purpose and fulfillment are found.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            <div>
              <h3 className="font-serif text-xl font-light text-white mb-5">Amenities</h3>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-8 mb-10">
                {amenities.map(a => (
                  <li key={a} className="flex items-center gap-3 text-white/90 text-base">
                    <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
              <h3 className="font-serif text-xl font-light text-white mb-5">Programs</h3>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
                {programs.map(p => (
                  <li key={p} className="flex items-center gap-3 text-white/90 text-base">
                    <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <img src="/images/assisted-living-care.jpg" className="w-full h-full object-cover" alt="Resident care at Arcadia Portland" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRENT EVENTS ── */}
      <section className="bg-[#D9EDF0] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] text-center mb-10">Current Events at Arcadia Portland</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: '/images/portland-event-1.jpg', href: '/portland/farmers-market-open-house' },
              { img: '/images/portland-event-2.jpg', href: '/portland/new-chapter-extra-support-join-arcadia-this-april' },
              { img: '/images/portland-event-3.png', href: '/portland/happy-st-patricks-day' },
              { img: '/images/portland-event-4.png', href: '/portland/arcadia-senior-living-to-host-2026-kickoff-networking-event' },
            ].map((e, i) => (
              <a key={i} href={e.href}
                className="block overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow">
                <img src={e.img} alt="Arcadia Portland event" className="w-full h-auto object-cover" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOOR PLANS ── */}
      <section className="bg-white py-16 md:py-24" id="floor-plans">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl md:text-4xl text-[#333] mb-6">Floorplans</h2>
          <p className="text-[#454038] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Arcadia is designed to provide life-enriching accommodations for your loved one. We offer private studios and one-bedroom suites, thoughtfully tailored to meet personal preferences and financial needs. With{' '}
            <strong><u>no buy-in fees or long-term lease commitments</u></strong>, our suites include all amenities and programs, starting at <u>$5,460 per month.</u>
          </p>
          <FloorPlanCards />
          <a
            href="/portland/floor-plans"
            className="inline-block mt-8 text-[#25646A] text-base underline underline-offset-2 hover:no-underline"
          >
            See our gallery of room photos
          </a>
        </div>
      </section>

      {/* ── EXPERIENCE UNMATCHED CARE ── */}
      <section className="bg-[#f9f9f9] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10">Experience Unmatched Care and Comfort</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-light text-[#2d5a5c] mb-6">
                Why families trust Arcadia for exceptional care and comfort
              </h3>
              <ul className="space-y-5 mb-8">
                {[
                  'Personalized, resident-first care — our locally owned community centers every decision around individual preferences and needs.',
                  'A boutique community of just 68 apartments — small enough that our team knows every resident by name, favorite meal, and life story.',
                  'Home-like atmosphere, staff fostering meaningful connections, close attention from staff, and genuine belonging.',
                  "We're paying attention — the drive to trust built through consistent, transparent support that feels like family.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#555] text-base leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0 mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="/images/assisted-living-staff.webp" alt="Arcadia staff providing care" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE WAY SENIOR LIVING SHOULD FEEL ── */}
      <section className="bg-[#2d5a5c] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white text-center mb-12">The Way Senior Living Should Feel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wayCards.map(card => (
              <div key={card.title}>
                <img src={card.img} alt={card.title} className="w-full h-52 object-cover mb-5" />
                <h3 className="font-serif text-xl font-light text-white mb-3">{card.title}</h3>
                <p className="text-white/75 text-base leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-white py-16 md:py-24" id="pricing">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10">Pricing</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="bg-[#2d5a5c] p-10">
              <p className="text-white/75 text-base leading-relaxed mb-7">
                Today's senior living offers unprecedented opportunities. It is our sincere hope that potential residents and families are more than simply paying for senior living.
              </p>
              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3 text-white text-base">
                  <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0 mt-2" />
                  <span><strong>Assisted Living starting from $5,843</strong> — pricing is subject to change. Contact us for updates.</span>
                </li>
                <li className="flex items-start gap-3 text-white text-base">
                  <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0 mt-2" />
                  <span><strong>Ask about our Respite Care rates</strong></span>
                </li>
              </ul>
              <Link href="/portland/contact-us"
                className="inline-block bg-[#c06448] text-white text-base px-7 py-3.5 hover:bg-[#a85038] transition-colors font-medium">
                Request Pricing Details
              </Link>
            </div>
            <div>
              <img src="/images/respite-care-staff.jpg" alt="Senior resident at Arcadia" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT US FOR A TOUR ── */}
      <section className="bg-[#f9f9f9] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-4">Visit Us for a Tour</h2>
            <p className="text-[#555] text-lg max-w-xl mx-auto leading-relaxed">
              A site visit, made together with Arcadia. Discover how Arcadia Senior Living in Portland is redefining senior care where seniors can thrive, embrace new possibilities, and enjoy every day to the fullest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="/portland/tour"
                className="inline-flex items-center justify-center bg-[#c06448] text-white px-8 py-4 text-base font-medium hover:bg-[#a85038] transition-colors">
                Request A Tour
              </a>
              <Link href="/portland/contact-us"
                className="inline-flex items-center justify-center border border-[#c06448] text-[#c06448] px-8 py-4 text-base font-medium hover:bg-[#c06448] hover:text-white transition-colors">
                Contact Us Today
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border-t border-gray-200 pt-12">
            <div>
              <h3 className="font-serif text-2xl font-light text-[#2d5a5c] mb-5">Arcadia Senior Living Portland</h3>
              <p className="text-[#555] text-base leading-relaxed mb-5">
                Arcadia Senior Living is nestled right where nature and community come together. You'll find us at <strong>13031 SE Foster Road</strong> in Portland's vibrant Foster-Powell neighborhood. This boutique assisted living community was designed for the integrated lifestyle that defines everything it means to live in the Pacific Northwest.
              </p>
              <ul className="space-y-3 text-base text-[#555]">
                <li className="flex items-center gap-2">
                  <span className="text-[#c06448]">🕐</span>
                  Open for calls 24/7 — <a href="tel:+15032068930" className="text-[#c06448] hover:underline font-medium">(503) 206-8930</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c06448]">📍</span>
                  13031 SE Foster Rd, Portland, OR 97236
                </li>
              </ul>
            </div>
            <div className="h-72 bg-gray-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.6!2d-122.5894!3d45.4745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b7a1a1a1a1a%3A0x1!2s13031+SE+Foster+Rd%2C+Portland%2C+OR+97236!5e0!3m2!1sen!2sus!4v1"
                width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arcadia Senior Living Portland location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10 text-center">
            Families Share Their Arcadia Experience
          </h2>
          <GoogleReviews />
        </div>
      </section>

    </main>
    </>
  )
}



