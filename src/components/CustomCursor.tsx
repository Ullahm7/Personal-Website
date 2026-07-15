import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
 
const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, label, [role="button"], [data-cursor-hover]'
 
const BASE_SIZE = 14
const HOVER_SIZE = 21 
const HOVER_OPACITY = 0.6
 
function isPointerFineAndMotionOk() {
  if (typeof window === 'undefined') return false
  const canHover = window.matchMedia('(pointer: fine)').matches
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  return canHover && !prefersReducedMotion
}
 
export const CustomCursor = () => {
  const [enabled] = useState(isPointerFineAndMotionOk)
  const [isHovering, setIsHovering] = useState(false)
 
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 30, stiffness: 450, mass: 0.4 })
  const springY = useSpring(cursorY, { damping: 30, stiffness: 450, mass: 0.4 })
 
  useEffect(() => {
    if (!enabled) return
 
    document.body.classList.add('custom-cursor-active')
 
    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
    }
 
    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      setIsHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)))
    }
 
    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
 
    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
    }
  }, [enabled, cursorX, cursorY])
 
  if (!enabled) return null
 
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[200] rounded-full bg-splash pointer-events-none"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: isHovering ? HOVER_SIZE : BASE_SIZE,
        height: isHovering ? HOVER_SIZE : BASE_SIZE,
        opacity: isHovering ? HOVER_OPACITY : 1,
      }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    />
  )
}