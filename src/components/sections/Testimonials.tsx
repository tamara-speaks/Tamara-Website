'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

type Testimonial = {
  type: 'video' | 'text'
  name: string
  title: string
  videoSrc?: string
  quote?: string
}

const testimonials: Testimonial[] = [
  {
    type: 'video',
    name: 'J. Brown',
    title: 'Principal',
    videoSrc: 'https://player.vimeo.com/video/1174569651?badge=0&autopause=0&player_id=0&app_id=58479',
  },
  {
    type: 'text',
    name: 'David Harper',
    title: 'Director of Admissions - Boca Beauty Academy',
    quote: "Tamara didn't just motivate our students — she shifted their mindset. Weeks later, we're still seeing increased confidence, stronger leadership, and a renewed sense of purpose across our campus.",
  },
  {
    type: 'video',
    name: 'K. Marie',
    title: 'Administrator',
    videoSrc: 'https://player.vimeo.com/video/1174737491?badge=0&autopause=0&player_id=0&app_id=58479',
  },
  {
    type: 'text',
    name: 'J Moore',
    title: 'Manager - LRJ Developers LLC',
    quote: "Listening to Tamara's motivational speeches has been a life-changing experience for me. Her inspiring words and powerful messages have motivated me to pursue my dreams and strive for excellence in all areas of my life.",
  },
  {
    type: 'video',
    name: 'Mrs. Rich',
    title: 'THRIVE Summit',
    videoSrc: 'https://player.vimeo.com/video/1174746224?badge=0&autopause=0&player_id=0&app_id=58479',
  },
  {
    type: 'text',
    name: 'Jillian Ul Salaam',
    title: 'Educator & Consultant - Florida',
    quote: "Through the years of knowing Ms Tamara, she has always demonstrated a certain strength and resilience that is unmatched. Her intuition and empathy gives her the drive to speak from the heart and transform lives.",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const currentTestimonial = testimonials[activeIndex]

  const paginate = (direction: number) => {
    const newIndex = (activeIndex + direction + testimonials.length) % testimonials.length
    setActiveIndex(newIndex)
  }

  return (
    <section id="testimonials" className="py-20 bg-matte-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold font-medium tracking-widest uppercase text-lg md:text-xl">
              Testimonials
            </p>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-cream-white">
            What People Are Saying
          </h2>
        </motion.div>

        {/* Individual Testimonials One at a Time */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {currentTestimonial.type === 'video' ? (
              /* Video Testimonial */
              <div className="bg-cream-white/5 border border-gold/20 rounded-2xl p-4 md:p-6">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-gold/10">
                  <iframe
                    key={currentTestimonial.videoSrc}
                    src={currentTestimonial.videoSrc}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <div className="text-center">
                  <p className="text-gold font-semibold text-lg">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-cream-white/60 text-sm">
                    {currentTestimonial.title}
                  </p>
                </div>
              </div>
            ) : (
              /* Text Testimonial */
              <div className="bg-cream-white/5 border border-gold/20 rounded-2xl p-8 md:p-12">
                {/* Quote Icon */}
                <div className="text-gold opacity-30 mb-6 flex justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <p className="text-cream-white/90 text-xl md:text-2xl leading-relaxed mb-8 text-center">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-matte-black font-bold text-xl">
                      {currentTestimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-gold font-semibold text-lg">{currentTestimonial.name}</p>
                    <p className="text-cream-white/50 text-sm">{currentTestimonial.title}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation - 6 dots */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full border border-gold/30 text-gold
                     flex items-center justify-center hover:bg-gold hover:text-matte-black
                     transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'bg-gold w-6'
                    : 'bg-cream-white/30 w-2 hover:bg-cream-white/50'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full border border-gold/30 text-gold
                     flex items-center justify-center hover:bg-gold hover:text-matte-black
                     transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
