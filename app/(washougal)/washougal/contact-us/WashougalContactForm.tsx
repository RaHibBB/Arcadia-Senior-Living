'use client'

import { useState } from 'react'

const MAX_CHARS = 600

const TOPICS = [
  'Pricing & Availability',
  'Connect with Sales',
  'Resident Question',
  'Employment Question',
  'Vendor Question',
]

const inputCls = (err?: string) =>
  `w-full border-b-2 border-t border-x border-gray-200 bg-gray-50 px-4 py-3 text-base text-[#333] placeholder-gray-400
   focus:outline-none focus:bg-white focus:border-b-[#2d5a5c] transition-all duration-200
   ${err ? 'border-b-red-400 bg-red-50' : ''}`

export default function WashougalContactForm() {
  const [topic,     setTopic]     = useState(TOPICS[0])
  const [firstName, setFirstName] = useState('')
  const [lastName,  setLastName]  = useState('')
  const [email,     setEmail]     = useState('')
  const [emailConf, setEmailConf] = useState('')
  const [phone,     setPhone]     = useState('')
  const [comments,  setComments]  = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors,    setErrors]    = useState<Record<string, string>>({})

  function validate() {
    const e: Record<string, string> = {}
    if (!firstName.trim())                 e.firstName = 'Required'
    if (!lastName.trim())                  e.lastName  = 'Required'
    if (!email.trim())                     e.email     = 'Required'
    else if (!/\S+@\S+\.\S+/.test(email)) e.email     = 'Enter a valid email'
    if (email !== emailConf)               e.emailConf = 'Emails do not match'
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
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 rounded-full bg-[#2d5a5c]/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-[#2d5a5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-[#2d5a5c] mb-3">Thank you so much for your interest in Arcadia!</h3>
        <p className="text-[#666] text-base leading-relaxed max-w-xs mx-auto">
          We received your message and will be in touch shortly. We look forward to speaking with you.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">

      {/* How can we help */}
      <div>
        <Label text="How can we help you?" required />
        <div className="relative">
          <select
            value={topic}
            onChange={e => setTopic(e.target.value)}
            className="w-full appearance-none border-b-2 border-t border-x border-gray-200 bg-gray-50 px-4 py-3 pr-10 text-base text-[#333] focus:outline-none focus:bg-white focus:border-b-[#2d5a5c] transition-all duration-200"
          >
            {TOPICS.map(t => <option key={t}>{t}</option>)}
          </select>
          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Name */}
      <div>
        <Label text="Name" required />
        <div className="grid grid-cols-2 gap-3">
          <Field label="First" error={errors.firstName}>
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}
              className={inputCls(errors.firstName)} autoComplete="given-name" />
          </Field>
          <Field label="Last" error={errors.lastName}>
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}
              className={inputCls(errors.lastName)} autoComplete="family-name" />
          </Field>
        </div>
      </div>

      {/* Email */}
      <div>
        <Label text="Email" required />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Enter Email" error={errors.email}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              className={inputCls(errors.email)} autoComplete="email" />
          </Field>
          <Field label="Confirm Email" error={errors.emailConf}>
            <input type="email" value={emailConf} onChange={e => setEmailConf(e.target.value)}
              className={inputCls(errors.emailConf)} autoComplete="email" />
          </Field>
        </div>
      </div>

      {/* Phone */}
      <div>
        <Label text="Phone" required />
        <Field error={errors.phone}>
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
            className={inputCls(errors.phone)} autoComplete="tel" />
        </Field>
      </div>

      {/* Comments */}
      <div>
        <Label text="Comments" />
        <p className="text-xs text-[#999] mb-2">Please let us know what's on your mind. Have a question for us? Ask away.</p>
        <textarea
          value={comments}
          onChange={e => setComments(e.target.value.slice(0, MAX_CHARS))}
          rows={5}
          className="w-full border-b-2 border-t border-x border-gray-200 bg-gray-50 px-4 py-3 text-base text-[#333] resize-none focus:outline-none focus:bg-white focus:border-b-[#2d5a5c] transition-all duration-200"
        />
        <p className="text-xs text-[#aaa] mt-1 text-right">{comments.length} / {MAX_CHARS}</p>
      </div>

      <button
        type="submit"
        className="w-full bg-[#c06448] hover:bg-[#a85038] active:bg-[#904030] text-white font-semibold text-base py-4 transition-colors tracking-wide"
      >
        Submit
      </button>

    </form>
  )
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <p className="text-sm font-semibold text-[#333] mb-2">
      {text}
      {required && <span className="text-[#c06448] ml-1 text-xs font-normal">(Required)</span>}
    </p>
  )
}

function Field({ label, error, children }: { label?: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      {label && <p className="text-xs text-[#888] mb-1">{label}</p>}
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
