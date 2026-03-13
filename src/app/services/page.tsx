'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { fadeInUp, staggerContainer, staggerItem, scrollTrigger } from '@/lib/animations'

const services = [
  {
    title: 'Keynote Speaking',
    tagline: 'INSPIRING • TRANSFORMATIONAL • IMPACTFUL',
    description: 'Tamara energizes audiences with powerful, story-driven keynotes that help students and leaders recognize their worth, ignite purpose, and step confidently onto their own runway for success—driving stronger engagement, resilience, and lasting outcomes.',
    image: '/services/Edit-6566.jpg',
  },
  {
    title: 'Workshop Facilitation',
    tagline: 'INTERACTIVE • PRACTICAL • EMPOWERING',
    description: 'Move beyond inspiration into measurable change through Tamara\'s interactive workshops, where students and staff gain practical tools to build confidence, regulate stress, and take purposeful action that leads to real growth.',
    image: '/services/DSC09740.jpg',
    objectPosition: '85% center',
  },
  {
    title: 'Conferences',
    tagline: 'ENGAGING • DYNAMIC • MEMORABLE',
    description: 'Tamara elevates conference experience with dynamic sessions that captivate audiences, unify your event theme, and equip attendees with mindset strategies they can immediately apply to grow, lead, and perform at their highest level.',
    image: '/services/645A5661.jpg',
  },
  {
    title: 'Professional Development',
    tagline: 'RESTORATIVE • INSIGHTFUL • RESULTS-DRIVEN',
    description: 'Drawing from her experience as an educator, Tamara delivers powerful development experiences that strengthen staff mindset, reduce burnout, and help leaders cultivate confident, purpose-driven cultures where both students and educators thrive.',
    image: '/services/DSC09702.jpg',
  },
  {
    title: 'Moderator / Host',
    tagline: 'POLISHED • ENGAGING • PROFESSIONAL',
    description: 'Tamara creates seamless, engaging event experiences by guiding conversations with warmth and expertise—keeping audiences energized, discussions meaningful, and programming flowing with confidence and excellence.',
    image: '/services/DSC09842-Edit_FINAL.jpg',
    objectPosition: 'top',
  },
  {
    title: 'Virtual Presentations',
    tagline: 'ENGAGING • INTERACTIVE • ACCESSIBLE',
    description: 'Bring the Create Your Own Runway experience anywhere through high-impact virtual presentations that keep audiences fully engaged while delivering actionable tools that translate into real-world growth, connection, and performance.',
    image: '/services/Virtual Presentations_20260222_160116.jpg',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - UPDATED: Added image above, removed "SERVICES" label */}
        <section className="relative bg-matte-black overflow-hidden">
          {/* UPDATED: Hero image at top (below navbar) */}
          <div className="relative w-full h-[50vh] mt-20">
            <Image
              src="/services/Edit-6473.jpg"
              alt="Tamara Speaking"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-matte-black/30 via-transparent to-matte-black" />
          </div>

          {/* Content below image */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              {/* REMOVED: "Services" label */}
              <motion.h1
                variants={staggerItem}
                className="font-playfair text-4xl sm:text-5xl md:text-6xl text-cream-white mb-6"
              >
                More Than Motivation
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="text-cream-white/80 text-lg md:text-xl leading-relaxed"
              >
                Transformational experiences designed to help students, educators, and leaders build confidence, discover purpose, and create lasting success.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-cream-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={scrollTrigger}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: service.objectPosition || 'center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div>
                      <h2 className="font-playfair text-3xl md:text-4xl text-matte-black mb-2">
                        {service.title}
                      </h2>
                      {/* UPDATED: Capitalized taglines */}
                      <p className="text-gold font-medium tracking-wide">
                        {service.tagline}
                      </p>
                    </div>
                    <p className="text-matte-black/80 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="secondary" href="/book" className="text-matte-black border-matte-black hover:bg-matte-black hover:text-cream-white">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - UPDATED: Yellow heading, bold text, more space above */}
        <section className="py-24 md:py-32 bg-matte-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
            >
              {/* UPDATED: Yellow color, more space above */}
              <motion.h2
                variants={staggerItem}
                className="font-playfair text-3xl md:text-4xl text-gold mb-6 mt-8"
              >
                Ready to Elevate Confidence, Purpose, and Outcomes?
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-cream-white/80 text-lg mb-4 max-w-3xl mx-auto"
              >
                Schools and organizations partner with Tamara because she delivers more than inspiration—she delivers transformation. By taking the time to understand your goals, culture, and audience, she creates tailored experiences with practical tools that empower students and leaders to rise beyond challenges, strengthen resilience, and step confidently onto their own runway for success.
              </motion.p>
              {/* UPDATED: Bold text, yellow color */}
              <motion.p
                variants={staggerItem}
                className="text-gold text-lg mb-8 font-bold"
              >
                Let&apos;s explore how we can partner to create a meaningful and lasting impact together.
              </motion.p>
              <motion.div variants={staggerItem} className="space-y-4">
                <Button variant="primary" href="/book">
                  Schedule a Consultation
                </Button>
                <p className="text-cream-white/60 text-sm">
                  Complimentary consultations designed around your goals.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tagline Banner - UPDATED: Separators instead of periods */}
        <section className="py-16 bg-gold">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
              className="font-playfair text-2xl md:text-3xl text-matte-black"
            >
              Create Confidence • Cultivate Purpose • Change Outcomes.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
