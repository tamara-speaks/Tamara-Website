'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const awards = [
  {
    src: '/landing/Awards/1_Drop Mic Award_645A6050.jpg',
    title: 'With Jeremy Anderson & Dr Eric Thomas',
    subtitle: 'Next Level Elite',
  },
  {
    src: '/landing/Awards/2_AWARD_Next Level Drop Mic-2023.jpg',
    title: 'The Drop Mic Award',
    subtitle: 'Next Level Elite',
  },
  {
    src: '/landing/Awards/3_AWARD_Fabiola Venue Award_Tamara_2024_LANDSCAPE.jpg',
    title: 'Award of Excellence',
    subtitle: "Fabiola's Venue",
  },
  {
    src: '/landing/Awards/4_AWARD_Fabiola Venue-2024.jpg',
    title: 'Award of Excellence',
    subtitle: "Fabiola's Venue",
  },
]

export default function Awards() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % awards.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + awards.length) % awards.length)
  }

  return (
    <section className="bg-matte-black overflow-hidden">
      {/* Header Section - ABOVE slideshow on black background */}
      <div className="py-12 bg-matte-black">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold font-medium tracking-widest uppercase text-lg md:text-xl">
              Industry Accolades
            </p>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-cream-white">
            Award Winning{' '}
            <span className="text-gold-gradient bg-clip-text text-transparent bg-gold-gradient">
              Speaker
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Slideshow Section */}
      <div className="relative h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={awards[activeIndex].src}
              alt={awards[activeIndex].title}
              fill
              className="object-cover object-[center_25%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Caption - Bottom left with backdrop */}
        <div className="absolute bottom-16 left-6 md:left-12 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="text-left px-6 py-4 bg-matte-black/70 backdrop-blur-sm rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-cream-white font-playfair text-lg md:text-xl mb-1">
                {awards[activeIndex].title}
              </p>
              <p className="text-gold text-sm">
                {awards[activeIndex].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30
                     w-14 h-14 md:w-16 md:h-16 rounded-full
                     border border-cream-white/30 text-cream-white
                     flex items-center justify-center
                     hover:bg-gold hover:border-gold hover:text-matte-black
                     transition-all duration-300 backdrop-blur-sm bg-matte-black/20"
          aria-label="Previous award"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30
                     w-14 h-14 md:w-16 md:h-16 rounded-full
                     border border-cream-white/30 text-cream-white
                     flex items-center justify-center
                     hover:bg-gold hover:border-gold hover:text-matte-black
                     transition-all duration-300 backdrop-blur-sm bg-matte-black/20"
          aria-label="Next award"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots - Bottom */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="flex justify-center gap-3">
            {awards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'bg-gold w-10'
                    : 'bg-cream-white/40 w-2 hover:bg-cream-white/60'
                }`}
                aria-label={`Go to award ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
