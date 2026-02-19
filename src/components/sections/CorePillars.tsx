'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, scrollTrigger } from '@/lib/animations'

const pillars = [
  {
    title: 'Success Strategies',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description: 'Explore goal-setting strategies to turn dreams into reality and establish the patterns that will allow you to achieve more now and into the future.',
    tags: ['Goal Setting', 'Action Plans', 'Achievement'],
  },
  {
    title: 'Mental Health',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    description: 'Develop coping and thriving strategies related to success, feeling isolated, being overwhelmed, and most importantly, how to manage stress and create positive affirmations and self-talk.',
    tags: ['Stress Management', 'Self-Talk', 'Coping Skills'],
  },
  {
    title: 'Burnout Prevention',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: 'Consider ways to empower others and delegate to enhance leadership success while reflecting on the inherent stressors and time management issues associated with leadership.',
    tags: ['Leadership', 'Delegation', 'Time Management'],
  },
]

export default function CorePillars() {
  return (
    <section id="services" className="section-padding bg-cream-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold font-medium tracking-widest uppercase text-sm">
              Core Focus Areas
            </p>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-matte-black mb-4">
            Three Pillars of{' '}
            <span className="text-gold-gradient bg-clip-text text-transparent bg-gold-gradient">
              Transformation
            </span>
          </h2>
          <p className="text-matte-black/60 text-lg max-w-2xl mx-auto">
            Every keynote, workshop, and mentorship program is built on these foundational principles.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="group relative"
              variants={staggerItem}
            >
              {/* Card */}
              <div className="relative bg-white border border-gold/10 rounded-2xl p-8 h-full
                            transition-all duration-500 hover:border-gold/30
                            hover:shadow-xl hover:shadow-gold/5 card-lift overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="relative">
                  {/* Icon */}
                  <div className="text-gold mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-2xl text-matte-black mb-4">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-matte-black/60 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-gold/10 text-gold-dark rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/10
                              group-hover:border-gold/30 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
