import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Respite Care - Arcadia Senior Living Communities',
  description:
    'Respite Care at Arcadia Senior Living gives families peace of mind and seniors a welcoming place to stay. Short-term support with compassionate care, engaging lifestyle, and warm community.',
  alternates: {
    canonical: 'https://arcadiaretirement.com/services/respite-care',
  },
  openGraph: {
    title: 'Respite Care - Arcadia Senior Living Communities',
    description:
      'Respite Care at Arcadia Senior Living gives families peace of mind and seniors a welcoming place to stay.',
    url: 'https://arcadiaretirement.com/services/respite-care',
    siteName: 'Arcadia Senior Living',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/respite-care-hero.jpg', width: 1200, height: 630, alt: 'Respite Care at Arcadia Senior Living' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Respite Care - Arcadia Senior Living Communities',
    description: 'Respite Care at Arcadia — peace of mind for families, welcoming stays for seniors.',
    images: ['/images/respite-care-hero.jpg'],
  },
}

const cards = [
  {
    img: '/images/assisted-living.jpg',
    title: 'Wellness At The Core',
    desc: 'From personalized care plans to engaging activities, we place wellness at the heart of daily life, supporting mind, body, and spirit every step of the way.',
    href: '/why-arcadia/#wellness',
  },
  {
    img: '/images/community-1.jpg',
    title: 'Our Philosophy of Care',
    desc: 'We believe senior living should feel like home, built on dignity, respect, and compassion, where every resident is known and genuinely cared for.',
    href: '/why-arcadia/#philosophy',
  },
  {
    img: '/images/respite-care.jpg',
    title: 'Community Connected',
    desc: 'Arcadia fosters belonging with vibrant events, meaningful relationships, and strong ties to the local community that make life richer and more fulfilling.',
    href: '/why-arcadia/#community',
  },
]

const communityCards = [
  {
    location: 'Portland, Oregon',
    name: 'Arcadia Senior Living',
    body: 'Nestled in the heart of Portland, Arcadia offers assisted living and respite care in private rooms, surrounded by evergreens, mountain views, and the vibrant Portland spirit.',
    href: '/portland',
  },
  {
    location: 'Washougal, Washington',
    name: 'Arcadia Lookout Ridge',
    body: 'Perched on a hill overlooking the Columbia Gorge, Arcadia Lookout Ridge provides assisted living and respite care in a peaceful, nature-inspired setting with breathtaking views.',
    href: '/washougal',
  },
]

