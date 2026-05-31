import type { Metadata } from 'next'
import Image from 'next/image'
import { Activity, Brain, Users, Heart } from 'lucide-react'
import CommunityCarousel from '@/components/community-carousel'

export const metadata: Metadata = {
  title: 'Why Arcadia Senior Living | Care, Purpose & Happiness for Seniors',
  description:
    'Learn why families choose Arcadia Senior Living. Our philosophy of Care, Purpose, and Happiness guides everything we do — from whole-person wellness to keeping seniors connected to their communities.',
  alternates: {
    canonical: 'https://arcadiaretirement.com/why-arcadia',
  },
  openGraph: {
    title: 'Why Arcadia Senior Living | Care, Purpose & Happiness for Seniors',
    description:
      'Learn why families choose Arcadia Senior Living. Our philosophy of Care, Purpose, and Happiness guides everything we do — from whole-person wellness to keeping seniors connected to their communities.',
    url: 'https://arcadiaretirement.com/why-arcadia',
    siteName: 'Arcadia Senior Living',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/staff.jpg', width: 1200, height: 630, alt: 'Why Arcadia Senior Living' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Arcadia Senior Living | Care, Purpose & Happiness for Seniors',
    description:
      'Learn why families choose Arcadia Senior Living. Our philosophy of Care, Purpose, and Happiness guides everything we do.',
    images: ['/images/staff.jpg'],
  },
}

const pillars = [
  {
    label: 'Care',
    body: 'Compassionate support that honors dignity and independence in every moment of daily life.',
  },
  {
    label: 'Purpose',
    body: 'Meaningful activities and programs that enrich lives and inspire fulfillment.',
  },
  {
    label: 'Happiness',
    body: 'A welcoming environment where seniors feel genuinely safe, supported, and at home.',
  },
]

const wellnessItems = [
  {
    Icon: Activity,
    title: 'Physical Wellness',
    body: 'Daily support, fitness opportunities, and nutritious chef-crafted dining.',
  },
  {
    Icon: Brain,
    title: 'Mental Wellness',
    body: 'Activities that engage memory, curiosity, and lifelong learning.',
  },
  {
    Icon: Users,
    title: 'Social Wellness',
    body: 'Events and gatherings that foster deep friendships and lasting connections.',
  },
  {
    Icon: Heart,
    title: 'Spiritual Wellness',
    body: 'Respect for personal beliefs, with space and support for reflection, faith, and purpose.',
  },
]

const communities = [
  {
    location: 'Portland, Oregon',
    name: 'Arcadia Senior Living',
    body: 'Nestled in the heart of Portland, offering assisted living and respite care surrounded by evergreens and mountain views.',
    href: '/portland',
  },
  {
    location: 'Washougal, Washington',
    name: 'Arcadia Lookout Ridge',
    body: 'Perched on a hill overlooking the Columbia Gorge, providing care in a peaceful, nature-inspired setting with breathtaking views.',
    href: '/washougal',
  },
]

