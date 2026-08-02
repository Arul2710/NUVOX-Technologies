import { ArrowUpRight, Briefcase, Clock, Heart, Layers } from 'lucide-react'
import { CAREERS, COMPANY } from '../lib/data'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'
import { MagneticButton } from '../components/ui/MagneticButton'

const PERKS = [
  { icon: Layers, title: 'Remote-First', description: 'Work from anywhere, async-first culture.' },
  { icon: Clock, title: 'Flexible Hours', description: 'Own your schedule, deliver outcomes.' },
  { icon: Heart, title: 'Health & Wellness', description: 'Premium insurance and wellness budget.' },
  { icon: Briefcase, title: 'Growth Path', description: 'Mentorship, training budgets and promotion tracks.' },
]

export default function Careers() {
  return (
    <div className="pt-32 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Careers"
          title={
            <>
              Build the future with{' '}
              <span className="gradient-text">us</span>
            </>
          }
          subtitle="We're hiring senior engineers, designers and strategists who care about craft."
        />

        <Stagger className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group h-full rounded-2xl border border-border-soft bg-surface p-6 shadow-card card-lift">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-fg">{p.title}</h3>
                <p className="mt-1.5 text-sm text-fg-muted">{p.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="space-y-4">
          {CAREERS.map((job) => (
            <StaggerItem key={job.title}>
              <a
                href={`mailto:${COMPANY.careersEmail}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                className="group flex flex-col gap-4 rounded-2xl border border-border-soft bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-card-hover sm:flex-row sm:items-center"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600/15 to-accent-500/15 text-brand-700">
                  <job.icon className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-fg">{job.title}</h3>
                  <div className="mt-1.5 flex flex-wrap gap-2 text-xs text-fg-muted">
                    <span className="rounded-full border border-border-soft px-2.5 py-1">{job.dept}</span>
                    <span className="rounded-full border border-border-soft px-2.5 py-1">{job.type}</span>
                    <span className="rounded-full border border-border-soft px-2.5 py-1">{job.location}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-transform duration-300 group-hover:translate-x-0.5">
                  Apply <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-14 text-center">
          <p className="text-fg-muted">Don't see your role?</p>
          <MagneticButton href={`mailto:${COMPANY.careersEmail}`} variant="gradient" className="mt-4">
            Send us your resume
          </MagneticButton>
        </div>
      </div>
    </div>
  )
}
