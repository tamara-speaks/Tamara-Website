'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scrollTrigger } from '@/lib/animations'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Who Is Tamara? */}
        <section className="relative min-h-screen flex items-center bg-matte-black overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about/Tamara_DSC09837_FINAL.jpg"
              alt="Tamara Figueroa-Guzman"
              fill
              priority
              className="object-cover object-[center_15%] opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-matte-black/90 via-matte-black/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.p
                variants={staggerItem}
                className="text-gold font-medium tracking-wider uppercase mb-4"
              >
                Who Is Tamara?
              </motion.p>
              <motion.h1
                variants={staggerItem}
                className="font-playfair text-4xl sm:text-5xl md:text-6xl text-cream-white mb-6"
              >
                From Survival Mode to the Runway
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="text-cream-white/80 text-lg md:text-xl leading-relaxed"
              >
                Before she ever stepped onto a stage, Tamara Figueroa-Guzman was learning how to survive.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story Section 1 - Brooklyn Origins */}
        <section className="section-padding bg-cream-white">
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
                <motion.p variants={staggerItem} className="text-matte-black/80 text-lg leading-relaxed">
                  Growing up in Brooklyn&apos;s Bed-Stuy &ldquo;Do-or-Die&rdquo; neighborhood, she navigated environments that demanded resilience at an early age. While many paths around her led to limitations, Tamara chose a different direction — one driven by discipline, purpose, and vision.
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

        {/* Create Your Own Runway Program */}
        <section className="section-padding bg-matte-black text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
            >
              <motion.p
                variants={staggerItem}
                className="text-cream-white/70 uppercase tracking-wider mb-4"
              >
                Tamara used her unique life experience to craft her signature program:
              </motion.p>
              <motion.h2
                variants={staggerItem}
                className="font-playfair text-4xl sm:text-5xl md:text-6xl text-gold mb-8"
              >
                &ldquo;Create Your Own Runway&rdquo;
              </motion.h2>
            </motion.div>
          </div>
        </section>

        {/* Story Section 2 - Identity & Heritage */}
        <section className="section-padding bg-cream-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
                className="space-y-6 order-2 lg:order-1"
              >
                <motion.h2
                  variants={staggerItem}
                  className="font-playfair text-3xl md:text-4xl text-matte-black"
                >
                  The Power of Knowing Who You Are
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

        {/* Award Winning Speaker Banner */}
        <section className="py-16 bg-gold">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
              className="font-playfair text-2xl md:text-3xl text-matte-black"
            >
              Creating Her Own Runway From Stage to Stage and Becoming an Award-Winning Motivational Speaker
            </motion.p>
          </div>
        </section>

        {/* Story Section 3 - Educator */}
        <section className="section-padding bg-cream-white">
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
                <motion.h2
                  variants={staggerItem}
                  className="font-playfair text-3xl md:text-4xl text-matte-black"
                >
                  Changing Lives Beyond the Classroom
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

        {/* Mission Section */}
        <section className="section-padding bg-matte-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
                className="space-y-6"
              >
                <motion.p
                  variants={staggerItem}
                  className="text-gold uppercase tracking-wider"
                >
                  Tamara&apos;s Goal
                </motion.p>
                <motion.h2
                  variants={staggerItem}
                  className="font-playfair text-3xl md:text-4xl text-cream-white"
                >
                  Creating Runways for Others to Rise
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
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about/DSC09849-Edit.jpg"
                    alt="Tamara's Goal"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gold">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
            >
              <motion.h2
                variants={staggerItem}
                className="font-playfair text-3xl md:text-4xl text-matte-black mb-6"
              >
                Ready to Create Your Own Runway?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-matte-black/80 text-lg mb-8 max-w-2xl mx-auto"
              >
                Partner with Tamara to bring transformation to your school, organization, or event.
              </motion.p>
              <motion.div variants={staggerItem}>
                <Button variant="white" href="/book">
                  Book Tamara Today
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
