'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { staggerContainer, heroTextSlide } from '@/lib/animations'

export default function Hero() {
  const scrollToReel = () => {
    const reelSection = document.getElementById('speaker-reel')
    if (reelSection) {
      reelSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-matte-black">
      {/* Background - Dark base */}
      <div className="absolute inset-0 z-0 bg-matte-black" />

      {/* Tamara Image - Positioned on left */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[75%] z-0">
        <Image
          src="/landing/hero/Edit-8288.jpg"
          alt="Tamara Figueroa-Guzman"
          fill
          priority
          className="object-cover object-[30%_top] brightness-110"
        />
        {/* Gradient fade to blend with right content area */}
        <div className="absolute inset-0 bg-gradient-to-l from-matte-black via-matte-black/50 via-40% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 via-transparent to-matte-black/40" />
      </div>

      {/* Content - Right side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex justify-end">
        <motion.div
          className="max-w-xl lg:max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Signature Tagline */}
          <motion.p
            className="font-playfair text-3xl sm:text-4xl md:text-5xl text-gold font-bold mb-6 mt-4"
            variants={heroTextSlide}
          >
            Create Your Own Runway
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            className="font-sans text-lg sm:text-xl md:text-2xl text-cream-white/70 leading-[1.4] tracking-wider"
            variants={heroTextSlide}
          >
            AIM FOR THE TOP BECAUSE
            <span className="block text-cream-white/50">
              THE BOTTOM IS ALREADY CROWDED
            </span>
          </motion.h1>

          {/* Spacer for button */}
          <div className="h-12 md:h-16" />

          {/* CTA Button */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={heroTextSlide}
          >
            <Button
              variant="primary"
              onClick={scrollToReel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Experience the Impact
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Twisty Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            width="28"
            height="48"
            viewBox="0 0 28 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Twisty spiral arrow pointing down */}
            <path
              d="M14 4C14 4 8 10 8 16C8 22 18 22 18 28C18 34 10 34 14 40"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Arrow head */}
            <path
              d="M9 36L14 44L19 36"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <defs>
              <linearGradient id="goldGradient" x1="14" y1="4" x2="14" y2="44" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD700" />
                <stop offset="0.5" stopColor="#D4AF37" />
                <stop offset="1" stopColor="#B8860B" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
