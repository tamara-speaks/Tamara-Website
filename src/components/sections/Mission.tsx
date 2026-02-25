'use client'

import { motion } from 'framer-motion'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-cream-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold font-medium tracking-widest uppercase text-lg md:text-xl">
              Tamara&apos;s Mission
            </p>
            <div className="h-px w-12 bg-gold" />
          </motion.div>

          {/* Mission Statement */}
          <motion.h2
            className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-matte-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-matte-black/40">To Empower</span>{' '}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
              100K+ Students, Teachers, and Emerging Leaders
            </span>{' '}
            <span className="text-matte-black/40">Each Year</span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="w-24 h-1 bg-gold-gradient mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />

          {/* Description */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-matte-black/70 text-lg md:text-xl leading-relaxed mb-8">
              Through experiences that help them:
            </p>
            <ul className="space-y-4 text-left max-w-md mx-auto">
              <li className="flex items-center gap-3 text-matte-black text-lg md:text-xl">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                Recognize Their Worth
              </li>
              <li className="flex items-center gap-3 text-matte-black text-lg md:text-xl">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                Build Unshakable Confidence
              </li>
              <li className="flex items-center gap-3 text-matte-black text-lg md:text-xl">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                Create Their Own Runway for Success
              </li>
            </ul>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              { value: '100K+', label: 'Annual Impact Goal' },
              { value: '20+', label: 'Countries Reached' },
              { value: '500+', label: 'Keynotes Delivered' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-playfair text-4xl md:text-5xl text-gold-gradient bg-clip-text text-transparent bg-gold-gradient font-bold">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-matte-black/50 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
