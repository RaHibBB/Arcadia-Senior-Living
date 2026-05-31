'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const plans = [
  {
    name: 'One Bedroom Suite',
    desc: 'One Bedroom | Living Room | Kitchen | Bathroom',
    sqft: '569–750 SqFt',
    img: '/images/portland-floorplan-1bed.png',
  },
  {
    name: 'Two Bedroom Suite',
    desc: 'Two Bedrooms | Living Room | Kitchen | Bathroom',
    sqft: '904 SqFt',
    img: '/images/portland-floorplan-2bed.png',
  },
  {
    name: 'Private Studio',
    desc: 'Spacious Studio | Kitchen | Bathroom',
    sqft: '350 SqFt',
    img: '/images/portland-floorplan-studio.png',
  },
]

export default function FloorPlanCards() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(fp => (
          <div key={fp.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            {/* Gradient header */}
            <div className="px-5 py-4" style={{ background: 'linear-gradient(135deg, #25646A 0%, #3A3D3F 100%)' }}>
              <h3 className="font-bold text-white text-center text-lg">{fp.name}</h3>
            </div>
            {/* Body */}
            <div className="flex flex-col items-center justify-between flex-1 p-6 text-center gap-4">
              <div>
                <p className="text-[#454038] text-base leading-relaxed">{fp.desc}</p>
                <p className="text-[#454038] text-base">{fp.sqft}</p>
              </div>
              <button
                onClick={() => setOpen(fp.img)}
                className="px-6 py-2.5 rounded text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#D6A156' }}
              >
                View Floor Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full p-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={open} alt="Floor plan" className="w-full h-auto rounded" />
          </div>
        </div>
      )}
    </>
  )
}