export default function RespiteCarePage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/images/230819.Arcadia.js-220-scaled.jpg"
          className="w-full h-[500px] md:h-[640px] object-cover object-center"
          alt="Respite Care at Arcadia Senior Living"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#2d5a5c]/50 to-[#2d5a5c]/92" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-14">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[11px] uppercase tracking-[0.5em] text-white/60 mb-4">Our Services</p>
            <h1 className="font-serif text-5xl md:text-[3.75rem] font-light text-white leading-tight">
              Respite Care
            </h1>
            <div className="w-14 h-px bg-white/30 mt-6" />
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-4">Short-Term Stays</p>
              <h2 className="font-serif text-4xl md:text-[2.6rem] font-light text-[#1a1a1a] leading-snug mb-7">
                Short-Term Support with<br />Lasting Comfort
              </h2>
              <p className="text-[#555] text-lg leading-relaxed">
                At Arcadia Senior Living Communities, Respite Care gives families peace of mind and seniors a
                welcoming place to stay — whether for a few days or a few weeks. Designed to provide relief for
                caregivers and support for older adults, respite stays offer the same compassionate care, engaging
                lifestyle, and warm community that define Arcadia.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/images/respite-care-hero.jpg"
                className="w-full h-[420px] object-cover"
                alt="Respite care community at Arcadia"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#4a7c7e]/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#2d5a5c]/[0.08] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="bg-[#2d5a5c] py-20 md:py-24">
        <div className="max-w-[860px] mx-auto px-6 text-center">

          <img
            src="/images/logo-box.png"
            className="h-12 w-auto mx-auto mb-10 opacity-30"
            alt=""
            aria-hidden="true"
          />

          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light italic">
            &ldquo;Every respite guest receives thoughtful, individualized assistance — from medication management
            and mobility support to social activities and meaningful connections. Whether recovering from an illness,
            giving a primary caregiver time to rest, or exploring what life at Arcadia is like, each stay is
            designed to be safe, comfortable, and{' '}
            <a
              href="/why-arcadia"
              className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white not-italic transition-colors duration-200"
            >
              truly enriching
            </a>
            .&rdquo;
          </p>

          <div className="w-12 h-px bg-white/20 mx-auto mt-10" />
        </div>
      </section>

      {/* ── CARE YOU CAN COUNT ON ── */}
      <section className="bg-[#f5f5f5] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 lg:gap-20 items-start">

            {/* Portrait image */}
            <div className="relative">
              <img
                src="/images/respite-care-staff.jpg"
                className="w-full h-[520px] object-cover object-top"
                alt="Arcadia staff member caring for a respite guest"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#2d5a5c]/10 -z-10" />
            </div>

            {/* Text */}
            <div className="space-y-7 lg:pt-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-4">Our Approach</p>
                <h2 className="font-serif text-4xl font-light text-[#1a1a1a] leading-snug mb-6">
                  Care You Can<br />Count On
                </h2>
              </div>

              <p className="text-[#555] text-lg leading-relaxed">
                Trust is at the core of our approach. We take the time to listen to families, understand
                preferences, and tailor support to meet each guest&apos;s unique needs. Our dedicated staff are
                chosen for their compassion and commitment, ensuring every respite stay feels both supportive
                and welcoming.
              </p>

              <div className="pl-5 border-l-2 border-[#4a7c7e]">
                <p className="text-[#555] text-lg leading-relaxed">
                  <span className="font-semibold text-[#1a1a1a]">At Arcadia, Respite Care is more than a temporary stay.</span>{' '}
                  It&apos;s an opportunity for seniors to experience the comfort of community, the reassurance of
                  professional care, and the joy of belonging — all within an environment that feels as warm and
                  familiar as home.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW IT SHOULD FEEL ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[820px] mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-4">Our Promise</p>
          <h2 className="font-serif text-4xl md:text-[2.6rem] font-light text-[#1a1a1a] leading-snug mb-5">
            How Respite Care Should Feel
          </h2>
          <div className="w-10 h-0.5 bg-[#4a7c7e] mx-auto mb-7" />
          <p className="text-[#555] text-lg leading-relaxed">
            At Arcadia, Respite Care is compassionate, personalized, and designed with purpose. With wellness at
            the core, individualized daily support, and meaningful connections, we provide a safe and welcoming
            environment that truly feels like home — even for a short stay.
          </p>
        </div>
      </section>

      {/* ── THREE CARDS ── */}
      <section className="bg-[#f5f5f5] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div key={card.title} className="bg-white overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={card.img}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={card.title}
                  />
                </div>
                <div className="p-6 border-b-2 border-transparent group-hover:border-[#4a7c7e] transition-colors duration-300">
                  <h3 className="font-serif text-xl font-light text-[#1a1a1a] mb-3">{card.title}</h3>
                  <p className="text-[#777] text-lg leading-relaxed mb-5">{card.desc}</p>
                  <a
                    href={card.href}
                    className="text-[#4a7c7e] text-xs font-medium uppercase tracking-widest hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITIES ── */}
      <section className="bg-[#2d5a5c] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-3">Where to Find Us</p>
            <h2 className="font-serif text-3xl font-light text-white">Our Communities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Map */}
            <div className="flex flex-col items-center justify-center bg-[#234849] p-10 text-center">
              <img
                src="/images/map-oregon-washington.png"
                className="w-full max-w-[155px] mb-6 opacity-90"
                alt="Arcadia communities in Oregon and Washington"
              />
              <p className="text-xs uppercase tracking-widest text-white/45 mb-5">
                Oregon &amp; Washington
              </p>
              <a
                href="/our-communities"
                className="text-white text-xs font-medium uppercase tracking-widest border-b border-white/30 hover:border-white transition-colors duration-200 pb-0.5"
              >
                All Our Communities →
              </a>
            </div>

            {/* Community cards */}
            {communityCards.map((c) => (
              <div key={c.name} className="bg-[#234849] p-8 flex flex-col">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1.5">{c.location}</p>
                <h3 className="font-serif text-xl font-light text-white mb-4">{c.name}</h3>
                <p className="text-white/55 text-lg leading-relaxed mb-7 flex-1">{c.body}</p>
                <a
                  href={c.href}
                  className="text-white text-xs font-medium uppercase tracking-widest border-b border-white/30 hover:border-white transition-colors duration-200 self-start pb-0.5"
                >
                  Visit Community Page →
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}
