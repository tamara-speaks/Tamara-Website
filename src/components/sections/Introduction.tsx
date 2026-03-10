'use client'

import { motion } from 'framer-motion'
import { fadeInUp, scrollTrigger } from '@/lib/animations'
import Button from '@/components/ui/Button'

export default function Introduction() {
  return (
    <section id="about" className="section-padding bg-cream-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          {/* Section Label */}
          <motion.div
            className="inline-flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-12 bg-gold" />
            <p className="text-matte-black font-medium tracking-widest uppercase text-lg md:text-xl">
              Meet Tamara Figueroa-Guzman
            </p>
            <div className="h-px w-12 bg-gold" />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="font-playfair text-3xl sm:text-4xl md:text-5xl text-gold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Power & Purpose Strategist
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-matte-black/60 text-xs md:text-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Motivational Speaker | Educator | Creator of the Create Your Own Runway™ Framework
          </motion.p>

          {/* Bio Text */}
          <motion.div
            className="text-matte-black/70 text-lg md:text-xl leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              From surviving Brooklyn&apos;s toughest environments to stepping onto worldwide stages,
              Tamara Figueroa-Guzman now partners with schools and organizations to create their own
              runways for success. Through her powerful speaking experiences, she equips students and
              educators with the confidence, self-worth, and purpose-driven mindset proven to strengthen
              retention, elevate performance, and reduce burnout.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button variant="secondary" href="/about">
              Learn More About Tamara
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
