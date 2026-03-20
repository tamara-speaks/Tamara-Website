'use client'

import { motion } from 'framer-motion'
import { fadeInUp, scrollTrigger } from '@/lib/animations'
import Button from '@/components/ui/Button'
import { useVersion } from '@/context/VersionContext'

export default function ConsultationCTA() {
  const { showOldVersion } = useVersion()

  // Only show in NEW version
  if (showOldVersion) return null

  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #C4A77D 0%, #D4AF37 50%, #C4A77D 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          {/* Main Headline - Same size as "What People Are Saying" */}
          <motion.h2
            className="font-playfair text-3xl sm:text-4xl md:text-5xl text-matte-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            GIVE YOUR AUDIENCE MORE THAN INSPIRATION.
          </motion.h2>

          {/* CTA Button - Black variant */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-matte-black text-cream-white font-semibold rounded-full hover:bg-matte-black/80 transition-all duration-300 shadow-lg"
            >
              Schedule a Consultation
            </a>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="text-matte-black/70 text-lg italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Complimentary consultations designed around your goals.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
