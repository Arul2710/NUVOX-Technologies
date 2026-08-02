import { ACHIEVEMENTS } from '../lib/data'
import { Counter } from '../components/ui/Counter'
import { Reveal } from '../components/ui/Reveal'

export function Achievements() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      <div className="dot-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] text-accent-300 uppercase">
              <span className="h-px w-8 bg-accent-300/50" aria-hidden />
              Achievements
              <span className="h-px w-8 bg-accent-300/50" aria-hidden />
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              A track record that{' '}
              <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                speaks for itself
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Numbers earned the hard way — through delivery discipline, security-first engineering
              and long-term client relationships.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.06}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:bg-white/10">
                <p className="font-display text-3xl font-extrabold text-white lg:text-4xl">
                  <Counter value={a.value} suffix={a.suffix} />
                </p>
                <p className="mt-2 text-xs font-medium text-slate-300">{a.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
