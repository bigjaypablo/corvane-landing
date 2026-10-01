import { ArrowRight, Factory, Hexagon, Landmark, Mountain, Quote, Server, Truck, type LucideIcon } from 'lucide-react'
import { proof, showcase } from '../data/content'
import { ButtonLink, Container, Reveal, Tag, renderTitle } from './ui'

const logoIcons: LucideIcon[] = [Hexagon, Landmark, Factory, Server, Truck, Mountain]

type Case = (typeof showcase.cases)[number]

function Stats({ c, dark = false }: { c: Case; dark?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {c.stats.map((s, i) => (
        <div
          key={s.label}
          className={`rounded-2xl px-3.5 py-3 ${
            dark ? 'border border-white/10 bg-white/[0.06]' : 'border border-brand-100 bg-brand-50/70'
          }`}
        >
          <p className={`text-[11px] font-semibold uppercase tracking-wider ${dark ? 'text-brand-300' : 'text-brand-700'}`}>
            {s.label}
          </p>
          <p className={`mt-1 font-semibold leading-tight ${i === 0 ? 'text-lg' : 'text-base'} ${dark ? 'text-white' : 'text-neutral-950'}`}>
            {s.value}
          </p>
        </div>
      ))}
    </div>
  )
}

function CaseCard({ c, featured = false }: { c: Case; featured?: boolean }) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 sm:p-7 ${
        featured ? 'on-dark border-white/10 bg-black text-white shadow-lift [transform:translateZ(0)] [backface-visibility:hidden]' : 'border-slate-200 bg-white shadow-card'
      }`}
    >
      {featured && (
        <div aria-hidden="true" className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full bg-violet-600/50 blur-2xl" />
      )}

      <div className="relative flex items-center gap-3">
        <img
          src={c.photo}
          alt={`${c.person}, ${c.role} at ${c.client}`}
          width={44}
          height={44}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover ring-2 ring-white/20"
        />
        <div className="min-w-0">
          <h3 className={`truncate text-base font-semibold ${featured ? 'text-white' : ''}`}>{c.client}</h3>
          <p className={`truncate text-[13px] ${featured ? 'text-slate-400' : 'text-slate-500'}`}>{c.industry}</p>
        </div>
      </div>

      {/* Result first: this is what a buyer scans for */}
      <div className="relative mt-5">
        <Stats c={c} dark={featured} />
      </div>

      <blockquote className={`relative mt-5 text-[15px] leading-relaxed ${featured ? 'text-slate-200' : 'text-neutral-900'}`}>
        <Quote size={16} className={`mb-2 ${featured ? 'text-brand-300' : 'text-brand-500'}`} aria-hidden="true" />
        {c.quote}
        <footer className={`mt-2 text-sm ${featured ? 'text-slate-400' : 'text-slate-500'}`}>
          {c.person}, {c.role}
        </footer>
      </blockquote>

      <dl className={`relative mt-5 space-y-3 border-t pt-4 text-sm ${featured ? 'border-white/10' : 'border-slate-100'}`}>
        <div>
          <dt className={`text-[11px] font-semibold uppercase tracking-wider ${featured ? 'text-slate-400' : 'text-slate-500'}`}>Challenge</dt>
          <dd className={`mt-0.5 leading-relaxed ${featured ? 'text-slate-300' : 'text-slate-600'}`}>{c.challenge}</dd>
        </div>
        <div>
          <dt className={`text-[11px] font-semibold uppercase tracking-wider ${featured ? 'text-brand-300' : 'text-brand-600'}`}>What we did</dt>
          <dd className={`mt-0.5 leading-relaxed ${featured ? 'text-slate-200' : 'text-neutral-900'}`}>{c.work}</dd>
        </div>
      </dl>
    </article>
  )
}

export default function Proof() {
  const [first, ...rest] = showcase.cases
  const loop = [...showcase.logos, ...showcase.logos]

  return (
    <section id="proof" className="bg-neutral-50 py-16 sm:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <div>
              <Tag>{proof.eyebrow}</Tag>
              <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] text-neutral-950 sm:text-5xl">
                {renderTitle(proof.title, 'text-brand-600')}
              </h2>
            </div>
            <div className="lg:pb-1">
              <p className="text-base leading-relaxed text-slate-600">
                Real problems, specific fixes and numbers each client can verify. Here is what changed for three B2B firms.
              </p>
              <ButtonLink href="#contact" className="mt-6 w-full sm:w-auto">
                Book a Strategy Call <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Logo strip: slow marquee, static for reduced-motion users */}
      <div
        className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] lg:[mask-image:none] sm:mt-14"
        aria-label="Clients"
      >
        <ul className="flex w-max gap-3 px-3 [animation:proof-marquee_32s_linear_infinite] motion-reduce:[animation:none] lg:w-full lg:flex-wrap lg:justify-center lg:[animation:none]">
          {loop.map((name, i) => {
            const Icon = logoIcons[i % logoIcons.length]
            return (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= showcase.logos.length ? true : undefined}
                data-dup={i >= showcase.logos.length ? 'y' : undefined}
                className={`flex h-12 shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-slate-500 ${i >= showcase.logos.length ? 'lg:hidden' : ''}`}
              >
                <Icon size={16} aria-hidden="true" />
                <span className="whitespace-nowrap text-[13px] font-semibold">{name}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <Container>
        {/* Mobile: featured card + swipe row. Desktop: 3-column grid */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <Reveal className="h-full">
            <CaseCard c={first} featured />
          </Reveal>

          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:contents">
            {rest.map((c) => (
              <div key={c.client} className="w-[86%] shrink-0 snap-center sm:w-[60%] lg:w-auto lg:shrink">
                <CaseCard c={c} />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-1 text-center text-xs text-slate-400 lg:hidden" aria-hidden="true">
          Swipe for more →
        </p>

        <ul className="mt-8 flex flex-wrap gap-2.5">
          {showcase.credentials.map((c) => (
            <li key={c.label} className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm">
              <span className="font-semibold text-neutral-950">{c.label}</span>
              <span className="text-slate-500"> · {c.note}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs italic text-slate-500">{showcase.footnote}</p>
      </Container>
    </section>
  )
}
