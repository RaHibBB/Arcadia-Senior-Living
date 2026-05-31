'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'

const navLinks = [
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Assisted Living', href: '/washougal/assisted-living' },
      { label: 'Respite Care',    href: '/washougal/respite-care' },
    ],
  },
  { label: 'Activities & Amenities', href: '/washougal#Amenities' },
  { label: 'Floor Plans',            href: '/washougal/floor-plans' },
  { label: 'Pricing',                href: '/washougal#pricing' },
  { label: 'Photos',                 href: '/washougal/photos' },
  { label: 'Contact',                href: '/washougal/contact-us' },
]

export default function WashougalHeader() {
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)
  const [scrolled,    setScrolled]    = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>

      {/* ── TOP BAR ── */}
      <div className="hidden md:block bg-[#2d5a5c]">
        <div className="max-w-[1340px] mx-auto px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://arcadiaretirement.com/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 group">
              <Image
                src="/images/arcadia-communities-logo.png"
                width={28} height={28}
                className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                alt="Arcadia Communities"
              />
              <span className="text-white/70 text-xs tracking-wide group-hover:text-white transition-colors">
                An Arcadia Community
              </span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#c06448]" />
            <span className="text-white/60 text-xs tracking-wide">Pricing &amp; Availability</span>
            <a href="tel:+13603351238"
              className="text-white text-xs font-bold tracking-wide hover:text-[#c06448] transition-colors ml-1">
              (360) 335-1238
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1340px] mx-auto px-8">
          <div className="flex items-center justify-between h-[76px] gap-8">

            {/* Logo */}
            <Link href="/washougal" className="flex-shrink-0 py-2">
              <img
                src="https://arcadiaretirement.com/washougal/wp-content/uploads/sites/5/2025/08/Arcadia-PORTLAND.png"
                className="h-11 w-auto object-contain"
                alt="Arcadia Senior Living Washougal"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {navLinks.map(link => (
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServiceOpen(true)}
                    onMouseLeave={() => setServiceOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2.5 text-[15px] text-[#444] font-medium hover:text-[#2d5a5c] transition-colors relative group">
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d5a5c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </button>
                    <div className={`absolute top-full left-0 pt-1 min-w-[200px] z-50 transition-all duration-150 ${serviceOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                      <div className="bg-white shadow-xl border border-gray-100 overflow-hidden">
                        {link.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3.5 text-[15px] text-[#444] font-medium hover:text-[#2d5a5c] hover:bg-[#f0f8f8] transition-colors border-b border-gray-50 last:border-0"
                            onClick={() => setServiceOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2.5 text-[15px] text-[#444] font-medium hover:text-[#2d5a5c] transition-colors whitespace-nowrap relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d5a5c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                )
              ))}
            </nav>

            {/* CTA button */}
            <div className="hidden lg:block flex-shrink-0">
              <a
                href="/washougal/tour"
                className="inline-flex items-center px-5 py-2.5 text-[15px] font-semibold text-[#c06448] border-2 border-[#c06448] hover:bg-[#c06448] hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                Tour Our Home
              </a>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <a href="tel:+13603351238"
                className="hidden sm:flex items-center gap-1.5 text-sm font-bold text-[#2d5a5c]">
                <Phone className="w-4 h-4" />
                (360) 335-1238
              </a>
              <button
                className="p-2 rounded-md text-[#333] hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="sm:hidden flex items-center gap-2 px-6 py-4 bg-[#2d5a5c]">
              <Phone className="w-4 h-4 text-white" />
              <a href="tel:+13603351238" className="text-white font-bold text-base">(360) 335-1238</a>
            </div>
            <nav className="px-6 py-2">
              <div className="border-b border-gray-100">
                <p className="py-2 text-xs uppercase tracking-widest text-gray-400 font-semibold mt-2">Services</p>
                <Link href="/washougal/assisted-living" className="block py-3 text-base text-[#333] font-medium hover:text-[#2d5a5c] transition-colors pl-3 border-l-2 border-transparent hover:border-[#2d5a5c]" onClick={() => setMobileOpen(false)}>
                  Assisted Living
                </Link>
                <Link href="/washougal/respite-care" className="block py-3 text-base text-[#333] font-medium hover:text-[#2d5a5c] transition-colors pl-3 border-l-2 border-transparent hover:border-[#2d5a5c]" onClick={() => setMobileOpen(false)}>
                  Respite Care
                </Link>
              </div>
              <div className="py-2 space-y-1">
                {[
                  { label: 'Activities & Amenities', href: '/washougal#Amenities' },
                  { label: 'Floor Plans',            href: '/washougal/floor-plans' },
                  { label: 'Pricing',                href: '/washougal#pricing' },
                  { label: 'Photos',                 href: '/washougal/photos' },
                  { label: 'Contact',                href: '/washougal/contact-us' },
                ].map(l => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block py-3 text-base text-[#333] font-medium hover:text-[#2d5a5c] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="py-4 border-t border-gray-100">
                <a
                  href="/washougal/tour"
                  className="block text-center text-base font-bold text-white bg-[#c06448] px-5 py-3.5 hover:bg-[#a85038] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Tour Our Home
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>

    </header>
  )
}
