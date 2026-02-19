'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, scrollTrigger, testimonialSlide } from '@/lib/animations'

const testimonials = [
  {
    quote: "Tamara's keynote was absolutely transformative. Our students were captivated from the first moment, and weeks later, they're still talking about her message of creating their own runway.",
    name: 'Dr. Maria Santos',
    title: 'Principal, Lincoln High School',
    image: null,
  },
  {
    quote: "I've booked hundreds of speakers over my career, and Tamara stands out. She doesn't just speak—she connects, inspires, and leaves a lasting impact that you can see in the students' eyes.",
    name: 'Michael Thompson',
    title: 'Director of Student Affairs, State University',
    image: null,
  },
  {
    quote: "After Tamara's workshop, I finally understood that my past doesn't define my future. She gave me the courage to pursue my dreams. I'm now in my first year of medical school.",
    name: 'Jasmine Williams',
    title: 'Former Student, Now Medical Student',
    image: null,
  },
  {
    quote: "Tamara brings an authenticity that's rare in motivational speaking. Her journey from the runway to the world stage is not just inspiring—it's proof that anything is possible.",
    name: 'Robert Chen',
    title: 'Corporate Training Director, Fortune 500',
    image: null,
  },
]

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    const newPage = (page + newDirection + testimonials.length) % testimonials.length
    setPage([newPage, newDirection])
  }

  return (
    <section id="testimonials" className="section-padding bg-matte-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-cream-white mb-4">
            Words That{' '}
            <span className="text-gold-gradient bg-clip-text text-transparent bg-gold-gradient">
              Speak Volumes
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-gold opacity-20">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden min-h-[400px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={testimonialSlide}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <div className="bg-cream-white/5 border border-gold/20 rounded-2xl p-8 md:p-12">
                  {/* Quote */}
                  <p className="text-cream-white text-lg md:text-xl leading-relaxed mb-8 text-center font-playfair italic">
                    &ldquo;{testimonials[page].quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    {/* Avatar Placeholder */}
                    <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center mb-4">
                      <span className="text-matte-black font-bold text-xl">
                        {testimonials[page].name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-gold font-semibold text-lg">
                      {testimonials[page].name}
                    </p>
                    <p className="text-cream-white/60 text-sm">
                      {testimonials[page].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
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

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage([idx, idx > page ? 1 : -1])}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === page ? 'bg-gold w-6' : 'bg-cream-white/30 hover:bg-cream-white/50'
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
      </div>
    </section>
  )
}
