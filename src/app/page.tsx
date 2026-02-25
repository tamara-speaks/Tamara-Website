import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import SpeakerReel from '@/components/sections/SpeakerReel'
import TrustedBy from '@/components/sections/TrustedBy'
import OutcomesGrid from '@/components/sections/OutcomesGrid'
import CorePillars from '@/components/sections/CorePillars'
import Awards from '@/components/sections/Awards'
import Mission from '@/components/sections/Mission'
import Testimonials from '@/components/sections/Testimonials'
import FaithService from '@/components/sections/FaithService'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - "Create Your Own Runway" */}
        <Hero />

        {/* 2. Meet Tamara - Bio Introduction */}
        <Introduction />

        {/* 3. Speaker Reel */}
        <SpeakerReel />

        {/* 4. Trusted By */}
        <TrustedBy />

        {/* 5. Who We Serve - Outcomes Grid */}
        <OutcomesGrid />

        {/* 6. Where Breakthroughs Begin - Identity, Confidence, Purpose */}
        <CorePillars />

        {/* 7. Award Winning Speaker */}
        <Awards />

        {/* 8. Tamara's Mission - 100K Impact */}
        <Mission />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Faith & Service - South Africa Slideshow */}
        <FaithService />
      </main>
      <Footer />
    </>
  )
}
