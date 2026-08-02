import { INDUSTRIES } from '../lib/data'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-surface-2 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title={
            <>
              Deep expertise across{' '}
              <span className="gradient-text">your industry</span>
            </>
          }
          subtitle="We understand the regulations, workflows and challenges specific to your sector."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind) => (
            <StaggerItem key={ind.name} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-6 shadow-card card-lift">
                <span className="grid h-13 w-13 place-items-center rounded-xl bg-gradient-to-br from-brand-600/15 to-accent-500/15 text-brand-700 transition-all duration-300 group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white">
                  <ind.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-fg">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{ind.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
