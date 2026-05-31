'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What is respite care and how does it work at Arcadia Senior Living?',
    a: 'Respite care is a short-term stay in our assisted living community designed to give caregivers a break while ensuring their loved one receives excellent care and support. At Arcadia Senior Living, respite residents enjoy the same amenities, activities, and services as our full-time residents, including personalized care plans, meals, and social opportunities. Families often use respite care for a few days to several weeks, depending on their needs.',
  },
  {
    q: 'What are the most common reasons families choose respite care?',
    a: 'Families turn to respite care for many different reasons, including: a caregiver needing a break to rest and recharge; a caregiver going on vacation or recovering from an illness or surgery; a temporary gap in regular caregiving arrangements; families wanting their loved one to "try out" assisted living before deciding on a longer-term move; or seasonal and holiday isolation, when families want their loved one to enjoy companionship and social engagement. Whatever the reason, our team is here to provide compassionate support and peace of mind during the stay.',
  },
  {
    q: 'How long can my loved one stay in respite care?',
    a: 'At Arcadia Senior Living, respite care stays are available for a minimum of 30 days. This allows your loved one the opportunity to fully settle in, enjoy our community, and experience all the benefits of assisted living. Under special circumstances, shorter stays may be considered at our discretion. We encourage families to discuss their situation with us so we can explore the best possible solution.',
  },
  {
    q: 'What services and amenities are included in a respite stay?',
    a: 'Respite residents at Arcadia Senior Living receive: a fully furnished apartment or suite; daily meals and snacks prepared by our culinary team; assistance with daily activities such as bathing, dressing, and medication management (as needed); access to wellness programs and engaging activities; 24-hour care staff available for support and safety; and social opportunities to connect with other residents. This way, your loved one can feel comfortable, supported, and part of our community right away.',
  },
  {
    q: 'How do I know if respite care is the right choice for my loved one?',
    a: "If you're a caregiver feeling the need for rest, traveling, or managing your own recovery, respite care can give you peace of mind while ensuring your loved one is well cared for. It's also an excellent option if your family member is curious about assisted living but isn't quite ready for a full move — respite allows them to experience our community first-hand. Additionally, if your loved one could benefit from more social interaction, especially around the holidays, a respite stay offers companionship and engagement.",
  },
]

export default function RespiteCareFAQ() {
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
