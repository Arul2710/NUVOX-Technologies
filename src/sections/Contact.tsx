import { useState, type FormEvent } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { MagneticButton } from '../components/ui/MagneticButton'
import { COMPANY } from '../lib/data'

const FIELD =
  'w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-fg outline-none transition-all placeholder:text-fg-muted focus:border-brand-600/60 focus:ring-2 focus:ring-brand-600/20'

export function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 5000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-surface-2 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title={
            <>
              Let's discuss your{' '}
              <span className="gradient-text">next project</span>
            </>
          }
          subtitle="Tell us about your project — we'll reply within one business day."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form onSubmit={submit} className="rounded-2xl border border-border-soft bg-surface p-8 shadow-card sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold tracking-wider text-fg-muted uppercase">
                    Name *
                  </label>
                  <input id="name" required placeholder="John Carter" className={FIELD} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold tracking-wider text-fg-muted uppercase">
                    Email *
                  </label>
                  <input id="email" type="email" required placeholder="john@company.com" className={FIELD} autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-semibold tracking-wider text-fg-muted uppercase">
                    Phone
                  </label>
                  <input id="phone" type="tel" placeholder="+1 555 000 0000" className={FIELD} autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-xs font-semibold tracking-wider text-fg-muted uppercase">
                    Company
                  </label>
                  <input id="company" placeholder="Company Inc." className={FIELD} autoComplete="organization" />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-xs font-semibold tracking-wider text-fg-muted uppercase">
                    Service
                  </label>
                  <select id="service" className={FIELD} defaultValue="Web Development">
                    {['Custom Software', 'Web Development', 'Mobile App', 'AI / ML', 'Cloud & DevOps', 'UI/UX Design', 'E-Commerce', 'Cyber Security', 'IT Consulting', 'Other'].map((s) => (
                      <option key={s} className="bg-surface">{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-2 block text-xs font-semibold tracking-wider text-fg-muted uppercase">
                    Budget
                  </label>
                  <select id="budget" className={FIELD} defaultValue="Under $5,000">
                    {['Under $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+'].map((b) => (
                      <option key={b} className="bg-surface">{b}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs font-semibold tracking-wider text-fg-muted uppercase">
                    Message *
                  </label>
                  <textarea id="message" required rows={5} placeholder="Tell us about your project goals..." className={`${FIELD} resize-none`} />
                </div>
              </div>

              <MagneticButton type="submit" variant="gradient" className="mt-7 w-full py-4" ariaLabel="Send message">
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </MagneticButton>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-card">
                <div className="flex items-center gap-3 border-b border-border-soft px-6 py-4">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-fg">Our Office</p>
                    <p className="text-xs text-fg-muted">{COMPANY.address}</p>
                  </div>
                </div>
                <div className="relative h-64 w-full">
                  <iframe
                    title={`${COMPANY.name} office location`}
                    src="https://www.google.com/maps?q=New+York,NY&output=embed"
                    className="h-full w-full border-0 grayscale-[35%]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border-soft bg-surface p-6 shadow-card">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-fg">
                    <Phone className="h-4 w-4 text-brand-700" /> Contact
                  </h3>
                  <ul className="space-y-3 text-sm text-fg-muted">
                    <li>
                      <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`} className="transition-colors hover:text-brand-700">
                        {COMPANY.phone}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 break-all transition-colors hover:text-brand-700">
                        <Mail className="h-3.5 w-3.5 shrink-0" /> {COMPANY.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5 shrink-0" /> WhatsApp: {COMPANY.phone}
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border-soft bg-surface p-6 shadow-card">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-fg">
                    <Clock className="h-4 w-4 text-brand-700" /> Business Hours
                  </h3>
                  <ul className="space-y-3 text-sm text-fg-muted">
                    <li className="flex justify-between"><span>Mon – Fri</span><span className="font-medium text-fg">9 AM – 7 PM</span></li>
                    <li className="flex justify-between"><span>Saturday</span><span className="font-medium text-fg">10 AM – 4 PM</span></li>
                    <li className="flex justify-between"><span>Sunday</span><span className="font-medium text-emerald-600">24×7 Support</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
