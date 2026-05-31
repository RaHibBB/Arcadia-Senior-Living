import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import WashougalCarousel from './WashougalCarousel'
import WashougalFloorPlanCards from './WashougalFloorPlanCards'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Arcadia Senior Living Lookout Ridge – Washougal',
  url: 'https://arcadiaretirement.com/washougal',
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
  description: 'Boutique assisted living and respite care in Washougal, WA. Compassionate care, chef-prepared meals, and vibrant community life at Lookout Ridge.',
  priceRange: '$$',
  openingHours: 'Mo-Su 00:00-24:00',
  hasMap: 'https://maps.app.goo.gl/m57wfQGeJYyYFKsL6',
}

export const metadata: Metadata = {
  title: 'Arcadia Senior Living – Washougal, Washington | Assisted Living & Respite Care',
  description: 'Arcadia Senior Living Lookout Ridge in Washougal, WA offers boutique assisted living and respite care. Compassionate care, chef-prepared meals, and vibrant community at 2300 W 9th St.',
  alternates: { canonical: 'https://arcadiaretirement.com/washougal' },
  openGraph: {
    title: 'Arcadia Senior Living – Washougal, Washington',
    description: 'Boutique assisted living and respite care in Washougal, WA at Lookout Ridge.',
    images: [{ url: '/images/washougal-exterior.jpg', width: 1200, height: 630 }],
  },
}

const amenities = [
  'Theater', 'Salon and Spa', 'Fitness Area & Classes',
  'Activity & Games Room', 'Arts & Crafts Studio', 'Fireplace',
  'Private Dining Room', 'Library', 'Grand Dining Room',
  'Wildlife Viewing', 'Gardening', 'Shuttle Bus',
  'Local Washougal & Camas Events',
]

const programs = [
  'Happy Hour', 'Garden Program', 'Senior Fitness Classes',
  'Activity & Games', 'Cooking & Baking', 'Salon and Barbershop',
  'Animal Therapy', 'Visiting Foot/Hand Care',
]

const wayCards = [
  {
    img: 'https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/09/tea-1024x768.jpg',
    title: 'Wellness At The Core',
    body: 'From personalized care plans to engaging activities, we place wellness at the heart of daily life, supporting mind, body, and spirit every step of the way.',
  },
  {
    img: 'https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/08/230819.Arcadia.js-300-copy-scaled-1-1024x683.jpg',
    title: 'Our Philosophy of Care',
    body: 'We believe senior living should feel like home, built on dignity, respect, and compassion, where every resident is known and genuinely cared for.',
  },
  {
    img: 'https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/09/thumbnail_20211105_111852-1024x768.jpg',
    title: 'Community Connected',
    body: 'Arcadia fosters belonging with vibrant events, meaningful relationships, and strong ties to the local community that make life richer and more fulfilling.',
  },
]


const events = [
  {
    img: 'https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2026/05/last-name-flyer-pdf.jpg',
    href: 'https://arcadiaretirement.com/washougal/new-faces-new-spaces/',
    title: 'New Faces, New Spaces',
  },
  {
    img: 'https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/08/230819.Arcadia.js-300-copy-scaled-1-300x200.jpg',
    href: 'https://arcadiaretirement.com/washougal/celebrate-mom-mothers-day-brunch/',
    title: "Celebrate Mom – Mother's Day Brunch",
  },
  {
    img: 'https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/09/tea-300x225.jpg',
    href: 'https://arcadiaretirement.com/washougal/love-where-you-live-our-sweet-february-move-in-special/',
    title: 'Love Where You Live – February 2026 Move-in Special',
  },
  {
    img: 'https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/09/thumbnail_20211105_111852-300x225.jpg',
    href: 'https://arcadiaretirement.com/washougal/medicare-aep-seminar-washougal/',
    title: 'Medicare AEP Seminar Washougal',
  },
]

