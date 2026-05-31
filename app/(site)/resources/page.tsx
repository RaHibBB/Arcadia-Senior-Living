import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Resources - Arcadia Senior Living Communities',
  description: 'Senior Living Insights, Resources & News from Arcadia Senior Living Communities.',
}

export default function ResourcesPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/images/hero.jpg"
          className="w-full h-[500px] md:h-[640px] object-cover object-center"
          alt="Arcadia Senior Living Resources"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#2d5a5c]/50 to-[#2d5a5c]/92" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-14">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[11px] uppercase tracking-[0.5em] text-white/60 mb-4">Insights &amp; Updates</p>
            <h1 className="font-serif text-5xl md:text-[3.75rem] font-light text-white leading-tight">
              Resources &amp; News
            </h1>
            <div className="w-14 h-px bg-white/30 mt-6" />
          </div>
        </div>
      </section>

      {/* ── POSTS GRID ── */}
      <section className="bg-[#f5f5f5] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.slug} className="bg-white overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={post.title}
                  />
                </div>
                <div className="p-6 border-b-2 border-transparent group-hover:border-[#4a7c7e] transition-colors duration-300">
                  <p className="text-[10px] uppercase tracking-widest text-[#4a7c7e] mb-2">{post.category}</p>
                  <Link
                    href={`/resources/${post.slug}`}
                    className="block font-serif text-lg font-light text-[#1a1a1a] leading-snug mb-4 hover:text-[#4a7c7e] transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                  <div className="flex items-center justify-between">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4a7c7e] text-xs font-medium uppercase tracking-widest hover:underline"
                    >
                      Read Article →
                    </a>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
