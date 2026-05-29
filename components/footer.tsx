import Link from 'next/link'
import { Warehouse, Accessibility, PawPrint } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2d5a5c] text-white">

      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-[#c06448] via-[#c06448] to-[#4a7c7e]" />

      {/* Logo */}
      <div className="max-w-[1300px] mx-auto px-8 pt-12 pb-8">
        <Link href="/">
          <div className="bg-white inline-block px-5 py-2.5 hover:opacity-90 transition-opacity">
            <img src="/images/logo-dark.png" className="h-11 w-auto" alt="Arcadia Senior Living" />
          </div>
        </Link>
      </div>

      {/* Two-tone divider */}
      <div className="max-w-[1300px] mx-auto px-8">
        <div className="flex">
          <div className="w-1/2 h-[2px] bg-[#c06448]" />
          <div className="w-1/2 h-[2px] bg-white/15" />
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-[1300px] mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1fr] gap-12 md:gap-20">

          {/* Col 1 — Links + icons */}
          <div className="flex flex-col gap-10">
            <ul className="space-y-5">
              {[
                { label: 'About Arcadia Senior Living', href: '/why-arcadia' },
                { label: 'Careers', href: '/careers' },
                { label: 'Resources', href: '/resources' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-base text-white/70 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <a href="https://fhco.org/wp-content/uploads/2021/10/SeniorHousingGuide_FHCO_2022.pdf" target="_blank" rel="noopener noreferrer" title="Fair Housing Guide (PDF)" className="text-white/40 hover:text-white transition-colors">
                <Warehouse className="w-[22px] h-[22px]" />
              </a>
              <a href="https://www.droregon.org/disability-rights-oregon-resources/fair-housing-handbook-reasonable-accommodations-modifications" target="_blank" rel="noopener noreferrer" title="Disability Rights Oregon" className="text-white/40 hover:text-white transition-colors">
                <Accessibility className="w-[22px] h-[22px]" />
              </a>
              <a href="/pet-friendly" title="Pet Friendly Communities" className="text-white/40 hover:text-white transition-colors">
                <PawPrint className="w-[22px] h-[22px]" />
              </a>
            </div>
          </div>

          {/* Col 2 — Communities (centered) */}
          <div className="text-center md:border-x md:border-white/10 md:px-12">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-5">
              Arcadia Senior Living Communities
            </h4>
            <p className="text-base text-white/55 leading-relaxed">
              Arcadia Senior Living communities across Oregon &amp; Washington provide compassionate
              care and services, including independent living, assisted living, and respite care.
            </p>
          </div>

          {/* Col 3 — Legal (right-aligned) */}
          <div className="flex md:justify-end">
            <ul className="space-y-5 md:text-right">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'CCPA', href: '/ccpa-cpra' },
                { label: 'Site Map', href: '/sitemap.xml' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-base text-white/70 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1300px] mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-white/30">
            &copy; 2026 Arcadia Senior Living. All rights reserved.
          </p>
          <p className="text-sm text-white/30">
            Designed by{' '}
            <a href="https://greatnessdigital.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors underline underline-offset-2">
              Greatness Digital
            </a>
          </p>
        </div>
      </div>

    </footer>
  )
}
