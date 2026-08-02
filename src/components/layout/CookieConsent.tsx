import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Check, Cookie, SlidersHorizontal } from 'lucide-react'
import { cn } from '../../lib/utils'

const STORAGE_KEY = 'nuvox-cookie-consent'

type Consent = 'accepted' | 'rejected' | 'customized'

const OPTIONS = [
  { key: 'essential', label: 'Essential cookies', desc: 'Required for the site to function', locked: true },
  { key: 'analytics', label: 'Analytics cookies', desc: 'Help us understand usage' },
  { key: 'marketing', label: 'Marketing cookies', desc: 'For personalized ads and content' },
]

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [customize, setCustomize] = useState(false)
  const [consent, setConsent] = useState<Consent | null>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null
    if (!stored) {
      const t = window.setTimeout(() => setVisible(true), 2600)
      return () => window.clearTimeout(t)
    }
  }, [])

  const save = (c: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, c)
    setConsent(c)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-5 right-5 z-[70] w-[min(94vw,400px)] rounded-xl border border-border-soft bg-surface p-5 shadow-card-hover"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-600/10 text-brand-700">
              <Cookie className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-sm font-semibold text-fg">We value your privacy</h3>
              <p className="mt-1 text-xs leading-relaxed text-fg-muted">
                We use cookies to improve your browsing experience, analyze site traffic and deliver
                personalized content.
              </p>
            </div>
          </div>

          {customize && (
            <div className="mt-4 space-y-2 rounded-lg border border-border-soft p-3 text-xs">
              {OPTIONS.map((opt) => (
                <label
                  key={opt.key}
                  className={cn(
                    'flex cursor-pointer items-center justify-between gap-2',
                    opt.locked && 'cursor-not-allowed opacity-60',
                  )}
                >
                  <span>
                    <span className="block font-medium text-fg">{opt.label}</span>
                    <span className="block text-fg-muted">{opt.desc}</span>
                  </span>
                  <input
                    type="checkbox"
                    defaultChecked
                    disabled={opt.locked}
                    className="h-4 w-4 accent-brand-600"
                  />
                </label>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => save('accepted')}
              className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <Check className="h-3.5 w-3.5" /> Accept All
            </button>
            <button
              onClick={() => save('rejected')}
              className={cn(
                'rounded-lg border border-border-soft px-4 py-2 text-xs font-semibold text-fg transition-colors hover:border-brand-600/40',
                consent === 'rejected' && 'border-emerald-500/60',
              )}
            >
              Reject
            </button>
            <button
              onClick={() => setCustomize((c) => !c)}
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-fg-muted transition-colors hover:text-fg"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" /> {customize ? 'Hide' : 'Customize'}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
