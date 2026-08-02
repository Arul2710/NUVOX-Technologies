import { PROCESS_STEPS } from '../lib/data'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Development Process"
          title={
            <>
              A clear process from idea to{' '}
              <span className="gradient-text">successful launch</span>
            </>
          }
          subtitle="Seven transparent stages. Weekly demos. No surprises."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute top-3 bottom-3 left-6 w-px bg-gradient-to-b from-brand-600/60 via-accent-500/40 to-transparent"
            aria-hidden
          />
          <Stagger className="space-y-5">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.title}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 grid h-13 w-13 shrink-0 place-items-center rounded-full border border-border-soft bg-surface shadow-card">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-md">
                      <step.icon className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="flex-1 rounded-2xl border border-border-soft bg-surface p-5 shadow-card card-lift">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs font-extrabold tracking-widest text-brand-700 uppercase">
                        {step.step}
                      </span>
                      <span className="h-px flex-1 bg-border-soft" aria-hidden />
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-fg">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
