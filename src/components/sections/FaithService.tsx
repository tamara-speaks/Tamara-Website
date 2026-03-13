'use client'

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

const slides = [
  '/landing/south-africa-slideshow/1-South Africa_36278655996_454f6731b6_k.jpg',
  '/landing/south-africa-slideshow/2-South Africa-NEW_35514601443_ef3a8120fd_6k.jpg',
  '/landing/south-africa-slideshow/3-South Africa_36156004272_8ac2860de6_k.jpg',
  '/landing/south-africa-slideshow/4-South Africa_36158230412_2888215e8b_k.jpg',
  '/landing/south-africa-slideshow/5-South Africa_36322781965_e18ebcf89d_6k.jpg',
  '/landing/south-africa-slideshow/6-South Africa-NEW_36154091472_b3f383960f_6k.jpg',
  '/landing/south-africa-slideshow/7-South Africa_35926094860_a4d1afccea_6k.jpg',
  '/landing/south-africa-slideshow/8-South Africa_36322989725_4d854cea1a_k.jpg',
  '/landing/south-africa-slideshow/9-South Africa_36154976342_2044b028f0_k.jpg',
  '/landing/south-africa-slideshow/10-South Africa_36153466282_40d6561f3c_6k.jpg',
  '/landing/south-africa-slideshow/11-South Africa-NEW_36186714611_ddd7313dac_6k.jpg',
  '/landing/south-africa-slideshow/12-South Africa_35927073990_adca21f923_6k.jpg',
  '/landing/south-africa-slideshow/13-South Africa_35486831634_f159e1e984_6k.jpg',
  '/landing/south-africa-slideshow/14-South Africa_36323081545_3eaf9623a5_6k.jpg',
  '/landing/south-africa-slideshow/15-South Africa-NEW_36279157356_593d8fbacd_6k.jpg',
  '/landing/south-africa-slideshow/16-South Africa-NEW_35927110630_1af17bf099_k.jpg',
  '/landing/south-africa-slideshow/17-South Africa_36187117931_f61736e70d_6k.jpg',
  '/landing/south-africa-slideshow/18-South Africa-NEW_36186044051_1c2a8dc9b9_6k.jpg',
  '/landing/south-africa-slideshow/19-South Africa_35513762213_7d76dbf4f6_k.jpg',
  '/landing/south-africa-slideshow/20-South Africa-NEW_36153860162_edc96fd605_6k.jpg',
]

export default function FaithService() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0, 1]))
  const thumbnailRef = useRef<HTMLDivElement>(null)

  const imagesToLoad = useMemo(() => {
    const indices = new Set<number>()
    indices.add(currentSlide)
    indices.add((currentSlide + 1) % slides.length)
    indices.add((currentSlide - 1 + slides.length) % slides.length)
    indices.add((currentSlide + 2) % slides.length)
    return indices
  }, [currentSlide])

  useEffect(() => {
    setLoadedImages(prev => {
      const newSet = new Set(prev)
      imagesToLoad.forEach(idx => newSet.add(idx))
      return newSet
    })
  }, [imagesToLoad])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (thumbnailRef.current) {
      const container = thumbnailRef.current
      const thumbnail = container.children[currentSlide] as HTMLElement
      if (thumbnail) {
        const containerWidth = container.offsetWidth
        const thumbnailLeft = thumbnail.offsetLeft
        const thumbnailWidth = thumbnail.offsetWidth
        const scrollPosition = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2)
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' })
      }
    }
  }, [currentSlide])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  return (
    <section className="py-24 bg-matte-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <p className="text-gold font-medium tracking-widest uppercase text-lg md:text-xl">
              Faith & Service
            </p>
            <div className="h-px w-12 bg-gold" />
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cream-white mb-4 max-w-4xl mx-auto leading-relaxed">
            Rooted in her faith as an ordained minister, Tamara&apos;s heart for service has propelled her mission to uplift{' '}
            <span className="text-gold">underserved communities</span>—at home and around the world.
          </h2>
          <p className="text-cream-white/60 text-lg">
            South Africa Mission Trip
          </p>
        </motion.div>

        {/* Main Slideshow */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Image Container */}
          <div
            className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gold Frame */}
            <div className="absolute -inset-1 bg-gold-gradient rounded-2xl opacity-30" />

            {/* Slides */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-matte-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[currentSlide]}
                    alt={`South Africa Mission - Image ${currentSlide + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1152px"
                    priority={currentSlide === 0}
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/40 via-transparent to-matte-black/20" />
                </motion.div>
              </AnimatePresence>

              {/* Preload adjacent images */}
              {Array.from(imagesToLoad).map(idx => (
                idx !== currentSlide && (
                  <div key={`preload-${idx}`} className="hidden">
                    <Image
                      src={slides[idx]}
                      alt=""
                      fill
                      sizes="1px"
                      loading="eager"
                    />
                  </div>
                )
              ))}

              {/* Slide Counter */}
              <div className="absolute top-4 right-4 z-20 bg-matte-black/70 px-4 py-2 rounded-full">
                <span className="text-gold font-medium">{currentSlide + 1}</span>
                <span className="text-cream-white/60"> / {slides.length}</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full
                       bg-matte-black/60 text-cream-white flex items-center justify-center
                       hover:bg-gold hover:text-matte-black transition-all duration-300
                       backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full
                       bg-matte-black/60 text-cream-white flex items-center justify-center
                       hover:bg-gold hover:text-matte-black transition-all duration-300
                       backdrop-blur-sm"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-6 relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-matte-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-matte-black to-transparent z-10 pointer-events-none" />

            <div
              ref={thumbnailRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide py-2 px-8 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {slides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 bg-matte-black/50 ${
                    idx === currentSlide
                      ? 'ring-2 ring-gold scale-105'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <Image
                    src={slide}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                    loading="lazy"
                    quality={50}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-md mx-auto">
            <div className="h-1 bg-cream-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gold-gradient"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
