import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import WashougalFloorPlanCards from '../WashougalFloorPlanCards'
import GoogleReviews from '../../../(community)/portland/GoogleReviews'
import FAQAccordion from './FAQAccordion'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Arcadia Senior Living Lookout Ridge – Assisted Living Washougal',
  url: 'https://arcadiaretirement.com/washougal/assisted-living',
  telephone: '+13603351238',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2300 W 9th St',
    addressLocality: 'Washougal',
    addressRegion: 'WA',
    postalCode: '98671',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 45.5807, longitude: -122.3523 },
  medicalSpecialty: 'Geriatric',
  description: 'Compassionate assisted living in Washougal, WA at Arcadia Lookout Ridge. Personalized care, chef-prepared meals, and a vibrant boutique community.',
  priceRange: '$$',
  openingHours: 'Mo-Su 00:00-24:00',
}

export const metadata: Metadata = {
  title: 'Assisted Living in Washougal, Washington | Arcadia Senior Living',
  description: 'Arcadia Senior Living Lookout Ridge in Washougal, WA offers compassionate assisted living with personalized care, chef-prepared meals, and a vibrant boutique community. Support for daily needs, freedom for daily living.',
  alternates: { canonical: 'https://arcadiaretirement.com/washougal/assisted-living' },
  openGraph: {
    title: 'Assisted Living in Washougal, Washington | Arcadia Senior Living',
    description: 'Compassionate assisted living in Washougal, WA with personalized care, chef-prepared meals, and vibrant community life.',
    images: [{ url: '/images/washougal-exterior.jpg', width: 1200, height: 630 }],
  },
}

const PlusIcon = () => (
  <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/>
  </svg>
)

const Dot = () => <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0 mt-1.5 inline-block" />

const carouselImages = [
  { src: '/images/washougal/washougal-al-community.webp', alt: 'Community life at Arcadia Senior Living Washougal' },
  { src: '/images/washougal/washougal-resident-care.webp', alt: 'Resident care at Arcadia Washougal' },
  { src: '/images/washougal/washougal-al-staff.webp',      alt: 'Staff caring for residents at Arcadia Washougal' },
  { src: '/images/washougal/washougal-residents.jpg',      alt: 'Residents enjoying life at Arcadia Washougal' },
]

