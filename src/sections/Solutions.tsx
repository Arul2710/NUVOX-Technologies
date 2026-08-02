import { ArrowUpRight } from 'lucide-react'
import { SOLUTIONS } from '../lib/data'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'
import { scrollToId } from '../lib/scroll'

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Business Software Solutions"
          title={
            <>
              Ready-to-scale software for{' '}
              <span className="gradient-text">your industry</span>
            </>
          }
          subtitle="Proven products and modules that ship faster, cost less and grow with your business."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SOLUTIONS.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-6 shadow-card card-lift">
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${s.color}18`, color: s.color }}
                >
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-bold text-fg">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{s.description}</p>
                <a
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId('contact')
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all duration-300 hover:gap-2.5"
                >
                  Explore <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