export default function WhyArcadiaPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative w-full bg-[#2d5a5c] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{ backgroundImage: "url('/images/staff.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="relative z-10 py-32 md:py-44 text-center px-6">
          <p className="text-[11px] uppercase tracking-[0.5em] text-white/80 mb-6">Our Promise</p>
          <h1 className="font-serif text-5xl md:text-[3.75rem] font-light text-white leading-[1.1] max-w-3xl mx-auto">
            Where Seniors Find Care,<br />Purpose, and Happiness
          </h1>
          <div className="w-14 h-px bg-white/40 mx-auto my-8" />
          <p className="text-white/85 text-lg font-light max-w-md mx-auto leading-relaxed tracking-wide">
            Discover what makes Arcadia a place seniors are proud to call home.
          </p>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section id="philosophy" className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-14 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-4">Our Foundation</p>
              <h2 className="font-serif text-4xl md:text-[2.6rem] font-light text-[#1a1a1a] leading-snug mb-6">
                Our Philosophy of Care
              </h2>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {pillars.map(({ label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 bg-[#4a7c7e]/10 text-[#4a7c7e] text-sm px-3.5 py-1.5"
                  >
                    <span className="text-xs font-semibold">✓</span>
                    {label}
                  </span>
                ))}
              </div>

              <p className="text-[#555] text-lg leading-relaxed mb-8">
                At Arcadia Senior Living Communities, everything we do is guided by our philosophy of Care, Purpose,
                and Happiness. These three pillars form the foundation of how we serve seniors and their families.
              </p>

              <div className="space-y-5 mb-8">
                {pillars.map(({ label, body }) => (
                  <div key={label} className="pl-5 border-l-2 border-[#4a7c7e]">
                    <p className="text-[#333] text-lg leading-relaxed">
                      <span className="font-semibold text-[#1a1a1a]">{label}</span>
                      {' '}—{' '}
                      <span className="text-[#555]">{body}</span>
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[#777] text-lg leading-relaxed italic">
                &ldquo;This philosophy isn&apos;t just words — it&apos;s the heartbeat of our communities,
                reflected in every service, interaction, and smile.&rdquo;
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative w-full h-[480px]">
                <Image
                  src="/images/assisted-living.jpg"
                  fill
                  className="object-cover"
                  alt="Personalized care at Arcadia Senior Living"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#4a7c7e]/12 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#2d5a5c]/8 -z-10" />
            </div>
          </div>

          {/* Logo divider */}
          <div className="flex items-center gap-6 mt-16 md:mt-20">
            <div className="flex-1 h-px bg-gray-200" />
            <Image
              src="/images/logo-box.png"
              width={56}
              height={56}
              className="h-14 w-auto flex-shrink-0 opacity-75"
              alt="Arcadia Senior Living"
            />
            <div className="flex-1 h-px bg-gray-200" />
          </div>
        </div>
      </section>

      {/* ── WELLNESS ── */}
      <section id="wellness" className="bg-[#f5f5f5] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-14">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-4">Whole-Person Approach</p>
            <h2 className="font-serif text-4xl font-light text-[#1a1a1a] mb-4">
              Wellness at the Core
            </h2>
            <p className="text-[#555] text-lg leading-relaxed">
              Aging well means caring for more than physical needs — it&apos;s about nurturing the whole person. Arcadia
              places wellness at the center of our approach, providing opportunities for residents to live healthier,
              more fulfilling lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {wellnessItems.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-white p-7 flex gap-5 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 bg-[#2d5a5c] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-1.5 text-[15px] tracking-wide">{title}</h3>
                  <p className="text-[#777] text-lg leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY CONNECTED ── */}
      <section id="community" className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">

            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-4">Our Neighborhoods</p>
              <h2 className="font-serif text-4xl font-light text-[#1a1a1a] mb-3">
                Community<br />Connected
              </h2>
              <div className="w-10 h-0.5 bg-[#4a7c7e] mb-5" />
              <h3 className="font-serif text-xl font-light text-[#555] mb-5 leading-snug">
                Staying Connected to What Matters Most
              </h3>
              <p className="text-[#555] text-lg leading-relaxed">
                Arcadia believes that seniors thrive when they remain connected — to their families, friends, and the
                neighborhoods they&apos;ve called home. That&apos;s why our communities are designed to be open,
                welcoming, and part of the fabric of local life.
              </p>
            </div>

            <CommunityCarousel />
          </div>
        </div>
      </section>

      {/* ── COMMUNITIES ── */}
      <section className="bg-[#2d5a5c] py-20 md:py-24">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-3">Where to Find Us</p>
            <h2 className="font-serif text-3xl font-light text-white">Our Communities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="flex flex-col items-center justify-center bg-[#234849] p-10 text-center">
              <Image
                src="/images/map-oregon-washington.png"
                width={155}
                height={195}
                className="w-full max-w-[155px] h-auto mb-6 opacity-90"
                alt="Oregon and Washington communities"
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

            {communities.map((c) => (
              <div key={c.name} className="bg-[#234849] p-8 flex flex-col">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1.5">{c.location}</p>
                <h3 className="font-serif text-xl font-light text-white mb-4">{c.name}</h3>
                <p className="text-white/55 text-lg leading-relaxed mb-7 flex-1">{c.body}</p>
                <a
                  href={c.href}
                  className="text-white text-xs font-medium uppercase tracking-widest border-b border-white/30 hover:border-white transition-colors duration-200 self-start pb-0.5"
                >
                  Visit Community Website →
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}
