import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, getPostBySlug } from './posts'

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Arcadia Senior Living Portland`,
    description: post.excerpt,
    alternates: { canonical: `https://arcadiaretirement.com/portland/${slug}` },
    openGraph: { images: [{ url: post.image }] },
  }
}

export default async function PortlandPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Sibling posts (other 2 most recent, excluding current)
  const related = posts.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative min-h-[280px] md:min-h-[340px] flex items-center bg-[#2d5a5c] overflow-hidden">
        <img
          src={post.image}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="" aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d5a5c]/95 via-[#2d5a5c]/80 to-[#2d5a5c]/50" />
        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 lg:px-8 py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest mb-5">
            <Link href="/portland" className="hover:text-white transition-colors">Portland</Link>
            <span>/</span>
            <Link href="/portland/news-events" className="hover:text-white transition-colors">News &amp; Events</Link>
          </nav>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c06448]" />
            <time className="text-white/60 text-sm uppercase tracking-widest">{post.date}</time>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-14 items-start">

            {/* Main article */}
            <article>
              {/* Featured image */}
              <div className="mb-10 overflow-hidden shadow-sm">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Body */}
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <Link
                  href="/portland/news-events"
                  className="inline-flex items-center gap-2 text-[#2d5a5c] hover:text-[#c06448] text-sm font-medium transition-colors group"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Back to News &amp; Events
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28">

              {/* CTA card */}
              <div className="bg-[#2d5a5c] p-6">
                <p className="font-serif text-xl text-white mb-2 leading-snug">
                  Experience Arcadia for yourself
                </p>
                <p className="text-white/65 text-sm leading-relaxed mb-5">
                  Schedule a personal tour and see why families trust Arcadia Senior Living Portland.
                </p>
                <Link href="/portland/tour"
                  className="block text-center bg-[#c06448] hover:bg-[#a85038] text-white font-semibold text-sm px-5 py-3 transition-colors">
                  Schedule a Tour
                </Link>
                <a href="tel:+15032068930"
                  className="block text-center mt-3 text-white/65 hover:text-white text-sm transition-colors">
                  or call (503) 206-8930
                </a>
              </div>

              {/* More posts */}
              {related.length > 0 && (
                <div className="bg-[#f9f9f9] p-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#4a7c7e] mb-4">More News</p>
                  <ul className="space-y-4">
                    {related.map(r => (
                      <li key={r.slug}>
                        <Link href={`/portland/${r.slug}`} className="flex gap-3 group">
                          <img src={r.image} alt={r.imageAlt}
                            className="w-16 h-16 object-cover shrink-0 group-hover:opacity-80 transition-opacity" />
                          <div>
                            <p className="text-xs text-[#999] mb-1">{r.date}</p>
                            <p className="text-sm text-[#333] group-hover:text-[#2d5a5c] leading-snug transition-colors line-clamp-3">
                              {r.title}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/portland/news-events"
                    className="block text-center mt-4 text-xs text-[#4a7c7e] hover:text-[#c06448] uppercase tracking-widest transition-colors">
                    View All Posts →
                  </Link>
                </div>
              )}

            </aside>
          </div>
        </div>
      </section>

    </main>
  )
}
