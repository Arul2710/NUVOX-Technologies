import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'
import { STATS, TECH_GROUPS } from '../lib/data'
import { Counter } from '../components/ui/Counter'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'

const CORE_VALUES = ['Integrity', 'Innovation', 'Client First', 'Excellence', 'Ownership', 'Security']

const PILLARS = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To help businesses grow through secure, scalable and well-engineered software that delivers measurable, long-term outcomes.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted technology partner for ambitious companies worldwide — known for reliability, craft and partnership.',
  },
]

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title={
                <>
                  A technology partner your business{' '}
                  <span className="gradient-text">can rely on</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-fg-muted">
                NUVOX TECHNOLOGIES is a professional software development and technology consulting
                company. We design and build custom software, enterprise platforms, web and mobile
                applications, AI solutions, e-commerce experiences, cloud infrastructure and
                DevOps pipelines for clients across the globe.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 leading-relaxed text-fg-muted">
                Our senior team combines deep engineering expertise with practical business
                thinking. We measure success by your results — on-time delivery, reliable systems
                and software your teams actually enjoy using.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="card-lift rounded-2xl border border-border-soft bg-surface p-6 shadow-card"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-600/15 to-accent-500/15 text-brand-700">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-fg">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{p.text}</p>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8">
                <h3 className="text-sm font-semibold tracking-wider text-fg uppercase">Core Values</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {CORE_VALUES.map((v) => (
                    <span
                      key={v}
                      className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface px-3.5 py-1.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent-500/50 hover:text-fg"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500" aria-hidden />
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div
                className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-600/15 via-accent-500/10 to-transparent blur-xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border-soft bg-surface shadow-card-hover">
                <img
                  src={ABOUT_IMG}
                  alt="NUVOX TECHNOLOGIES team collaborating in a modern office"
                  width={1200}
                  height={800}
                  className="aspect-[3/2] w-full object-cover"
                  loading="lazy"
                />
                <div className="flex items-center justify-between border-t border-border-soft px-5 py-3">
                  <span className="text-xs font-medium text-fg-muted">NUVOX HQ · Global delivery</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> 24×7 Support
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="rounded-2xl border border-border-soft bg-surface p-5 text-center shadow-card card-lift"
                  >
                    <p className="font-display text-3xl font-extrabold text-brand-700">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1.5 text-xs font-medium text-fg-muted">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 rounded-2xl border border-border-soft bg-surface p-8 shadow-card">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              <div className="shrink-0 lg:w-56">
                <h3 className="text-lg font-bold text-fg">Technology Stack</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  Proven, modern tools chosen for reliability, security and scale.
                </p>
              </div>
              <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {TECH_GROUPS.map((group) => (
                  <div key={group.name}>
                    <h4 className="flex items-center gap-2 text-xs font-bold tracking-wider text-fg uppercase">
                      <group.icon className="h-4 w-4 text-brand-700" /> {group.name}
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-border-soft bg-surface-2 px-2.5 py-1 text-xs font-medium text-fg-muted transition-colors hover:border-brand-600/40 hover:text-fg"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
