import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '../lib/data'
import { SectionHeading } from '../components/ui/SectionHeading'
import { cn } from '../lib/utils'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions? <span className="gradient-text">Answered.</span>
            </>
          }
          subtitle="Everything you might want to know before starting a project with NUVOX."
        />

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className={cn(
                  'overflow-hidden rounded-2xl border bg-surface shadow-card transition-colors duration-200',
                  isOpen ? 'border-brand-600/40' : 'border-border-soft',
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-fg">{faq.q}</span>
                  <span
                    className={cn(
                      'grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300',
                      isOpen
                        ? 'border-brand-600 bg-gradient-to-br from-brand-600 to-accent-500 text-white'
                        : 'border-border-soft text-brand-700',
                    )}
                  >
                    <ChevronDown
                      className={cn('h-4 w-4 transition-transform duration-300', isOpen && 'rotate-180')}
                    />
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-fg-muted">{faq.a}</p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
