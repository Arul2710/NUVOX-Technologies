import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { scrollToTop } from '../../lib/scroll'

export function BackToTop() {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 700))

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          onClick={() => scrollToTop(false)}
          aria-label="Back to top"
          className="fixed right-6 bottom-[212px] z-40 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-card transition-all hover:shadow-glow"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
