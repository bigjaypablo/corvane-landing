import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { liveProof as sp } from '../data/content'

const VISIBLE = 4

export default function SocialProof() {
  const [start, setStart] = useState(0)
  const total = sp.recent.length

  // Every 4s the oldest avatar leaves and the next client joins at the end
  useEffect(() => {
    if (!sp.enabled || total <= VISIBLE) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setStart((s) => (s + 1) % total), 4000)
    return () => clearInterval(t)
  }, [total])

  if (!sp.enabled || total === 0) return null

  const shown = Array.from({ length: Math.min(VISIBLE, total) }, (_, i) => {
    const idx = (start + i) % total
    return { ...sp.recent[idx], idx }
  })
  const newest = shown[shown.length - 1]

  return (
    <div className="mb-6 mt-2">
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2.5" aria-hidden="true">
          <AnimatePresence initial={false} mode="popLayout">
            {shown.map((p) => (
              <motion.img
                key={p.idx}
                layout
                src={p.photo}
                alt=""
                width={40}
                height={40}
                initial={{ opacity: 0, scale: 0.6, x: 12 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.6, x: -12 }}
                transition={{ duration: 0.35 }}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
              />
            ))}
          </AnimatePresence>
        </div>

        <div>
          <a href={sp.ratingHref} className="flex items-center gap-1.5">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: sp.rating }).map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="text-sm font-semibold text-neutral-950">{sp.ratingLabel}</span>
          </a>
          <p className="mt-0.5 text-sm text-slate-600">
            <span className="font-semibold text-neutral-950">{sp.count}</span> {sp.countLabel}
          </p>
        </div>
      </div>

      <p
        role="status"
        aria-live="polite"
        className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        {newest.note}
      </p>
    </div>
  )
}
