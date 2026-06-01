import type { Metadata } from 'next'
import WashougalTourForm from './WashougalTourForm'
import WashougalTourSlideshow from './WashougalTourSlideshow'

export const metadata: Metadata = {
  title: 'Schedule a Tour | Arcadia Senior Living Washougal, WA',
  description: 'Come see Arcadia Senior Living Lookout Ridge in Washougal, WA for yourself. Schedule a personal tour and experience our warm boutique community, compassionate care, and vibrant lifestyle.',
  alternates: { canonical: 'https://arcadiaretirement.com/washougal/tour' },
  openGraph: {
    title: 'Schedule a Tour | Arcadia Senior Living Washougal',
    description: 'Come see Arcadia Senior Living Lookout Ridge in Washougal, WA. Schedule a personal tour today.',
    images: [{ url: '/images/washougal-exterior.jpg', width: 1200, height: 630 }],
  },
}

export default function WashougalTourPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* ── LEFT: community panel ── */}
      <div className="relative flex flex-col min-h-[520px] lg:min-h-screen overflow-hidden">

        {/* Crossfade slideshow */}
        <WashougalTourSlideshow />

        {/* Layered gradients for depth + readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2426] via-[#1a3a3c]/75 to-[#2d5a5c]/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2426]/40 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-between h-full p-8 md:p-12 lg:p-14 min-h-[520px] lg:min-h-screen">

          {/* Top: logo + headline */}
          <div>
            <img
              src="/images/washougal/washougal-logo.png"
              alt="Arcadia Senior Living Washougal"
              className="h-10 w-auto object-contain mb-10 opacity-95"
            />

            <div className="mb-2">
              <span className="inline-block text-[#c06448] text-xs uppercase tracking-[0.35em] font-medium mb-4">
                Lookout Ridge · Washougal, WA
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15] mb-5">
              Come see Arcadia<br />for yourself
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-[380px] leading-relaxed">
              Our boutique community is best experienced in person. Let us show you what makes Arcadia a place residents truly love to call home.
            </p>

            {/* Care pills */}
            <div className="flex gap-2 mt-7 flex-wrap">
              {['Care', 'Purpose', 'Happiness'].map(word => (
                <span key={word}
                  className="px-3 py-1 border border-white/25 rounded-full text-white/70 text-xs tracking-widest uppercase">
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom: info + testimonial */}
          <div className="space-y-6 mt-auto pt-10">

            {/* Contact info */}
            <div className="space-y-3">
              <a href="tel:+13603351238"
                className="flex items-center gap-3 text-white/75 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#c06448] flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                </div>
                (360) 335-1238
              </a>
              <a href="https://maps.app.goo.gl/m57wfQGeJYyYFKsL6" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/75 text-sm hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#c06448] flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
                  </svg>
                </div>
                2300 W 9th St, Washougal, WA 98671
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Testimonial */}
            <figure>
              <svg className="w-6 h-6 text-[#c06448]/60 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote className="text-white/60 text-sm leading-relaxed italic">
                "The facility is terrific, the residents seem genuinely happy and well cared for, and I know there is a tremendous sense of love for their residents."
              </blockquote>
              <figcaption className="mt-2 text-white/40 text-xs not-italic">
                — Scott Greenwood, Child of resident
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* ── RIGHT: form panel ── */}
      <div className="bg-[#fafaf9] flex flex-col justify-center px-6 py-12 md:px-12 lg:px-14 xl:px-20 lg:py-16">
        <div className="w-full max-w-[440px] mx-auto">

          {/* Form panel header */}
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#c06448] mb-2">Schedule Your Visit</p>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-1">
              Request a tour with Arcadia
            </h2>
            <p className="text-[#888] text-sm">Takes less than 2 minutes. We'll be in touch shortly.</p>
          </div>

          <WashougalTourForm />
        </div>
      </div>

    </main>
  )
}
