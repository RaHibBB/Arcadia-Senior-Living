import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Arcadia Senior Living Communities',
  description:
    'Working at Arcadia Senior Living means knowing your work truly matters. Join our growing, locally owned community and help redefine senior living.',
}

export default function CareersPage() {
  return (
    <main>

      {/* ── INTRO ── */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-[#333] mb-6 uppercase tracking-wide">
            Come Join Our Team!
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            Working at Arcadia Senior Living means knowing your work truly matters. Every day, you&apos;ll see the
            impact of your care in the smiles, comfort, and joy of our residents. As a growing, locally owned
            community, we are redefining senior living by creating an environment where both residents and team
            members can thrive together.
          </p>
        </div>
      </section>

      {/* ── JOB CARDS ── */}
      <section className="bg-[#f5f5f5] pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Portland */}
            <div className="bg-white rounded shadow overflow-hidden border border-gray-200">
              <img
                src="/images/portland-exterior.jpg"
                className="w-full h-56 object-cover"
                alt="Arcadia Senior Living Portland"
              />
              <div className="p-6">
                <h2 className="font-serif font-bold text-[#4a7c7e] text-base uppercase tracking-wide mb-4">
                  Arcadia Senior Living – Portland, Oregon
                </h2>
                <a
                  href="https://arcadiaseniorhousingllc.easyapply.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c0392b] text-sm font-semibold uppercase tracking-wide hover:underline inline-flex items-center gap-1"
                >
                  Careers at Arcadia Portland <span>→</span>
                </a>
              </div>
            </div>

            {/* Washougal */}
            <div className="bg-white rounded shadow overflow-hidden border border-gray-200">
              <img
                src="/images/washougal-exterior.png"
                className="w-full h-56 object-cover"
                alt="Arcadia Lookout Ridge Washougal"
              />
              <div className="p-6">
                <h2 className="font-serif font-bold text-[#4a7c7e] text-base uppercase tracking-wide mb-4">
                  Arcadia Lookout Ridge – Washougal, Washington
                </h2>
                <a
                  href="https://arcadiaatlookoutridgealoperato.easyapply.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c0392b] text-sm font-semibold uppercase tracking-wide hover:underline inline-flex items-center gap-1"
                >
                  Careers at Arcadia Washougal <span>→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <section className="bg-[#f5f5f5] pb-8">
        <div className="max-w-5xl mx-auto px-4 space-y-2">
          <div className="border-t-2 border-[#c0392b] w-1/2" />
          <div className="border-t-2 border-[#c0392b] w-1/2 ml-auto" />
        </div>
      </section>

    </main>
  )
}
