'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scrollTrigger } from '@/lib/animations'
import { useVersion } from '@/context/VersionContext'

export default function AboutPage() {
  const { showOldVersion } = useVersion()

  // OLD: section-padding (py-20 md:py-28 lg:py-32), NEW: py-20 (consistent)
  const sectionPadding = showOldVersion ? 'py-20 md:py-28 lg:py-32' : 'py-20'

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - UPDATED: No background image, bigger WHO IS TAMARA */}
        <section className="relative min-h-[60vh] flex items-center bg-matte-black overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              {/* UPDATED: Much bigger WHO IS TAMARA */}
              <motion.h1
                variants={staggerItem}
                className={`text-gold font-playfair tracking-wider uppercase mb-8 ${
                  showOldVersion ? 'text-2xl md:text-3xl' : 'text-4xl md:text-6xl lg:text-7xl'
                }`}
              >
                Who Is Tamara?
              </motion.h1>

              {/* NEW: Scrolling roles marquee */}
              {showOldVersion ? (
                <motion.p
                  variants={staggerItem}
                  className="text-cream-white/70 text-lg md:text-xl mb-8"
                >
                  Motivational Speaker | Educator | Former Runway Model | Ordained Minister
                </motion.p>
              ) : (
                <div className="relative overflow-hidden py-4">
                  <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-matte-black to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-matte-black to-transparent z-10 pointer-events-none" />
                  <div className="roles-marquee">
                    {[...Array(4)].map((_, setIndex) => (
                      <div key={setIndex} className="flex items-center">
                        {[
                          'Motivational Speaker',
                          'Educator',
                          'Student Success Advocate',
                          'Purpose Strategist',
                          'Ordained Minister',
                          'First-Generation College Graduate',
                          'Brooklyn Native',
                          'Afro-Latina Voice',
                          'Former Runway Model',
                        ].map((role, idx) => (
                          <span key={`${setIndex}-${idx}`} className="flex items-center text-cream-white/70 text-lg md:text-xl whitespace-nowrap">
                            {role}
                            <span className="mx-4 text-gold">•</span>
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          <style jsx global>{`
            .roles-marquee {
              display: flex;
              width: max-content;
              animation: scrollRoles 40s linear infinite;
            }

            @keyframes scrollRoles {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </section>

        {/* UPDATED: Combined Brooklyn story with "From Survival Mode" header */}
        <section className={`${sectionPadding} bg-cream-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about/Tamara Figueroa-Guzman_13172.jpg"
                    alt="Tamara Figueroa-Guzman"
                    fill
                    className="object-cover object-[center_15%]"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
                className="space-y-6"
              >
                {/* UPDATED: Line break at "the Runway" */}
                <motion.h2
                  variants={staggerItem}
                  className="font-playfair text-3xl md:text-4xl text-matte-black"
                >
                  From Survival Mode to<br />the Runway
                </motion.h2>
                {/* UPDATED: Merged intro text */}
                <motion.p variants={staggerItem} className="text-matte-black/80 text-lg leading-relaxed">
                  Before she ever stepped onto a stage, Tamara Figueroa-Guzman was learning how to survive. Growing up in Brooklyn&apos;s Bed-Stuy &ldquo;Do-or-Die&rdquo; neighborhood, she navigated environments that demanded resilience at an early age. While many paths around her led to limitations, Tamara chose a different direction — one driven by discipline, purpose, and vision.
                </motion.p>
                <motion.p variants={staggerItem} className="text-matte-black/80 text-lg leading-relaxed">
                  As a straight-A honor student, she balanced academic excellence with an unexpected opportunity: winning a New York City modeling contract at just sixteen years old. While others saw glamour, Tamara saw something deeper — an escape and powerful metaphor that would later define her life&apos;s work:
                </motion.p>
                <motion.blockquote
                  variants={staggerItem}
                  className="border-l-4 border-gold pl-6 py-4"
                >
                  <p className="font-playfair text-2xl md:text-3xl text-matte-black italic">
                    &ldquo;You can come from the toughest environment and still create your own runway.&rdquo;
                  </p>
                </motion.blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Create Your Own Runway Program - UPDATED: Bigger label, smaller title */}
        <section className={`${sectionPadding} bg-matte-black text-center`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
            >
              {/* UPDATED: A little bigger */}
              <motion.p
                variants={staggerItem}
                className={`text-cream-white/70 uppercase tracking-wider mb-4 ${
                  showOldVersion ? 'text-base md:text-lg' : 'text-lg md:text-xl'
                }`}
              >
                Tamara used her unique life experience to craft her signature program:
              </motion.p>
              {/* UPDATED: A little smaller */}
              <motion.h2
                variants={staggerItem}
                className="font-playfair text-3xl sm:text-4xl md:text-5xl text-gold mb-8"
              >
                &ldquo;Create Your Own Runway&rdquo;
              </motion.h2>
            </motion.div>
          </div>
        </section>

        {/* Story Section 2 - Identity & Heritage */}
        <section className={`${sectionPadding} bg-cream-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
                className="space-y-6 order-2 lg:order-1"
              >
                {/* UPDATED: Line break at "You Are" */}
                <motion.h2
                  variants={staggerItem}
                  className="font-playfair text-3xl md:text-4xl text-matte-black"
                >
                  The Power of Knowing Who<br />You Are
                </motion.h2>
                <motion.p variants={staggerItem} className="text-matte-black/80 text-lg leading-relaxed">
                  As a proud Afro-Latina of Dominican, Panamanian, Jamaican, and African heritage, Tamara&apos;s identity is deeply rooted in family, culture, and community. These foundations shaped her belief that every person — regardless of their circumstances — carries untapped potential waiting to be realized.
                </motion.p>
                <motion.p variants={staggerItem} className="text-matte-black/80 text-lg leading-relaxed">
                  Having lived through adversity that many never see, Tamara doesn&apos;t just speak about perseverance — she embodies it. Her journey reflects a powerful truth she now shares with audiences nationwide:
                </motion.p>
                <motion.blockquote
                  variants={staggerItem}
                  className="border-l-4 border-gold pl-6 py-4"
                >
                  <p className="font-playfair text-2xl md:text-3xl text-matte-black italic">
                    &ldquo;You don&apos;t have to look like what you&apos;ve been through to rise beyond it.&rdquo;
                  </p>
                </motion.blockquote>
                <motion.p variants={staggerItem} className="text-matte-black/80 text-lg leading-relaxed">
                  This lived experience fuels her compassion, authenticity, and rare ability to connect across backgrounds, generations, and cultures.
                </motion.p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
                className="order-1 lg:order-2"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about/Tamara_Figueroa-Fashion-AGadson.jpg"
                    alt="Tamara - Fashion"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Award Winning Speaker Banner - UPDATED: Bigger text, crown icons */}
        <section className="py-16 bg-gold">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
              className="flex items-center justify-center gap-6"
            >
              {/* Crown icon left - UPDATED: Use large crown logo */}
              <Image
                src={showOldVersion ? "/logo/Tamara FG_1X1_Logo_CROWN Only.png" : "/logo/Tamara FG_Logo_CROWN_Large.png"}
                alt="Crown"
                width={showOldVersion ? 40 : 60}
                height={showOldVersion ? 40 : 60}
                className="opacity-80 flex-shrink-0"
              />
              {/* UPDATED: Line break in text */}
              {showOldVersion ? (
                <p className="font-playfair text-2xl md:text-4xl text-matte-black">
                  Creating Her Own Runway From Stage to Stage and Becoming an Award-Winning Motivational Speaker
                </p>
              ) : (
                <p className="font-playfair text-2xl md:text-3xl lg:text-4xl text-matte-black">
                  Creating Her Own Runway From Stage to Stage<br />
                  and Becoming an Award-Winning Motivational Speaker
                </p>
              )}
              {/* Crown icon right - UPDATED: Use large crown logo */}
              <Image
                src={showOldVersion ? "/logo/Tamara FG_1X1_Logo_CROWN Only.png" : "/logo/Tamara FG_Logo_CROWN_Large.png"}
                alt="Crown"
                width={showOldVersion ? 40 : 60}
                height={showOldVersion ? 40 : 60}
                className="opacity-80 flex-shrink-0"
              />
            </motion.div>
          </div>
        </section>

        {/* Story Section 3 - Educator */}
        <section className={`${sectionPadding} bg-cream-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about/Tamara_PreShow_Orange Wrap_1-19-25.jpg"
                    alt="Tamara Pre-Show"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
                className="space-y-6"
              >
                {/* UPDATED: Line break at "the Classroom" */}
                <motion.h2
                  variants={staggerItem}
                  className="font-playfair text-3xl md:text-4xl text-matte-black"
                >
                  Changing Lives Beyond<br />the Classroom
                </motion.h2>
                <motion.p variants={staggerItem} className="text-matte-black/80 text-lg leading-relaxed">
                  As the first in her family to graduate college, an alumna of New York&apos;s Fashion Institute of Technology, Tamara didn&apos;t just break barriers — she opened doors for others to follow.
                </motion.p>
                <motion.p variants={staggerItem} className="text-matte-black/80 text-lg leading-relaxed">
                  Affectionately known as &ldquo;Ms. T,&rdquo; she spent nearly a decade as an educator, where she became known for doing more than teaching skills — she transformed mindsets.
                </motion.p>
                <motion.p variants={staggerItem} className="text-matte-black/80 text-lg leading-relaxed">
                  Through mentorship, guidance, and real-world insight, she helped students:
                </motion.p>
                <motion.ul variants={staggerItem} className="space-y-3">
                  {[
                    'Discover purpose',
                    'Build confidence',
                    'Develop professional identity',
                    'Pursue entrepreneurship',
                    'Walk boldly in their potential',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-matte-black/80 text-lg">
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </motion.ul>
                <motion.p variants={staggerItem} className="text-matte-black/80 text-lg leading-relaxed">
                  Her influence extended beyond the classroom, inspiring higher education achievement throughout her own family and strengthening retention and engagement within the institutions she served.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section - UPDATED: Bigger TAMARA'S GOAL, line break, new image */}
        <section className={`${sectionPadding} bg-matte-black`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
                className="space-y-6"
              >
                {/* UPDATED: Bigger with line accents like Industry Accolades */}
                {showOldVersion ? (
                  <motion.p
                    variants={staggerItem}
                    className="text-gold uppercase tracking-wider text-lg"
                  >
                    Tamara&apos;s Goal
                  </motion.p>
                ) : (
                  <motion.div
                    variants={staggerItem}
                    className="flex items-center gap-4 mb-2"
                  >
                    <div className="h-px w-12 bg-gold" />
                    <p className="text-gold font-medium tracking-widest uppercase text-lg md:text-xl">
                      Tamara&apos;s Goal
                    </p>
                    <div className="h-px w-12 bg-gold" />
                  </motion.div>
                )}
                {/* UPDATED: Line break at "to Rise" */}
                <motion.h2
                  variants={staggerItem}
                  className="font-playfair text-3xl md:text-4xl text-cream-white"
                >
                  Creating Runways for Others<br />to Rise
                </motion.h2>
                <motion.p variants={staggerItem} className="text-cream-white/80 text-lg leading-relaxed">
                  Today, Tamara brings her life story, educational expertise, and transformational framework to stages across the country. As a speaker, advisor, moderator, and mentor, she partners with schools and organizations to strengthen student outcomes, increase retention, and support educator well-being — all through the power of confidence, identity, and purpose.
                </motion.p>
                <motion.p variants={staggerItem} className="text-cream-white/80 text-lg leading-relaxed">
                  Her mission is clear:
                </motion.p>
                <motion.blockquote
                  variants={staggerItem}
                  className="border-l-4 border-gold pl-6 py-4"
                >
                  <p className="font-playfair text-xl md:text-2xl text-cream-white italic">
                    &ldquo;To help millions recognize their worth, rise beyond their circumstances, and create their own runway in life.&rdquo;
                  </p>
                </motion.blockquote>
                <motion.p variants={staggerItem} className="text-cream-white/80 text-lg leading-relaxed">
                  Through her words, she has witnessed healing begin; mindsets shift, and individuals step into possibilities they once believed were not possible.
                </motion.p>
                <motion.p variants={staggerItem} className="text-cream-white/80 text-lg leading-relaxed">
                  Because for Tamara, speaking isn&apos;t just a profession. It&apos;s a calling to share what she once needed to hear — and to empower others to walk boldly toward the lives they were meant to create.
                </motion.p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
              >
                {/* UPDATED: New image */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about/Edit-6951_FINAL.jpg"
                    alt="Tamara's Goal"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section - UPDATED: New text, new button label */}
        <section className={`${sectionPadding} bg-gold`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
            >
              {/* UPDATED: Added "Dream It • Design It • Do It" - bigger with more spacing */}
              <motion.p
                variants={staggerItem}
                className={`text-white font-medium mb-6 ${
                  showOldVersion ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
                }`}
              >
                {showOldVersion ? (
                  <>Dream It • Design It • Do It</>
                ) : (
                  <>Dream It &nbsp; • &nbsp; Design It &nbsp; • &nbsp; Do It</>
                )}
              </motion.p>
              {/* UPDATED: New heading */}
              <motion.h2
                variants={staggerItem}
                className="font-playfair text-3xl md:text-4xl text-matte-black mb-6"
              >
                Ready to Elevate What&apos;s Possible?
              </motion.h2>
              {/* UPDATED: New text */}
              <motion.p
                variants={staggerItem}
                className="text-matte-black/80 text-lg mb-2 max-w-2xl mx-auto"
              >
                Let&apos;s partner to create an experience that empowers your community and drives lasting impact.
              </motion.p>
              {/* UPDATED: Added more line space before this */}
              <motion.p
                variants={staggerItem}
                className={`text-matte-black/80 text-lg max-w-2xl mx-auto ${
                  showOldVersion ? 'mb-8' : 'mt-6 mb-8'
                }`}
              >
                The next breakthrough starts with a conversation.
              </motion.p>
              {/* UPDATED: New button label */}
              <motion.div variants={staggerItem}>
                <Button variant="white" href="/book">
                  Schedule Your Call Today
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
