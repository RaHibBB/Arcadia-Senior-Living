import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import AssistedLivingCarousel from './AssistedLivingCarousel'
import FAQAccordion from './FAQAccordion'
import FloorPlanCards from '../FloorPlanCards'
import GoogleReviews from '../GoogleReviews'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Arcadia Senior Living Portland – Assisted Living',
  url: 'https://arcadiaretirement.com/portland/assisted-living',
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
  medicalSpecialty: 'Geriatric',
  description: 'Compassionate assisted living in Portland, OR with personalized care, chef-crafted dining, and a vibrant community.',
  image: 'https://arcadiaretirement.com/images/portland-hero.jpg',
  priceRange: '$$',
  openingHours: 'Mo-Su 00:00-24:00',
}

export const metadata: Metadata = {
  title: 'Assisted Living in Portland, Oregon | Arcadia Senior Living',
  description: 'Arcadia Senior Living Portland offers compassionate assisted living with personalized care, chef-crafted dining, and a vibrant community. Support for daily needs, freedom for daily living.',
  alternates: { canonical: 'https://arcadiaretirement.com/portland/assisted-living' },
  openGraph: {
    title: 'Assisted Living in Portland, Oregon | Arcadia Senior Living',
    description: 'Compassionate assisted living with personalized care, chef-crafted dining, and vibrant community life in Portland, OR.',
    images: [{ url: '/images/portland-hero.jpg', width: 1200, height: 630 }],
  },
}

const PlusIcon = () => (
  <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/>
  </svg>
)

const Dot = () => <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0 mt-1.5 inline-block" />

