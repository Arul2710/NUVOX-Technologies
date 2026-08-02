import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.7, when: 'beforeChildren' } },
}

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  return (
    <motion.main
      id="main"
      key={pathname}
      variants={variants}
      initial="initial"
      animate="enter"
      className="relative"
    >
      {children}
    </motion.main>
  )
}
