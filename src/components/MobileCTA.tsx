import { useEffect, useState } from 'react'
import { company } from '../data/content'

// Hide the sticky bar whenever the form or the final CTA is on screen
const WATCH = ['contact', 'final-cta']

export default function MobileCTA() {
  const [pastHero, setPastHero] = useState(false)
  const [covered, setCovered] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const seen = new Set<string>()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? seen.add(e.target.id) : seen.delete(e.target.id)))
      setCovered(seen.size > 0)
    })
    WATCH.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  const visible = pastHero && !covered

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="#contact"
        tabIndex={visible ? 0 : -1}
        className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-white text-base font-semibold text-neutral-950 active:bg-slate-200"
      >
        {company.cta}
      </a>
    </div>
  )
}
