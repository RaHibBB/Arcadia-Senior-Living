import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const communities = [
  {
    name: 'Arcadia Senior Living',
    location: 'Portland, OR',
    description:
      'Nestled in the heart of Portland, our flagship community combines urban convenience with the warmth and comfort of a true home.',
    image: '/placeholder.svg?height=480&width=720',
    href: '/communities/portland',
  },
  {
    name: 'Arcadia Lookout Ridge',
    location: 'Washougal, WA',
    description:
      'Set among the stunning Columbia River Gorge views, Lookout Ridge offers serene, boutique living surrounded by breathtaking natural beauty.',
    image: '/placeholder.svg?height=480&width=720',
    href: '/communities/lookout-ridge',
  },
]

export default function CommunitiesSection() {
  return (
    <section className="bg-background py-24 px-6" aria-labelledby="communities-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-4">
            Find Your Home
          </p>
          <h2
            id="communities-heading"
            className="font-serif text-[#2d4a3e] text-4xl md:text-5xl leading-tight text-balance"
          >
            Our Communities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {communities.map((community) => (
            <Link
              key={community.name}
              href={community.href}
              className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={community.image}
                  alt={`${community.name} in ${community.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d4a3e]/40 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-1.5 text-primary mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="font-sans text-sm font-medium">{community.location}</span>
                </div>
                <h3 className="font-serif text-[#2d4a3e] text-2xl mb-3 group-hover:text-primary transition-colors duration-200">
                  {community.name}
                </h3>
                <p className="font-sans text-muted-foreground text-base leading-relaxed mb-5">
                  {community.description}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  Explore Community
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/communities"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-sans font-semibold text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-200"
          >
            All Our Communities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
