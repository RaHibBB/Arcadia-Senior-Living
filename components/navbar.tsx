'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/logo-dark.png" width={200} height={40} className="h-10 w-auto" alt="Arcadia Senior Living" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/why-arcadia" className="text-sm text-[#555] hover:text-[#2d5a5c] transition-colors">
              Why Arcadia
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm text-[#555] hover:text-[#2d5a5c] transition-colors cursor-pointer">
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-0 pt-2 min-w-[180px] z-50 transition-all duration-200 ${
                  servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="bg-white border border-gray-100 shadow-md overflow-hidden">
                  <Link
                    href="/services/assisted-living"
                    className="block px-5 py-3 text-sm text-[#555] hover:text-[#2d5a5c] hover:bg-gray-50 transition-colors border-b border-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Assisted Living
                  </Link>
                  <Link
                    href="/services/respite-care"
                    className="block px-5 py-3 text-sm text-[#555] hover:text-[#2d5a5c] hover:bg-gray-50 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    Respite Care
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/our-communities" className="text-sm text-[#555] hover:text-[#2d5a5c] transition-colors">
              Our Communities
            </Link>
            <Link href="/careers" className="text-sm text-[#555] hover:text-[#2d5a5c] transition-colors">
              Careers
            </Link>
            <Link href="/resources" className="text-sm text-[#555] hover:text-[#2d5a5c] transition-colors">
              Resources
            </Link>

            <Link
              href="/contact-us"
              className="text-sm font-light text-white bg-[#2d5a5c] px-5 py-2 hover:bg-[#3a6e70] transition-colors duration-200 tracking-wide"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#333]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-[1300px] mx-auto px-6 py-3 flex flex-col divide-y divide-gray-100">
            <Link
              href="/why-arcadia"
              className="py-3.5 text-sm text-[#333] hover:text-[#4a7c7e] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Why Arcadia
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full py-3.5 text-sm text-[#333] hover:text-[#4a7c7e] transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="bg-gray-50 px-4 pb-3 -mx-6 px-10 space-y-0">
                  <Link
                    href="/services/assisted-living"
                    className="block py-2.5 text-sm text-gray-600 hover:text-[#4a7c7e] transition-colors border-b border-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    Assisted Living
                  </Link>
                  <Link
                    href="/services/respite-care"
                    className="block py-2.5 text-sm text-gray-600 hover:text-[#4a7c7e] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Respite Care
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/our-communities"
              className="py-3.5 text-sm text-[#333] hover:text-[#4a7c7e] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Our Communities
            </Link>
            <Link
              href="/careers"
              className="py-3.5 text-sm text-[#333] hover:text-[#4a7c7e] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/resources"
              className="py-3.5 text-sm text-[#333] hover:text-[#4a7c7e] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </Link>

            <div className="pt-4 pb-2">
              <Link
                href="/contact-us"
                className="block text-center text-sm font-semibold text-white bg-[#2d5a5c] px-5 py-3 hover:bg-[#4a7c7e] transition-colors tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
