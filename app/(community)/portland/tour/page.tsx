import type { Metadata } from 'next'
import TourSlideshow from './TourSlideshow'
import TourForm from './TourForm'

export const metadata: Metadata = {
  title: 'Schedule a Tour | Arcadia Senior Living Portland',
  description: 'Come see Arcadia Senior Living Portland for yourself. Schedule a personal tour and experience our warm community, compassionate care, and vibrant lifestyle.',
  alternates: { canonical: 'https://arcadiaretirement.com/portland/tour' },
  openGraph: {
    title: 'Schedule a Tour | Arcadia Senior Living Portland',
    description: 'Come see Arcadia Senior Living Portland for yourself. Schedule a personal tour today.',
    images: [{ url: '/images/portland-hero.jpg', width: 1200, height: 630 }],
  },
}

export default function TourPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* ── LEFT: community panel ── */}
      <div className="relative bg-[#2d5a5c] flex flex-col min-h-[520px] lg:min-h-screen">

        {/* Crossfade photo slideshow fills the whole left panel */}
        <TourSlideshow />

        {/* Dark gradient overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a3c] via-[#2d5a5c]/70 to-[#2d5a5c]/30" />

        {/* Content on top of slideshow */}
        <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12 lg:p-14">

          {/* Top */}
          <div>
            <p className="text-white/60 text-xs uppercase tracking-[0.4em] mb-4">Portland, Oregon</p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
              Come see us<br />for yourself!
            </h1>
            <div className="w-12 h-0.5 bg-[#c06448]" />
          </div>

          {/* Bottom info */}
          <div className="space-y-6">
            {/* Phone */}
            <div>
              <a
                href="tel:+15032068930"
                className="font-serif text-3xl md:text-4xl text-white hover:text-white/80 transition-colors"
              >
                (503) 206-8930
              </a>
            </div>

            {/* Address */}
            <a
              href="https://maps.app.goo.gl/xUKjKEMHAnT2w2HJ6"
              target="_blank" rel="noopener noreferrer"
              className="block text-base text-white/75 hover:text-white transition-colors uppercase tracking-widest"
            >
              13031 SE Foster Rd, Portland, OR 97236
            </a>

            {/* Testimonial */}
            <div className="border-l-2 border-[#c06448] pl-5">
              <p className="text-white/80 text-base italic leading-relaxed mb-3">
                "The facility is terrific, the residents seem genuinely happy and well cared for, and I know there is a tremendous sense of love for their residents. Thank you Arcadia."
              </p>
              <p className="text-white font-semibold text-sm">Scott Greenwood</p>
              <p className="text-white/55 text-xs uppercase tracking-widest">Child of Resident</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── RIGHT: form panel ── */}
      <div className="bg-white flex items-center justify-center p-8 md:p-12 lg:p-14">
        <div className="w-full max-w-lg">

          {/* Heading */}
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-2">Schedule Your Visit</p>
            <h2 className="font-serif text-2xl md:text-4xl text-[#1a1a1a] leading-snug">
              Request a tour at Arcadia in Portland
            </h2>
          </div>

          <TourForm />

          {/* Footer note */}
          <p className="text-xs text-[#aaa] mt-6 text-center leading-relaxed">
            Or call us directly at{' '}
            <a href="tel:+15032068930" className="text-[#2d5a5c] hover:underline">(503) 206-8930</a>
            {' '}— we're available 24/7.
          </p>

        </div>
      </div>

    </main>
  )
}

