import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Assisted Living',
    description:
      'Thoughtfully designed support that preserves independence while providing the personalized assistance needed for a fulfilling daily life.',
    href: '/services/assisted-living',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Respite Care',
    description:
      'Short-term care in a warm, welcoming environment — offering rest for caregivers and enrichment for your loved one.',
    href: '/services/respite-care',
    image: '/placeholder.svg?height=400&width=600',
  },
]

export default function ServicesSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: '#2d4a3e' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-white/50 text-sm tracking-[0.2em] uppercase font-semibold mb-4">
            How We Serve
          </p>
          <h2
            id="services-heading"
            className="font-serif text-white text-4xl md:text-5xl leading-tight text-balance"
          >
            Life in an Arcadia<br />Senior Living Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} at Arcadia Senior Living`}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d4a3e] via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-white text-2xl mb-3 group-hover:text-white/90">
                  {service.title}
                </h3>
                <p className="font-sans text-white/70 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-white/80 text-sm font-semibold group-hover:text-white group-hover:gap-3 transition-all duration-200">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
