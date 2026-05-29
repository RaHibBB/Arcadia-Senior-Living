'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { src: '/images/hero.jpg', alt: 'Arcadia Senior Living community' },
  { src: '/images/assisted-living.jpg', alt: 'Assisted living care' },
  { src: '/images/respite-care.jpg', alt: 'Respite care services' },
  { src: '/images/careers.jpg', alt: 'Our caring team' },
]

export default function CommunityCarousel() {
  const [current, setCurrent] = useState(0)
  const total = slides.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <div className="w-full">
      {/* Desktop: 2 images side-by-side */}
      <div className="hidden md:grid md:grid-cols-2 gap-3">
        {[0, 1].map((offset) => {
          const idx = (current + offset) % total
          return (
            <div key={idx} className="overflow-hidden">
              <img
                src={slides[idx].src}
                alt={slides[idx].alt}
                className="w-full h-80 object-cover transition-opacity duration-500"
              />
            </div>
          )
        })}
      </div>

      {/* Mobile: 1 image */}
      <div className="md:hidden overflow-hidden">
        <img
          src={slides[current].src}
          alt={slides[current].alt}
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-500 hover:border-[#4a7c7e] hover:text-[#4a7c7e] transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-5 h-2 bg-[#4a7c7e]'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next image"
          className="flex items-center justify-center w-10 h-10 border border-gray-300 text-gray-500 hover:border-[#4a7c7e] hover:text-[#4a7c7e] transition-colors duration-200"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
