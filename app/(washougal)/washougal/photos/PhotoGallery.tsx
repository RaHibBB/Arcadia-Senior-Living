'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const photos = [
  { src: '/images/washougal/gallery/g-01.jpg', alt: 'Arcadia Lookout Ridge exterior view' },
  { src: '/images/washougal/washougal-salon.jpg', alt: 'Senior woman visiting the salon at Arcadia Washougal' },
  { src: '/images/washougal/washougal-tea.jpg', alt: 'Two seniors enjoying tea at Arcadia Washougal' },
  { src: '/images/washougal/gallery/g-02.jpg', alt: 'Resident at Arcadia Washougal' },
  { src: '/images/washougal/gallery/g-03.jpg', alt: 'Residents enjoying games at Arcadia Washougal' },
  { src: '/images/washougal/gallery/g-04.jpg', alt: 'Resident at Arcadia Senior Living Washougal' },
  { src: '/images/washougal/gallery/g-05.jpg', alt: 'Welcoming lobby at Arcadia Lookout Ridge' },
  { src: '/images/washougal/gallery/g-06.jpg', alt: 'Arcadia Lookout Ridge exterior' },
  { src: '/images/washougal/gallery/g-07.jpg', alt: 'Arcadia Lookout Ridge lobby' },
  { src: '/images/washougal/gallery/g-08.jpg', alt: 'Resident enjoying life at Arcadia Washougal' },
  { src: '/images/washougal/gallery/g-09.jpg', alt: 'TV lounge at Arcadia Lookout Ridge' },
  { src: '/images/washougal/gallery/g-10.jpg', alt: 'Dining room at Arcadia Lookout Ridge' },
  { src: '/images/washougal/gallery/g-11.jpg', alt: 'Senior woman with llama during pet therapy at Arcadia Washougal' },
  { src: '/images/washougal/gallery/g-12.jpg', alt: 'Resident at Arcadia Washougal' },
  { src: '/images/washougal/gallery/g-13.jpg', alt: 'Arcadia Lookout Ridge exterior garden' },
  { src: '/images/washougal/gallery/g-14.jpg', alt: 'Interior detail at Arcadia Lookout Ridge' },
  { src: '/images/washougal/washougal-group-activity.jpg', alt: 'Group activities at Arcadia Washougal' },
  { src: '/images/washougal/gallery/g-15.jpg', alt: 'Model suite at Arcadia Lookout Ridge' },
  { src: '/images/washougal/gallery/g-16.jpg', alt: 'Arcadia Lookout Ridge exterior' },
  { src: '/images/washougal/gallery/g-17.jpg', alt: 'Residents socializing at Arcadia Washougal' },
  { src: '/images/washougal/gallery/g-18.png', alt: 'Arcadia Senior Living Washougal' },
  { src: '/images/washougal/gallery/g-19.jpg', alt: 'Residents enjoying the outdoors at Arcadia Washougal' },
  { src: '/images/washougal/gallery/g-20.jpg', alt: 'Resident at Arcadia Senior Living Washougal' },
  { src: '/images/washougal/gallery/g-21.jpg', alt: 'Senior woman with fun mask she crafted at Arcadia Washougal' },
  { src: '/images/washougal/gallery/g-22.jpg', alt: 'Senior woman painting a clay pot at Arcadia Washougal' },
  { src: '/images/washougal/gallery/g-23.jpg', alt: 'Arcadia Lookout Ridge exterior landscaping' },
  { src: '/images/washougal/gallery/g-24.jpg', alt: 'Arcadia Senior Living Washougal community' },
  { src: '/images/washougal/gallery/g-25.jpg', alt: 'Caring staff at Arcadia Washougal' },
]

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox(i => i === null ? null : (i - 1 + photos.length) % photos.length), [])
  const next = useCallback(() => setLightbox(i => i === null ? null : (i + 1) % photos.length), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')    close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, close, prev, next])

  return (
    <>
      {/* Masonry grid using CSS columns */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-2.5 space-y-2.5">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="break-inside-avoid overflow-hidden cursor-pointer group"
            onClick={() => setLightbox(i)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading={i < 8 ? 'eager' : 'lazy'}
              className="w-full h-auto block group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain shadow-2xl"
            />

            {/* Close */}
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/80 hover:text-white transition-colors bg-black/40 hover:bg-black/60 rounded-full p-2"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/80 hover:text-white transition-colors bg-black/40 hover:bg-black/60 rounded-full p-2"
              aria-label="Next photo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  )
}
