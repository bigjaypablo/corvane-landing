import { ArrowRight, Hammer, PenLine, PhoneCall, TrendingUp, UserRound, type LucideIcon } from 'lucide-react'
import { process } from '../data/content'
import { ButtonLink, Container, Reveal, Tag, renderTitle } from './ui'

const icons: LucideIcon[] = [PhoneCall, PenLine, Hammer, TrendingUp]

export default function Process() {
  return (
    <section id="how-it-works" className="px-3 py-3 sm:px-6">
      <div className="on-dark relative mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] bg-black py-14 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-violet-600/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-24 h-[360px] w-[360px] rounded-full bg-indigo-600/25 blur-3xl"
        />

        <Container className="relative">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <Tag dark>{process.eyebrow}</Tag>
                <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] text-white sm:text-5xl">
                  {renderTitle(process.title, 'text-brand-300')}
                </h2>
              </div>
              <div className="lg:pb-1">
                <p className="text-base leading-relaxed text-slate-400">{process.description}</p>
                <ButtonLink href="#contact" variant="white" className="mt-6 w-full sm:w-auto">
                  Book a Strategy Call <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <ol className="relative mt-12 sm:mt-16 lg:grid lg:grid-cols-4 lg:gap-5">
            {/* desktop: glowing line through the nodes */}
            <span
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-[27px] hidden h-px bg-gradient-to-r from-violet-400/10 via-violet-400/70 to-violet-400/10 lg:block"
            />

            {process.steps.map((s, i) => {
              const Icon = icons[i]
              const last = i === process.steps.length - 1
              return (
                <li key={s.number} className="relative list-none pb-6 pl-[60px] last:pb-0 lg:pb-0 lg:pl-0">
                  {/* mobile: vertical rail between nodes */}
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-[27px] top-[56px] w-px bg-gradient-to-b from-violet-400/70 to-violet-400/10 lg:hidden"
                    />
                  )}

                  {/* number node */}
                  <span className="absolute left-0 top-0 z-10 grid h-14 w-14 place-items-center lg:static lg:mx-auto">
                    <span aria-hidden="true" className="absolute inset-1 rounded-full bg-violet-500/40 blur-lg" />
                    <span className="relative grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-gradient-to-br from-violet-400/40 to-violet-700/40 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-md">
                      {s.number}
                    </span>
                  </span>

                  <Reveal delay={i * 0.07} className="lg:mt-6">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm sm:p-6 lg:h-full">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-300 ring-1 ring-white/15">
                          <Icon size={17} strokeWidth={2} aria-hidden="true" />
                        </span>
                        <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                      </div>
                      <p className="mt-3.5 text-[15px] leading-relaxed text-slate-300">{s.description}</p>
                      <p className="mt-4 flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-sm leading-snug text-slate-200">
                        <UserRound size={15} className="mt-0.5 shrink-0 text-brand-300" aria-hidden="true" />
                        <span>
                          <span className="font-semibold text-white">From you: </span>
                          {s.fromYou}
                        </span>
                      </p>
                    </div>
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
