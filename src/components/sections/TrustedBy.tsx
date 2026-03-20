'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, scrollTrigger } from '@/lib/animations'
import { useVersion } from '@/context/VersionContext'

const clients = [
  { name: 'Lifetime', logo: '/trusted-by-logos/Logo_Lifetime_2020.svg.png', size: 'small' },
  { name: 'MUD', logo: '/trusted-by-logos/MUD_Logo_White Background.jpg', size: 'normal' },
  { name: 'Sheridan Technical College', logo: '/trusted-by-logos/Sheridan-Tech-College-w-Logo_SMALL.png', size: 'large' },
  { name: 'Carver Middle School', logo: '/trusted-by-logos/Carver Middle School.png', size: 'large' },
  { name: 'Cosmix', logo: '/trusted-by-logos/Cosmixblacktype.png', size: 'normal' },
  { name: 'Boca Beauty Academy', logo: '/trusted-by-logos/BocaBeautyAcademy-Logo.png', size: 'small' },
  { name: '4KIDS', logo: '/trusted-by-logos/4Kids.png', size: 'normal' },
  { name: 'The Faith Center', logo: '/trusted-by-logos/TheFaithCenter_Logo_Nav.png', size: 'normal' },
  { name: 'The Balancing Act', logo: '/trusted-by-logos/TheBalancingAct-Lifetime-lockup-1.png', size: 'large' },
  { name: 'Toastmasters', logo: '/trusted-by-logos/Toastmaster_colorlogowithwebsite_White.png', size: 'normal' },
]

// Double the clients array so logos appear twice before looping
const doubledClients = [...clients, ...clients]

// Helper function to get size classes
const getSizeClasses = (size: string, isOldVersion: boolean) => {
  if (isOldVersion) {
    // OLD: only small vs normal
    return size === 'small' ? 'h-16 w-40' : 'h-20 w-48'
  }
  // NEW: small, normal, large
  switch (size) {
    case 'small':
      return 'h-16 w-40'
    case 'large':
      return 'h-24 w-56' // bigger for Sheridan, Carver, Balancing Act
    default:
      return 'h-20 w-48'
  }
}

export default function TrustedBy() {
  const { showOldVersion } = useVersion()

  // OLD: 45s, NEW: 55s (slower)
  const scrollDuration = showOldVersion ? '45s' : '55s'

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
            <div className="h-px w-12 bg-matte-black" />
            <p className="text-matte-black font-medium tracking-widest uppercase text-lg md:text-xl">
              Trusted By Schools and Organizations Committed to Transformational Impact
            </p>
            <div className="h-px w-12 bg-matte-black" />
          </div>
        </motion.div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="marquee-track" style={{ '--scroll-duration': scrollDuration } as React.CSSProperties}>
              {/* First set - all logos twice (1-10, 1-10) */}
              {doubledClients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className={`flex-shrink-0 relative mx-8 ${getSizeClasses(client.size, showOldVersion)}`}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {doubledClients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className={`flex-shrink-0 relative mx-8 ${getSizeClasses(client.size, showOldVersion)}`}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll var(--scroll-duration, 45s) linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
