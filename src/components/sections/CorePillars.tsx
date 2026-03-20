'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInLeft, staggerContainer, staggerItem, scrollTrigger } from '@/lib/animations'

const pillars = [
  {
    title: 'Identity & Self-Worth',
    description: 'Helping individuals understand their value, strengthen resilience, and overcome internal barriers.',
    tagline: 'Know Who You Are.',
  },
  {
    title: 'Confidence Development',
    description: 'Building the courage and mindset; students and leaders need to perform, lead, and rise.',
    tagline: 'Believe In What\'s Possible.',
  },
  {
    title: 'Purpose-Driven Success',
    description: 'Equipping audiences with clarity, direction, and motivation to achieve meaningful outcomes.',
    tagline: 'Move Forward With Direction.',
  },
]

export default function CorePillars() {
  return (
    <section className="py-20 bg-cream-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-matte-black mb-4">
            Where{' '}
            <span className="text-gold">Breakthroughs</span>{' '}
            Begin
          </h2>
          <p className="text-matte-black/70 text-xl md:text-2xl font-playfair max-w-3xl mx-auto">
            When Identity Grows, Confidence Rises, and Purpose Takes Flight.
          </p>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-matte-black/80 text-lg leading-relaxed">
            Tamara&apos;s Create Your Own Runway experiences focus on the three pillars that drive engagement, resilience, leadership, and long-term success.
          </p>
        </motion.div>

        {/* Image + Pillars Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={scrollTrigger}
          >
            <div className="relative aspect-[3/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/services/DSC09846-Edit_FINAL.jpg"
                alt="Tamara Figueroa-Guzman"
                fill
                className="object-cover object-[center_35%]"
              />
              {/* Gold accent border */}
              <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl" />
            </div>
          </motion.div>

          {/* Pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollTrigger}
            className="space-y-8"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={staggerItem}
                className="relative pl-6 border-l-4 border-gold"
              >
                <h3 className="font-playfair text-xl md:text-2xl text-matte-black mb-2">
                  {pillar.title}
                </h3>
                <p className="text-matte-black/70 text-lg leading-relaxed mb-3">
                  {pillar.description}
                </p>
                <p className="text-gold font-semibold italic text-lg">
                  {pillar.tagline}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
