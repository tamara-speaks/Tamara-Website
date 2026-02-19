'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

const awards = [
  {
    src: '/landing/Awards/1_Drop Mic Award_645A6050.jpg',
    title: 'Drop Mic Award',
    year: '2022',
  },
  {
    src: '/landing/Awards/2_AWARD_Next Level Drop Mic-2023.jpg',
    title: 'Next Level Drop Mic Award',
    year: '2023',
  },
  {
    src: '/landing/Awards/4_AWARD_Fabiola Venue-2024.jpg',
    title: 'Excellence Award',
    year: '2024',
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
    <section className="py-20 bg-matte-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold font-medium tracking-widest uppercase text-sm">
              Recognition
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

        {/* Awards Carousel */}
        <div className="relative">
          {/* Main Display */}
          <div className="flex justify-center items-center gap-4 md:gap-8">
            {awards.map((award, index) => {
              const isActive = index === activeIndex
              const isPrev = index === (activeIndex - 1 + awards.length) % awards.length
              const isNext = index === (activeIndex + 1) % awards.length

              return (
                <motion.div
                  key={award.title}
                  className="relative cursor-pointer"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.75,
                    opacity: isActive ? 1 : 0.5,
                    x: isActive ? 0 : isPrev ? -50 : isNext ? 50 : 0,
                    zIndex: isActive ? 10 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    display: isActive || isPrev || isNext ? 'block' : 'none',
                  }}
                >
                  <div className={`relative rounded-2xl overflow-hidden ${isActive ? 'w-72 md:w-96' : 'w-48 md:w-64'} aspect-[3/4]`}>
                    {/* Gold border for active */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gold-gradient p-1 rounded-2xl">
                        <div className="w-full h-full bg-matte-black rounded-xl overflow-hidden">
                          <Image
                            src={award.src}
                            alt={award.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                    {!isActive && (
                      <Image
                        src={award.src}
                        alt={award.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    )}

                    {/* Overlay for inactive */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-matte-black/40 rounded-2xl" />
                    )}
                  </div>

                  {/* Title for active */}
                  {isActive && (
                    <motion.div
                      className="text-center mt-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-cream-white font-playfair text-xl">{award.title}</p>
                      <p className="text-gold text-sm mt-1">{award.year}</p>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                     border border-gold/30 text-gold flex items-center justify-center
                     hover:bg-gold hover:text-matte-black transition-all duration-300 z-20"
            aria-label="Previous award"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                     border border-gold/30 text-gold flex items-center justify-center
                     hover:bg-gold hover:text-matte-black transition-all duration-300 z-20"
            aria-label="Next award"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {awards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-gold w-8' : 'bg-cream-white/30 hover:bg-cream-white/50'
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
