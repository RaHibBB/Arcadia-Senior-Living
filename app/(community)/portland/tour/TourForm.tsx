'use client'

import { useState } from 'react'

const WHO = ['Myself', 'Parent', 'Spouse', 'Friend', 'Other']

const inputCls = (err?: string) =>
  `w-full border-0 border-b-2 bg-gray-50 px-4 py-3 text-base text-[#333] placeholder-gray-400
   focus:outline-none focus:bg-white focus:border-b-[#2d5a5c] transition-all duration-200
   ${err ? 'border-b-red-400 bg-red-50/40' : 'border-b-gray-200'}`

export default function TourForm() {
  const [who,       setWho]       = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName,  setLastName]  = useState('')
  const [email,     setEmail]     = useState('')
  const [phone,     setPhone]     = useState('')
  const [comments,  setComments]  = useState('')
  const [errors,    setErrors]    = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!who)                              e.who       = 'Please select one'
    if (!firstName.trim())                 e.firstName = 'Required'
    if (!lastName.trim())                  e.lastName  = 'Required'
    if (!email.trim())                     e.email     = 'Required'
    else if (!/\S+@\S+\.\S+/.test(email)) e.email     = 'Invalid email'
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
      <div className="flex flex-col items-center justify-center h-full text-center py-20 px-8">
        <div className="w-16 h-16 rounded-full bg-[#2d5a5c]/10 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-[#2d5a5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-[#2d5a5c] mb-3">Tour Request Sent!</h3>
        <p className="text-[#666] text-base leading-relaxed max-w-xs">
          Thank you! Our team will reach out to confirm your visit soon. We can't wait to show you around.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">

      {/* Who is interested */}
      <div>
        <p className="text-sm text-[#555] mb-3">
          Could you please tell us who is interested?
          <span className="text-[#c06448] ml-1">*</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {WHO.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => setWho(opt)}
              className={`px-4 py-2 text-sm border transition-all duration-150 ${
                who === opt
                  ? 'bg-[#c06448] border-[#c06448] text-white'
                  : 'border-gray-300 text-[#555] hover:border-[#2d5a5c] hover:text-[#2d5a5c]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {errors.who && <p className="text-red-500 text-xs mt-1.5">{errors.who}</p>}
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-[#333] mb-2">
          Name <span className="text-[#c06448]">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input type="text" placeholder="First" value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className={inputCls(errors.firstName)} autoComplete="given-name" />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <input type="text" placeholder="Last" value={lastName}
              onChange={e => setLastName(e.target.value)}
              className={inputCls(errors.lastName)} autoComplete="family-name" />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-[#333] mb-2">
          Email <span className="text-[#c06448]">*</span>
        </label>
        <input type="email" placeholder="your@email.com" value={email}
          onChange={e => setEmail(e.target.value)}
          className={inputCls(errors.email)} autoComplete="email" />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-[#333] mb-2">
          Phone <span className="text-[#c06448]">*</span>
        </label>
        <input type="tel" placeholder="(503) 000-0000" value={phone}
          onChange={e => setPhone(e.target.value)}
          className={inputCls(errors.phone)} autoComplete="tel" />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Comments */}
      <div>
        <label className="block text-sm font-semibold text-[#333] mb-2">
          Additional Comments or Special Needs
        </label>
        <textarea rows={4} value={comments}
          onChange={e => setComments(e.target.value)}
          className="w-full border-0 border-b-2 border-b-gray-200 bg-gray-50 px-4 py-3 text-base text-[#333] resize-none focus:outline-none focus:bg-white focus:border-b-[#2d5a5c] transition-all duration-200"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#c06448] hover:bg-[#a85038] active:bg-[#904030] text-white font-bold text-sm py-4 tracking-widest uppercase transition-colors"
      >
        Submit Tour Request
      </button>

    </form>
  )
}
