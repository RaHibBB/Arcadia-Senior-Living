'use client'

import { useState, useEffect, useCallback } from 'react'

const slides = [
  { src: '/images/washougal-exterior.jpg',           alt: 'Arcadia Lookout Ridge exterior' },
  { src: '/images/washougal/washougal-tea.jpg',       alt: 'Residents enjoying tea at Arcadia Washougal' },
  { src: '/images/washougal/washougal-residents.jpg', alt: 'Residents at Arcadia Washougal' },
  { src: '/images/washougal/washougal-salon.jpg',     alt: 'Salon at Arcadia Washougal' },
  { src: '/images/washougal/washougal-group-activity.jpg', alt: 'Group activities at Arcadia Washougal' },
  { src: '/images/washougal/washougal-al-community.webp',  alt: 'Community life at Arcadia Washougal' },
]

export default function WashougalTourSlideshow() {
  const [current,  setCurrent]  = useState(0)
  const [previous, setPrevious] = useState<number | null>(null)

  const advance = useCallback(() => {
    setCurrent(c => {
      setPrevious(c)
      return (c + 1) % slides.length
    })
  }, [])

  useEffect(() => {
    const t = setInterval(advance, 5000)
    return () => clearInterval(t)
  }, [advance])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {slides.map((slide, i) => {
        const isCurrent  = i === current
        const isPrevious = i === previous
        return (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity:    isCurrent ? 1 : 0,
              zIndex:     isCurrent ? 2 : isPrevious ? 1 : 0,
              transition: isCurrent ? 'opacity 800ms ease-in-out' : 'none',
            }}
          />
        )
      })}
    </div>
  )
}
