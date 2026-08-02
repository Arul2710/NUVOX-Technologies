import { motion } from 'framer-motion'
import { useState, type MouseEvent, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { cn } from '../../lib/utils'
import { scrollToId } from '../../lib/scroll'

interface ButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'ghost' | 'gradient' | 'white'
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
  ariaLabel?: string
}

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

export function MagneticButton({
  children,
  className,
  variant = 'primary',
  onClick,
  href,
  type,
  ariaLabel,
}: ButtonProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [ripples, setRipples] = useState<Ripple[]>([])

  const spawnRipple = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2.2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const id = Date.now()
    setRipples((r) => [...r, { id, x, y, size }])
    window.setTimeout(() => setRipples((r) => r.filter((w) => w.id !== id)), 700)
  }

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    spawnRipple(e as unknown as MouseEvent<HTMLAnchorElement | HTMLButtonElement>)
    onClick?.()
    if (!href || href === '#') return
    if (href.startsWith('/#')) {
      const [path, hash] = href.split('#')
      if (location.pathname === path) {
        e.preventDefault()
        scrollToId(hash)
      } else {
        e.preventDefault()
        navigate(href)
      }
    }
  }

  const classes = cn(
    'ripple-host inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300',
    variant === 'primary' &&
      'bg-brand-600 text-white shadow-sm hover:bg-brand-700 hover:shadow-md active:scale-[0.98]',
    variant === 'gradient' &&
      'btn-gradient text-white shadow-sm active:scale-[0.98]',
    variant === 'ghost' &&
      'border border-border-soft bg-surface text-fg hover:border-brand-600/50 hover:text-brand-700 active:scale-[0.98]',
    variant === 'white' &&
      'bg-white text-brand-700 shadow-sm hover:bg-brand-50 active:scale-[0.98]',
    className,
  )

  const rippleMarkup = (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            background: variant === 'ghost' || variant === 'white' ? 'rgba(37,99,235,0.18)' : 'rgba(255,255,255,0.35)',
            transform: 'scale(0)',
            animation: 'ripple 0.7s ease-out forwards',
          }}
          aria-hidden
        />
      ))}
    </>
  )

  if (type === 'submit') {
    return (
      <button
        type="submit"
        aria-label={ariaLabel}
        onClick={(e) => spawnRipple(e)}
        className={classes}
      >
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        {rippleMarkup}
      </button>
    )
  }

  return (
    <motion.a
      href={href ?? '#'}
      aria-label={ariaLabel}
      onClick={handleClick}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {rippleMarkup}
    </motion.a>
  )
}
