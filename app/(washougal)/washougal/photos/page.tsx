import type { Metadata } from 'next'
import PhotoGallery from './PhotoGallery'

export const metadata: Metadata = {
  title: 'Photos | Arcadia Senior Living Washougal, WA',
  description: 'Browse photos of Arcadia Senior Living Lookout Ridge in Washougal, WA — community spaces, resident life, outdoor views, dining, and more.',
  alternates: { canonical: 'https://arcadiaretirement.com/washougal/photos' },
  openGraph: {
    title: 'Photos | Arcadia Senior Living Washougal',
    description: 'See life at Arcadia Senior Living Lookout Ridge in Washougal, WA.',
    images: [{ url: '/images/washougal/gallery/g-01.jpg', width: 1024, height: 684 }],
  },
}

export default function WashougalPhotosPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="relative min-h-[240px] md:min-h-[300px] flex items-center bg-[#2d5a5c] overflow-hidden">
        <img
          src="/images/washougal/gallery/g-01.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="" aria-hidden="true"
        />
        <div className="relative z-10 w-full text-center px-6 py-16">
          <p className="text-white/70 text-sm uppercase tracking-[0.4em] mb-3">Arcadia Senior Living Washougal</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">Photos</h1>
          <p className="text-white/70 text-lg mt-4">Photos are worth a thousand words.</p>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1340px] mx-auto px-4 lg:px-8">
          <PhotoGallery />
        </div>
      </section>

    </main>
  )
}
