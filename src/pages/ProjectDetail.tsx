import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Calendar, CheckCircle2, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/ui/icons'
import { PROJECTS } from '../lib/data'
import { MagneticButton } from '../components/ui/MagneticButton'
import { Reveal } from '../components/ui/Reveal'
import { cn } from '../lib/utils'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)
  const related = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3)

  if (!project) {
    return (
      <div className="grid min-h-[60vh] place-items-center px-5 pt-28 text-center">
        <div>
          <h1 className="text-4xl font-extrabold">Project not found</h1>
          <MagneticButton href="/" className="mt-8">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </MagneticButton>
        </div>
      </div>
    )
  }

  return (
    <div className="relative pt-24">
      <div className={cn('relative overflow-hidden bg-gradient-to-br', project.gradient)}>
        <div className="grid-bg absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-black/25 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-black/40"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All Projects
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wider text-white/85 uppercase">
              <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">{project.category}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {project.year}</span>
              <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">{project.client}</span>
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">{project.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
              >
                <GithubIcon /> View Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="-mt-10 grid gap-5 sm:grid-cols-3">
          {project.results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-border-soft bg-surface p-6 text-center shadow-card card-lift"
            >
              <p className="font-display text-3xl font-extrabold text-brand-700 sm:text-4xl">{r.value}</p>
              <p className="mt-2 text-sm font-medium text-fg-muted">{r.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10 py-16 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-border-soft shadow-card">
              <img
                src={project.image}
                alt={project.imageAlt}
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            <h2 className="mt-12 text-2xl font-extrabold text-fg">The Challenge &amp; Solution</h2>
            <div className="mt-6 space-y-5">
              {project.overview.map((para) => (
                <p key={para} className="leading-relaxed text-fg-muted">{para}</p>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-extrabold text-fg">Outcomes</h2>
            <ul className="mt-6 space-y-4">
              {project.results.map((r) => (
                <li key={r.label} className="flex items-start gap-3 text-fg-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>
                    <strong className="text-fg">{r.value}</strong> {r.label} — delivered and measured
                    within the first quarter after launch.
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <MagneticButton href="/#contact" variant="gradient">
                Start a project like this <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="sticky top-28 rounded-2xl border border-border-soft bg-surface p-6 shadow-card">
              <h3 className="text-sm font-bold tracking-wider text-fg uppercase">Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="rounded-full border border-border-soft bg-surface-2 px-3.5 py-1.5 text-xs font-medium text-fg">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mt-8 text-sm font-bold tracking-wider text-fg uppercase">Client</h3>
              <p className="mt-3 text-sm text-fg-muted">{project.client}</p>
              <h3 className="mt-8 text-sm font-bold tracking-wider text-fg uppercase">Year</h3>
              <p className="mt-3 text-sm text-fg-muted">{project.year}</p>
              <h3 className="mt-8 text-sm font-bold tracking-wider text-fg uppercase">Category</h3>
              <p className="mt-3 text-sm text-fg-muted">{project.category}</p>
              <div className="mt-8 flex gap-3 border-t border-border-soft pt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border-soft px-4 py-2.5 text-xs font-semibold text-fg transition-colors hover:border-brand-600/50 hover:text-brand-700"
                >
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <h2 className="mb-8 text-2xl font-extrabold text-fg">More Work</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              className="group block overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-slate-700 uppercase">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-fg transition-colors group-hover:text-brand-700">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
