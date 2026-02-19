'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'white'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variants = {
    primary: 'bg-gold-gradient text-matte-black hover:shadow-lg hover:shadow-gold/30 focus-visible:ring-gold',
    secondary: 'border-2 border-gold text-gold hover:bg-gold hover:text-matte-black focus-visible:ring-gold',
    white: 'bg-cream-white text-matte-black hover:bg-gold hover:shadow-lg hover:shadow-gold/30 focus-visible:ring-cream-white',
  }

  const buttonContent = (
    <motion.span
      className="flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </motion.button>
  )
}
