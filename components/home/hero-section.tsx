import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(29,49,40,0.62) 0%, rgba(20,36,28,0.75) 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-sans text-white/70 text-sm tracking-[0.25em] uppercase mb-6">
          Locally Owned &amp; Operated
        </p>
        <h1 className="font-serif text-white text-5xl md:text-7xl leading-tight mb-6 text-balance">
          Welcome to<br />
          <span className="italic">Arcadia</span><br />
          Senior Living
        </h1>
        <p className="font-sans text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto text-pretty">
          Locally Owned &amp; Operated Senior Living Communities
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/communities"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-sans font-semibold text-sm tracking-wide hover:bg-[#3d6b4a] transition-all duration-200 shadow-lg"
          >
            Explore Our Communities
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/why-arcadia"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-sans font-semibold text-sm tracking-wide hover:bg-white/10 transition-all duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60" aria-hidden="true">
        <div className="w-px h-12 bg-white/60 animate-pulse" />
      </div>
    </section>
  )
}
