'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What is included in the monthly base rate for Lookout Ridge floor plans?',
    a: 'The monthly base rate at Arcadia Lookout Ridge is determined by your specific apartment selection. For example, our studio apartments start at $4,225. This monthly rate covers your apartment with a kitchenette, individual climate control, and access to all community amenities. Your rent also includes three chef-prepared meals every day, local transportation via the Arcadia shuttle, and a full calendar of social activities.',
  },
  {
    q: 'Are the apartments pet friendly and what are the fees?',
    a: 'We believe pets are family and welcome them at our community. For residents bringing a furry companion to Lookout Ridge, there is a $1,000 non-refundable pet fee and a $50 monthly pet fee. Our moving checklist reminds families to pack favorite food and supplies to help pets settle comfortably into their new home.',
  },
  {
    q: 'How do the floor plans accommodate mobility aids like walkers or wheelchairs?',
    a: 'Independence and safety are core to our design. Our studios range from 325 to 375 square feet, while our one-bedroom apartments offer 500 to 600 square feet of space for easy maneuverability. Every bathroom is equipped with a walk-in shower and grab bars. Additionally, our team is professionally trained in one and two person transfers as well as the use of Hoyer lifts for those who need physical assistance within their apartment.',
  },
  {
    q: 'Can we furnish and customize the apartments?',
    a: 'We highly encourage residents to bring their own furniture to make their space feel like home. We recommend bringing a bed, two nightstands, a favorite dresser, and seating with arms to help with standing. To ensure safety, we ask that you do not bring throw rugs or area rugs because they are tripping hazards. Because we are a boutique community, we can often accommodate personal preferences like a room orientation that faces the sun.',
  },
  {
    q: 'What happens if care needs increase or if we only need a short-term stay?',
    a: 'Arcadia brings the care to you so you do not have to move to a different room as your needs change. We offer enhanced care services and use a point-based system where care is billed at $27 per point at Lookout Ridge. This ensures you only pay for the specific level of help you need. We also offer respite care for those seeking a short-term stay, which requires a minimum of 30 days.',
  },
]

export default function FloorPlanFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className={`border rounded-lg overflow-hidden transition-colors duration-200 ${isOpen ? 'border-[#2d5a5c] shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left group"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-base pr-4 transition-colors duration-200 ${isOpen ? 'text-[#2d5a5c]' : 'text-[#333] group-hover:text-[#2d5a5c]'}`}>
                {faq.q}
              </span>
              <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? 'bg-[#2d5a5c] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-[#e8f4f4] group-hover:text-[#2d5a5c]'}`}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden min-h-0">
                <div className="px-6 pb-5 pt-1">
                  <div className="h-px bg-[#2d5a5c]/10 mb-4" />
                  <p className="text-[#555] text-base leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
