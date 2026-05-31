'use client'

import { useState, useEffect, useCallback } from 'react'

const slides = [
  'https://arcadiaretirement.com/portland/wp-content/uploads/sites/4/2025/11/The-boys.jpg',
  'https://arcadiaretirement.com/portland/wp-content/uploads/sites/4/2026/03/PXL_20251024_195427427.PORTRAIT-scaled.jpg',
  'https://arcadiaretirement.com/portland/wp-content/uploads/sites/4/2026/03/Pool-boys.jpg',
  'https://arcadiaretirement.com/portland/wp-content/uploads/sites/4/2025/11/Goats-11-1.jpg',
  'https://arcadiaretirement.com/portland/wp-content/uploads/sites/4/2025/11/Goats-6-1.jpg',
  'https://arcadiaretirement.com/portland/wp-content/uploads/sites/4/2025/11/Rummikub-1.jpg',
]

export default function TourSlideshow() {
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
    <div className="relative w-full h-full overflow-hidden">
      {slides.map((src, i) => {
        const isCurrent  = i === current
        const isPrevious = i === previous
        return (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity:    isCurrent ? 1 : 0,
              zIndex:     isCurrent ? 2 : isPrevious ? 1 : 0,
              transition: isCurrent ? 'opacity 600ms ease-in-out' : 'none',
            }}
          />
        )
      })}
    </div>
  )
}
