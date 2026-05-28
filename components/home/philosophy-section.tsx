import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const features = [
  {
    title: 'Wellness At The Core',
    description:
      'Holistic wellness programs that nurture body, mind, and spirit — from fitness classes to meditation and everything in between.',
    href: '/why-arcadia/#wellness',
  },
  {
    title: 'Our Philosophy of Care',
    description:
      'We believe every individual deserves to live with dignity, respect, and the freedom to choose their own path forward.',
    href: '/why-arcadia/#philosophy',
  },
  {
    title: 'Community Connected',
    description:
      'Vibrant social calendars, curated outings, and meaningful connections that make every resident feel truly at home.',
    href: '/why-arcadia/#community',
  },
]

export default function PhilosophySection() {
  return (
    <section className="bg-white py-24 px-6" aria-labelledby="philosophy-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div className="lg:sticky lg:top-32">
            <p className="font-sans text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              The Arcadia Way
            </p>
            <h2
              id="philosophy-heading"
              className="font-serif text-[#2d4a3e] text-4xl md:text-5xl leading-tight text-balance"
            >
              The Way Senior Living Should Feel
            </h2>
            <div className="mt-8 w-16 h-0.5 bg-primary rounded-full" />
            <p className="font-sans text-muted-foreground text-lg leading-relaxed mt-6 text-pretty">
              We envision a place where warmth meets wisdom — where every hallway, every meal, every
              morning feels like coming home.
            </p>
            <Link
              href="/why-arcadia"
              className="inline-flex items-center gap-2 mt-8 font-sans text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right column — feature cards */}
          <div className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group block p-8 rounded-2xl border border-border bg-background hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-sans text-primary/50 text-xs font-semibold tracking-widest uppercase mb-3 block">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-[#2d4a3e] text-xl mb-2 group-hover:text-primary transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-border group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
