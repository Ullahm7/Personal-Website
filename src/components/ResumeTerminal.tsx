import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { staggerContainer, staggerItem } from '../lib/motion'
 
interface ResumeTerminalProps {
  onClose: () => void
}
 
const reasons = [
  'Updating recent projects',
  'Adding publications',
  'Improving formatting',
]
 
export const ResumeTerminal = ({ onClose }: ResumeTerminalProps) => {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[150] bg-background flex items-center justify-center px-6"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 text-muted hover:text-foreground transition-colors"
      >
        <X size={20} />
      </button>
 
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="terminal-frame w-full max-w-xl"
        role="dialog"
        aria-modal="true"
        aria-label="Resume unavailable"
      >
        <div className="terminal-bar">
          <span className="terminal-dot bg-secondary" />
          <span className="terminal-dot bg-primary" />
          <span className="terminal-dot bg-accent" />
          <span className="terminal-path">resume.pdf</span>
        </div>
 
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="p-6 md:p-8 font-mono text-sm leading-relaxed"
        >
          <motion.p variants={staggerItem} className="text-foreground">
            &gt; download resume.pdf
          </motion.p>
 
          <motion.p variants={staggerItem} className="text-muted mt-4">
            Initializing...
          </motion.p>
 
          <motion.p variants={staggerItem} className="text-secondary font-semibold mt-4">
            ERROR:
          </motion.p>
          <motion.p variants={staggerItem} className="text-foreground">
            resume.pdf is currently private.
          </motion.p>
 
          <motion.p variants={staggerItem} className="text-muted mt-4">
            Reason:
          </motion.p>
          {reasons.map((reason) => (
            <motion.p key={reason} variants={staggerItem} className="text-muted pl-4">
              • {reason}
            </motion.p>
          ))}
 
          <motion.p variants={staggerItem} className="text-muted mt-4">
            If you'd like a copy:
          </motion.p>
 
          <motion.p variants={staggerItem} className="text-foreground mt-4">
            &gt; contact --email
          </motion.p>
          <motion.a
            variants={staggerItem}
            href="mailto:hello@example.com"
            className="text-accent hover:text-primary transition-colors inline-block"
          >
            ✔ muhullah25@gmail.com
          </motion.a>
 
          <motion.p variants={staggerItem} className="text-foreground mt-4">
            &gt; contact --linkedin
          </motion.p>
          <motion.a
            variants={staggerItem}
            href="#"
            className="text-accent hover:text-primary transition-colors inline-block"
          >
            ✔ linkedin.com/in/muhammad-ullah-m7/
          </motion.a>
 
          <motion.span variants={staggerItem} className="cursor inline-block mt-6" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}