import { WHY_US } from '../lib/data'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'

export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose NUVOX"
          title={
            <>
              The partner companies{' '}
              <span className="gradient-text">stay with for years</span>
            </>
          }
          subtitle="Reliability, quality and a long-term view on every engagement — that's the NUVOX standard."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((w) => (
            <StaggerItem key={w.title} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-6 shadow-card card-lift">
                <span className="grid h-13 w-13 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <w.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-bold text-fg">{w.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{w.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
