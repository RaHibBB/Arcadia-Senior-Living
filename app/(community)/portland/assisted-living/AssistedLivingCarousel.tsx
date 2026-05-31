'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { src: '/images/portland-al-goats.jpg',    alt: 'Animal therapy visit at Arcadia Portland' },
  { src: '/images/portland-al-llamas.jpg',   alt: 'Llama visit at Arcadia Portland' },
  { src: '/images/portland-al-boys.jpg',     alt: 'Residents socializing at Arcadia Portland' },
  { src: '/images/portland-al-rummikub.jpg', alt: 'Game time at Arcadia Portland' },
]

const DURATION = 700

export default function AssistedLivingCarousel() {
  const [current,  setCurrent]  = useState(0)
  const [previous, setPrevious] = useState<number | null>(null)
  const [paused,   setPaused]   = useState(false)
  const clearRef = useRef<ReturnType<typeof setTimeout>>()

  const goTo = useCallback((next: number) => {
    setCurrent(c => {
      setPrevious(c)
      clearTimeout(clearRef.current)
      clearRef.current = setTimeout(() => setPrevious(null), DURATION)
      return next
    })
  }, [])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = () => goTo((current - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next, paused])

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[0, 1, 2, 3].map(offset => {
          const activeIdx = (current  + offset) % slides.length
          const prevIdx   = previous !== null ? (previous + offset) % slides.length : null

          return (
            <div key={offset} className="relative overflow-hidden h-56 md:h-64 lg:h-72 bg-gray-200">
              {slides.map((slide, si) => {
                const isActive = si === activeIdx
                const isPrev   = prevIdx !== null && si === prevIdx

                return (
                  <img
                    key={si}
                    src={slide.src}
                    alt={slide.alt}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      opacity:    isActive || isPrev ? 1 : 0,
                      zIndex:     isActive ? 2 : isPrev ? 1 : 0,
                      transition: isActive ? `opacity ${DURATION}ms ease-in-out` : 'none',
                    }}
                  />
                )
              })}
            </div>
          )
        })}
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === current ? '24px' : '8px',
              backgroundColor: i === current ? '#2d5a5c' : '#d1d5db',
            }}
          />
        ))}
      </div>
    </div>
  )
}
