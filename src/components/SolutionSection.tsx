import { ArrowRight, BarChart3, Check, MousePointerClick, UserCheck, Zap, type LucideIcon } from 'lucide-react'
import { solution } from '../data/content'
import { ButtonLink, Container, Reveal, Tag, renderTitle } from './ui'

const visuals: { icon: LucideIcon; chip: string; glow: string }[] = [
  { icon: MousePointerClick, chip: 'from-violet-400 to-purple-600 shadow-violet-500/30', glow: 'bg-violet-400/25' },
  { icon: Zap, chip: 'from-rose-400 to-pink-600 shadow-pink-500/30', glow: 'bg-pink-400/25' },
  { icon: UserCheck, chip: 'from-indigo-400 to-blue-600 shadow-blue-500/30', glow: 'bg-blue-400/25' },
  { icon: BarChart3, chip: 'from-fuchsia-400 to-purple-600 shadow-fuchsia-500/30', glow: 'bg-fuchsia-400/25' },
]

export default function SolutionSection() {
  return (
    <section id="solution" className="px-3 sm:px-6">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] bg-neutral-50 py-12 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-64"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(167,139,250,.18), rgba(250,250,250,0))' }}
        />

        <Container className="relative">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <Tag>{solution.eyebrow}</Tag>
                <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] text-neutral-950 sm:text-5xl">
                  {renderTitle(solution.title, 'text-brand-600')}
                </h2>
              </div>
              <div className="lg:pb-1">
                <p className="text-base leading-relaxed text-slate-600">{solution.description}</p>
                <ButtonLink href="#contact" className="mt-6 w-full sm:w-auto">
                  Book a Strategy Call <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <ol className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:gap-6">
            {solution.items.map((s, i) => {
              const v = visuals[i]
              const Icon = v.icon
              return (
                <li key={s.title} className="list-none">
                  <Reveal delay={(i % 2) * 0.07} className="h-full">
                    <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-8">
                      <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${v.glow}`}
                      />

                      <div className="relative flex items-start justify-between">
                        <span
                          className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br text-white shadow-lg ring-1 ring-white/50 ${v.chip}`}
                        >
                          <Icon size={18} strokeWidth={2} aria-hidden="true" />
                        </span>
                        <span aria-hidden="true" className="text-4xl font-semibold leading-none tracking-tight text-slate-300/80">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="relative mt-5 text-xl font-semibold sm:text-2xl">{s.title}</h3>

                      <dl className="relative mt-6 space-y-5 pl-6">
                        <div className="relative">
                          <span aria-hidden="true" className="absolute -left-[25px] bottom-[-26px] top-4 w-px bg-slate-200" />
                          <span aria-hidden="true" className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-slate-300 bg-white" />
                          <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Today</dt>
                          <dd className="mt-1 text-[15px] leading-relaxed text-slate-600">{s.problem}</dd>
                        </div>

                        <div className="relative">
                          <span aria-hidden="true" className="absolute -left-[25px] bottom-[-34px] top-4 w-px bg-slate-200" />
                          <span aria-hidden="true" className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-brand-500 bg-brand-500" />
                          <dt className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">What we do</dt>
                          <dd className="mt-1 text-[15px] leading-relaxed text-neutral-900">{s.solution}</dd>
                        </div>

                        <div className="relative">
                          <span aria-hidden="true" className="absolute -left-[29px] top-3.5 h-2.5 w-2.5 rounded-full border-2 border-brand-700 bg-brand-700" />
                          <dt className="sr-only">Result</dt>
                          <dd className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50/80 px-4 py-3">
                            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                              <Check size={12} strokeWidth={3} aria-hidden="true" />
                            </span>
                            <span>
                              <span className="block text-[11px] font-semibold uppercase tracking-wider text-brand-700">Result</span>
                              <span className="mt-0.5 block text-[15px] font-medium leading-snug text-neutral-950">{s.benefit}</span>
                            </span>
                          </dd>
                        </div>
                      </dl>
                    </article>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </Container>
      </div>
    </section>
  )
}