export default function WashougalPage() {
  return (
    <>
    <Script id="washougal-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <main>

      {/* ── HERO ── */}
      <section className="relative min-h-[480px] md:min-h-[580px] flex items-center bg-[#2d5a5c] overflow-hidden">
        <img
          src="/images/washougal-exterior.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="" aria-hidden="true"
        />
        <div className="relative z-10 w-full text-center px-6 py-24">
          <p className="text-white/80 text-xl md:text-2xl font-light tracking-[0.3em] uppercase mb-3">Welcome to</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-5">
            Arcadia Senior Living
          </h1>
          <p className="text-white/80 text-base md:text-lg font-light uppercase tracking-[0.2em]">
            Locally Owned &amp; Operated Senior Living Community In Washougal, Washington
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
            <img
              src="https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/09/Transparent-Logo-with-box-1.png"
              className="h-16 w-auto"
              alt="Arcadia Senior Living"
            />
            <div className="flex-1 h-[3px] bg-gradient-to-l from-[#c06448] to-[#4a7c7e]" />
          </div>
        </div>
      </section>

      {/* ── WELL-BEING + CAROUSEL ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-5">We do senior well-being really well.</h2>
          <p className="text-[#555] text-lg leading-relaxed mb-12 max-w-2xl">
            At Arcadia Senior Living, our care extends far beyond meeting daily needs. With a hospitality-focused approach and thoughtfully crafted programs, we encourage residents to feel renewed, inspired, and even uncover new passions. We go beyond the basics because every senior deserves so much more.
          </p>
          <WashougalCarousel />
        </div>
      </section>

      {/* ── AMENITIES & ACTIVITIES ── */}
      <section className="bg-[#2d5a5c] py-16 md:py-24" id="Amenities">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-3">Amenities &amp; Activities</h2>
          <p className="text-white/70 text-base mb-12 max-w-2xl">
            Our Washougal senior living community provides more than exceptional care. Here, residents are surrounded by a supportive environment where purpose is embraced and fulfillment is part of everyday life.
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
              <img
                src="https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/09/IMG_5634-683x1024.jpg"
                className="w-full h-full object-cover"
                alt="Resident at Arcadia Washougal salon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRENT EVENTS ── */}
      <section className="bg-[#D9EDF0] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] text-center mb-10">Current Events at Arcadia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.map((e, i) => (
              <a key={i} href={e.href} target="_blank" rel="noopener noreferrer"
                className="block overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow group">
                <img src={e.img} alt={e.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-3">
                  <p className="text-[#2d5a5c] text-sm font-medium leading-snug">{e.title}</p>
                </div>
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

      {/* ── EXPERIENCE UNMATCHED CARE ── */}
      <section className="bg-[#f9f9f9] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-4">Experience Unmatched Care and Comfort</h2>
          <p className="text-[#555] text-lg leading-relaxed mb-10 max-w-2xl">
            At Arcadia Senior Living Lookout Ridge in Washougal, Washington, your loved one's well-being is at the heart of everything we do.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-light text-[#2d5a5c] mb-6">
                Why families trust Arcadia for exceptional care and comfort
              </h3>
              <ul className="space-y-5 mb-8">
                {[
                  'Personalized, resident-first care — Our locally owned community centers around personalized care plans led by licensed nurses—available around the clock.',
                  'A joyful, boutique environment — With just 68 apartments and a warm, home-like atmosphere, our setting fosters meaningful connections, close attention from staff, and genuine belonging.',
                  'Care with purpose, backed by integrity — Rooted in our mission: Care. Purpose. Happiness.',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#555] text-base leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0 mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/08/230819.Arcadia.js-211-copy-scaled.jpg-1-scaled-1-682x1024.webp"
                alt="Arcadia staff providing care in Washougal"
                className="w-full h-96 object-cover object-top"
              />
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
                One of the first questions that potential residents and families ask is how much those opportunities will cost. Our advisors are here to provide full pricing transparency.
              </p>
              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3 text-white text-base">
                  <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0 mt-2" />
                  <span><strong>Assisted Living from $4,225</strong> — pricing is subject to change. Contact us for details.</span>
                </li>
                <li className="flex items-start gap-3 text-white text-base">
                  <span className="w-2 h-2 rounded-full bg-[#c06448] shrink-0 mt-2" />
                  <span><strong>Ask about our Respite Care rates</strong></span>
                </li>
              </ul>
              <Link href="/washougal/contact-us"
                className="inline-block bg-[#c06448] text-white text-base px-7 py-3.5 hover:bg-[#a85038] transition-colors font-medium">
                Request Pricing Details
              </Link>
            </div>
            <div>
              <img
                src="https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/09/thumbnail_20211105_111852-1024x768.jpg"
                alt="Senior resident at Arcadia Washougal"
                className="w-full h-80 object-cover"
              />
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
              Discover how Arcadia Senior Living Lookout Ridge in Washougal provides a welcoming and supportive setting where seniors can flourish, explore new possibilities, and enjoy every day to the fullest.
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
              <h3 className="font-serif text-2xl font-light text-[#2d5a5c] mb-5">Arcadia Senior Living Lookout Ridge in Washougal</h3>
              <p className="text-[#555] text-base leading-relaxed mb-5">
                Arcadia Senior Living Lookout Ridge is a thriving boutique environment where personalized care meets extraordinary views. You'll find us at <strong>2300 W 9th St</strong> in Washougal, WA — a community designed for the integrated lifestyle that defines everything it means to live in the Pacific Northwest.
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

      {/* ── GOOGLE REVIEWS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d5a5c] mb-10 text-center">
            Families Share Their Arcadia Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Scott Greenwood',
                relation: 'Child of resident',
                stars: 5,
                text: 'The facility is terrific, the residents seem genuinely happy and well cared for, and I know there is a tremendous sense of love for their residents. Thank you Arcadia.',
              },
              {
                name: 'Joyce R.',
                relation: 'Family member',
                stars: 5,
                text: 'The staff at Arcadia Washougal are so caring and attentive. My mother loves it here — she has made wonderful friends and is happier than ever.',
              },
              {
                name: 'Sandra M.',
                relation: 'Family member',
                stars: 5,
                text: 'We toured several facilities before choosing Arcadia Lookout Ridge. The personal touch, the views, and the community feel made it an easy decision.',
              },
            ].map((r, i) => (
              <div key={i} className="bg-[#f9f9f9] p-6 rounded-lg">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 fill-yellow-400" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                  ))}
                </div>
                <p className="text-[#555] text-sm leading-relaxed mb-3">"{r.text}"</p>
                <p className="font-semibold text-[#2d5a5c] text-sm">— {r.name}</p>
                <p className="text-[#888] text-xs">{r.relation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
    </>
  )
}

