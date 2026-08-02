import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, CalendarCheck, Sparkles } from 'lucide-react'
import { MagneticButton } from '../components/ui/MagneticButton'

const TRUST_ITEMS = ['ISO-aligned processes', 'SOC 2 ready delivery', 'NDA on request', '24×7 support']

const HERO_IMG =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 lg:pt-48">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-b from-brand-50 via-accent-50/60 to-transparent"
        aria-hidden
      />
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" aria-hidden />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold text-accent-700"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Enterprise IT Consulting &amp; Engineering
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-fg sm:text-5xl xl:text-[3.6rem]"
          >
            Building <span className="gradient-text">Future-Ready</span> Digital Solutions for
            Modern Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted lg:mx-0"
          >
            Helping startups and enterprises scale through innovative software development, cloud
            solutions, AI integration and digital transformation — delivered with enterprise-grade
            reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <MagneticButton href="/#contact" variant="gradient">
              Get Started <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="/#contact" variant="primary">
              <CalendarCheck className="h-4 w-4" /> Book Consultation
            </MagneticButton>
            <MagneticButton href="/#services" variant="ghost">
              Explore Services
            </MagneticButton>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium text-fg-muted lg:justify-start"
          >
            {TRUST_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-accent-500" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Premium image panel */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div
            className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-600/15 via-accent-500/10 to-transparent blur-xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border-soft bg-surface shadow-card-hover">
            <img
              src={HERO_IMG}
              alt="NUVOX TECHNOLOGIES software engineering team collaborating in a modern office"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5">
              <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-500/90 text-white">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Enterprise Engineering</p>
                  <p className="text-xs text-white/70">AWS · Azure · GCP certified</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-right backdrop-blur-md">
                <p className="font-display text-lg font-bold text-white">
                  98<span className="text-accent-300">%</span>
                </p>
                <p className="text-xs text-white/70">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Floating badge — top right */}
          <div className="absolute -top-6 -right-3 animate-float rounded-2xl border border-border-soft bg-surface px-5 py-4 shadow-card-hover sm:-right-6">
            <p className="font-display text-2xl font-extrabold text-brand-700">
              250<span className="text-accent-500">+</span>
            </p>
            <p className="mt-0.5 text-xs font-medium text-fg-muted">Projects Delivered</p>
          </div>

          {/* Floating badge — bottom left */}
          <div className="absolute -bottom-6 -left-3 animate-float-slow rounded-2xl border border-border-soft bg-surface px-5 py-4 shadow-card-hover sm:-left-6">
            <p className="font-display text-2xl font-extrabold text-brand-700">
              10<span className="text-accent-500">+</span>
            </p>
            <p className="mt-0.5 text-xs font-medium text-fg-muted">Years of Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
