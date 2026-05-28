import Navbar from '@/components/navbar'
import HeroSection from '@/components/home/hero-section'
import AdvantageSection from '@/components/home/advantage-section'
import PhilosophySection from '@/components/home/philosophy-section'
import ServicesSection from '@/components/home/services-section'
import CommunitiesSection from '@/components/home/communities-section'
import CareersSection from '@/components/home/careers-section'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AdvantageSection />
        <PhilosophySection />
        <ServicesSection />
        <CommunitiesSection />
        <CareersSection />
      </main>
      <Footer />
    </>
  )
}
