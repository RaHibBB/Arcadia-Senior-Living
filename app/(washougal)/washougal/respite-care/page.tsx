import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import GoogleReviews from '../../../(community)/portland/GoogleReviews'
import RespiteCareFAQ from './RespiteCareFAQ'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Arcadia Senior Living Lookout Ridge – Respite Care Washougal',
  url: 'https://arcadiaretirement.com/washougal/respite-care',
  telephone: '+13603351238',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2300 W 9th St',
    addressLocality: 'Washougal',
    addressRegion: 'WA',
    postalCode: '98671',
    addressCountry: 'US',
  },
  description: 'Short-term respite care in Washougal, WA at Arcadia Lookout Ridge. Compassionate support for caregivers and seniors for stays of 30 days or more.',
  priceRange: '$$',
  openingHours: 'Mo-Su 00:00-24:00',
}

export const metadata: Metadata = {
  title: 'Respite Care Services Washougal, WA | Arcadia Senior Living',
  description: 'Short-term respite care at Arcadia Senior Living Lookout Ridge in Washougal, WA. Compassionate support for caregivers and seniors — a welcoming boutique community with 30-day minimum stays.',
  alternates: { canonical: 'https://arcadiaretirement.com/washougal/respite-care' },
  openGraph: {
    title: 'Respite Care Services Washougal | Arcadia Senior Living',
    description: 'Short-term respite care in Washougal, WA. Compassionate support for caregivers and seniors.',
    images: [{ url: '/images/washougal/washougal-rc-hero.jpg', width: 1200, height: 630 }],
  },
}

const Dot = () => <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0 mt-1.5 inline-block" />

export default function WashougalRespiteCarePage() {
  return (
    <>
    <Script id="washougal-rc-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <main>

      {/* ── HERO ── */}
      <section className="relative min-h-[380px] md:min-h-[460px] flex items-end bg-[#2d5a5c] overflow-hidden">
        <img
          src="/images/washougal/washougal-rc-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="" aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a3c]/80 via-transparent to-transparent" />
        <div className="relative z-10 w-full px-6 lg:px-16 pb-14 pt-24 max-w-[1200px] mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">
            Respite Care Services Washougal
          </h1>
        </div>
      </section>

      {/* ── SHORT-TERM SUPPORT INTRO ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-6">
                Short-Term Support with Lasting Comfort
              </h2>
              <p className="text-[#555] text-lg leading-relaxed">
                At Arcadia Senior Living Communities, Respite Care gives families peace of mind and seniors a welcoming place to stay — whether for a few days or a few weeks. Designed to provide relief for caregivers and support for older adults, respite stays offer the same compassionate care, engaging lifestyle, and warm community that define Arcadia.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src="/images/washougal/washougal-rc-hero.jpg"
                alt="Compassionate care at Arcadia Senior Living Washougal"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── INDIVIDUALIZED CARE STRIP ── */}
      <section className="bg-[#2d5a5c] py-14 md:py-16">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <p className="text-white/85 text-lg leading-relaxed max-w-3xl">
            Every respite guest receives thoughtful, individualized assistance — from medication management and mobility support to social activities and meaningful connections. Whether recovering from an illness, giving a primary caregiver time to rest, or exploring what life at Arcadia is like, each stay is designed to be safe, comfortable, and enriching.
          </p>
        </div>
      </section>

      {/* ── CARE YOU CAN COUNT ON ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-[#2d5a5c] mb-4">Care You Can Count On</h2>
          <p className="text-[#555] text-lg leading-relaxed max-w-3xl">
            Trust is at the core of our approach. We take the time to listen to families, understand preferences, and tailor support to meet each guest's unique needs. Our dedicated staff are chosen for their compassion and commitment, ensuring every respite stay feels both supportive and welcoming.
          </p>
        </div>
      </section>

      {/* ── IMAGE + QUOTE ── */}
      <section className="bg-[#f5f5f5] py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-center">
            <div className="overflow-hidden">
              <img
                src="/images/washougal/washougal-rc-staff.jpg"
                alt="Caring staff at Arcadia Senior Living Washougal"
                className="w-full h-96 object-cover object-top"
              />
            </div>
            <div>
              <p className="font-serif text-2xl md:text-3xl text-[#2d5a5c] leading-relaxed italic">
                "At Arcadia Senior Living, Respite Care is more than a temporary stay — it's an opportunity for seniors to experience the comfort of community, the reassurance of professional care, and the joy of belonging."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPITE STAYS ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-6">Respite Stays</h2>
              <p className="text-[#555] text-lg leading-relaxed mb-5">
                Our respite program allows for a short-term stay in a fully furnished assisted living apartment. Guests receive full access to Arcadia's programs, events (performances, happy hours), classes, activities, and excursions.
              </p>
              <p className="text-[#555] text-lg leading-relaxed mb-8">
                They will enjoy chef-prepared meals in a restaurant-style setting and be encouraged to join our balance or yoga group classes.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'A good trial to see if assisted living is right for a loved one',
                  'Can be a lifesaver when a gap of coverage occurs',
                  'A solution to the short-term absence of a caregiver or family',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-[#555] text-base">
                    <Dot />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/washougal/contact-us"
                className="inline-block bg-[#c06448] text-white text-base px-7 py-3.5 hover:bg-[#a85038] transition-colors font-medium">
                Contact Us Today
              </Link>
            </div>
            <div>
              <img
                src="/images/washougal/washougal-salon.jpg"
                alt="Residents enjoying life at Arcadia Washougal"
                className="w-full h-80 object-cover"
              />
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

      {/* ── COMPREHENSIVE RESPITE CARE ── */}
      <section className="bg-[#2d5a5c] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">Comprehensive Respite Care</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl">
            Respite Care at Arcadia is about balancing independence with the right level of support. Our team works closely with guests and families to ensure care plans are tailored, safe, and comfortable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              {
                title: 'Respite Care Services',
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
              {
                title: 'Community & Environment',
                items: ['Comfortable private suites', 'Welcoming common areas', 'Beautiful outdoor spaces', 'Secure, safe environment'],
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

      {/* ── GOOGLE REVIEWS ── */}
      <section className="bg-[#f9f9f9] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10 text-center">
            Families Share Their Arcadia Experience
          </h2>
          <GoogleReviews />
        </div>
      </section>

      {/* ── VISIT US FOR A TOUR ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-3">Visit Us for a Tour</h2>
          <p className="text-[#888] text-base italic mb-4"><strong>A life well-lived, made brighter with Arcadia!</strong></p>
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

      {/* ── FAQ ── */}
      <section className="bg-[#f9f9f9] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10">
            Senior Respite Care Q&amp;A
          </h2>
          <RespiteCareFAQ />
        </div>
      </section>

    </main>
    </>
  )
}
