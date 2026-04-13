'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

// Background collage images - tiled behind the video
const collageImages = [
  { src: '/thankyoupage/645A5669.jpg', alt: 'Tamara speaking - orange blazer' },
  { src: '/thankyoupage/Graduation Caps in the Air.jpg', alt: 'Graduation caps celebration' },
  { src: '/thankyoupage/Edit-6502.jpg', alt: 'Tamara on stage - black dress' },
  { src: '/thankyoupage/StockCake-Joyful_Children_Clapping-447972-medium.jpg', alt: 'Students clapping' },
  { src: '/thankyoupage/sofia_shultz_photography-senior-6292000_1920.jpg', alt: 'Graduate celebrating' },
  { src: '/thankyoupage/Edit-6931.jpg', alt: 'Tamara speaking - red dress' },
  { src: '/thankyoupage/645A9311.jpg', alt: 'Tamara on stage - white dress' },
  { src: '/thankyoupage/2-Middle-Graduation Cheer.jpg', alt: 'Graduates jumping' },
  { src: '/thankyoupage/leo_fontes-graduation-4502796_1920.jpg', alt: 'Graduate with diploma' },
  { src: '/thankyoupage/Edit-6957.jpg', alt: 'Tamara speaking - red dress pointing' },
  { src: '/thankyoupage/Edit-6907.jpg', alt: 'Tamara speaking - Punta Cana' },
  { src: '/thankyoupage/Screenshot 2026-04-13 102958.png', alt: 'Graduates celebrating' },
]

const steps = [
  {
    number: 1,
    title: 'Time Slot',
    points: [
      'Make sure the time slot you\'ve chosen for our Zoom call allows you to be in a quiet and comfortable location.',
      'If for any reason you need to reschedule for a better time, click the reschedule link at the bottom of the email invitation.',
    ],
  },
  {
    number: 2,
    title: 'Key Team Members & Invitation Confirmation',
    points: [
      'Invite all key team members to maximize efficiency, answer all questions, and keep everyone aligned.',
      'To add additional team members to the call, forward the calendar invitation that was sent to you.',
      'Accept your calendar invitation.',
    ],
  },
  {
    number: 3,
    title: 'Website',
    points: [
      'Take a moment to view my website at the link below before our Zoom call.',
    ],
  },
]

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-cream-white">
      {/* Hero Section - Thank You Header */}
      <section className="relative bg-matte-black pt-16 pb-0 overflow-hidden">
        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

        <motion.div
          className="text-center px-4 mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold mb-4">
            Thank You For Booking a Call!
          </h1>
          <p className="text-cream-white text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Please Watch This Video for Next Steps
          </p>
          <p className="text-gold font-bold text-base md:text-lg tracking-widest uppercase mt-1">
            (IMPORTANT)
          </p>
        </motion.div>

        {/* Video with Full-Bleed Photo Collage Background */}
        <div className="relative overflow-hidden">
          {/* Collage Background - tiled mosaic */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-0">
            {collageImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 25vw, 16vw" />
              </div>
            ))}
          </div>

          {/* Color overlay on collage */}
          <div className="absolute inset-0 bg-gold/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-matte-black/40" />

          {/* Video floating on top of collage */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6 md:px-16 lg:px-24 py-8 md:py-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-gold/40">
              {/* Video placeholder - will be replaced with HubSpot embed */}
              <div className="absolute inset-0 bg-matte-black flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-matte-black ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-cream-white/60 text-sm">Video Coming Soon</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Follow These 3 Easy Steps */}
      <section className="py-16 md:py-20 bg-cream-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={scrollTrigger}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-matte-black">
              Follow These <span className="text-gold">3 Easy Steps:</span>
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
              >
                {/* Step Content */}
                <div className={`py-10 px-6 md:px-10 ${
                  index % 2 === 0
                    ? 'bg-matte-black text-cream-white rounded-2xl'
                    : 'bg-cream-white text-matte-black'
                }`}>
                  <h3 className={`font-playfair text-2xl md:text-3xl mb-5 ${
                    index % 2 === 0 ? 'text-gold' : 'text-matte-black'
                  }`}>
                    Step {step.number}: {step.title}
                  </h3>
                  <ul className="space-y-3">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                          index % 2 === 0 ? 'bg-gold' : 'bg-gold'
                        }`} />
                        <p className={`text-base md:text-lg leading-relaxed ${
                          index % 2 === 0 ? 'text-cream-white/90' : 'text-matte-black/80'
                        }`}>
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website CTA Section */}
      <section className="py-16 md:py-20 bg-matte-black">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          <p className="text-cream-white text-xl md:text-2xl font-medium mb-3">
            To view Tamara&apos;s Speaking website visit:
          </p>
          <Link
            href="/"
            className="inline-block text-gold font-playfair text-3xl md:text-4xl lg:text-5xl font-bold hover:text-cream-white transition-colors duration-300"
          >
            www.TamaraFigueroa.com
          </Link>
        </motion.div>
      </section>

      {/* Logo Footer */}
      <section className="py-12 bg-cream-white">
        <div className="flex justify-center">
          <Image
            src="/logo/Tamara FG_Logo NEW_For WHITE Background.png"
            alt="Tamara Figueroa-Guzman"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
      </section>
    </main>
  )
}
