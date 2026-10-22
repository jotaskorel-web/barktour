import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { ExperienceTypesSection } from '@/components/home/ExperienceTypesSection'
import { BenefitsSection } from '@/components/home/BenefitsSection'
import { DestinationsSection } from '@/components/home/DestinationsSection'
import { TripsSection } from '@/components/home/TripsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { InstagramSection } from '@/components/home/InstagramSection'
import { CTASection } from '@/components/home/CTASection'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceTypesSection />
      <BenefitsSection />
      <DestinationsSection />
      <TripsSection />
      <TestimonialsSection />
      <InstagramSection />
      <CTASection />
      <Footer />
    </>
  )
}
