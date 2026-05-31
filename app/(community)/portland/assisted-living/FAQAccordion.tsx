'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What does it mean to be locally owned and operated?',
    a: 'Being locally owned and operated signifies we are an integral part of the local community, with ownership and management residing within the same area as our residents.',
  },
  {
    q: 'What is assisted living?',
    a: 'Assisted living communities provide housing, personal care, and support services to seniors who need assistance with daily activities such as bathing, dressing, and medication management but do not require the intensive medical care provided in a nursing home.',
  },
  {
    q: 'How much does it cost for Assisted Living at Arcadia Senior Living?',
    a: 'Our community offers a range of thoughtfully crafted floor plans, including Studios, One Bedroom, and Two Bedroom suites, designed to meet individual tastes and financial needs. Our suites begin at $5,100 per month.',
  },
  {
    q: 'How do I know if assisted living is the right choice for me or my loved one?',
    a: "It's important to assess the level of care needed, the preferences and lifestyle of the individual, and to tour multiple communities to find the best fit. Consulting with healthcare professionals and discussing options with family members can also help in making an informed decision.",
  },
  {
    q: 'What activities and social opportunities are available?',
    a: 'At Arcadia, we believe in creating a vibrant and engaging environment for our residents. Our community offers a wide range of activities and social opportunities designed to enrich the lives of our residents and foster a strong sense of community.',
  },
  {
    q: 'Is transportation provided for appointments and outings?',
    a: 'Transportation is available to all residents. General outings are regularly scheduled via our Activity Program. We have several options for transportation if you require transportation that is not part of the community activities.',
  },
  {
    q: 'Can people bring their pets?',
    a: 'Arcadia accepts small pets and realizes how important they are to our residents.',
  },
  {
    q: 'Can visitors stay overnight?',
    a: "Residents can have overnight visitors in their private apartment for up to a week's stay. Meal tickets are available at the front desk for a minimal cost.",
  },
  {
    q: 'Is there a personal emergency response system?',
    a: 'Each resident receives a pendant call-light. This sends a signal to our caregivers telling them you are in need of help. There are also wall units in the bathroom of each apartment.',
  },
  {
    q: 'What kind of dining services does the facility offer?',
    a: 'At Arcadia Senior Living, residents enjoy restaurant-style dining with chefs preparing delicious meals tailored to individual needs. Even those with diabetes can find tasty options on the extensive menu. From choosing a table to placing an order with a server, the experience feels familiar and enjoyable.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0) // first open by default

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className={`border rounded-lg overflow-hidden transition-colors duration-200 ${isOpen ? 'border-[#2d5a5c] shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
          >
            {/* Question button */}
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

            {/* Answer — CSS grid animation for smooth height transition */}
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
