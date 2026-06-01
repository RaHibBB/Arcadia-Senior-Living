'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What does it mean to be locally owned and operated?',
    a: 'Being locally owned and operated means we are a true part of the Washougal community. Our ownership and management live and work in the same area as our residents, so decisions are made with genuine care — not by a distant corporate office.',
  },
  {
    q: 'What is assisted living?',
    a: 'Assisted living communities provide housing, personal care, and support services to seniors who need help with daily activities such as bathing, dressing, and medication management, but do not require the intensive medical care provided in a nursing home.',
  },
  {
    q: 'How much does Assisted Living cost at Arcadia Lookout Ridge?',
    a: 'Assisted Living at Arcadia Senior Living Lookout Ridge starts from $4,225 per month. Pricing varies depending on suite type and care level. Contact us for complete, up-to-date pricing.',
  },
  {
    q: 'How do I know if assisted living is the right choice for my loved one?',
    a: "Consider the level of care needed, their preferences and lifestyle, and tour communities to find the best fit. Consulting with healthcare professionals and discussing options as a family helps ensure an informed, confident decision.",
  },
  {
    q: 'What activities and social opportunities are available?',
    a: 'Arcadia Lookout Ridge offers a vibrant calendar of activities including fitness classes, arts and crafts, cooking programs, salon visits, animal therapy, happy hours, and local Washougal and Camas events — all designed to bring joy and community.',
  },
  {
    q: 'Is transportation provided for appointments and outings?',
    a: 'Yes. We provide transportation for scheduled group outings through our Activity Program. Additional transportation options are also available for individual appointments not covered by regular community activities.',
  },
  {
    q: 'Can residents bring their pets?',
    a: 'Arcadia welcomes small pets and understands how important they are to our residents\' happiness and well-being.',
  },
  {
    q: 'Can visitors stay overnight?',
    a: "Residents are welcome to have overnight visitors in their private suite for up to a week's stay. Meal tickets for guests are available at the front desk for a minimal cost.",
  },
  {
    q: 'Is there a personal emergency response system?',
    a: 'Yes. Each resident receives an emergency call pendant. Activating it notifies our care staff immediately. Wall-mounted call units are also installed in every bathroom.',
  },
  {
    q: 'What kind of dining services does Arcadia Washougal offer?',
    a: 'Residents enjoy restaurant-style dining with chef-prepared, nutritious meals served daily. We accommodate special dietary needs including diabetic-friendly options. Snacks and beverages are available throughout the day.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0)

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
