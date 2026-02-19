'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem, scrollTrigger } from '@/lib/animations'
import Button from '@/components/ui/Button'

const eventTypes = [
  'Keynote Speaking',
  'School Assemblies',
  'Corporate Training',
  'Workshops & Seminars',
  'Virtual Events',
  'Panel Discussions',
]

export default function BookingCTA() {
  return (
    <section id="contact" className="section-padding bg-cream-white">
      <div id="booking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark CTA Card */}
        <motion.div
          className="relative bg-matte-black rounded-3xl overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-16 md:py-24 px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: CTA Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
              >
                <motion.p
                  className="text-gold font-medium tracking-widest uppercase mb-4"
                  variants={staggerItem}
                >
                  Book Tamara
                </motion.p>
                <motion.h2
                  className="font-playfair text-3xl sm:text-4xl md:text-5xl text-cream-white mb-6 leading-tight"
                  variants={staggerItem}
                >
                  LET&apos;S CHANGE SOME{' '}
                  <span className="text-gold-gradient bg-clip-text text-transparent bg-gold-gradient">
                    LIVES TOGETHER
                  </span>
                </motion.h2>
                <motion.p
                  className="text-cream-white/70 text-lg mb-8"
                  variants={staggerItem}
                >
                  Ready to bring transformation to your organization? Whether it&apos;s a
                  school assembly, corporate event, or virtual keynote, Tamara delivers
                  unforgettable experiences that inspire lasting change.
                </motion.p>

                {/* Event Types */}
                <motion.div
                  className="flex flex-wrap gap-3 mb-8"
                  variants={staggerItem}
                >
                  {eventTypes.map((type) => (
                    <span
                      key={type}
                      className="px-4 py-2 bg-cream-white/5 border border-gold/20 rounded-full
                               text-cream-white/80 text-sm hover:border-gold/50 transition-colors"
                    >
                      {type}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <Button variant="primary" href="mailto:booking@tamarafg.com">
                    Request Booking Info
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right: Contact Form Placeholder */}
              <motion.div
                className="bg-cream-white/5 border border-gold/20 rounded-2xl p-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
              >
                <h3 className="font-playfair text-2xl text-cream-white mb-6">
                  Quick Inquiry
                </h3>

                {/* Form Fields (Scaffold for HubSpot integration) */}
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-cream-white/60 text-sm mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-matte-black border border-gold/20 rounded-lg
                               text-cream-white placeholder-cream-white/30 focus:border-gold
                               focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-cream-white/60 text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-matte-black border border-gold/20 rounded-lg
                               text-cream-white placeholder-cream-white/30 focus:border-gold
                               focus:outline-none transition-colors"
                      placeholder="you@organization.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-cream-white/60 text-sm mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-4 py-3 bg-matte-black border border-gold/20 rounded-lg
                               text-cream-white placeholder-cream-white/30 focus:border-gold
                               focus:outline-none transition-colors"
                      placeholder="School, Company, or Organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="event-type" className="block text-cream-white/60 text-sm mb-2">
                      Event Type
                    </label>
                    <select
                      id="event-type"
                      name="event-type"
                      className="w-full px-4 py-3 bg-matte-black border border-gold/20 rounded-lg
                               text-cream-white focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-cream-white/60 text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-matte-black border border-gold/20 rounded-lg
                               text-cream-white placeholder-cream-white/30 focus:border-gold
                               focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Send Inquiry
                  </Button>
                </form>

                <p className="text-cream-white/40 text-xs mt-4 text-center">
                  We typically respond within 24-48 hours
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
