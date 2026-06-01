'use client'

import { useState } from 'react'

const CARE_TYPES = [
  {
    value: 'Assisted Living',
    img: '/images/washougal/tour-choice-al.jpg',
    label: 'Assisted Living',
    desc: 'Daily support with independence',
  },
  {
    value: 'Respite Care',
    img: '/images/washougal/tour-choice-rc.jpg',
    label: 'Respite Care',
    desc: 'Short-term stays from 30 days',
  },
  {
    value: 'Independent Living',
    img: '/images/washougal/tour-choice-il.jpg',
    label: 'Independent Living',
    desc: 'Active, maintenance-free living',
  },
  {
    value: 'Unsure',
    img: '/images/washougal/tour-choice-unsure.jpg',
    label: "I'm Not Sure",
    desc: "We'll help you find the right fit",
  },
]

const WHO = ['Myself', 'Parent', 'Spouse', 'Friend', 'Other']

const fieldCls = (err?: string) =>
  `w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-[#222] placeholder-gray-400
   focus:outline-none focus:ring-2 focus:ring-[#2d5a5c]/30 focus:border-[#2d5a5c] transition-all duration-200
   ${err ? 'border-red-300 bg-red-50/30 focus:ring-red-200' : 'border-gray-200'}`

export default function WashougalTourForm() {
  const [step,      setStep]      = useState(1)
  const [careType,  setCareType]  = useState('')
  const [who,       setWho]       = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName,  setLastName]  = useState('')
  const [email,     setEmail]     = useState('')
  const [phone,     setPhone]     = useState('')
  const [comments,  setComments]  = useState('')
  const [errors,    setErrors]    = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function selectCareType(val: string) {
    setCareType(val)
    setTimeout(() => setStep(2), 180)
  }

  function validate() {
    const e: Record<string, string> = {}
    if (!who)                              e.who       = 'Please select one'
    if (!firstName.trim())                 e.firstName = 'Required'
    if (!lastName.trim())                  e.lastName  = 'Required'
    if (!email.trim())                     e.email     = 'Required'
    else if (!/\S+@\S+\.\S+/.test(email)) e.email     = 'Enter a valid email'
    if (!phone.trim())                     e.phone     = 'Required'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-14 px-4">
        <div className="w-20 h-20 rounded-full bg-[#2d5a5c]/8 border-2 border-[#2d5a5c]/20 flex items-center justify-center mb-6">
          <svg className="w-9 h-9 text-[#2d5a5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-[#2d5a5c] mb-2">You're all set!</h3>
        <p className="text-[#666] text-base leading-relaxed max-w-[280px] mb-6">
          We received your tour request and will reach out shortly to confirm your visit.
        </p>
        <div className="bg-[#f5f5f3] rounded-lg p-5 text-left w-full max-w-[300px] space-y-2.5">
          <div className="flex items-center gap-3 text-sm text-[#555]">
            <span className="w-5 h-5 rounded-full bg-[#2d5a5c]/10 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-[#2d5a5c]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
            </span>
            <a href="tel:+13603351238" className="hover:text-[#c06448] transition-colors">(360) 335-1238</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#555]">
            <span className="w-5 h-5 rounded-full bg-[#2d5a5c]/10 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-[#2d5a5c]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
              </svg>
            </span>
            2300 W 9th St, Washougal, WA
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>

      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
            step >= 1 ? 'bg-[#2d5a5c] text-white' : 'bg-gray-100 text-gray-400'
          }`}>
            {step > 1 ? (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : '1'}
          </div>
          <span className={`text-xs font-medium hidden sm:block ${step === 1 ? 'text-[#2d5a5c]' : 'text-[#aaa]'}`}>
            Care Type
          </span>
        </div>

        <div className={`flex-1 h-px ${step >= 2 ? 'bg-[#2d5a5c]' : 'bg-gray-200'} transition-colors duration-500`} />

        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
            step >= 2 ? 'bg-[#2d5a5c] text-white' : 'bg-gray-100 text-gray-400'
          }`}>
            2
          </div>
          <span className={`text-xs font-medium hidden sm:block ${step === 2 ? 'text-[#2d5a5c]' : 'text-[#aaa]'}`}>
            Your Info
          </span>
        </div>
      </div>

      {/* ── STEP 1 ── */}
      {step === 1 && (
        <div>
          <p className="text-[15px] font-semibold text-[#222] mb-1">
            What level of care are you interested in?
          </p>
          <p className="text-xs text-[#999] mb-5">Select one to continue</p>

          <div className="grid grid-cols-2 gap-3">
            {CARE_TYPES.map(ct => (
              <button
                key={ct.value}
                type="button"
                onClick={() => selectCareType(ct.value)}
                className={`group relative overflow-hidden rounded-xl border-2 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2d5a5c]/30 ${
                  careType === ct.value
                    ? 'border-[#2d5a5c] shadow-md'
                    : 'border-transparent shadow-sm hover:border-[#2d5a5c]/40 hover:shadow-md'
                }`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={ct.img}
                    alt={ct.label}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Selected check */}
                {careType === ct.value && (
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#2d5a5c] shadow flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-6">
                  <p className="text-white text-sm font-semibold leading-tight">{ct.label}</p>
                  <p className="text-white/65 text-[11px] leading-snug mt-0.5">{ct.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── STEP 2 ── */}
      {step === 2 && (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">

          {/* Selected care type pill */}
          {careType && (
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-[#888]">Care type:</span>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 bg-[#2d5a5c]/8 text-[#2d5a5c] text-xs font-medium px-3 py-1 rounded-full hover:bg-[#2d5a5c]/15 transition-colors"
              >
                {careType}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          )}

          {/* Who is interested */}
          <div>
            <label className="block text-[13px] font-semibold text-[#444] mb-2.5">
              Who is this for? <span className="text-[#c06448]">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {WHO.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setWho(opt)}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] border transition-all duration-150 ${
                    who === opt
                      ? 'bg-[#2d5a5c] border-[#2d5a5c] text-white font-medium'
                      : 'border-gray-200 text-[#555] bg-white hover:border-[#2d5a5c] hover:text-[#2d5a5c]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {errors.who && <p className="text-red-500 text-xs mt-1.5">{errors.who}</p>}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-[#bbb] font-medium">Contact Information</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Name */}
          <div>
            <label className="block text-[13px] font-semibold text-[#444] mb-2">
              Name <span className="text-[#c06448]">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <input type="text" placeholder="First" value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className={fieldCls(errors.firstName)} autoComplete="given-name" />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <input type="text" placeholder="Last" value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  className={fieldCls(errors.lastName)} autoComplete="family-name" />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[13px] font-semibold text-[#444] mb-2">
              Email <span className="text-[#c06448]">*</span>
            </label>
            <input type="email" placeholder="your@email.com" value={email}
              onChange={e => setEmail(e.target.value)}
              className={fieldCls(errors.email)} autoComplete="email" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[13px] font-semibold text-[#444] mb-2">
              Phone <span className="text-[#c06448]">*</span>
            </label>
            <input type="tel" placeholder="(360) 000-0000" value={phone}
              onChange={e => setPhone(e.target.value)}
              className={fieldCls(errors.phone)} autoComplete="tel" />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Comments */}
          <div>
            <label className="block text-[13px] font-semibold text-[#444] mb-2">
              Additional Comments or Special Needs
              <span className="font-normal text-[#aaa] ml-1">(optional)</span>
            </label>
            <textarea rows={3} value={comments}
              onChange={e => setComments(e.target.value)}
              placeholder="Any special requirements or questions for your visit..."
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[15px] text-[#222] placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#2d5a5c]/30 focus:border-[#2d5a5c] transition-all duration-200"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-none flex items-center gap-1.5 border border-gray-200 text-[#777] text-sm px-4 py-3 rounded-lg hover:border-gray-300 hover:text-[#444] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#c06448] hover:bg-[#a85038] active:bg-[#904030] text-white font-semibold text-[15px] py-3 rounded-lg shadow-sm shadow-[#c06448]/20 transition-colors flex items-center justify-center gap-2"
            >
              Submit Tour Request
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="text-center text-[11px] text-[#bbb] pt-1">
            By submitting, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-[#888] transition-colors">Privacy Policy</a>.
            We never share your information.
          </p>

        </form>
      )}
    </div>
  )
}
