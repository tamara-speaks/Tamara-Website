'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

const slides = [
  {
    src: '/landing/south-africa-slideshow/1-South Africa_36278655996_454f6731b6_k.jpg',
    caption: 'Empowering students in South Africa',
  },
  {
    src: '/landing/south-africa-slideshow/2-South Africa_35514601443_ef3a8120fd_6k.jpg',
    caption: 'Building confidence through workshops',
  },
  {
    src: '/landing/south-africa-slideshow/3-South Africa_36156004272_8ac2860de6_k.jpg',
    caption: 'Creating lasting connections',
  },
  {
    src: '/landing/south-africa-slideshow/4-South Africa_36158230412_2888215e8b_k.jpg',
    caption: 'Inspiring the next generation',
  },
]

export default function FaithService() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  return (
    <section className="py-24 bg-matte-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cream-white mb-6 max-w-4xl mx-auto leading-relaxed">
            Tamara&apos;s faith and heart for service has propelled her purpose in helping{' '}
            <span className="text-gold">underserved communities</span> both locally and abroad.
          </h2>
        </motion.div>

        {/* Slideshow */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className="relative aspect-[16/9] rounded-2xl overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gold Frame */}
            <div className="absolute -inset-1 bg-gold-gradient rounded-2xl opacity-50" />

            {/* Slides */}
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[currentSlide].src}
                    alt={slides[currentSlide].caption}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-transparent to-matte-black/20" />

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.p
                      className="text-cream-white text-xl md:text-2xl font-playfair text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {slides[currentSlide].caption}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full
                       bg-matte-black/50 text-cream-white flex items-center justify-center
                       hover:bg-gold hover:text-matte-black transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full
                       bg-matte-black/50 text-cream-white flex items-center justify-center
                       hover:bg-gold hover:text-matte-black transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'bg-gold w-8' : 'bg-cream-white/30 hover:bg-cream-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
