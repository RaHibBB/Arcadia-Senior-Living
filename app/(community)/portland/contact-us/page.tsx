import type { Metadata } from 'next'
import PortlandContactForm from './PortlandContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Arcadia Senior Living Portland',
  description: 'Contact Arcadia Senior Living Portland for pricing, availability, tours, and more. Located at 13031 SE Foster Rd, Portland, OR 97236. Call (503) 206-8930.',
  alternates: { canonical: 'https://arcadiaretirement.com/portland/contact-us' },
  openGraph: {
    title: 'Contact Us | Arcadia Senior Living Portland',
    description: 'Get in touch with Arcadia Senior Living Portland. Call (503) 206-8930 or fill out our contact form.',
    images: [{ url: '/images/portland-hero.jpg', width: 1200, height: 630 }],
  },
}

export default function PortlandContactPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative min-h-[300px] md:min-h-[360px] flex items-center bg-[#2d5a5c] overflow-hidden">
        <img
          src="https://arcadiaretirement.com/portland/wp-content/uploads/sites/4/2025/09/Arcadia_Chase_Building2019_2-1.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="" aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d5a5c]/90 via-[#2d5a5c]/70 to-[#2d5a5c]/40" />
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 lg:px-8 py-16">
          <p className="text-white/70 text-sm uppercase tracking-[0.4em] mb-3">Portland, Oregon</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Contact Us
          </h1>
          <div className="w-14 h-0.5 bg-[#c06448] mb-5" />
          <p className="text-white/75 text-lg max-w-lg leading-relaxed">
            We'd love to hear from you. Reach out with any questions about our community, care services, or to schedule a visit.
          </p>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIPS ── */}
      <section className="bg-[#2d5a5c]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <a href="tel:+15032068930" className="flex items-center gap-4 px-6 py-5 hover:bg-white/5 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#c06448] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest">Call Us</p>
                <p className="text-white font-medium">(503) 206-8930</p>
              </div>
            </a>
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest">Visit Us</p>
                <p className="text-white font-medium">13031 SE Foster Rd, Portland, OR</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 py-5">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest">Open For Calls</p>
                <p className="text-white font-medium">24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="bg-[#f5f5f5] py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">

            {/* Form card */}
            <div className="bg-white shadow-sm p-8 md:p-10">
              <div className="mb-8">
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-2">Get in Touch</p>
                <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
                  Fill out the form below to contact us
                </h2>
              </div>
              <PortlandContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-28">

              {/* Building photo + info */}
              <div className="bg-white shadow-sm overflow-hidden">
                <img
                  src="https://arcadiaretirement.com/portland/wp-content/uploads/sites/4/2025/09/Arcadia_Chase_Building2019_2-1.jpg"
                  alt="Arcadia Senior Living Portland exterior"
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-lg text-[#2d5a5c] mb-4">
                    Arcadia Senior Living Portland
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#c06448] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
                      </svg>
                      <a href="https://maps.app.goo.gl/g5CeQYJxVcGsXUi56"
                        className="text-sm text-[#555] hover:text-[#c06448] leading-relaxed transition-colors">
                        13031 SE Foster Rd<br />Portland, OR 97236
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#c06448] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                      </svg>
                      <a href="tel:+15032068930" className="text-sm text-[#555] hover:text-[#c06448] transition-colors">
                        (503) 206-8930
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tour CTA */}
              <div className="bg-[#2d5a5c] p-6 text-center">
                <p className="font-serif text-xl text-white mb-2">Ready to visit?</p>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Experience Arcadia firsthand. Schedule a personal tour of our community.
                </p>
                <a
                  href="/portland/tour"
                  className="inline-flex items-center justify-center gap-2 bg-[#c06448] hover:bg-[#a85038] text-white text-sm font-medium px-6 py-3 transition-colors w-full"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zM448 112v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"/>
                  </svg>
                  Schedule a Tour
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH MAP ── */}
      <section className="h-80 md:h-[420px]">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=Arcadia%20Senior%20Living%20Portland%20Oregon&t=m&z=14&output=embed&iwloc=near"
          title="Arcadia Senior Living Portland Oregon"
          className="w-full h-full border-0"
        />
      </section>

    </main>
  )
}


