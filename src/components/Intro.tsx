import { useEffect } from 'react'
import { motion, type Variants } from 'framer-motion'

interface IntroProps {
  onFinish: () => void
}

const WORD = 'Welcome'
const LETTER_DELAY = 0.12 
const LETTER_DURATION = 0.45 
const HOLD_MS = 650 

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * LETTER_DELAY,
      duration: LETTER_DURATION,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const Intro = ({ onFinish }: IntroProps) => {
  useEffect(() => {
    const revealMs = (WORD.length - 1) * LETTER_DELAY * 1000 + LETTER_DURATION * 1000
    const timer = setTimeout(onFinish, revealMs + HOLD_MS)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <motion.div
      exit={{ y: '-100%' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-splash"
    >
      <div className="flex" aria-label={WORD}>
        {WORD.split('').map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            className="text-on-splash font-display font-semibold text-5xl md:text-7xl"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
