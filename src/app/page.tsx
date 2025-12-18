import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ClientLogosSection } from '@/components/sections/ClientLogosSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TechnologyStackSection } from '@/components/sections/TechnologyStackSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ClientLogosSection />
      <ServicesSection />
      <TechnologyStackSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
