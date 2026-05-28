import Link from 'next/link'

const footerLinks = {
  company: [
    { label: 'Why Arcadia', href: '/why-arcadia' },
    { label: 'Our Communities', href: '/communities' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Resources', href: '/resources' },
  ],
  services: [
    { label: 'Assisted Living', href: '/services/assisted-living' },
    { label: 'Respite Care', href: '/services/respite-care' },
  ],
  communities: [
    { label: 'Portland, OR', href: '/communities/portland' },
    { label: 'Lookout Ridge – Washougal, WA', href: '/communities/lookout-ridge' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2d4a3e' }} aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-5">
              <span className="font-serif text-white text-xl tracking-wide leading-snug">
                Arcadia<br />Senior Living
              </span>
            </Link>
            <p className="font-sans text-white/60 text-sm leading-relaxed">
              Locally owned and operated senior living communities dedicated to warmth, purpose, and exceptional care.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="tel:+15035550100"
                className="font-sans text-white/80 text-sm hover:text-white transition-colors"
                aria-label="Call Arcadia Senior Living"
              >
                (503) 555-0100
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h3 className="font-sans text-white text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Our Communities
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.communities.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 rounded-full bg-primary text-white font-sans text-sm font-semibold hover:bg-[#3d6b4a] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/50 text-sm">
            2026&copy; Arcadia Senior Living. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-5" aria-label="Legal navigation">
            {[
              { label: 'About', href: '/about' },
              { label: 'Careers', href: '/careers' },
              { label: 'Resources', href: '/resources' },
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'CCPA', href: '/ccpa' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-white/50 text-xs hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
