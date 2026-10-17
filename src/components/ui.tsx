import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

export const chamfer = (n: number) =>
  `polygon(${n}px 0, 100% 0, 100% calc(100% - ${n}px), calc(100% - ${n}px) 100%, 0 100%, 0 ${n}px)`

export function CtaButton({
  href,
  children,
  short,
  tone = 'teal',
}: {
  href: string
  children: ReactNode
  short?: ReactNode
  tone?: 'teal' | 'aqua'
}) {
  const color = tone === 'teal' ? 'bg-teal text-white' : 'bg-aqua text-deep'
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className={`group inline-flex items-center gap-2 px-4 py-3 sm:px-5 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] font-medium transition hover:brightness-125 ${color}`}
      style={{ clipPath: chamfer(10) }}
    >
      {short ? (
        <>
          <span className="hidden sm:inline">{children}</span>
          <span className="sm:hidden">{short}</span>
        </>
      ) : (
        children
      )}
      <ArrowUpRight className="w-3.5 h-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

export function ArrowLink({ href, children, light }: { href: string; children: ReactNode; light?: boolean }) {
  const c = light ? 'text-white' : 'text-navy'
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className={`group inline-flex items-center gap-3 text-[14px] font-medium transition hover:-translate-y-0.5 ${c}`}
    >
      {children}
      <span
        className={`grid place-items-center w-8 h-8 ${light ? 'bg-white/90' : 'bg-navy'}`}
        style={{ clipPath: chamfer(8) }}
      >
        <span
          className={`grid place-items-center w-[30px] h-[30px] ${light ? 'bg-deep' : 'bg-cloud'}`}
          style={{ clipPath: chamfer(7.5) }}
        >
          <ArrowUpRight className="w-4 h-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </span>
    </a>
  )
}

/** Tarjeta con borde chaflanado (SVG), como las nominaciones de la referencia */
export function ChamferCard({
  title,
  subtitle,
  active,
  onActivate,
  href,
}: {
  title: string
  subtitle: string
  active?: boolean
  onActivate?: () => void
  href: string
}) {
  return (
    <a
      href={href}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={(e) => {
        if (onActivate) {
          e.preventDefault()
          onActivate()
        }
      }}
      aria-pressed={active}
      className={`relative block w-full max-w-[20em] mx-auto h-[5em] transition hover:-translate-y-0.5 ${
        active ? 'text-white' : 'text-navy'
      }`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon
          points="14,0 100,0 100,86 86,100 0,100 0,14"
          fill={active ? '#0B2A60' : 'none'}
          stroke={active ? '#0B2A60' : 'rgba(8, 122, 136, 0.28)'}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <span className="text-[13px] font-semibold">{title}</span>
        <span className="text-[12px] font-normal opacity-80">{subtitle}</span>
      </span>
    </a>
  )
}

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-[12px] tracking-[0.24em] uppercase ${light ? 'text-aqua' : 'text-teal'}`}>[{children}]</p>
  )
}

export function BottomFade({ to = '#F3F6FB' }: { to?: string }) {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 w-full h-40 sm:h-56 z-10"
      style={{
        background: `linear-gradient(to bottom, ${to}00 0%, ${to}b3 60%, ${to} 100%)`,
      }}
    />
  )
}
