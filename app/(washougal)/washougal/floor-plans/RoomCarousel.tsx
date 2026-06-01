'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { src: '/images/washougal/washougal-room-living.jpg',   alt: 'One-bedroom living room at Arcadia Washougal' },
  { src: '/images/washougal/washougal-room-bedroom2.jpg',  alt: 'One-bedroom suite at Arcadia Washougal' },
  { src: '/images/washougal/washougal-room-bedroom1.jpg',  alt: 'Bedroom at Arcadia Washougal' },
  { src: '/images/washougal/washougal-room-bathroom.jpg',  alt: 'Studio bathroom at Arcadia Washougal' },
  { src: '/images/washougal/washougal-room-bathroom.jpg',  alt: 'Bathroom with roll-in shower at Arcadia Washougal' },
]

const DURATION = 500

export default function RoomCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  const total = slides.length

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + total) % total)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = () => goTo(current - 1)

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(next, 5000)
    return () => clearTimeout(timerRef.current)
  }, [current, paused, next])

  // Build the 3 visible indices (current-1, current, current+1 on desktop)
  const visible = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ]

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visible.map((si, pos) => (
          <div
            key={`${pos}-${si}`}
            className="overflow-hidden bg-gray-200 aspect-[4/3]"
            style={{
              transition: `opacity ${DURATION}ms ease-in-out`,
            }}
          >
            <img
              src={slides[si].src}
              alt={slides[si].alt}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot pagination */}
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
