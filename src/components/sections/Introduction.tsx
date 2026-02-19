'use client'

import { motion } from 'framer-motion'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

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
            className="inline-flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold font-medium tracking-widest uppercase text-sm">
              Meet Tamara Figueroa-Guzman
            </p>
            <div className="h-px w-12 bg-gold" />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="font-playfair text-3xl sm:text-4xl md:text-5xl text-matte-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Motivational Speaker &{' '}
            <span className="text-gold-gradient bg-clip-text text-transparent bg-gold-gradient">
              Purpose and Success Specialist
            </span>
          </motion.h2>

          {/* Bio Text */}
          <motion.div
            className="text-matte-black/70 text-lg md:text-xl leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              After teaching post-secondary education for nearly a decade, Tamara Figueroa-Guzman,
              former New York City model and Beauty Educator turned International Speaker, now
              partners with schools and organizations to strengthen retention, increase graduation,
              and reduce burnout by sharing practical powerful tools to build self-worth, confidence,
              and perseverance across students and staff alike using her{' '}
              <strong className="text-matte-black">&apos;Create Your Own Runway&apos;</strong> framework.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
