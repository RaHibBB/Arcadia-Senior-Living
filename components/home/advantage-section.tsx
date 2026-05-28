import { Heart, Sparkles, Smile } from 'lucide-react'

const cards = [
  {
    icon: Heart,
    title: 'Care',
    description:
      'Personalized, compassionate care tailored to each resident\'s unique needs, delivered by a dedicated team who truly knows you.',
  },
  {
    icon: Sparkles,
    title: 'Purpose',
    description:
      'Enriching programs, meaningful activities, and lifelong learning opportunities that keep every day full of intention.',
  },
  {
    icon: Smile,
    title: 'Happiness',
    description:
      'Chef-crafted dining, vibrant social events, and beautiful spaces designed to spark joy and foster genuine belonging.',
  },
]

export default function AdvantageSection() {
  return (
    <section className="bg-[#f0f5f1] py-24 px-6" aria-labelledby="advantage-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-primary text-sm tracking-[0.2em] uppercase font-semibold mb-4">
            Our Difference
          </p>
          <h2
            id="advantage-heading"
            className="font-serif text-[#2d4a3e] text-4xl md:text-5xl leading-tight mb-6 text-balance"
          >
            The Arcadia Senior Living Advantage
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed text-pretty">
            At Arcadia Senior Living, life isn&apos;t winding down, it&apos;s just beginning. Locally owned and
            warmly boutique in spirit, Arcadia offers personalized care, chef-crafted dining, and endless
            opportunities to discover joy, purpose, and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#f0f5f1] flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-[#2d4a3e] text-2xl mb-3">{card.title}</h3>
                <p className="font-sans text-muted-foreground text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
