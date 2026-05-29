import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2d5a5c] text-white">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <img src="/images/logo-light.png" className="h-9 w-auto" alt="Arcadia Senior Living" />
        <p className="text-sm text-white/40">2026 &copy; Arcadia Senior Living</p>
      </div>

      <div className="border-t border-white/10" />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/35 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/why-arcadia" className="text-sm text-white/55 hover:text-white transition-colors">
                  About Arcadia Senior Living
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-white/55 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-white/55 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/35 mb-4">About Our Communities</h4>
            <p className="text-sm text-white/55 leading-relaxed">
              Arcadia Senior Living communities across Oregon &amp; Washington provide compassionate care
              including assisted living and respite care.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/35 mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="text-sm text-white/55 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/ccpa-cpra" className="text-sm text-white/55 hover:text-white transition-colors">
                  CCPA / CPRA
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-sm text-white/55 hover:text-white transition-colors">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
