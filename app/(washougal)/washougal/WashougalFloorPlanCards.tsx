'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const plans = [
  {
    name: 'Private Studio',
    desc: 'Kitchenette | Roll-in Shower | Emergency Call System | Extra Tall Ceilings | Nature Views | Pet Friendly',
    sqft: '~300+ SqFt',
    img: 'https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/09/Assisted-Living-Studio-blueprint.png',
  },
  {
    name: 'Private Studio Deluxe',
    desc: 'Kitchenette | Roll-in Shower | Emergency Call System | Extra Tall Ceilings | Nature Views | Pet Friendly',
    sqft: '350 SqFt',
    img: 'https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/09/Studio-Deluxe.png',
  },
  {
    name: 'One Bedroom Suite',
    desc: 'Bedroom | Living Area | Kitchenette | Roll-in Shower | Emergency Call System | Extra Tall Ceilings | Nature Views | Pet Friendly',
    sqft: '500+ SqFt',
    img: 'https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/09/1-bedroom-blueprint.png',
  },
  {
    name: 'One Bedroom Deluxe',
    desc: 'Large Bedroom | Living Room | Walk-in Closet | Kitchenette | Roll-in Shower | Emergency Call System | Nature Views | Pet Friendly',
    sqft: '600+ SqFt',
    img: 'https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/09/1-bedroom-deluxe-blueprint.png',
  },
]

export default function WashougalFloorPlanCards() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map(fp => (
          <div key={fp.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="px-5 py-4" style={{ background: 'linear-gradient(135deg, #25646A 0%, #3A3D3F 100%)' }}>
              <h3 className="font-bold text-white text-center text-base">{fp.name}</h3>
            </div>
            <div className="flex flex-col items-center justify-between flex-1 p-5 text-center gap-4">
              <div>
                <p className="text-[#454038] text-sm leading-relaxed">{fp.desc}</p>
                <p className="text-[#454038] text-sm mt-1 font-medium">{fp.sqft}</p>
              </div>
              <button
                onClick={() => setOpen(fp.img)}
                className="px-5 py-2.5 rounded text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#D6A156' }}
              >
                View Floor Plan
              </button>
            </div>
          </div>
        ))}
      </div>

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
