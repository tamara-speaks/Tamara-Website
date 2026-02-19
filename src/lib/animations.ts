import { Variants } from 'framer-motion'

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Fade in from right
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Simple fade in
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Scale up on hover
export const scaleUp: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

// Stagger container for runway-style animations
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

// Stagger item (child of stagger container)
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Hero text animation (runway walk style)
export const heroTextSlide: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom runway-style easing
    },
  },
}

// Card flip/reveal animation
export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Slide show image transition
export const slideShowImage: Variants = {
  enter: {
    opacity: 0,
    scale: 1.1,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
}

// Viewport scroll trigger settings
export const scrollTrigger = {
  once: true,
  amount: 0.2,
}

// Navigation menu animation
export const menuSlide: Variants = {
  closed: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

// Menu items stagger
export const menuItemStagger: Variants = {
  closed: {
    opacity: 0,
    x: 50,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

// Testimonial card animation
export const testimonialSlide: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  }),
}

// Outcome card hover reveal
export const outcomeReveal: Variants = {
  rest: {
    opacity: 0,
    y: 20,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

// Gold shimmer effect
export const goldShimmer: Variants = {
  initial: {
    backgroundPosition: '200% 0',
  },
  animate: {
    backgroundPosition: '-200% 0',
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}
