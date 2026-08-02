import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import logo from '../../assets/nuvox-logo.png'

const LETTERS = ['N', 'U', 'V', 'O', 'X']

export function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(() => {
      setDone(true)
      document.body.style.overflow = ''
    }, 1900)
    return () => {
      window.clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] grid place-items-center"
          style={{ background: 'var(--bg)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center px-6"
          >
            <img
              src={logo}
              alt="NUVOX TECHNOLOGIES"
              width={112}
              height={74}
              className="h-16 w-auto animate-float"
              loading="eager"
            />
            <div className="mt-8 flex gap-1.5" aria-hidden>
              {LETTERS.map((l, i) => (
                <motion.span
                  key={l}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                  className="font-display text-2xl font-extrabold tracking-[0.28em] text-fg"
                >
                  {l}
                </motion.span>
              ))}
            </div>
            <div className="relative mt-8 h-[3px] w-52 overflow-hidden rounded-full bg-fg/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-1/2 rounded-full bg-gradient-to-r from-brand-600 to-accent-500"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-5 text-[11px] tracking-[0.42em] text-fg-muted uppercase"
            >
              Engineering Excellence
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
