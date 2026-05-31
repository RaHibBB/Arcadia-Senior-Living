import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Communities - Arcadia Senior Living Communities',
  description:
    'Our Senior Living Communities — At Arcadia Senior Living, you can expect not only exceptional care but a supportive setting where purpose and fulfillment are found.',
}

export default function OurCommunitiesPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/images/community-1.jpg"
          className="w-full h-[500px] md:h-[640px] object-cover object-center"
          alt="Arcadia Senior Living Communities"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#2d5a5c]/50 to-[#2d5a5c]/92" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-14">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[11px] uppercase tracking-[0.5em] text-white/60 mb-4">Oregon &amp; Washington</p>
            <h1 className="font-serif text-5xl md:text-[3.75rem] font-light text-white leading-tight">
              Our Communities
            </h1>
            <div className="w-14 h-px bg-white/30 mt-6" />
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[820px] mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-4">Where to Find Us</p>
          <h2 className="font-serif text-4xl md:text-[2.6rem] font-light text-[#1a1a1a] leading-snug mb-5">
            Our Senior Living Communities
          </h2>
          <div className="w-10 h-0.5 bg-[#4a7c7e] mx-auto mb-7" />
          <p className="text-[#555] text-lg leading-relaxed">
            At Arcadia Senior Living, you can expect not only exceptional care but a supportive setting where
            purpose and fulfillment are found.
          </p>
        </div>
      </section>

      {/* ── COMMUNITY CARDS ── */}
      <section className="bg-[#2d5a5c] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-3">Oregon &amp; Washington</p>
            <h2 className="font-serif text-3xl font-light text-white">Explore Our Locations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Portland */}
            <div className="bg-white overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src="/images/portland-exterior.jpg"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Arcadia Senior Living Portland Oregon"
                />
              </div>
              <div className="p-8 border-b-2 border-transparent group-hover:border-[#4a7c7e] transition-colors duration-300">
                <p className="text-[10px] uppercase tracking-widest text-[#4a7c7e] mb-2">Portland, Oregon</p>
                <h3 className="font-serif text-2xl font-light text-[#1a1a1a] mb-4">
                  Arcadia Senior Living
                </h3>
                <p className="text-[#777] text-base leading-relaxed mb-6">
                  Nestled in the heart of Portland, Arcadia offers assisted living and respite care in private
                  rooms, surrounded by evergreens, mountain views, and the vibrant Portland spirit.
                </p>
                <a
                  href="/portland"
                  className="text-[#4a7c7e] text-xs font-medium uppercase tracking-widest hover:underline inline-flex items-center gap-1"
                >
                  Go to Arcadia Portland →
                </a>
              </div>
            </div>

            {/* Washougal */}
            <div className="bg-white overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src="/images/washougal-exterior.png"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Arcadia Lookout Ridge Washougal Washington"
                />
              </div>
              <div className="p-8 border-b-2 border-transparent group-hover:border-[#4a7c7e] transition-colors duration-300">
                <p className="text-[10px] uppercase tracking-widest text-[#4a7c7e] mb-2">Washougal, Washington</p>
                <h3 className="font-serif text-2xl font-light text-[#1a1a1a] mb-4">
                  Arcadia Lookout Ridge
                </h3>
                <p className="text-[#777] text-base leading-relaxed mb-6">
                  Perched on a hill overlooking the Columbia Gorge, Arcadia Lookout Ridge provides assisted
                  living and respite care in a peaceful, nature-inspired setting with breathtaking views.
                </p>
                <a
                  href="/washougal"
                  className="text-[#4a7c7e] text-xs font-medium uppercase tracking-widest hover:underline inline-flex items-center gap-1"
                >
                  Go to Arcadia Washougal →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
