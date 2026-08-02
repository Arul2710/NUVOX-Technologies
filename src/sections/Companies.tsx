import { COMPANY_TYPES } from '../lib/data'

function CompanyLogo({ name }: { name: string }) {
  return (
    <span className="mx-6 flex shrink-0 items-center gap-3 rounded-xl border border-border-soft bg-surface px-5 py-2.5 text-sm font-semibold text-fg-muted shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-600/40 hover:text-brand-700">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand-600/15 to-accent-500/15 text-xs font-bold text-brand-700">
        {name[0]}
      </span>
      {name}
    </span>
  )
}

export function Companies() {
  const doubled = [...COMPANY_TYPES, ...COMPANY_TYPES]
  return (
    <section className="py-14" aria-label="Trusted by businesses across industries">
      <p className="mb-8 text-center text-xs font-semibold tracking-[0.3em] text-fg-muted uppercase">
        Trusted by businesses across industries
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[var(--bg)] to-transparent" />
        <div className="animate-marquee flex w-max items-center">
          {doubled.map((name, i) => (
            <CompanyLogo key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
