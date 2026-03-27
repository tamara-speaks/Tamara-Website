'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { menuSlide, menuItemStagger } from '@/lib/animations'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass py-2' : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo/Tamara FG_1X1_Logo_CROWN Only.png"
                alt="Tamara Figueroa-Guzman"
                width={80}
                height={80}
                className={`transition-all duration-300 ${
                  isScrolled ? 'w-10 h-10 md:w-12 md:h-12' : 'w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream-white font-medium hover:text-gold transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Book CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="btn-primary text-sm"
              >
                BOOK TAMARA
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cream-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                className="w-6 h-5 flex flex-col justify-between"
                animate={isMobileMenuOpen ? 'open' : 'closed'}
              >
                <motion.span
                  className="block h-0.5 w-6 bg-current origin-left"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: -2 },
                  }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-current"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-current origin-left"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: 2 },
                  }}
                />
              </motion.div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden"
            variants={menuSlide}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="absolute inset-0 bg-matte-black" />
            <div className="relative h-full flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={menuItemStagger}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-cream-white text-3xl font-playfair hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={menuItemStagger}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  className="btn-primary mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BOOK TAMARA
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
