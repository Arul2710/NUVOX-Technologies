import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/ui/icons'
import { PROJECTS } from '../lib/data'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'
import { cn } from '../lib/utils'

const CATEGORIES = [
  'All',
  'Corporate Website',
  'Business Applications',
  'E-Commerce',
  'Healthcare',
  'Finance',
  'Education',
  'Travel',
  'Construction',
  'Retail',
  'SaaS Products',
]

export function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Portfolio"
          title={
            <>
              Work that delivers{' '}
              <span className="gradient-text">real business results</span>
            </>
          }
          subtitle="A selection of platforms we have designed, built and launched for clients across industries."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={cn(
                'rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200',
                active === c
                  ? 'border-brand-600 bg-brand-600 text-white shadow-sm'
                  : 'border-border-soft bg-surface text-fg-muted hover:border-brand-600/40 hover:text-fg',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <StaggerItem key={p.slug} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-brand-600/30 hover:shadow-card-hover">
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                    aria-hidden
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold tracking-wider text-slate-700 uppercase shadow-sm backdrop-blur">
                    {p.category}
                  </span>

                  {/* Hover action row */}
                  <div className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="font-display text-sm font-bold text-white drop-shadow">{p.client}</span>
                    <div className="flex items-center gap-2">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Live demo of ${p.title}`}
                        className="grid h-9 w-9 place-items-center rounded-lg bg-white text-slate-900 shadow-md transition-transform hover:scale-110"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`GitHub repository of ${p.title}`}
                        className="grid h-9 w-9 place-items-center rounded-lg bg-white text-slate-900 shadow-md transition-transform hover:scale-110"
                      >
                        <GithubIcon />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-fg transition-colors duration-300 group-hover:text-brand-700">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border-soft bg-surface-2 px-2.5 py-0.5 text-[10px] font-medium text-fg-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-border-soft pt-4">
                    <Link
                      to={`/work/${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all duration-300 hover:gap-2.5"
                    >
                      View Details
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <span className="text-xs text-fg-muted">{p.year}</span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
