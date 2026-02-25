'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

const clients = [
  { name: 'Lifetime', logo: '/trusted-by-logos/Logo_Lifetime_2020.svg.png' },
  { name: 'MUD', logo: '/trusted-by-logos/mudlogo_2c_white.png' },
  { name: 'Boca Beauty Academy', logo: '/trusted-by-logos/BocaBeautyAcademy-Logo.png' },
  { name: 'Toastmasters', logo: '/trusted-by-logos/toastmasters-international-confidently-speaking-toastmasters-club-communication-sparkle-toastmasters-club-logo-business.jpg' },
  { name: 'Sheridan Technical College', logo: '/trusted-by-logos/Sheridan-Tech-College-w-Logo_SMALL.png' },
  { name: 'Carver Middle School', logo: '/trusted-by-logos/Carver Middle School.png' },
  { name: 'Cosmix', logo: '/trusted-by-logos/Cosmixblacktype.png' },
  { name: 'The Faith Center', logo: '/trusted-by-logos/TheFaithCenter_Logo_Nav.png' },
  { name: '4KIDS', logo: '/trusted-by-logos/4Kids.png' },
  { name: 'The Balancing Act', logo: '/trusted-by-logos/TheBalancingAct_Logo_SMALL.png' },
]

export default function TrustedBy() {
  return (
    <section className="py-20 bg-cream-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          <p className="text-matte-black/60 uppercase tracking-widest text-sm font-medium text-center max-w-3xl mx-auto leading-relaxed">
            Trusted By Schools and Organizations Committed to Transformational Impact
          </p>
        </motion.div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="marquee-container overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {/* First set */}
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex-shrink-0 h-16 w-40 relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {clients.map((client) => (
                <div
                  key={`${client.name}-dup`}
                  className="flex-shrink-0 h-16 w-40 relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Static Grid for Mobile/Fallback */}
        <motion.div
          className="hidden sm:hidden grid-cols-2 gap-8 items-center justify-items-center mt-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          {clients.slice(0, 6).map((client) => (
            <div
              key={`static-${client.name}`}
              className="h-12 w-32 relative grayscale opacity-60"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
