'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, scrollTrigger } from '@/lib/animations'
import { useVersion } from '@/context/VersionContext'

// NEW: Vimeo video, OLD: YouTube
const VIMEO_VIDEO_ID = '1174560062'
const YOUTUBE_VIDEO_ID = '1Wxlp-hfXmE'

// NEW: Custom thumbnail, OLD: Logo
const NEW_THUMBNAIL = '/landing/tamarathumbnail.png'
const OLD_THUMBNAIL = '/logo/Tamara FG_Logo NEW_For BLACK Background.png'

export default function SpeakerReel() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { showOldVersion } = useVersion()

  const handlePlay = () => {
    setIsPlaying(true)
  }

  // OLD: smaller logo, NEW: bigger thumbnail
  const thumbnailSize = showOldVersion ? 'w-[280px] md:w-[400px]' : 'w-full h-full'

  // OLD: larger centered button, NEW: smaller bottom button
  const buttonSize = showOldVersion ? 'w-20 h-20 md:w-24 md:h-24' : 'w-14 h-14 md:w-16 md:h-16'
  const iconSize = showOldVersion ? 'h-8 w-8 md:h-10 md:w-10' : 'h-6 w-6 md:h-7 md:w-7'

  return (
    <section id="speaker-reel" className="py-20 bg-matte-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          {/* OLD: all gold, NEW: "Experience the" white, "Impact" yellow */}
          {showOldVersion ? (
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-gold">
              Experience the Impact
            </h2>
          ) : (
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl">
              <span className="text-cream-white">Experience the </span>
              <span className="text-gold">Impact</span>
            </h2>
          )}
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="relative aspect-video rounded-2xl overflow-hidden border border-gold/20 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {!isPlaying ? (
            /* Thumbnail Overlay */
            <div
              className="absolute inset-0 cursor-pointer group bg-matte-black"
              onClick={handlePlay}
            >
              {showOldVersion ? (
                /* OLD: Logo as Thumbnail - centered */
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <Image
                    src={OLD_THUMBNAIL}
                    alt="Tamara Figueroa-Guzman"
                    width={400}
                    height={160}
                    className={`${thumbnailSize} object-contain transition-transform duration-700 group-hover:scale-105`}
                  />
                </div>
              ) : (
                /* NEW: Custom thumbnail image - full cover */
                <Image
                  src={NEW_THUMBNAIL}
                  alt="Tamara Figueroa-Guzman Speaker Reel"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Play Button - OLD: centered, NEW: bottom */}
              <div className={`absolute ${showOldVersion ? 'inset-0 flex items-center justify-center' : 'inset-x-0 bottom-8 flex justify-center'}`}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gold/30 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Button */}
                  <div className={`relative ${buttonSize} rounded-full bg-gold/90 group-hover:bg-gold flex items-center justify-center transition-all duration-300 shadow-lg`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${iconSize} text-matte-black ml-1`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            /* Video Embed - OLD: YouTube, NEW: Vimeo */
            showOldVersion ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Tamara Figueroa-Guzman Speaker Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <iframe
                src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`}
                title="Tamara Figueroa-Guzman Reel3"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
