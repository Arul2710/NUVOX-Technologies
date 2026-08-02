import { animate, useInView, useMotionValue, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function Counter({ value, suffix = '', duration = 2, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString())

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, value, { duration, ease: [0.16, 1, 0.3, 1] })
    return controls.stop
  }, [inView, value, duration, mv])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
