import { ArrowRight, Check } from 'lucide-react'
import { services } from '../data/content'
import { ButtonLink, Container, Reveal, Tag, renderTitle } from './ui'

// Cards that span two columns on desktop (bento rhythm)
const WIDE = [0, 3, 5]
const chips = [
  'from-violet-400 to-purple-600 shadow-violet-500/30',
  'from-rose-400 to-pink-600 shadow-pink-500/30',
  'from-indigo-400 to-blue-600 shadow-blue-500/30',
  'from-fuchsia-400 to-purple-600 shadow-fuchsia-500/30',
  'from-sky-400 to-indigo-600 shadow-indigo-500/30',
  'from-purple-400 to-violet-700 shadow-violet-500/30',
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <div>
              <Tag>{services.eyebrow}</Tag>
              <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] text-neutral-950 sm:text-5xl">
                {renderTitle(services.title, 'text-brand-600')}
              </h2>
            </div>
            <div className="lg:pb-1">
              <p className="text-base leading-relaxed text-slate-600">{services.description}</p>
              <ButtonLink href="#contact" className="mt-6 w-full sm:w-auto">
                Book a Strategy Call <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.items.map((s, i) => {
            const wide = WIDE.includes(i)
            const dark = i === 0
            const Icon = s.icon
            return (
              <li key={s.name} className={`list-none ${wide ? 'lg:col-span-2' : ''}`}>
                <Reveal delay={(i % 3) * 0.05} className="h-full">
                  <article
                    className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-0.5 sm:p-7 ${
                      dark
                        ? 'on-dark border-white/10 bg-black text-white shadow-lift'
                        : 'border-slate-200 bg-white shadow-card hover:shadow-lift'
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full blur-3xl ${
                        dark ? 'bg-violet-600/50' : wide ? 'bg-violet-400/20' : 'bg-violet-400/10'
                      }`}
                    />

                    <div className="relative flex items-center gap-3.5">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-lg ring-1 ring-white/40 ${chips[i % chips.length]}`}
                      >
                        <Icon size={18} strokeWidth={2} aria-hidden="true" />
                      </span>
                      <h3 className={`text-lg font-semibold leading-snug sm:text-xl ${dark ? 'text-white' : ''}`}>{s.name}</h3>
                    </div>

                    <p className={`relative mt-4 max-w-md text-[15px] leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {s.description}
                    </p>

                    <div
                      className={`relative mt-5 flex items-start gap-2.5 rounded-2xl border px-3.5 py-3 sm:mt-auto sm:items-center ${
                        dark ? 'border-white/10 bg-white/[0.06]' : 'border-brand-100 bg-brand-50/70'
                      }`}
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white sm:mt-0">
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <p className={`text-sm leading-snug ${dark ? 'text-slate-200' : 'text-neutral-900'}`}>
                        <span className={`font-semibold ${dark ? 'text-brand-300' : 'text-brand-700'}`}>Why it matters: </span>
                        {s.benefit}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