export default function AssistedLivingPage() {
  return (
    <>
    <Script id="al-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <main>

      {/* ── HERO ── */}
      <section className="relative min-h-[440px] md:min-h-[520px] flex items-center bg-[#2d5a5c] overflow-hidden">
        <img
          src="/images/portland-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          alt="" aria-hidden="true"
        />
        <div className="relative z-10 w-full text-center px-6 py-20">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Assisted Living in Portland, Oregon
          </h1>
          <h2 className="text-white/85 text-lg md:text-2xl font-light uppercase tracking-widest">
            Support for Daily Needs, Freedom for Daily Living
          </h2>
        </div>
      </section>

      {/* ── INTRO: A Community Built on Care, Purpose, and Happiness ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-6">
                A Community Built on Care, Purpose, and Happiness
              </h2>
              <p className="text-[#555] text-lg leading-relaxed mb-8">
                At Arcadia Senior Living Portland, Assisted Living is more than daily support — it's about creating a meaningful lifestyle. Residents enjoy personalized care that helps with everyday needs, while still embracing independence, friendships, and a sense of belonging. With compassionate and licensed staff and a welcoming environment, families can feel confident knowing their loved ones are safe, comfortable, and engaged.
              </p>
              <a
                href="/portland/tour"
                className="inline-flex items-center justify-center bg-[#c06448] text-white px-7 py-3.5 text-base font-medium hover:bg-[#a85038] transition-colors"
              >
                Schedule Your Visit Today
              </a>
            </div>
            {/* Care / Purpose / Happiness */}
            <div className="bg-[#2d5a5c] p-8 self-start">
              <ul className="space-y-6">
                {['Care', 'Purpose', 'Happiness'].map(item => (
                  <li key={item} className="flex items-center gap-4">
                    <PlusIcon />
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

      {/* ── A PLACE FAMILIES TRUST ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-5">
            A Place Families Trust, a Home Residents Love
          </h2>
          <p className="text-[#555] text-lg leading-relaxed mb-12 max-w-2xl">
            Our Assisted Living community balances support with freedom. Residents enjoy the privacy of their own space, along with easy access to personalized care, social gatherings, and beautiful surroundings that make life comfortable and fulfilling.
          </p>
          <AssistedLivingCarousel />
        </div>
      </section>

      {/* ── COMPREHENSIVE CARE ── */}
      <section className="bg-[#2d5a5c]" id="Amenities">

        {/* Full-width image banner at top */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden">
          <img
            src="/images/portland-al-care.jpg"
            alt="Resident enjoying activities at Arcadia Portland"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Dark gradient so heading reads clearly over image */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d5a5c]/60 via-transparent to-[#2d5a5c]/80" />
          <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-10">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="font-serif text-3xl md:text-5xl font-light text-white leading-tight drop-shadow">
                Comprehensive Care,<br className="hidden md:block" /> Tailored to Every Resident
              </h2>
            </div>
          </div>
        </div>

        {/* Content below image */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-14 md:py-20">
          <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl">
            Assisted Living at Arcadia is about balancing independence with the right level of support. Our team works closely with residents and families to ensure care plans are tailored, safe, and comfortable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Assisted Living Services',
                items: ['24/7 compassionate staff support','Help with daily activities (ADLs)','Medication reminders and management','Personalized care plans','Regular health and wellness checks','Support for mild cognitive decline'],
              },
              {
                title: 'Dining & Nutrition',
                items: ['Chef-prepared, nutritious meals','Special dietary accommodations','Snacks and beverages available','Family-style dining options','Diabetic-friendly dining program'],
              },
              {
                title: 'Comfort & Convenience',
                items: ['Housekeeping and laundry service','Maintenance-free living','Transportation for outings and appointments','Emergency call systems in rooms'],
              },
              {
                title: 'Social & Lifestyle',
                items: ['Daily enrichment activities','Fitness and wellness programs','Arts, crafts, and hobbies','Movie nights and entertainment','Scheduled group outings'],
              },
            ].map(cat => (
              <div key={cat.title} className="border-t border-white/20 pt-6">
                <h3 className="text-[#D6A156] text-xs uppercase tracking-[0.25em] font-semibold mb-5">
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-start gap-3 text-white/85 text-[15px] leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c06448] shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── PHILOSOPHY OF CARE ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#c06448] mb-3">Our Philosophy of Care</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10">
            Guided by Care, Purpose, and Happiness
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[#555] text-lg leading-relaxed mb-8">
                Our mission of Care, Purpose, and Happiness is more than words — it's how we approach every resident's journey later in life. We believe Assisted Living should respect independence, honor dignity, and provide the right level of support to help each person thrive.
              </p>
              <div className="bg-[#f5f5f5] p-6 mb-6">
                <p className="text-[#2d5a5c] text-sm font-semibold uppercase tracking-widest mb-4">What this means for residents</p>
                <ul className="space-y-3">
                  {[
                    { label: 'Care',    desc: 'Compassionate support for daily needs' },
                    { label: 'Purpose', desc: 'Activities that bring meaning and joy' },
                    { label: 'Happiness', desc: 'A community built on comfort and connection' },
                    { label: 'Respect',  desc: 'Honoring dignity and independence every day' },
                    { label: 'Trust',    desc: 'Peace of mind for families' },
                  ].map(p => (
                    <li key={p.label} className="flex items-start gap-3 text-base text-[#555]">
                      <Dot />
                      <span><strong className="text-[#333]">{p.label}:</strong> {p.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <img
                src="/images/assisted-living-staff.webp"
                alt="Caring staff at Arcadia Senior Living Portland"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <section className="bg-[#f9f9f9] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10 text-center">
            Families Share Their Arcadia Experience
          </h2>
          <GoogleReviews />
        </div>
      </section>

      {/* ── FLOOR PLANS ── */}
      <section className="bg-white py-16 md:py-24" id="floor-plans">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl md:text-4xl text-[#333] mb-6">Floorplans</h2>
          <p className="text-[#454038] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            We offer private studios and one-bedroom suites, thoughtfully tailored to meet personal preferences and financial needs. With{' '}
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

      {/* ── PRICING ── */}
      <section className="bg-[#f9f9f9] py-16 md:py-24" id="pricing">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10">Pricing</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="bg-[#2d5a5c] p-10">
              <p className="text-white/75 text-base leading-relaxed mb-7">
                We make it simple and transparent — no buy-in fees or long-term lease commitments, just quality living with the support you can trust.
              </p>
              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3 text-white text-base">
                  <Dot />
                  <span><strong>Assisted Living starts from $5,843</strong> — pricing is subject to change. Contact us for updates.</span>
                </li>
                <li className="flex items-start gap-3 text-white text-base">
                  <Dot />
                  <span><strong>Ask about our Respite Care rates</strong> (30 day minimum)</span>
                </li>
              </ul>
              <p className="text-white/40 text-xs italic mb-6">
                Pricing may vary. Please reach out to us for complete information. Rates reflect the most basic level of care.
              </p>
              <Link href="/portland/contact-us"
                className="inline-block bg-[#c06448] text-white text-base px-7 py-3.5 hover:bg-[#a85038] transition-colors font-medium">
                Request Pricing Details
              </Link>
            </div>
            <div>
              <img src="/images/assisted-living-care.jpg" alt="Senior resident at Arcadia Portland" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT US FOR A TOUR ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-3">Visit Us for a Tour</h2>
            <p className="text-[#888] text-base italic mb-4">A life well-lived, made brighter with Arcadia!</p>
            <p className="text-[#555] text-lg max-w-xl mx-auto leading-relaxed">
              Discover how Arcadia Senior Living in Portland, OR, creates a warm and supportive environment where seniors can thrive, embrace new possibilities, and enjoy each day to the fullest.
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

          {/* Address + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border-t border-gray-200 pt-12">
            <div>
              <h3 className="font-serif text-2xl font-light text-[#2d5a5c] mb-5">Arcadia Senior Living Portland</h3>
              <p className="text-[#555] text-base leading-relaxed mb-5">
                Arcadia Senior Living is nestled right where care and community come together. You'll find us at <strong>13031 SE Foster Road</strong> in Portland's welcoming southeast, just minutes from Adventist Medical Center, a trusted healthcare hub for the area.
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
            <div className="h-72 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.6!2d-122.5894!3d45.4745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b7a1a1a1a1a%3A0x1!2s13031+SE+Foster+Rd%2C+Portland%2C+OR+97236!5e0!3m2!1sen!2sus!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arcadia Senior Living Portland location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#f9f9f9] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10">
            Assisted Living Q&amp;A
          </h2>
          <FAQAccordion />
        </div>
      </section>

    </main>
    </>
  )
}


