import { Reveal } from './Reveal'
import { cn } from '../../lib/utils'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
  dark?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className, dark }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'relative z-10 mb-12 max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      <Reveal>
        <span
          className={cn(
            'inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase',
            dark ? 'text-accent-300' : 'text-brand-700',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-current" aria-hidden />
          <span className="grid h-2 w-2 rounded-full bg-accent-500" aria-hidden />
          {eyebrow}
          {align === 'center' && <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden />}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-current" aria-hidden />
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            'mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]',
            dark ? 'text-white' : 'text-fg',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              'mt-5 text-base leading-relaxed sm:text-lg',
              dark ? 'text-slate-300' : 'text-fg-muted',
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
