import { company, demo, finalCta, footerLinks } from '../data/content'
import { DesignerLink } from './DemoBanner'
import { ButtonLink, Container } from './ui'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <section id="final-cta" className="bg-brand-600 py-16 sm:py-20" aria-labelledby="final-cta-title">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 id="final-cta-title" className="text-3xl font-semibold leading-tight !text-white sm:text-4xl">
              {finalCta.title}
            </h2>
            <p className="mt-3 text-base text-indigo-100 sm:text-lg">{finalCta.description}</p>
          </div>
          <ButtonLink href="#contact" variant="light" className="w-full sm:w-auto">
            {company.cta}
          </ButtonLink>
        </Container>
      </section>

      <div className="on-dark bg-slate-950 pb-28 pt-14 text-slate-400 lg:pb-12">
        <Container>
          <div className="grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="col-span-2 md:col-span-1">
              <p className="text-lg font-semibold text-white">{company.name}</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed">{company.description}</p>
            </div>
            <nav aria-label="Footer">
              <p className="text-sm font-semibold text-white">Navigate</p>
              <ul className="mt-3 space-y-2 text-sm">
                {footerLinks.navigate.map((l) => (
                  <li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="text-sm font-semibold text-white">Follow</p>
              <ul className="mt-3 space-y-2 text-sm">
                {footerLinks.social.map((l) => (
                  <li key={l.label}><a href={l.href} className="hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-sm font-semibold text-white">Contact</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
                <li><a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white">{company.phone}</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {company.name}.{' '}
              {demo.enabled ? (<>Concept project by <DesignerLink className="underline hover:text-white" />.</>) : 'All rights reserved.'}
            </p>
            <ul className="flex gap-5">
              {footerLinks.legal.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-white">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  )
}
