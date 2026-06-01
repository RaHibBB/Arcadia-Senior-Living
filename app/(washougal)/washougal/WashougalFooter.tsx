import Link from 'next/link'

export default function WashougalFooter() {
  return (
    <footer className="bg-[#2d5a5c] text-white">

      {/* ── TOP: logo + copyright ── */}
      <div className="max-w-[1340px] mx-auto px-6 lg:px-10 py-8 flex items-center justify-between flex-wrap gap-4">
        <Link href="/washougal">
          <img
            src="/images/washougal/washougal-logo.png"
            className="h-14 w-auto object-contain brightness-0 invert"
            alt="Arcadia Senior Living Washougal"
          />
        </Link>
        <h5 className="text-white font-bold text-base md:text-lg">2026&copy; Arcadia Senior Living</h5>
      </div>

      {/* ── DIVIDER ── */}
      <div className="max-w-[1340px] mx-auto px-6 lg:px-10">
        <div className="h-px bg-white/20" />
      </div>

      {/* ── MAIN GRID (3 columns) ── */}
      <div className="max-w-[1340px] mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Col 1 — social + links + accessibility */}
          <div className="flex flex-col gap-6">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { href: 'https://www.facebook.com/arcadiasenior/', label: 'Facebook', svg: <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>, vb: '0 0 512 512' },
                { href: 'https://www.instagram.com/arcadiaseniorliving/', label: 'Instagram', svg: <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>, vb: '0 0 448 512' },
                { href: 'https://www.youtube.com/channel/UCmVOuyNEzZeysfWk8W_yYmw', label: 'YouTube', svg: <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>, vb: '0 0 576 512' },
                { href: 'https://www.tiktok.com/@arcadiaseniorliving', label: 'TikTok', svg: <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/>, vb: '0 0 448 512' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors">
                  <svg className="w-4 h-4 fill-white" viewBox={s.vb} xmlns="http://www.w3.org/2000/svg">{s.svg}</svg>
                </a>
              ))}
            </div>

            {/* Links */}
            <ul className="space-y-3">
              {[
                { label: 'About Arcadia Senior Living Communities', href: '/why-arcadia' },
                { label: 'News & Events', href: '/washougal/news-events' },
                { label: 'Careers',       href: '/careers' },
                { label: 'Resources',     href: '/resources' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/80 text-base hover:text-white transition-colors hover:underline underline-offset-2">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Accessibility icons */}
            <div className="flex items-center gap-5">
              <a href="https://fhco.org/wp-content/uploads/2021/10/SeniorHousingGuide_FHCO_2022.pdf" target="_blank" rel="noopener noreferrer" title="Fair Housing Guide" className="text-white/50 hover:text-white transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256h448v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"/></svg>
              </a>
              <a href="https://arcadiaretirement.com/pet-friendly/" target="_blank" rel="noopener noreferrer" title="Pet Friendly" className="text-white/50 hover:text-white transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.67-33.89 75.32 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.67 33.89-75.32zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.52 72.01 77.46 63.87zm190.84 0c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.22-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36zm52.56 12.61c-10.4 34.65 4.77 68.36 33.89 75.32 29.12 6.96 61.16-15.48 71.56-50.13 10.4-34.65-4.77-68.36-33.89-75.32-29.12-6.96-61.16 15.48-71.56 50.13z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 — community description */}
          <div className="text-center md:border-x md:border-white/10 md:px-10">
            <h4 className="text-base font-bold uppercase tracking-widest mb-5" style={{ color: '#D6A156' }}>
              Arcadia Senior Living Communities
            </h4>
            <p className="text-white/75 text-base leading-relaxed">
              Arcadia Senior Living Lookout Ridge in Washougal is part of the Arcadia Senior Living Communities providing assisted living and respite services to our amazing residents.
            </p>
          </div>

          {/* Col 3 — contact + legal */}
          <div className="flex flex-col gap-5 md:items-end">
            <ul className="space-y-4">
              <li>
                <a href="tel:+13603351238" className="flex items-center gap-3 text-base text-white/80 hover:text-white transition-colors md:justify-end">
                  <svg className="w-5 h-5 fill-[#D6A156] shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
                  </svg>
                  Call 24/7 – <strong className="text-white ml-1">(360) 335-1238</strong>
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/m57wfQGeJYyYFKsL6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base text-white/80 hover:text-white transition-colors md:justify-end">
                  <svg className="w-5 h-5 fill-[#D6A156] shrink-0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                  </svg>
                  2300 W 9th St, Washougal, WA 98671
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-4 text-base text-white/60 md:justify-end flex-wrap">
              <Link href="/privacy" className="hover:text-white transition-colors hover:underline underline-offset-2">Privacy Policy</Link>
              <span className="text-white/30">|</span>
              <a href="https://arcadiaretirement.com/washougal/ccpa/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:underline underline-offset-2">CCPA</a>
              <span className="text-white/30">|</span>
              <a href="https://arcadiaretirement.com/washougal/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:underline underline-offset-2">Site Map</a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}
