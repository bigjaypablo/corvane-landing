import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { company, navLinks } from '../data/content'
import { ButtonLink, Container } from './ui'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <header
      className={`on-dark sticky top-0 z-50 border-b transition-colors ${
        scrolled || open ? 'border-white/10 bg-black/85 backdrop-blur' : 'border-transparent bg-black'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${company.name} home`}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-purple-600" aria-hidden="true">
            <svg viewBox="0 0 32 32" className="h-5 w-5">
              <path d="M20.5 11.5A6.5 6.5 0 1 0 20.5 20.5" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">{company.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="#contact" variant="white" className="!min-h-[42px] !px-5 !text-sm">
            {company.cta}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-black lg:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center border-b border-white/10 text-base font-medium text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <ButtonLink href="#contact" variant="white" className="mt-4 w-full">
              {company.cta}
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  )
}
