import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from './posts'

export const metadata: Metadata = {
  title: "What's Happening at Arcadia Washougal | News & Events",
  description: 'Stay up to date with the latest news, events, and happenings at Arcadia Senior Living Lookout Ridge in Washougal, WA — from seasonal celebrations to community open houses.',
  alternates: { canonical: 'https://arcadiaretirement.com/washougal/news-events' },
  openGraph: {
    title: "What's Happening at Arcadia Washougal | News & Events",
    description: 'Latest news, events, and happenings at Arcadia Senior Living Lookout Ridge in Washougal, WA.',
    images: [{ url: '/images/washougal/washougal-event-1.jpg', width: 1200, height: 630 }],
  },
}

export default function WashougalNewsEventsPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative min-h-[280px] md:min-h-[340px] flex items-center bg-[#2d5a5c] overflow-hidden">
        <img
          src="/images/washougal/washougal-tea.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          alt="" aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#2d5a5c]/80" />
        <div className="relative z-10 w-full text-center px-6 py-16">
          <p className="text-white/65 text-sm uppercase tracking-[0.4em] mb-3">Arcadia Senior Living Washougal</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            What's Happening At Arcadia
          </h1>
          <div className="w-14 h-0.5 bg-[#c06448] mx-auto" />
        </div>
      </section>

      {/* ── POST GRID ── */}
      <section className="bg-[#f9f9f9] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.slug} className="bg-white shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300">

                {/* Image */}
                <Link href={`/washougal/news-events/${post.slug}`} className="block overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-56 object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c06448] shrink-0" />
                    <time className="text-xs text-[#999] uppercase tracking-widest">{post.date}</time>
                  </div>
                  <h2 className="font-serif text-lg font-light text-[#1a1a1a] leading-snug line-clamp-3">
                    <Link href={`/washougal/news-events/${post.slug}`} className="hover:text-[#2d5a5c] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-[#666] text-sm leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/washougal/news-events/${post.slug}`}
                    className="self-start mt-auto inline-flex items-center gap-2 border-2 border-[#D6A156] text-[#555] hover:bg-[#D6A156] hover:text-white text-sm font-medium px-4 py-2 transition-colors duration-200"
                  >
                    Read more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-[#2d5a5c] py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white mb-1">Want to experience Arcadia firsthand?</h3>
            <p className="text-white/65 text-base">Schedule a personal tour and see our community for yourself.</p>
          </div>
          <Link href="/washougal/tour"
            className="shrink-0 inline-flex items-center gap-2 bg-[#c06448] hover:bg-[#a85038] text-white font-semibold px-7 py-3.5 text-base transition-colors">
            Schedule a Tour
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}