export default function WashougalAssistedLivingPage() {
  return (
    <>
    <Script id="washougal-al-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <main>

      {/* ── HERO ── */}
      <section className="relative min-h-[440px] md:min-h-[520px] flex items-center bg-[#2d5a5c] overflow-hidden">
        <img
          src="/images/washougal-exterior.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          alt="" aria-hidden="true"
        />
        <div className="relative z-10 w-full text-center px-6 py-20">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Assisted Living in Washougal, Washington
          </h1>
          <h2 className="text-white/85 text-lg md:text-2xl font-light uppercase tracking-widest">
            Support for Daily Needs, Freedom for Daily Living
          </h2>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-6">
                A Community Built on Care, Purpose, and Happiness
              </h2>
              <p className="text-[#555] text-lg leading-relaxed mb-8">
                At Arcadia Senior Living Lookout Ridge in Washougal, Assisted Living is about more than daily support. With personalized care, a welcoming community, and compassionate staff, residents enjoy independence, friendships, and a true sense of belonging. Families can feel confident knowing their loved ones are safe, comfortable, and engaged.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/washougal/tour"
                  className="inline-flex items-center justify-center gap-2 bg-[#c06448] text-white px-6 py-3.5 text-base font-medium hover:bg-[#a85038] transition-colors">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zM448 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/>
                  </svg>
                  Request A Tour
                </a>
                <Link href="/washougal/contact-us"
                  className="inline-flex items-center justify-center border border-[#c06448] text-[#c06448] px-6 py-3.5 text-base font-medium hover:bg-[#c06448] hover:text-white transition-colors">
                  Contact Us Today
                </Link>
              </div>
            </div>
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
            <img src="/images/washougal/washougal-logo.png" className="h-16 w-auto" alt="Arcadia Senior Living Washougal" />
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
            Assisted Living offers the perfect balance of support and independence. Residents enjoy the comfort of private suites along with personalized care, engaging social activities, and a welcoming setting that makes each day fulfilling.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {carouselImages.map((img) => (
              <div key={img.src} className="overflow-hidden h-52 sm:h-64 lg:h-72 bg-gray-100">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPREHENSIVE CARE ── */}
      <section className="bg-[#2d5a5c]" id="Amenities">
        <div className="relative w-full h-72 md:h-96 overflow-hidden">
          <img
            src="/images/washougal/washougal-group-activity.jpg"
            alt="Residents at Arcadia Senior Living Washougal"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d5a5c]/60 via-transparent to-[#2d5a5c]/80" />
          <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-10">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="font-serif text-3xl md:text-5xl font-light text-white leading-tight drop-shadow">
                Comprehensive Care,<br className="hidden md:block" /> Tailored to Every Resident
              </h2>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-14 md:py-20">
          <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl">
            Our Assisted Living community is focused on balancing independence with the right level of support. Our team partners with residents and families to create care plans that are personalized, safe, and comfortable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Assisted Living Services',
                items: ['24/7 compassionate staff support', 'Help with daily activities (ADLs)', 'Medication reminders and management', 'Personalized care plans', 'Regular health and wellness checks', 'Support for mild cognitive decline'],
              },
              {
                title: 'Dining & Nutrition',
                items: ['Chef-prepared, nutritious meals', 'Special dietary accommodations', 'Snacks and beverages available', 'Family-style dining options', 'Diabetic-friendly dining program'],
              },
              {
                title: 'Comfort & Convenience',
                items: ['Housekeeping and laundry service', 'Maintenance-free living', 'Transportation for outings and appointments', 'Emergency call systems in rooms'],
              },
              {
                title: 'Social & Lifestyle',
                items: ['Daily enrichment activities', 'Fitness and wellness programs', 'Arts, crafts, and hobbies', 'Movie nights and entertainment', 'Scheduled group outings'],
              },
            ].map(cat => (
              <div key={cat.title} className="border-t border-white/20 pt-6">
                <h3 className="text-[#D6A156] text-xs uppercase tracking-[0.25em] font-semibold mb-5">{cat.title}</h3>
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
                    { label: 'Care',      desc: 'Compassionate support for daily needs' },
                    { label: 'Purpose',   desc: 'Activities that bring meaning and joy' },
                    { label: 'Happiness', desc: 'A community built on comfort and connection' },
                    { label: 'Respect',   desc: 'Honoring dignity and independence every day' },
                    { label: 'Trust',     desc: 'Peace of mind for families' },
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
                src="/images/washougal/washougal-resident-care.webp"
                alt="Caring staff at Arcadia Senior Living Washougal"
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
            Arcadia is designed to provide life-enriching accommodations for your loved one. We offer private studios and one-bedroom suites, thoughtfully tailored to meet personal preferences and financial needs. With{' '}
            <strong><u>no buy-in fees or long-term lease commitments</u></strong>, our suites include all amenities and programs.
          </p>
          <WashougalFloorPlanCards />
          <a
            href="/washougal/photos"
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
                  <span><strong>Assisted Living from $4,225</strong> — pricing is subject to change. Contact us for details.</span>
                </li>
                <li className="flex items-start gap-3 text-white text-base">
                  <Dot />
                  <span><strong>Ask about our Respite Care rates</strong></span>
                </li>
              </ul>
              <p className="text-white/40 text-xs italic mb-6">
                *Pricing is subject to change. Contact us for the latest details.
              </p>
              <Link href="/washougal/contact-us"
                className="inline-block bg-[#c06448] text-white text-base px-7 py-3.5 hover:bg-[#a85038] transition-colors font-medium">
                Request Pricing Details
              </Link>
            </div>
            <div>
              <img
                src="/images/washougal/washougal-tea.jpg"
                alt="Residents at Arcadia Senior Living Washougal"
                className="w-full h-80 object-cover"
              />
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
              Discover how Arcadia Senior Living Lookout Ridge in Washougal provides a welcoming and supportive environment where seniors can flourish, explore new possibilities, and enjoy every day to the fullest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="/washougal/tour"
                className="inline-flex items-center justify-center bg-[#c06448] text-white px-8 py-4 text-base font-medium hover:bg-[#a85038] transition-colors">
                Request A Tour
              </a>
              <Link href="/washougal/contact-us"
                className="inline-flex items-center justify-center border border-[#c06448] text-[#c06448] px-8 py-4 text-base font-medium hover:bg-[#c06448] hover:text-white transition-colors">
                Contact Us Today
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border-t border-gray-200 pt-12">
            <div>
              <h3 className="font-serif text-2xl font-light text-[#2d5a5c] mb-5">
                Arcadia Senior Living Lookout Ridge – Assisted Living Communities in Washougal, Washington
              </h3>
              <p className="text-[#555] text-base leading-relaxed mb-5">
                Arcadia Senior Living Lookout Ridge is a thriving boutique environment where personalized care meets extraordinary views. You'll find us at <strong>2300 W 9th St</strong> in Washougal, WA — providing assisted living and respite care services in a neighborhood that exemplifies the best opportunities in the Pacific Northwest.
              </p>
              <ul className="space-y-3 text-base text-[#555]">
                <li className="flex items-center gap-2">
                  <span className="text-[#c06448]">🕐</span>
                  Open for calls 24/7 — <a href="tel:+13603351238" className="text-[#c06448] hover:underline font-medium">(360) 335-1238</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c06448]">📍</span>
                  <a href="https://maps.app.goo.gl/m57wfQGeJYyYFKsL6" target="_blank" rel="noopener noreferrer" className="hover:text-[#c06448] transition-colors">
                    2300 W 9th St, Washougal, WA 98671
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-72 bg-gray-200 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=2300+W+9th+St,+Washougal,+WA+98671&output=embed"
                width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arcadia Senior Living Washougal location"
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
