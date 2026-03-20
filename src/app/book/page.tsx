'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem, scrollTrigger } from '@/lib/animations'

const steps = [
  {
    number: '1',
    title: 'Initial Consultation',
    description: 'We discuss your goals, audience, and vision.',
  },
  {
    number: '2',
    title: 'Customized Experience Design',
    description: 'Your presentation is tailored to your organization.',
  },
  {
    number: '3',
    title: 'Transformational Delivery',
    description: 'A powerful experience that drives lasting impact.',
  },
]

export default function BookPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    position: '',
    email: '',
    phone: '',
    mobilePhone: '',
    canText: 'yes',
    organization: '',
    streetAddress: '',
    city: '',
    state: '',
    airport: '',
    eventDescription: '',
    budget: '',
    howFound: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will be in touch soon.')
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero image at top */}
        <section className="relative bg-matte-black overflow-hidden">
          <div className="relative w-full mt-20 h-[60vh]">
            <Image
              src="/contact/Edit-8238.jpg"
              alt="Tamara Speaking"
              fill
              priority
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-matte-black/30 via-transparent to-matte-black" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* New image */}
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about/Tamara_DSC09837_FINAL.jpg"
                    alt="Tamara Figueroa-Guzman"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="text-center lg:text-left"
              >
                <motion.h1
                  variants={staggerItem}
                  className="font-playfair text-4xl sm:text-5xl md:text-6xl text-cream-white mb-4"
                >
                  Let&apos;s Change Some Lives Together!
                </motion.h1>
                {/* Sans-serif, removed bold */}
                <motion.h2
                  variants={staggerItem}
                  className="text-gold text-2xl md:text-3xl font-sans mb-6 font-medium"
                >
                  Schedule a Consultation Now!
                </motion.h2>
                <motion.p
                  variants={staggerItem}
                  className="text-cream-white/80 text-lg mb-4"
                >
                  This is the first step to getting your questions answered about bringing Tamara to your school or organization.
                </motion.p>
                {/* Changed "tour" to "experience", line breaks */}
                <motion.p
                  variants={staggerItem}
                  className="text-cream-white/80 text-lg mb-10"
                >
                  Book a complimentary consultation and learn how Tamara&apos;s<br />
                  <span className="text-gold font-semibold">Create Your Own Runway</span> experience can inspire, empower,<br />
                  and impact your audience.
                </motion.p>
                {/* Added space above button */}
                <motion.div variants={staggerItem} className="mt-4">
                  <Button
                    variant="primary"
                    onClick={() => {
                      const formSection = document.getElementById('booking-form')
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    Schedule Now
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect Section - Removed button */}
        <section className="py-20 bg-cream-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
              className="text-center mb-16"
            >
              <motion.h2
                variants={staggerItem}
                className="font-playfair text-3xl md:text-4xl text-matte-black mb-4"
              >
                What to Expect When You Partner with Tamara
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={scrollTrigger}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-gradient flex items-center justify-center">
                    <span className="font-playfair text-2xl text-matte-black font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl text-matte-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-matte-black/70">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section - New title, yellow color, subtitle, new video */}
        <section id="speaker-video" className="py-20 bg-matte-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
              className="text-center mb-12"
            >
              {/* Same size as "Experience the Impact" on home page */}
              <h2 className="font-playfair text-gold mb-4 text-3xl sm:text-4xl md:text-5xl">
                Step Into the Experience
              </h2>
              {/* Moved subtitle here */}
              <p className="text-cream-white/80 text-lg">
                See what becomes possible when confidence meets purpose.
              </p>
            </motion.div>

            {/* Vimeo embed */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/20"
            >
              <iframe
                src="https://player.vimeo.com/video/1174757627?badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </div>
        </section>

        {/* Booking Form Section - Added intro text */}
        <section id="booking-form" className="py-20 bg-cream-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
              className="text-center mb-12"
            >
              {/* Added intro sentence */}
              <motion.p
                variants={staggerItem}
                className="text-matte-black/70 text-lg mb-4"
              >
                If you need more information, you&apos;re welcome to complete the form below.
              </motion.p>
              <motion.h2
                variants={staggerItem}
                className="font-playfair text-3xl md:text-4xl text-matte-black mb-4"
              >
                Alternate Booking / Contact Form
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="text-matte-black/70 text-lg max-w-2xl mx-auto"
              >
                We are humbled by your interest in booking TAMARA for your school / organization! Please fill out this form in its entirety, and we&apos;ll be in contact with you promptly. Thanks again for considering Tamara for your next event.
              </motion.p>
            </motion.div>

            <motion.form
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-matte-black mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-matte-black mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* Position */}
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-matte-black mb-2">
                    Position or Title *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-matte-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-matte-black mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* Mobile Phone */}
                <div>
                  <label htmlFor="mobilePhone" className="block text-sm font-medium text-matte-black mb-2">
                    Mobile Phone Number
                  </label>
                  <input
                    type="tel"
                    id="mobilePhone"
                    name="mobilePhone"
                    value={formData.mobilePhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* Can we text you? */}
                <div>
                  <label htmlFor="canText" className="block text-sm font-medium text-matte-black mb-2">
                    Can we text you?
                  </label>
                  <select
                    id="canText"
                    name="canText"
                    value={formData.canText}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-matte-black mb-2">
                    Name of Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* Street Address */}
                <div className="md:col-span-2">
                  <label htmlFor="streetAddress" className="block text-sm font-medium text-matte-black mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-matte-black mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* State */}
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-matte-black mb-2">
                    State/Region *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* Airport */}
                <div>
                  <label htmlFor="airport" className="block text-sm font-medium text-matte-black mb-2">
                    Closest Airport to Venue (Airport Code)
                  </label>
                  <input
                    type="text"
                    id="airport"
                    name="airport"
                    placeholder="e.g., MIA, JFK, LAX"
                    value={formData.airport}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-matte-black mb-2">
                    Est. Budget for Speaker
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                {/* Event Description */}
                <div className="md:col-span-2">
                  <label htmlFor="eventDescription" className="block text-sm font-medium text-matte-black mb-2">
                    Description of the Event (Dates, Times, Attendee Size, Theme etc.) *
                  </label>
                  <textarea
                    id="eventDescription"
                    name="eventDescription"
                    required
                    rows={5}
                    value={formData.eventDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                  />
                </div>

                {/* How did you find us */}
                <div className="md:col-span-2">
                  <label htmlFor="howFound" className="block text-sm font-medium text-matte-black mb-2">
                    How did you find us?
                  </label>
                  <input
                    type="text"
                    id="howFound"
                    name="howFound"
                    value={formData.howFound}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button type="submit" variant="primary">
                  Submit Inquiry
                </Button>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Final CTA - Separators with more spacing */}
        <section className="py-16 bg-gold">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={scrollTrigger}
              className="font-playfair text-xl sm:text-2xl md:text-3xl text-matte-black whitespace-nowrap"
            >
              Create Confidence &nbsp; • &nbsp; Cultivate Purpose &nbsp; • &nbsp; Change Outcomes.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
