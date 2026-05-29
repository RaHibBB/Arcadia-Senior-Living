import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Arcadia Senior Living | Assisted Living & Respite Care in Oregon & Washington',
  description:
    'Arcadia Senior Living offers compassionate assisted living and respite care in Portland, OR and Washougal, WA. Locally owned, guided by Care, Purpose, and Happiness.',
  alternates: {
    canonical: 'https://arcadiaretirement.com',
  },
  openGraph: {
    title: 'Arcadia Senior Living | Assisted Living & Respite Care',
    description:
      'Arcadia Senior Living offers compassionate assisted living and respite care in Portland, OR and Washougal, WA. Locally owned, guided by Care, Purpose, and Happiness.',
    url: 'https://arcadiaretirement.com',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Arcadia Senior Living' }],
  },
  twitter: {
    images: ['/images/hero.jpg'],
  },
}

export default function HomePage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative w-full h-[580px] md:h-[700px] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          fill
          priority
          className="object-cover object-center"
          alt="Arcadia Senior Living community"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#2d5a5c]/50 to-[#2d5a5c]/92" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="tracking-[0.55em] uppercase text-sm font-light text-white/90 mb-5">
            Welcome To
          </p>
          <h1 className="font-serif text-6xl md:text-[5.5rem] font-light leading-[1.08] mb-5">
            Arcadia<br />Senior Living
          </h1>
          <div className="w-12 h-px bg-white/50 mx-auto mb-5" />
          <p className="tracking-[0.22em] uppercase text-sm font-light text-white/90 mb-10">
            Locally Owned &amp; Operated Communities in Oregon &amp; Washington
          </p>
          <a
            href="/our-communities"
            className="border border-white/70 text-white text-sm font-light uppercase tracking-[0.22em] px-9 py-3.5 hover:bg-white hover:text-[#2d5a5c] transition-all duration-300"
          >
            Discover Our Communities
          </a>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white border-b border-gray-100 py-14 md:py-16">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { stat: '2', label: 'Communities' },
              { stat: '24 / 7', label: 'Dedicated Support' },
              { stat: '100%', label: 'Locally Owned' },
              { stat: 'OR + WA', label: 'Pacific Northwest' },
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className={`text-center py-4 ${i < arr.length - 1 ? 'border-r border-gray-100' : ''}`}
              >
                <div className="font-serif text-4xl md:text-5xl font-light text-[#2d5a5c] mb-2">{item.stat}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGE ── */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-[#4a7c7e] mb-4">Who We Are</p>
          <h2 className="font-serif text-4xl md:text-[2.6rem] font-light text-[#1a1a1a] leading-snug mb-5">
            The Arcadia Senior Living Advantage
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto mb-16">
            Locally owned and boutique in spirit, Arcadia offers personalized care, chef-crafted dining,
            and endless opportunities to discover joy, purpose, and community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { title: 'Care', body: 'Personalized attention woven into every moment of daily life' },
              { title: 'Purpose', body: 'Meaningful programs and activities that inspire every day' },
              { title: 'Happiness', body: 'A vibrant community where genuine joy is found each day' },
            ].map((p) => (
              <div key={p.title} className="py-8 md:py-2 md:px-10">
                <h3 className="font-serif text-xl font-light text-[#1a1a1a] mb-3">{p.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="mb-12 max-w-xl">
            <h2 className="font-serif text-4xl md:text-[2.75rem] font-light text-[#1a1a1a] mb-4">
              The Way Senior Living<br />Should Feel
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              At Arcadia, senior living is warm, personal, and filled with purpose — every detail thoughtfully
              designed so residents feel at home, supported, and truly alive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: '/images/assisted-living.jpg', title: 'Wellness At The Core', body: 'From personalized care plans to engaging activities, wellness is woven into every aspect of life at Arcadia.', href: '/why-arcadia/#wellness' },
              { img: '/images/staff.jpg', title: 'Our Philosophy of Care', body: 'We believe senior living should feel like home — warm, dignified, and filled with genuine connection and belonging.', href: '/why-arcadia/#philosophy' },
              { img: '/images/respite-care.jpg', title: 'Community Connected', body: 'Arcadia fosters belonging with vibrant events, shared spaces, and a culture of kindness and inclusion.', href: '/why-arcadia/#community' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.img}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={item.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 border-b-2 border-transparent group-hover:border-[#4a7c7e] transition-colors duration-300">
                  <h3 className="font-serif text-xl font-light text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-4">{item.body}</p>
                  <a href={item.href} className="text-[#4a7c7e] text-xs font-medium uppercase tracking-widest hover:underline">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-4xl md:text-[2.75rem] font-light text-[#1a1a1a] mb-4">
              Life in an Arcadia<br />Senior Living Community
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              At Arcadia, care is more than support — it is hospitality, warmth, and connection woven into
              everyday life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { img: '/images/assisted-living.jpg', title: 'Assisted Living', body: 'Assisted living at Arcadia means personalized support that empowers independence while nurturing connection, dignity, and joy in daily life.', href: '/services/assisted-living' },
              { img: '/images/respite-care.jpg', title: 'Respite Care', body: 'Our respite care provides short-term support in a welcoming community, offering families peace of mind and residents comfort, care, and connection.', href: '/services/respite-care' },
            ].map((s) => (
              <div key={s.title} className="group">
                <div className="relative h-72 overflow-hidden mb-5">
                  <Image
                    src={s.img}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={s.title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="font-serif text-2xl font-light text-[#1a1a1a] mb-2">{s.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">{s.body}</p>
                <a href={s.href} className="text-[#4a7c7e] text-xs font-medium uppercase tracking-widest hover:underline">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITIES ── */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <h2 className="font-serif text-4xl md:text-[2.75rem] font-light text-[#1a1a1a]">Our Communities</h2>
            <a href="/our-communities" className="text-[#4a7c7e] text-xs font-medium uppercase tracking-widest hover:underline flex-shrink-0">
              View All Communities →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 p-8 flex flex-col items-center justify-center">
              <Image
                src="/images/map-oregon-washington.png"
                width={175}
                height={220}
                className="w-full max-w-[175px] h-auto"
                alt="Oregon and Washington map"
              />
              <p className="text-xs uppercase tracking-widest text-gray-400 mt-5 text-center">
                Oregon &amp; Washington
              </p>
            </div>

            {[
              { location: 'Portland, Oregon', name: 'Arcadia Senior Living', body: 'Nestled in the heart of Portland, offering assisted living and respite care surrounded by evergreens and mountain views.', href: '/portland' },
              { location: 'Washougal, Washington', name: 'Arcadia Lookout Ridge', body: 'Perched on a hill overlooking the Columbia Gorge, providing care in a peaceful, nature-inspired setting with breathtaking views.', href: '/washougal' },
            ].map((c) => (
              <div key={c.name} className="bg-white border border-gray-100 overflow-hidden group">
                <div className="bg-[#2d5a5c] group-hover:bg-[#3a6e70] transition-colors duration-300 px-5 py-4">
                  <p className="text-[10px] uppercase tracking-widest text-white/45 mb-1">{c.location}</p>
                  <h3 className="font-light text-lg text-white">{c.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-lg leading-relaxed mb-5">{c.body}</p>
                  <a href={c.href} className="text-[#4a7c7e] text-xs font-medium uppercase tracking-widest hover:underline">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREERS ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">

            <div className="lg:w-[45%]">
              <p className="text-[#4a7c7e] text-xs font-medium uppercase tracking-widest mb-4">Join Us</p>
              <h2 className="font-serif text-4xl md:text-[2.6rem] font-light text-[#1a1a1a] leading-snug mb-5">
                Bring Your Heart &amp;<br />Make an Impact
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Working at Arcadia Senior Living means knowing your work truly matters. Every day, you&apos;ll
                see the impact of your care in the smiles, comfort, and joy of our residents. As a growing,
                locally owned community, we are redefining senior living for both residents and team members.
              </p>
              <a
                href="/careers"
                className="inline-block bg-[#2d5a5c] text-white text-xs font-light uppercase tracking-[0.2em] px-7 py-3.5 hover:bg-[#3a6e70] transition-colors duration-200"
              >
                Join Our Team
              </a>
            </div>

            <div className="relative lg:w-[55%] h-[420px]">
              <Image
                src="/images/careers.jpg"
                fill
                className="object-cover"
                alt="Careers at Arcadia Senior Living"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
