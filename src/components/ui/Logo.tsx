import { cn } from '../../lib/utils'
import logo from '../../assets/nuvox-logo.png'

interface LogoProps {
  className?: string
  iconOnly?: boolean
}

export function Logo({ className, iconOnly }: LogoProps) {
  return (
    <span className={cn('group inline-flex items-center gap-3', className)}>
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-50 to-accent-100 ring-1 ring-brand-600/15 transition-all duration-500 group-hover:ring-brand-600/40">
        <img
          src={logo}
          alt="NUVOX TECHNOLOGIES logo"
          width={44}
          height={29}
          className="h-7 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
          loading="eager"
          fetchPriority="high"
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
      </span>
      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl font-extrabold tracking-[0.22em] text-fg transition-colors duration-300 group-hover:tracking-[0.3em]">
            NUVOX
          </span>
          <span className="mt-1 text-[9px] font-semibold tracking-[0.42em] text-fg-muted uppercase">
            Technologies
          </span>
        </span>
      )}
    </span>
  )
}
