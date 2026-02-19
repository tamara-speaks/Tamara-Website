'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { staggerContainer, staggerItem, scrollTrigger } from '@/lib/animations'

const outcomes = [
  {
    level: 'Elementary Schools',
    number: '01',
    image: '/landing/who-we-serve/1-Elementary-Smiling Students.jpg',
    tagline: 'Where dreams begin',
    outcomes: [
      'Confidence Building',
      'Emotional Skills',
      'Positive Mindset',
      'Self-Expression',
      'Anti-bullying',
    ],
    accentColor: '#D4AF37',
  },
  {
    level: 'Middle Schools',
    number: '02',
    image: '/landing/who-we-serve/2-Middle-Graduation Cheer.jpg',
    tagline: 'Finding your voice',
    outcomes: [
      'Identity Development',
      'Self-Worth',
      'Peer Confidence',
      'Emotional Regulation',
      'Goal Awareness',
    ],
    accentColor: '#2D5A27',
  },
  {
    level: 'High Schools',
    number: '03',
    image: '/landing/who-we-serve/3-High School.jpg',
    tagline: 'Shaping your future',
    outcomes: [
      'Purpose Clarity',
      'Graduation Motivation',
      'Leadership Skills',
      'Decision Making',
      'Future Readiness',
    ],
    accentColor: '#C4A77D',
  },
  {
    level: 'College / Universities',
    number: '04',
    image: '/landing/who-we-serve/4-College+University.jpg',
    tagline: 'Owning your runway',
    outcomes: [
      'Student Retention',
      'Purpose Alignment',
      'Confidence Growth',
      'Career Direction',
      'Burnout Prevention',
    ],
    accentColor: '#B8860B',
  },
]

export default function OutcomesGrid() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section id="outcomes" className="section-padding bg-matte-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold font-medium tracking-widest uppercase text-sm">
              Who We Serve
            </p>
            <div className="h-px w-12 bg-gold" />
          </motion.div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream-white mb-4">
            Tamara Speaks To
          </h2>
          <p className="text-gold text-xl md:text-2xl font-playfair italic mb-6">
            Outcomes You Can Expect
          </p>
          <p className="text-cream-white/60 text-lg max-w-2xl mx-auto">
            Tailored programs that meet students exactly where they are and inspire them to reach where they&apos;re meant to be.
          </p>
        </motion.div>

        {/* Journey Line - Desktop */}
        <div className="hidden lg:block absolute top-[380px] left-[10%] right-[10%] h-px">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Outcomes Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          {outcomes.map((item, index) => (
            <motion.div
              key={item.level}
              className="relative"
              variants={staggerItem}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Number Badge */}
              <motion.div
                className="absolute -top-4 left-6 z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-matte-black font-bold text-lg shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${item.accentColor}, #FFD700)` }}
                >
                  {item.number}
                </div>
              </motion.div>

              {/* Card */}
              <div
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: activeCard === index ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${item.accentColor}40, transparent)` }}
                />

                {/* Card inner */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gold/10 group-hover:border-gold/30 transition-colors duration-300">
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.level}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Default Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 group-hover:opacity-0">
                    <h3 className="font-playfair text-2xl text-cream-white mb-3">
                      {item.level}
                    </h3>
                    <div
                      className="w-16 h-1 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${item.accentColor}, transparent)` }}
                    />
                  </div>

                  {/* Hover Content - Outcomes */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-playfair text-lg text-gold mb-2 text-center">
                      {item.level}
                    </h3>
                    <p className="text-cream-white/70 text-xs mb-4 font-medium uppercase tracking-wider">
                      Outcomes You Can Expect
                    </p>

                    <ul className="space-y-2 w-full">
                      {item.outcomes.map((outcome, idx) => (
                        <motion.li
                          key={outcome}
                          className="flex items-center gap-2 text-cream-white text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={activeCard === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: idx * 0.08 }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: item.accentColor }}
                          />
                          {outcome}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
