import { BadgeCheck, Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../lib/data'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../components/ui/Reveal'
import { cn } from '../lib/utils'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn('h-4 w-4', i < count ? 'fill-amber-400 text-amber-400' : 'text-fg/20')}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-surface-2 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by{' '}
              <span className="gradient-text">business leaders</span>
            </>
          }
          subtitle="Real feedback from the companies we build for."
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-border-soft bg-surface p-6 shadow-card card-lift">
                <div className="flex items-center justify-between">
                  <Stars count={t.rating} />
                  <Quote className="h-6 w-6 text-brand-200" aria-hidden />
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-fg-muted">
                  &quot;{t.quote}&quot;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border-soft pt-5">
                  <span
                    className={cn(
                      'grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-md',
                      t.gradient,
                    )}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="flex items-center gap-1.5 text-sm font-bold text-fg">
                      {t.name}
                      <BadgeCheck className="h-3.5 w-3.5 text-accent-500" aria-label="Verified client" />
                    </p>
                    <p className="text-xs text-fg-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
