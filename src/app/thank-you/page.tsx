'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import VimeoPlayer from '@/components/ui/VimeoPlayer'
import { fadeInUp, scrollTrigger } from '@/lib/animations'

// Full-bleed background collage (6 cols x 3 rows = 18 tiles, tiled behind video).
// Ordered so leftmost column (positions 0,6,12) and rightmost column (5,11,17)
// land on user-specified key images.
const collageImages = [
  // Row 1 (6 tiles: left→right)
  { src: '/thankyoupage/Edit-6502.jpg', alt: 'Tamara on stage' },                         // 0 LEFT top
  { src: '/thankyoupage/Edit-6957.jpg', alt: 'Tamara speaking - red dress' },             // 1
  { src: '/thankyoupage/Graduation Caps in the Air.jpg', alt: 'Graduation caps' },         // 2
  { src: '/thankyoupage/2-Middle-Graduation Cheer.jpg', alt: 'Graduation cheer' },         // 3
  { src: '/thankyoupage/Edit-6907.jpg', alt: 'Tamara - Punta Cana' },                      // 4
  { src: '/thankyoupage/Edit-6931.jpg', alt: 'Tamara speaking - red dress' },              // 5 RIGHT top
  // Row 2
  { src: '/thankyoupage/645A5669.jpg', alt: 'Tamara - orange blazer' },                    // 6 LEFT mid
  { src: '/thankyoupage/645A5697.jpg', alt: 'Tamara speaking' },                           // 7
  { src: '/thankyoupage/leo_fontes-graduation-4502796_1920.jpg', alt: 'Graduate' },        // 8
  { src: '/thankyoupage/sofia_shultz_photography-senior-6292000_1920.jpg', alt: 'Senior' },// 9
  { src: '/thankyoupage/645A5697.jpg', alt: 'Tamara speaking' },                           // 10
  { src: '/thankyoupage/StockCake-Joyful_Children_Clapping-447972-medium.jpg', alt: 'Children clapping' }, // 11 RIGHT mid
  // Row 3
  { src: '/thankyoupage/Screenshot 2026-04-13 102958.png', alt: 'Graduates celebrating' }, // 12 LEFT bottom
  { src: '/thankyoupage/Graduation Caps in the Air.jpg', alt: 'Graduation caps' },          // 13
  { src: '/thankyoupage/Edit-6907.jpg', alt: 'Tamara - Punta Cana' },                       // 14
  { src: '/thankyoupage/2-Middle-Graduation Cheer.jpg', alt: 'Graduation cheer' },          // 15
  { src: '/thankyoupage/Edit-6957.jpg', alt: 'Tamara speaking - red dress' },               // 16
  { src: '/thankyoupage/645A9311.jpg', alt: 'Tamara - white dress' },                       // 17 RIGHT bottom
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
          <p className="text-cream-white text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            Please Watch This Video for Next Steps
          </p>
          <p className="text-gold font-bold text-base md:text-lg tracking-widest uppercase mt-1">
            (IMPORTANT)
          </p>
        </motion.div>

        {/* Video with Full-Bleed Photo Collage Background */}
        <div className="relative overflow-hidden">
          {/* Collage Background - tiled mosaic (full bleed) */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-0">
            {collageImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 33vw, 16vw" />
              </div>
            ))}
          </div>

          {/* Color overlay on collage */}
          <div className="absolute inset-0 bg-gold/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-matte-black/40" />

          {/* Video floating on top of collage - leaves a visible border of collage on left/right */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-8 sm:px-16 md:px-24 lg:px-40 py-8 md:py-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-gold/40">
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
          <p className="text-matte-black text-xl md:text-2xl font-medium mb-3">
            To view Tamara&apos;s Speaking website visit:
          </p>
          <a
            href="https://www.tamarafigueroa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-matte-black font-playfair text-2xl md:text-3xl font-bold hover:text-cream-white transition-colors duration-300 underline underline-offset-4 decoration-2"
          >
            www.TamaraFigueroa.com
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
