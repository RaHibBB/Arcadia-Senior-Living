import type { Metadata } from 'next'
import PhotoGallery from './PhotoGallery'

export const metadata: Metadata = {
  title: 'Photos | Arcadia Senior Living Portland',
  description: 'See the people and moments that make Arcadia Senior Living Portland special — happy hours, family dinners, llama and goat visits, seasonal events, and everyday life.',
  alternates: { canonical: 'https://arcadiaretirement.com/portland/photos' },
  openGraph: {
    title: 'Photos | Arcadia Senior Living Portland',
    description: 'See the people and moments that make Arcadia Senior Living Portland special.',
    images: [{ url: '/images/portland-al-rummikub.jpg', width: 1200, height: 630 }],
  },
}

export default function PhotosPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative min-h-[300px] md:min-h-[380px] flex items-center bg-[#2d5a5c] overflow-hidden">
        {/* Background collage hint — three blurred photos */}
        <div className="absolute inset-0 grid grid-cols-3 opacity-20">
          <div className="bg-cover bg-center" style={{ backgroundImage: `url('https://arcadiaretirement.com/portland/wp-content/uploads/sites/4/2025/11/10.17-happy-hour-1.jpg')` }} />
          <div className="bg-cover bg-center" style={{ backgroundImage: `url('https://arcadiaretirement.com/portland/wp-content/uploads/sites/4/2025/11/Goats-11.jpg')` }} />
          <div className="bg-cover bg-center" style={{ backgroundImage: `url('https://arcadiaretirement.com/portland/wp-content/uploads/sites/4/2025/11/llamas-4.jpg')` }} />
        </div>
        <div className="absolute inset-0 bg-[#2d5a5c]/60" />

        <div className="relative z-10 w-full text-center px-6 py-16">
          <p className="text-white/70 text-sm uppercase tracking-[0.4em] mb-4">Arcadia Senior Living Portland</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            The People of Arcadia Portland
          </h1>
          <div className="w-16 h-0.5 bg-[#c06448] mx-auto mb-4" />
          <p className="text-white/75 text-lg italic">
            A picture is worth a thousand words.
          </p>
        </div>
      </section>

      {/* ── PHOTO GRID ── */}
      <section className="bg-[#f9f9f9] py-14 md:py-20">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-8">
          <PhotoGallery />
        </div>
      </section>

    </main>
  )
}
