import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CareersSection() {
  return (
    <section
      className="bg-[#f0f5f1] py-24 px-6"
      aria-labelledby="careers-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=560&width=640"
                alt="Arcadia Senior Living team members"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 bg-primary text-white rounded-xl p-6 shadow-lg max-w-xs hidden md:block">
              <p className="font-serif text-lg leading-snug">
                &ldquo;Caring for others is the most meaningful work there is.&rdquo;
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              Join Our Team
            </p>
            <h2
              id="careers-heading"
              className="font-serif text-[#2d4a3e] text-4xl md:text-5xl leading-tight mb-6 text-balance"
            >
              Bring Your Heart &amp; Make an Impact
            </h2>
            <div className="w-16 h-0.5 bg-primary rounded-full mb-8" />
            <div className="space-y-4 font-sans text-muted-foreground text-base leading-relaxed">
              <p>
                At Arcadia Senior Living, our team members are the heart of everything we do. We believe
                that the best care comes from people who genuinely love what they do and who they do it
                for.
              </p>
              <p>
                Whether you&apos;re a caregiver, a culinary professional, an activity coordinator, or an
                administrator — there&apos;s a place for you here. We offer competitive benefits, meaningful
                work, and a culture built on respect, compassion, and joy.
              </p>
              <p>
                Join a locally owned team where your contributions are seen, valued, and celebrated every
                single day.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-sans font-semibold text-sm tracking-wide hover:bg-[#3d6b4a] transition-all duration-200 shadow-md"
              >
                Join Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers#openings"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-sans font-semibold text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-200"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
