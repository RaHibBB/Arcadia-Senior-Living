import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Arcadia Senior Living Communities',
  description: 'Contact Arcadia Senior Living Communities. Schedule a tour, ask questions, or speak with our team about assisted living and respite care in Portland, OR and Washougal, WA.',
  alternates: {
    canonical: 'https://arcadiaretirement.com/contact-us',
  },
}

const communities = [
  {
    name: 'Arcadia Senior Living',
    location: 'Portland, Oregon',
    address: '13031 SE Foster Road',
    cityState: 'Portland, OR 97236',
    phone: '(503) 206-8930',
    phoneHref: 'tel:+15032068930',
    email: 'admissions@arcadiaretirement.com',
    emailHref: 'mailto:admissions@arcadiaretirement.com',
    mapHref: 'https://maps.google.com/?q=13031+SE+Foster+Road+Portland+OR+97236',
    href: '/portland',
  },
  {
    name: 'Arcadia Lookout Ridge',
    location: 'Washougal, Washington',
    address: '2300 W 9th Street',
    cityState: 'Washougal, WA 98671',
    phone: '(503) 206-8930',
    phoneHref: 'tel:+15032068930',
    email: 'admissions@arcadiaretirement.com',
    emailHref: 'mailto:admissions@arcadiaretirement.com',
    mapHref: 'https://maps.google.com/?q=2300+W+9th+Street+Washougal+WA+98671',
    href: '/washougal',
  },
]

export default function ContactUsPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/images/230819.Arcadia.js-220-scaled.jpg"
          className="w-full h-[500px] md:h-[640px] object-cover object-center"
          alt="Contact Arcadia Senior Living"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#2d5a5c]/50 to-[#2d5a5c]/92" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-14">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[11px] uppercase tracking-[0.5em] text-white/60 mb-4">We&apos;re Here to Help</p>
            <h1 className="font-serif text-5xl md:text-[3.75rem] font-light text-white leading-tight">
              Contact Us
            </h1>
            <div className="w-14 h-px bg-white/30 mt-6" />
          </div>
        </div>
      </section>

      {/* ── COMMUNITY CONTACT CARDS ── */}
      <section className="bg-[#f5f5f5] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-3">Our Locations</p>
            <h2 className="font-serif text-3xl font-light text-[#1a1a1a]">Find Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {communities.map((c) => (
              <div key={c.name} className="bg-white overflow-hidden">

                {/* Dark teal header */}
                <div className="bg-[#2d5a5c] p-6">
                  <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">{c.location}</p>
                  <h3 className="font-serif text-xl font-light text-white">{c.name}</h3>
                </div>

                {/* Contact details */}
                <div className="p-6 space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <span className="text-[#4a7c7e] mt-0.5 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[#555] text-sm leading-relaxed">{c.address}</p>
                      <p className="text-[#555] text-sm">{c.cityState}</p>
                      <a
                        href={c.mapHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4a7c7e] text-xs uppercase tracking-widest hover:underline mt-1 block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#4a7c7e] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <a
                      href={c.phoneHref}
                      className="text-[#555] text-sm hover:text-[#4a7c7e] transition-colors"
                    >
                      {c.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#4a7c7e] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <a
                      href={c.emailHref}
                      className="text-[#555] text-sm hover:text-[#4a7c7e] transition-colors break-all"
                    >
                      {c.email}
                    </a>
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <a
                      href={c.href}
                      className="text-[#4a7c7e] text-xs font-medium uppercase tracking-widest hover:underline"
                    >
                      View Community Page →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form inside the middle section */}
          <div className="bg-white p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-3 text-center">Send a Message</p>
              <h3 className="font-serif text-3xl font-light text-[#1a1a1a] text-center mb-2">
                We&apos;d Love to Hear From You
              </h3>
              <div className="w-10 h-0.5 bg-[#4a7c7e] mx-auto mb-8" />
              <ContactForm />
            </div>
          </div>

        </div>
      </section>


    </main>
  )
}
