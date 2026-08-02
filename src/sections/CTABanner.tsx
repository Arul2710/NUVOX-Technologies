import { ArrowRight, CalendarCheck } from 'lucide-react'
import { MagneticButton } from '../components/ui/MagneticButton'
import { Reveal } from '../components/ui/Reveal'

export function CTABanner() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-14 shadow-card-hover sm:px-16">
            <div className="dot-bg absolute inset-0 opacity-30" aria-hidden />
            <div className="absolute -right-24 -top-24 h-72 w-72 animate-float-slow rounded-full bg-brand-600/30 blur-3xl" aria-hidden />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl" aria-hidden />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: 'linear-gradient(120deg, rgba(37,99,235,0.18), rgba(6,182,212,0.12))',
              }}
              aria-hidden
            />

            <div className="relative flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold text-accent-300 ring-1 ring-accent-500/20">
                <CalendarCheck className="h-3.5 w-3.5" /> Free 30-minute consultation
              </span>
              <h2 className="mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to build something great together?
              </h2>
              <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                Book a free consultation and get a roadmap, timeline and estimate for your project —
                no strings attached.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton href="/#contact" variant="gradient">
                  Book Free Consultation <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
              <p className="mt-6 text-xs text-slate-400">
                Trusted by 150+ companies · 12 industries · 250+ projects delivered
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
