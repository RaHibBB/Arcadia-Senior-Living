'use client'

import { useState, useEffect, useCallback } from 'react'

const BASE = [
  { src: '/images/portland-apt-overview.jpg', alt: 'Arcadia Senior Living apartment' },
  { src: '/images/portland-apt-kitchen.jpg',  alt: 'Arcadia Senior Living apartment kitchen' },
  { src: '/images/portland-apt-living.jpg',   alt: 'Arcadia Senior Living apartment front room' },
  { src: '/images/portland-apt-bathroom.jpg', alt: 'Arcadia Senior Living apartment bathroom' },
]

const VISIBLE = 3
const N   = BASE.length                   // 4
const EXT = [...BASE, ...BASE, ...BASE]   // 12 slides — buffer on both ends
const LEN = EXT.length                   // 12
const START = N                          // 4  ← real slide 0 lives here

// CSS math (track-relative %)
// track width  = (LEN / VISIBLE) * 100% container = 400%
// each slide   = (100 / LEN)%  of track = 33.33% container ✓
// translateX   = -(vIdx * 100 / LEN)%  of track

export default function ApartmentCarousel() {
  const [vIdx, setVIdx] = useState(START)
  const [anim, setAnim] = useState(true)

  const realIdx = ((vIdx - START) % N + N) % N

  const stepNext = useCallback(() => { setAnim(true); setVIdx(v => v + 1) }, [])
  const stepPrev = useCallback(() => { setAnim(true); setVIdx(v => v - 1) }, [])
  const goTo     = useCallback((i: number) => { setAnim(true); setVIdx(START + i) }, [])

  // Auto-play
  useEffect(() => {
    const t = setInterval(stepNext, 5000)
    return () => clearInterval(t)
  }, [stepNext])

  // After transition ends: normalise vIdx back into the real zone [START, START+N)
  const onTransitionEnd = useCallback(() => {
    const normalised = ((vIdx - START) % N + N) % N + START
    if (normalised !== vIdx) {
      setAnim(false)
      setVIdx(normalised)
    }
  }, [vIdx])

  // Re-enable animation one rAF after the instant snap so the browser doesn't
  // batch the transform change with the re-enable and skip the transition
  useEffect(() => {
    if (!anim) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnim(true))
      )
      return () => cancelAnimationFrame(id)
    }
  }, [anim])

  return (
    <div className="relative">

      {/* ── Clipping window ── */}
      <div className="relative overflow-hidden">

        {/* Track */}
        <div
          className="flex"
          style={{
            width:      `${(LEN / VISIBLE) * 100}%`,   /* 400% */
            transform:  `translateX(${-(vIdx * 100 / LEN)}%)`,
            transition: anim ? 'transform 600ms ease-in-out' : 'none',
            willChange: 'transform',
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {EXT.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-[5px]"
              style={{ width: `${100 / LEN}%` }}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="w-full h-56 md:h-64 object-cover select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Arrows — inside clipping div so they sit on top of images */}
        <button
          onClick={stepPrev}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/45 hover:bg-black/65 text-white transition-colors"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 1000 1000">
            <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"/>
          </svg>
        </button>
        <button
          onClick={stepNext}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/45 hover:bg-black/65 text-white transition-colors"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 1000 1000">
            <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"/>
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {BASE.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === realIdx
                ? 'w-6 h-2.5 bg-[#2d5a5c]'
                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

    </div>
  )
}
