'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, scrollTrigger, testimonialSlide } from '@/lib/animations'

const testimonials = [
  {
    quote: "Tamara didn't just motivate our students — she shifted their mindset. Weeks later, we're still seeing increased confidence, stronger leadership, and a renewed sense of purpose across our campus.",
    name: 'Principal',
    title: 'Miami-Dade Public Schools',
    image: null,
  },
  {
    quote: "Listening to Tamara's motivational speeches has been a life-changing experience for me. Her inspiring words and powerful messages have motivated me to pursue my dreams and strive for excellence in all areas of my life. I am grateful for her guidance and wisdom, and I would highly recommend her speeches to anyone seeking motivation and inspiration to achieve their goal.",
    name: 'J Moore',
    title: 'Manager - LRJ Developers LLC - New Jersey',
    image: null,
  },
  {
    quote: "Through the years of knowing Ms Tamara Figueroa-Guzman, she has always demonstrated a certain strength and resilience that is unmatched by so many. Her intuition and empathy gives her the drive and tenacity to cradle the compassion to speak from the heart to impact and transform so many lives. It is without a doubt that Tamara is on her way to becoming one of the best motivational speakers of our time.",
    name: 'Jillian Ul Salaam',
    title: 'Educator & Consultant - Florida',
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
            What People Are Saying
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
