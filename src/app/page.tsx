import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import OutcomesGrid from '@/components/sections/OutcomesGrid'
import Awards from '@/components/sections/Awards'
import Mission from '@/components/sections/Mission'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - "Create Your Own Runway" */}
        <Hero />

        {/* 2. Meet Tamara - Bio Introduction */}
        <Introduction />

        {/* 3. Who We Serve - Outcomes Grid */}
        <OutcomesGrid />

        {/* 4. Award Winning Speaker */}
        <Awards />

        {/* 5. Tamara's Mission - 100K Impact */}
        <Mission />
      </main>
      <Footer />
    </>
  )
}
