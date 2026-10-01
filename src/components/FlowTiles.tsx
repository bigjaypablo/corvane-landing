import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, CalendarCheck, Inbox, UserCheck, type LucideIcon } from 'lucide-react'

interface FlowStep {
  label: string
  caption: string
  icon: LucideIcon
  iconColor: string
  glow: string
}

const steps: FlowStep[] = [
  { label: 'Captured', caption: 'Form received', icon: Inbox, iconColor: 'text-violet-700', glow: 'bg-violet-500' },
  { label: 'Qualified', caption: 'Fit confirmed', icon: BadgeCheck, iconColor: 'text-rose-600', glow: 'bg-rose-400' },
  { label: 'Assigned', caption: 'Owner alerted', icon: UserCheck, iconColor: 'text-blue-600', glow: 'bg-blue-500' },
  { label: 'Booked', caption: 'Call confirmed', icon: CalendarCheck, iconColor: 'text-fuchsia-600', glow: 'bg-fuchsia-500' },
]

export default function FlowTiles() {
  const [active, setActive] = useState(0)

  // A soft highlight travels through the steps. Disabled for reduced-motion users.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 1800)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative">
      {/* Colour behind the glass so the blur has something to refract */}
      <div aria-hidden="true" className="absolute -left-6 top-0 h-28 w-28 rounded-full bg-pink-400/60 blur-2xl" />
      <div aria-hidden="true" className="absolute -bottom-6 -right-4 h-32 w-32 rounded-full bg-indigo-500/50 blur-2xl" />

      <ol
        aria-label="How an enquiry becomes a booked call"
        className="relative grid grid-cols-4 rounded-[28px] border border-white/60 bg-white/25 p-3 shadow-[0_20px_50px_-15px_rgba(76,29,149,0.45),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl sm:p-4"
      >
        {/* flow line, sits behind the orbs */}
        <span
          aria-hidden="true"
          className="absolute left-[12.5%] right-[12.5%] top-[40px] border-t border-dashed border-violet-700/30 sm:top-[48px]"
        />

        {steps.map((s, i) => {
          const on = i === active
          const Icon = s.icon
          return (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
              className="relative flex list-none flex-col items-center text-center"
            >
              <div className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute inset-2 rounded-2xl blur-xl transition-opacity duration-500 ${s.glow} ${on ? 'opacity-80' : 'opacity-30'}`}
                />
                <span
                  className={`relative grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-500 sm:h-16 sm:w-16 ${
                    on
                      ? 'scale-105 border-white bg-white/85 shadow-[0_10px_28px_-8px_rgba(76,29,149,0.5)]'
                      : 'border-white/70 bg-white/45 shadow-[0_6px_16px_-8px_rgba(76,29,149,0.35)]'
                  }`}
                >
                  <span aria-hidden="true" className="pointer-events-none absolute inset-x-1 top-1 h-1/2 rounded-t-xl bg-gradient-to-b from-white/70 to-transparent" />
                  <Icon size={26} strokeWidth={1.75} aria-hidden="true" className={`relative ${s.iconColor}`} />
                </span>
              </div>

              <p className="mt-2.5 text-[12px] font-semibold text-neutral-950 sm:text-sm">{s.label}</p>
              <p className="mt-0.5 hidden text-[11px] leading-tight text-slate-700 sm:block">{s.caption}</p>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}
