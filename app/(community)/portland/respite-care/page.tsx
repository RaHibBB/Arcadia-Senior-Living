import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import RespiteCareFAQ from './RespiteCareFAQ'
import GoogleReviews from '../GoogleReviews'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Arcadia Senior Living Portland – Respite Care',
  url: 'https://arcadiaretirement.com/portland/respite-care',
  telephone: '+15032068930',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '13031 SE Foster Rd',
    addressLocality: 'Portland',
    addressRegion: 'OR',
    postalCode: '97236',
    addressCountry: 'US',
  },
  description: 'Short-term respite care in Portland, OR. Compassionate support for caregivers and seniors for stays ranging from days to weeks.',
  image: 'https://arcadiaretirement.com/images/portland-rc-outdoor.jpg',
  openingHours: 'Mo-Su 00:00-24:00',
}

export const metadata: Metadata = {
  title: 'Respite Care Services Portland | Arcadia Senior Living',
  description: 'Short-term respite care at Arcadia Senior Living Portland. Compassionate support for caregivers and seniors — a welcoming community for stays of a few days to several weeks.',
  alternates: { canonical: 'https://arcadiaretirement.com/portland/respite-care' },
  openGraph: {
    title: 'Respite Care Services Portland | Arcadia Senior Living',
    description: 'Short-term respite care in Portland, OR. Compassionate support for caregivers and seniors for stays of days to weeks.',
    images: [{ url: '/images/portland-rc-outdoor.jpg', width: 1200, height: 630 }],
  },
}

const PlusIcon = () => (
  <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 512 512" fill="currentColor">
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"/>
  </svg>
)

const Dot = () => <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0 mt-1.5 inline-block" />

