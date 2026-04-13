'use client'

import { useEffect, useRef, useState } from 'react'
import Player from '@vimeo/player'
import { motion, AnimatePresence } from 'framer-motion'

interface VimeoPlayerProps {
  videoId: string
  autoplay?: boolean
}

export default function VimeoPlayer({ videoId, autoplay = false }: VimeoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<Player | null>(null)
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    if (!iframeRef.current) return

    const player = new Player(iframeRef.current)
    playerRef.current = player

    player.on('ended', () => {
      setEnded(true)
    })

    return () => {
      player.off('ended')
    }
  }, [videoId])

  const handleReplay = () => {
    if (playerRef.current) {
      playerRef.current.setCurrentTime(0).then(() => {
        playerRef.current?.play()
      })
      setEnded(false)
    }
  }

  return (
    <>
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479${autoplay ? '&autoplay=1' : ''}`}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
      />

      {/* Replay Overlay */}
      <AnimatePresence>
        {ended && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-20 bg-matte-black flex flex-col items-center justify-center cursor-pointer"
            onClick={handleReplay}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex flex-col items-center gap-5"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/30 hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 md:h-10 md:w-10 text-matte-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>

              <p className="text-cream-white font-semibold tracking-widest text-base md:text-lg uppercase">
                Replay Video
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
