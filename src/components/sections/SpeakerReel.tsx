'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

const YOUTUBE_VIDEO_ID = '1Wxlp-hfXmE'
const LOGO_THUMBNAIL = '/logo/Tamara FG_Logo NEW_For BLACK Background.png'

export default function SpeakerReel() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (YOUTUBE_VIDEO_ID) {
      setIsPlaying(true)
    }
  }

  return (
    <section id="speaker-reel" className="py-20 bg-matte-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Text instead of logo */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-gold">
            Experience the Impact
          </h2>
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
            /* Logo Thumbnail Overlay */
            <div
              className="absolute inset-0 cursor-pointer group bg-matte-black"
              onClick={handlePlay}
            >
              {/* Logo as Thumbnail - centered */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <Image
                  src={LOGO_THUMBNAIL}
                  alt="Tamara Figueroa-Guzman"
                  width={400}
                  height={160}
                  className="w-[280px] md:w-[400px] object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gold/30 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Button */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/90 group-hover:bg-gold flex items-center justify-center transition-all duration-300 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 md:h-10 md:w-10 text-matte-black ml-1"
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
            /* YouTube Embed */
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="Tamara Figueroa-Guzman Speaker Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}
