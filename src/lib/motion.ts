import type { Variants } from 'framer-motion'
 
/** Fade up + in — used for section headers and standalone blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}
 
/** Wraps a group of children so they stagger in one after another. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}
 
/** Child item to pair with staggerContainer. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}
 
/** Default viewport settings so animations run once, a little before fully in view.
 *  "some" fires as soon as any part of the element is visible — unlike a fixed
 *  ratio (e.g. 0.2), this stays reliable even if the element is very tall
 *  (e.g. a grid that grows as more items are added). */
export const viewportOnce = { once: true, amount: 'some' } as const