import { motion } from 'framer-motion'
import { LayoutGrid } from 'lucide-react'
import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function Reveal({
  children, delay = 0, className = '',
}: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

/** Wrap words in [[double brackets]] inside content strings to colour them purple. */
export function renderTitle(title: string, accentClass: string) {
  return title.split(/(\[\[.+?\]\])/g).map((part, i) =>
    part.startsWith('[[') ? (
      <span key={i} className={accentClass}>{part.slice(2, -2)}</span>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export function Tag({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide ${
        dark ? 'border-white/15 bg-white/5 text-white' : 'border-slate-200 bg-white text-neutral-900'
      }`}
    >
      <LayoutGrid size={14} aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow, title, description, dark = false, center = false, stack = false, action,
}: {
  eyebrow?: string
  title: string
  description?: string
  dark?: boolean
  center?: boolean
  stack?: boolean
  action?: ReactNode
}) {
  const accent = dark ? 'text-brand-300' : 'text-brand-600'
  const layout = center
    ? 'mx-auto max-w-2xl text-center'
    : stack
      ? 'flex flex-col gap-5'
      : 'flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16'

  return (
    <div className={layout}>
      <div className={center ? '' : 'max-w-2xl'}>
        {eyebrow && <Tag dark={dark}>{eyebrow}</Tag>}
        <h2 className={`mt-5 text-[2rem] font-semibold leading-[1.1] sm:text-5xl ${dark ? 'text-white' : 'text-neutral-950'}`}>
          {renderTitle(title, accent)}
        </h2>
      </div>
      {(description || action) && (
        <div className={center ? 'mt-4' : stack ? 'max-w-lg' : 'max-w-sm'}>
          {description && (
            <p className={`text-base leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>
          )}
          {action && <div className="mt-6">{action}</div>}
        </div>
      )}
    </div>
  )
}

type Variant = 'primary' | 'white' | 'light' | 'outline' | 'outlineDark'
const variants: Record<Variant, string> = {
  primary: 'bg-neutral-950 text-white hover:bg-neutral-800',
  white: 'bg-white text-neutral-950 hover:bg-slate-200',
  light: 'bg-white text-neutral-950 hover:bg-slate-200',
  outline: 'border border-slate-300 bg-white text-neutral-950 hover:bg-slate-50',
  outlineDark: 'border border-white/30 text-white hover:bg-white/10',
}

export function ButtonLink({
  href, variant = 'primary', children, className = '',
}: { href: string; variant?: Variant; children: ReactNode; className?: string }) {
  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 text-base font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  )
}
