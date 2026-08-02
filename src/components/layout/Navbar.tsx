import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useState, type MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { scrollToSection } from '../../lib/scroll'
import { cn } from '../../lib/utils'

const PRIMARY_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Industries', href: '/#industries' },
]

const MORE_LINKS = [
  { label: 'Our Process', href: '/#process' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))

  useEffect(() => {
    setOpen(false)
    setMoreOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleHash = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const [path, hash] = href.split('#')
    if (location.pathname === path && hash) {
      e.preventDefault()
      scrollToSection(`#${hash}`)
    }
  }

  const handleClose = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false)
    handleHash(e, href)
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-border-soft bg-[var(--nav-bg)] shadow-sm backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" aria-label="NUVOX TECHNOLOGIES home" onClick={(e) => handleHash(e, '/')}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {PRIMARY_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleHash(e, link.href)}
                className="group relative rounded-md px-3 py-2 text-[13.5px] font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
                <span
                  className="absolute inset-x-3 -bottom-px h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button className="flex items-center gap-1 rounded-md px-3 py-2 text-[13.5px] font-medium text-fg-muted transition-colors hover:text-fg">
                More
                <ChevronDown
                  className={cn('h-3.5 w-3.5 transition-transform duration-200', moreOpen && 'rotate-180')}
                />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-border-soft bg-surface p-1.5 shadow-card-hover"
                  >
                    {MORE_LINKS.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={(e) => handleHash(e, link.href)}
                        className="block rounded-lg px-3.5 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              to="/#contact"
              onClick={(e) => handleHash(e, '/#contact')}
              className="btn-gradient hidden rounded-lg px-4 py-2.5 text-[13px] font-semibold text-white lg:inline-block"
            >
              Book a Consultation
            </Link>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-lg border border-border-soft bg-surface text-fg xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-[var(--bg)]"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-lg border border-border-soft bg-surface text-fg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mx-auto max-w-3xl px-6 pt-6 pb-12" aria-label="Mobile">
              <ul className="grid gap-1 sm:grid-cols-2">
                {[...PRIMARY_LINKS, ...MORE_LINKS].map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      onClick={(e) => handleClose(e, link.href)}
                      className="flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-semibold text-fg transition-colors hover:bg-surface-2"
                    >
                      {link.label}
                      {link.href.startsWith('/#') && (
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500" aria-hidden />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-8"
              >
                <Link
                  to="/#contact"
                  onClick={(e) => handleClose(e, '/#contact')}
                  className="btn-gradient flex w-full items-center justify-center rounded-lg px-6 py-4 text-base font-semibold text-white"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
