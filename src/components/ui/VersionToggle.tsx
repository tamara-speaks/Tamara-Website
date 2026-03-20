'use client'

import { useVersion } from '@/context/VersionContext'
import { motion } from 'framer-motion'

export default function VersionToggle() {
  const { showOldVersion, toggleVersion, mounted } = useVersion()

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return null
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {/* Label */}
      <div className="bg-matte-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
        <p className="text-cream-white text-xs font-medium">
          {showOldVersion ? 'Showing: OLD Version' : 'Showing: NEW Version'}
        </p>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleVersion}
        className={`
          flex items-center gap-3 px-4 py-3 rounded-full shadow-xl
          transition-all duration-300 backdrop-blur-sm
          ${showOldVersion
            ? 'bg-red-500/90 hover:bg-red-600 text-white'
            : 'bg-green-500/90 hover:bg-green-600 text-white'
          }
        `}
      >
        {/* Toggle Switch Visual */}
        <div className="relative w-12 h-6 bg-white/20 rounded-full">
          <motion.div
            className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
            animate={{ left: showOldVersion ? '4px' : '28px' }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </div>

        <span className="text-sm font-semibold whitespace-nowrap">
          {showOldVersion ? 'Switch to NEW' : 'Switch to OLD'}
        </span>
      </button>
    </motion.div>
  )
}
