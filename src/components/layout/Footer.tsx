import { useState, type FormEvent, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { scrollToSection } from '../../lib/scroll'
import { COMPANY } from '../../lib/data'

const FOOTER_COLS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/#about' },
      { label: 'Our Process', href: '/#process' },
      { label: 'Why Choose Us', href: '/#why-us' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Custom Software', href: '/#services' },
      { label: 'Web Development', href: '/#services' },
      { label: 'Mobile Apps', href: '/#services' },
      { label: 'Cloud & DevOps', href: '/#services' },
      { label: 'AI / ML', href: '/#services' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Hospital Management', href: '/#solutions' },
      { label: 'School ERP', href: '/#solutions' },
      { label: 'Custom CRM', href: '/#solutions' },
      { label: 'E-Commerce', href: '/#solutions' },
      { label: 'Cloud Migration', href: '/#solutions' },
    ],
  },
]

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/nuvox-technologies/',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z',
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/nuvoxtech',
    path: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/nuvoxtech',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/nuvoxtech',
    path: 'M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1v3.12c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z',
  },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
    window.setTimeout(() => setSubscribed(false), 3500)
  }

  const handleHash = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const [path, hash] = href.split('#')
    if (path === '/' && hash) {
      e.preventDefault()
      scrollToSection(`#${hash}`)
    }
  }

  return (
    <footer className="border-t border-border-soft bg-surface-2">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-40 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="NUVOX TECHNOLOGIES home">
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-muted">
              NUVOX TECHNOLOGIES is an enterprise IT consulting company building custom software,
              web and mobile applications, AI solutions, cloud platforms and DevOps pipelines that
              help businesses grow with confidence.
            </p>
            <div className="mt-6 space-y-3 text-sm text-fg-muted">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 transition-colors hover:text-brand-700"
              >
                <Mail className="h-4 w-4 text-brand-700" /> {COMPANY.email}
              </a>
              <a
                href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-3 transition-colors hover:text-brand-700"
              >
                <Phone className="h-4 w-4 text-brand-700" /> {COMPANY.phone}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />
                {COMPANY.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-fg uppercase">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        onClick={(e) => handleHash(e, link.href)}
                        className="group text-sm text-fg-muted transition-colors hover:text-brand-700"
                      >
                        <span className="inline-block h-px w-0 bg-brand-600 align-middle transition-all duration-300 group-hover:mr-1.5 group-hover:w-3" aria-hidden />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border-soft pt-8 md:flex-row md:items-center">
          <div className="w-full max-w-md">
            <h4 className="mb-3 text-sm font-semibold tracking-wider text-fg uppercase">
              Newsletter
            </h4>
            <form
              onSubmit={subscribe}
              className="flex items-center gap-2 rounded-lg border border-border-soft bg-surface p-1.5 pl-4 shadow-sm focus-within:border-brand-600/50 focus-within:ring-2 focus-within:ring-brand-600/20"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-fg-muted"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-600 text-white transition-colors hover:bg-brand-700"
              >
                {subscribed ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
              </button>
            </form>
            {subscribed && <p className="mt-2 text-xs text-emerald-600">Thanks for subscribing!</p>}
          </div>

          <div className="flex items-center gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-border-soft bg-surface text-fg-muted transition-all hover:-translate-y-1 hover:border-brand-600/40 hover:text-brand-700"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border-soft pt-6 text-xs text-fg-muted md:flex-row">
          <p>© {new Date().getFullYear()} NUVOX TECHNOLOGIES. All rights reserved.</p>
          <div className="flex items-center gap-5 md:pr-24">
            <Link to="/" className="transition-colors hover:text-brand-700">Privacy Policy</Link>
            <Link to="/" className="transition-colors hover:text-brand-700">Terms of Service</Link>
            <Link to="/sitemap.xml" className="transition-colors hover:text-brand-700">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
