'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

const clients = [
  { name: 'Lifetime', logo: '/trusted-by-logos/Logo_Lifetime_2020.svg.png', keepSmall: true },
  { name: 'MUD', logo: '/trusted-by-logos/MUD_Logo_White Background.jpg', keepSmall: false },
  { name: 'Sheridan Technical College', logo: '/trusted-by-logos/Sheridan-Tech-College-w-Logo_SMALL.png', keepSmall: false },
  { name: 'Carver Middle School', logo: '/trusted-by-logos/Carver Middle School.png', keepSmall: false },
  { name: 'Cosmix', logo: '/trusted-by-logos/Cosmixblacktype.png', keepSmall: false },
  { name: 'Boca Beauty Academy', logo: '/trusted-by-logos/BocaBeautyAcademy-Logo.png', keepSmall: true },
  { name: '4KIDS', logo: '/trusted-by-logos/4Kids.png', keepSmall: false },
  { name: 'The Faith Center', logo: '/trusted-by-logos/TheFaithCenter_Logo_Nav.png', keepSmall: false },
  { name: 'The Balancing Act', logo: '/trusted-by-logos/TheBalancingAct-Lifetime-lockup-1.png', keepSmall: false },
  { name: 'Toastmasters', logo: '/trusted-by-logos/Toastmaster_colorlogowithwebsite_White.png', keepSmall: false },
]

export default function TrustedBy() {
  return (
    <section className="py-20 bg-cream-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <p className="text-matte-black font-medium tracking-widest uppercase text-lg md:text-xl">
              Trusted By Schools and Organizations Committed to Transformational Impact
            </p>
            <div className="h-px w-12 bg-gold" />
          </div>
        </motion.div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="marquee-container overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
            >
              {/* First set */}
              {clients.map((client) => (
                <div
                  key={client.name}
                  className={`flex-shrink-0 relative ${
                    client.keepSmall ? 'h-16 w-40' : 'h-20 w-48'
                  }`}
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
                  className={`flex-shrink-0 relative ${
                    client.keepSmall ? 'h-16 w-40' : 'h-20 w-48'
                  }`}
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
      </div>
    </section>
  )
}