export default function RespiteCarePage() {
  return (
    <>
    <Script id="rc-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <main>

      {/* ── HERO ── */}
      <section className="relative min-h-[440px] md:min-h-[520px] flex items-center bg-[#2d5a5c] overflow-hidden">
        <img
          src="/images/portland-rc-outdoor.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          alt="" aria-hidden="true"
        />
        <div className="relative z-10 w-full text-center px-6 py-20">
          <p className="text-white/80 text-base md:text-lg font-light uppercase tracking-[0.3em] mb-3">Portland, Oregon</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
            Respite Care Services Portland
          </h1>
          <p className="text-white/80 text-base md:text-lg font-light uppercase tracking-[0.2em]">
            Short-Term Support with Lasting Comfort
          </p>
        </div>
      </section>

      {/* ── INTRO: Short-Term Support + Care/Purpose/Happiness ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-6">
                Short-Term Support with Lasting Comfort
              </h2>
              <p className="text-[#555] text-lg leading-relaxed mb-8">
                At Arcadia Senior Living Communities, Respite Care gives families peace of mind and seniors a welcoming place to stay — whether for a few days or a few weeks. Designed to provide relief for caregivers and support for older adults, respite stays offer the same compassionate care, engaging lifestyle, and warm community that define Arcadia.
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

      {/* ── EVERY RESPITE STAY ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 lg:gap-20 items-start">
            {/* Image */}
            <div className="relative">
              <img
                src="/images/portland-rc-outdoor.jpg"
                className="w-full h-[420px] object-cover"
                alt="Residents at Arcadia Senior Living Portland"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#4a7c7e]/10 -z-10" />
            </div>
            {/* Text */}
            <div className="space-y-6 lg:pt-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-3">Our Approach</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1a1a1a] leading-snug mb-6">
                  Every Respite Stay is Designed for You
                </h2>
              </div>
              <p className="text-[#555] text-lg leading-relaxed">
                Every respite guest receives thoughtful, individualized assistance — from medication management and mobility support to social activities and meaningful connections. Whether recovering from an illness, giving a primary caregiver time to rest, or exploring what life at Arcadia is like, each stay is designed to be safe, comfortable, and enriching.
              </p>
              <div className="pl-5 border-l-2 border-[#4a7c7e]">
                <p className="text-[#555] text-lg leading-relaxed italic">
                  "At Arcadia Senior Living, Respite Care is more than a temporary stay — it's an opportunity for seniors to experience the comfort of community, the reassurance of professional care, and the joy of belonging."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARE YOU CAN COUNT ON ── */}
      <section className="bg-[#f5f5f5] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-3">Our Promise</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10">Care You Can Count On</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[#555] text-lg leading-relaxed mb-8">
                Trust is at the core of our approach. We take the time to listen to families, understand preferences, and tailor support to meet each guest's unique needs. Our dedicated staff are chosen for their compassion and commitment, ensuring every respite stay feels both supportive and welcoming.
              </p>
              {/* Respite Stays */}
              <div className="bg-white p-8 shadow-sm">
                <h3 className="font-serif text-2xl font-light text-[#2d5a5c] mb-5">Respite Stays</h3>
                <p className="text-[#555] text-base leading-relaxed mb-3">
                  Our respite program allows for a short-term stay in a fully furnished assisted living apartment. Guests will receive full access to Arcadia's programs, events (performances, happy hours), classes, activities, and excursions.
                </p>
                <p className="text-[#555] text-base leading-relaxed mb-5">
                  They will enjoy chef-prepared meals in a restaurant style setting and be encouraged to join our balance or yoga group classes.
                </p>
                <ul className="space-y-3 mb-7">
                  {[
                    'A good trial to see if assisted living is right for a loved one',
                    'Can be a lifesaver when a gap of coverage occurs',
                    'A solution to the short term absence of a caregiver or family',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-[#555] text-base">
                      <Dot />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/portland/contact-us"
                  className="inline-flex items-center justify-center bg-[#c06448] text-white px-6 py-3 text-base font-medium hover:bg-[#a85038] transition-colors">
                  Contact Us Today
                </Link>
              </div>
            </div>
            {/* Portrait image */}
            <div className="relative">
              <img
                src="/images/portland-rc-resident.jpg"
                className="w-full h-[560px] object-cover object-top"
                alt="Resident at Arcadia Senior Living Portland"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#2d5a5c]/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPREHENSIVE RESPITE CARE (teal, image banner top) ── */}
      <section className="bg-[#2d5a5c]" id="Amenities">
        {/* Image banner at top */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <img
            src="/images/portland-al-rummikub.jpg"
            alt="Residents enjoying activities at Arcadia Portland"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d5a5c]/60 via-transparent to-[#2d5a5c]/80" />
          <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-8">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="font-serif text-3xl md:text-5xl font-light text-white leading-tight drop-shadow">
                Comprehensive Respite Care
              </h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-14 md:py-20">
          <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl">
            Respite Care at Arcadia is about balancing independence with the right level of support. Our team works closely with residents and families to ensure care plans are tailored, safe, and comfortable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Respite Care Services',
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
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-3">Visit Us for a Tour</h2>
            <p className="text-[#888] text-base italic mb-4">A life well-lived, made brighter with Arcadia!</p>
            <p className="text-[#555] text-lg max-w-xl mx-auto leading-relaxed">
              Discover how Arcadia Senior Living in Portland, OR, creates a warm and supportive environment where seniors can thrive, embrace new possibilities, and enjoy each day to the fullest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="/portland/tour"
                className="inline-flex items-center justify-center gap-2 bg-[#c06448] text-white px-8 py-4 text-base font-medium hover:bg-[#a85038] transition-colors">
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

          {/* Address + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border-t border-gray-200 pt-12">
            <div>
              <h3 className="font-serif text-2xl font-light text-[#2d5a5c] mb-5">Arcadia Senior Living Portland</h3>
              <p className="text-[#555] text-base leading-relaxed mb-5">
                You'll find us at <strong>13031 SE Foster Road</strong> in Portland's welcoming southeast, just minutes from Adventist Medical Center. Our boutique community offers a warm, home-like setting where every respite guest feels immediately welcomed.
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
            Senior Respite Care Q&amp;A
          </h2>
          <RespiteCareFAQ />
        </div>
      </section>

    </main>
    </>
  )
}


