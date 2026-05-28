'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Why Arcadia', href: '/why-arcadia' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Assisted Living', href: '/services/assisted-living' },
      { label: 'Respite Care', href: '/services/respite-care' },
    ],
  },
  { label: 'Our Communities', href: '/communities' },
  { label: 'Careers', href: '/careers' },
  { label: 'Resources', href: '/resources' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#FFFCF9]/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className={cn(
                'font-serif text-xl lg:text-2xl font-normal tracking-wide transition-colors',
                scrolled ? 'text-[#2d4a3e]' : 'text-white drop-shadow-sm'
              )}
            >
              Arcadia Senior Living
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 font-sans text-sm font-medium tracking-wide transition-colors hover:text-primary',
                      scrolled ? 'text-foreground' : 'text-white/90 hover:text-white'
                    )}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        servicesOpen && 'rotate-180'
                      )}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                      <div className="bg-[#FFFCF9] border border-border rounded-xl shadow-lg overflow-hidden min-w-44">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-5 py-3 text-sm font-sans text-foreground hover:bg-secondary hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'font-sans text-sm font-medium tracking-wide transition-colors hover:text-primary',
                    scrolled ? 'text-foreground' : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-sans text-sm font-semibold tracking-wide hover:bg-[#3d6b4a] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className={cn('w-6 h-6', scrolled ? 'text-foreground' : 'text-white')} />
            ) : (
              <Menu className={cn('w-6 h-6', scrolled ? 'text-foreground' : 'text-white')} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FFFCF9] border-t border-border shadow-lg">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    className="flex items-center justify-between w-full py-3 px-2 font-sans text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-expanded={mobileServicesOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        mobileServicesOpen && 'rotate-180'
                      )}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 border-l-2 border-border pl-4 mb-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2.5 text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-3 px-2 font-sans text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-4 pt-4 border-t border-border">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-sans text-sm font-semibold tracking-wide hover:bg-[#3d6b4a] transition-colors"
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
