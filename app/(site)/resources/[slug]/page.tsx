import { posts, getPostBySlug } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} - Arcadia Senior Living`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const otherPosts = posts.filter(p => p.slug !== post.slug).slice(0, 3)

  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative h-72 overflow-hidden">
        <img
          src={post.image}
          className="absolute inset-0 w-full h-full object-cover"
          alt={post.title}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 w-full bg-[#2d5a5c]/80 px-6 py-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2 block">
              {post.category}
            </span>
            <h1 className="font-serif text-2xl md:text-3xl font-light text-white leading-snug">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">

          {/* Breadcrumb */}
          <nav className="text-xs uppercase tracking-widest text-gray-400 mb-8 flex items-center gap-2">
            <Link href="/resources" className="hover:text-[#4a7c7e] transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-[#4a7c7e]">{post.category}</span>
          </nav>

          <h2 className="font-serif text-3xl font-bold text-[#333] mb-2 leading-snug">
            {post.title}
          </h2>
          <p className="text-gray-400 text-sm mb-8 uppercase tracking-wide">{post.date}</p>

          <div className="border-t border-gray-200 mb-10" />

          {/* Article body */}
          <div
            className="article-body text-[#555] text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-gray-200 mt-12" />
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#4a7c7e] mb-3">Keep Reading</p>
            <h2 className="font-serif text-3xl font-light text-[#1a1a1a]">More Resources</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map(related => (
              <div key={related.slug} className="bg-white overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={related.image}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={related.title}
                  />
                </div>
                <div className="p-6 border-b-2 border-transparent group-hover:border-[#4a7c7e] transition-colors duration-300">
                  <p className="text-[10px] uppercase tracking-widest text-[#4a7c7e] mb-2">
                    {related.category}
                  </p>
                  <Link
                    href={`/resources/${related.slug}`}
                    className="block font-serif text-lg font-light text-[#1a1a1a] leading-snug mb-4 hover:text-[#4a7c7e] transition-colors duration-200"
                  >
                    {related.title}
                  </Link>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/resources/${related.slug}`}
                      className="text-[#4a7c7e] text-xs font-medium uppercase tracking-widest hover:underline"
                    >
                      Read Article →
                    </Link>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">{related.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#2d5a5c] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-4">Get in Touch</p>
          <h2 className="font-serif text-3xl font-light text-white mb-4">
            Ready to Learn More About Arcadia?
          </h2>
          <div className="w-10 h-px bg-white/20 mx-auto mb-6" />
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Contact us today to schedule a tour or speak with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center bg-white text-[#2d5a5c] px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-3 text-sm font-medium uppercase tracking-widest hover:border-white transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
