'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import VimeoPlayer from '@/components/ui/VimeoPlayer'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

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
      {/* Hero Section - Thank You Header with full-bleed collage background */}
      <section className="relative bg-matte-black overflow-hidden">
        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient z-20" />

        {/* Full-bleed background image (pre-rendered collage + dark strip) */}
        <div className="relative w-full aspect-[1920/1080]">
          <Image
            src="/thankyoupage/Thank-You-Background.jpg"
            alt="Graduation celebrations collage"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Title block — sits on the dark strip at top of background */}
          <motion.div
            className="absolute top-0 left-0 right-0 z-10 text-center px-4 pt-[3%]"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gold">
              Thank You For Booking a Call!
            </h1>
          </motion.div>

          {/* Subtitle block — line space above, positioned just above video */}
          <motion.div
            className="absolute left-0 right-0 z-10 text-center px-4"
            style={{ top: '14%' }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
          >
            <p className="text-cream-white text-sm sm:text-base md:text-xl lg:text-2xl font-medium mt-4 md:mt-6">
              Please Watch This Video for Next Steps
            </p>
            <p className="text-gold font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-widest uppercase mt-1">
              (IMPORTANT)
            </p>
          </motion.div>

          {/* Video — positioned at inner edge of 1st & 6th columns (1/6 padding each side) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ paddingLeft: '16.667%', paddingRight: '16.667%', paddingTop: '22%', paddingBottom: '5%' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className="relative w-full aspect-video overflow-hidden shadow-2xl"
              style={{ outline: '14px solid rgba(140, 114, 30, 0.8)' }}
            >
              <VimeoPlayer videoId="1184148573" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Follow These 3 Easy Steps - matched to video width */}
      <section className="py-16 md:py-20 bg-cream-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
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

              <div className="space-y-0">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollTrigger}
                  >
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
                            <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-gold" />
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
        </div>
      </section>

      {/* Website CTA Section - YELLOW background */}
      <section className="py-16 md:py-20 bg-gold">
        <motion.div
          className="max-w-3xl mx-auto px-4 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={scrollTrigger}
        >
          <p className="text-matte-black text-2xl md:text-3xl font-medium mb-3">
            To view Tamara&apos;s Speaking website visit:
          </p>
          <a
            href="https://www.tamarafigueroa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-matte-black hover:text-cream-white font-playfair text-xl md:text-2xl lg:text-3xl font-bold bg-transparent hover:bg-matte-black border-[3px] border-matte-black rounded-full px-7 md:px-10 py-3.5 md:py-4 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-matte-black/30"
          >
            <span>www.TamaraFigueroa.com</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* Logo Footer - BLACK background with larger logo */}
      <section className="py-16 bg-matte-black">
        <div className="flex justify-center">
          <Image
            src="/logo/Tamara FG_Logo NEW_For BLACK Background.png"
            alt="Tamara Figueroa-Guzman"
            width={320}
            height={160}
            className="object-contain"
          />
        </div>
      </section>
    </main>
  )
}
