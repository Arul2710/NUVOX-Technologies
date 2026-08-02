import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../lib/data'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'
import { scrollToId } from '../lib/scroll'

function ServiceCard({ title, description, icon: Icon, index }: (typeof SERVICES)[number] & { index: number }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface p-6 shadow-card card-lift">
      <span
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-600/10 to-accent-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0"
        aria-hidden
      />
      <div className="flex items-start justify-between">
        <span className="grid h-13 w-13 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 p-3 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
          <Icon className="h-6 w-6" />
        </span>
        <span className="font-display text-xs font-bold tracking-widest text-border-soft select-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="mt-5 text-base font-bold text-fg transition-colors duration-300 group-hover:text-brand-700">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{description}</p>
      <a
        href="/#contact"
        onClick={(e) => {
          e.preventDefault()
          scrollToId('contact')
        }}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all duration-300 hover:gap-2.5"
      >
        Get a quote
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface-2 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Complete software services,{' '}
              <span className="gradient-text">under one roof</span>
            </>
          }
          subtitle="From custom software and mobile apps to enterprise platforms, AI and cloud infrastructure — one accountable team, end to end."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, i) => (
            <StaggerItem key={service.title} className="h-full">
              <ServiceCard {...service} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
