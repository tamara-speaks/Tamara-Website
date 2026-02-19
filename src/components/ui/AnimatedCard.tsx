'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cardReveal, scrollTrigger } from '@/lib/animations'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
  hover = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={`${className} ${hover ? 'card-lift' : ''}`}
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={scrollTrigger}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
