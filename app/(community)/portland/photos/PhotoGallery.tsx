'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const WP = 'https://arcadiaretirement.com/portland/wp-content/uploads/sites/4'

const photos = [
  { src: `${WP}/2025/11/10.17-happy-hour-1.jpg`,                     alt: 'Happy hour at Arcadia Portland' },
  { src: `${WP}/2026/03/pie-hannah.jpg`,                              alt: 'Caregiver holding a pie at Arcadia Portland' },
  { src: `${WP}/2026/03/Pool-boys.jpg`,                               alt: 'Two residents at Arcadia assisted living Portland' },
  { src: `${WP}/2025/11/PXL_20251024_195710342.PORTRAIT-scaled.jpg`,  alt: 'Arcadia Portland residents' },
  { src: `${WP}/2025/11/9.17-Happy-Hour-2.jpg`,                       alt: 'Happy hour at Arcadia Portland' },
  { src: `${WP}/2025/11/Referral-Agent-Happy-Hour-4.jpg`,             alt: 'Happy hour event at Arcadia Portland' },
  { src: `${WP}/2025/11/Halloween-4.jpg`,                             alt: 'Halloween celebration at Arcadia Portland' },
  { src: `${WP}/2025/11/Family-Dinner-5.jpg`,                         alt: 'Family dinner at Arcadia Portland' },
  { src: `${WP}/2025/11/goats-1.jpg`,                                 alt: 'Goat visit activity at Arcadia Portland' },
  { src: `${WP}/2025/11/llamas-2.jpg`,                                alt: 'Llama visit activity at Arcadia Portland' },
  { src: `${WP}/2025/11/Goats-5.jpg`,                                 alt: 'Residents with goats at Arcadia Portland' },
  { src: `${WP}/2025/11/10.29-Witchy-day-2.jpg`,                      alt: 'Witchy day at Arcadia Portland' },
  { src: `${WP}/2026/03/pie-gone.jpg`,                                alt: 'Pie eating activity at Arcadia Portland' },
  { src: `${WP}/2026/03/pie-calvin-and-jeannine.jpg`,                 alt: 'Activities director at Arcadia Portland' },
  { src: `${WP}/2025/11/tammy-and-joplin.jpg`,                        alt: 'Staff and resident at Arcadia Portland' },
  { src: `${WP}/2025/11/10.17-happy-hour-2.jpg`,                      alt: 'Happy hour at Arcadia Portland' },
  { src: `${WP}/2025/11/Untitled-design.jpg`,                         alt: 'Arcadia Portland community' },
  { src: `${WP}/2025/11/Goats-7.jpg`,                                 alt: 'Goat visit at Arcadia Portland' },
  { src: `${WP}/2025/11/llamas-4.jpg`,                                alt: 'Llamas visiting Arcadia Portland' },
  { src: `${WP}/2025/11/Family-Dinner-4.jpg`,                         alt: 'Family dinner at Arcadia Portland' },
  { src: `${WP}/2025/11/goats-2.jpg`,                                 alt: 'Residents with goats at Arcadia Portland' },
  { src: `${WP}/2025/11/The-boys.jpg`,                                alt: 'Residents at Arcadia Portland' },
  { src: `${WP}/2025/11/Goats-11.jpg`,                                alt: 'Senior man holding a goat at Arcadia Portland' },
  { src: `${WP}/2025/11/Goats-6.jpg`,                                 alt: 'Resident with goat at Arcadia Portland' },
  { src: `${WP}/2025/11/Goats-9.jpg`,                                 alt: 'Resident with goat at Arcadia Portland' },
  { src: `${WP}/2025/11/Rummikub.jpg`,                                alt: 'Residents playing Rummikub at Arcadia Portland' },
  { src: `${WP}/2025/11/llamas-3.jpg`,                                alt: 'Llama visit at Arcadia Portland' },
  { src: `${WP}/2026/03/PXL_20251024_195427427.PORTRAIT-scaled.jpg`,  alt: 'Elderly woman petting a dog at Arcadia Portland' },
  { src: `${WP}/2025/11/Halloween-5.jpg`,                             alt: 'Halloween at Arcadia Portland' },
  { src: `${WP}/2025/11/Halloween-20.jpg`,                            alt: 'Halloween costume at Arcadia Portland' },
]

export default function PhotoGallery() {
  const [failed, setFailed]   = useState<Set<number>>(new Set())
  const [lightbox, setLightbox] = useState<number | null>(null)

  const visible = photos.map((p, i) => ({ ...p, origIdx: i })).filter(p => !failed.has(p.origIdx))

  const open  = useCallback((vi: number) => setLightbox(vi), [])
  const close = useCallback(() => setLightbox(null), [])
  const prev  = useCallback(() => setLightbox(i => i !== null ? (i - 1 + visible.length) % visible.length : null), [visible.length])
  const next  = useCallback(() => setLightbox(i => i !== null ? (i + 1) % visible.length : null), [visible.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, close, prev, next])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      {/* ── Masonry grid ── */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-[8px]">
        {photos.map((photo, i) => {
          const vi = visible.findIndex(p => p.origIdx === i)
          return (
            <div
              key={i}
              className={`break-inside-avoid mb-[8px] group cursor-pointer ${failed.has(i) ? 'hidden' : ''}`}
              onClick={() => vi !== -1 && open(vi)}
            >
              <div className="relative overflow-hidden shadow-sm">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  loading={i < 8 ? 'eager' : 'lazy'}
                  onError={() => setFailed(prev => new Set(prev).add(i))}
                />
                {/* Gradient overlay — teal brand colour */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d5a5c]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
                {/* Caption bar */}
                {photo.alt && (
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs leading-snug line-clamp-2 drop-shadow">{photo.alt}</p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(10,20,20,0.95)' }}
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 text-white/50 text-sm tracking-widest">
            {lightbox + 1} <span className="text-white/30 mx-1">/</span> {visible.length}
          </div>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              key={visible[lightbox].src}
              src={visible[lightbox].src}
              alt={visible[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              style={{ animation: 'fadeIn 0.2s ease' }}
            />
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Caption */}
          {visible[lightbox].alt && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-center">
              <p className="text-white/65 text-sm px-6">{visible[lightbox].alt}</p>
            </div>
          )}

          {/* Dot strip — max 20 shown */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 flex-wrap justify-center max-w-sm">
            {visible.slice(0, 20).map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setLightbox(i) }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === lightbox ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }`}</style>
    </>
  )
}
