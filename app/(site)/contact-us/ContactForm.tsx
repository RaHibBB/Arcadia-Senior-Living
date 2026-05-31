'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — wire up to your form service (Formspree, etc.)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#f5f5f5] border border-gray-200 p-10 text-center">
        <div className="w-10 h-0.5 bg-[#4a7c7e] mx-auto mb-6" />
        <h3 className="font-serif text-2xl font-light text-[#1a1a1a] mb-3">Thank You!</h3>
        <p className="text-[#555] text-lg leading-relaxed">
          We've received your message and will be in touch shortly. We look forward to connecting with you.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#555] mb-2">
            First Name <span className="text-[#c0392b]">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            className="w-full border border-gray-300 px-4 py-3 text-[#333] text-sm focus:outline-none focus:border-[#4a7c7e] transition-colors"
            placeholder="Jane"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#555] mb-2">
            Last Name <span className="text-[#c0392b]">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            required
            className="w-full border border-gray-300 px-4 py-3 text-[#333] text-sm focus:outline-none focus:border-[#4a7c7e] transition-colors"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#555] mb-2">
            Email <span className="text-[#c0392b]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 px-4 py-3 text-[#333] text-sm focus:outline-none focus:border-[#4a7c7e] transition-colors"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-[#555] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full border border-gray-300 px-4 py-3 text-[#333] text-sm focus:outline-none focus:border-[#4a7c7e] transition-colors"
            placeholder="(503) 000-0000"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#555] mb-2">
          Community of Interest
        </label>
        <select
          name="community"
          className="w-full border border-gray-300 px-4 py-3 text-[#333] text-sm focus:outline-none focus:border-[#4a7c7e] transition-colors bg-white"
        >
          <option value="">Select a community...</option>
          <option value="portland">Arcadia Senior Living – Portland, OR</option>
          <option value="washougal">Arcadia Lookout Ridge – Washougal, WA</option>
          <option value="both">Both Communities</option>
        </select>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-[#555] mb-2">
          How Can We Help? <span className="text-[#c0392b]">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full border border-gray-300 px-4 py-3 text-[#333] text-sm focus:outline-none focus:border-[#4a7c7e] transition-colors resize-none"
          placeholder="Tell us about your loved one's needs, timeline, or any questions you have..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#2d5a5c] text-white py-4 text-sm font-medium uppercase tracking-widest hover:bg-[#4a7c7e] transition-colors duration-200 disabled:opacity-60"
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Or call us directly — we&apos;re happy to answer any questions.
      </p>
    </form>
  )
}
