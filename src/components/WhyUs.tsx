import { whyUs } from '../data/content'
import { Container, Reveal, Tag, renderTitle } from './ui'

const chips = [
  'from-violet-400 to-purple-600 shadow-violet-500/30',
  'from-rose-400 to-pink-600 shadow-pink-500/30',
  'from-indigo-400 to-blue-600 shadow-blue-500/30',
  'from-fuchsia-400 to-purple-600 shadow-fuchsia-500/30',
  'from-sky-400 to-indigo-600 shadow-indigo-500/30',
  'from-purple-400 to-violet-700 shadow-violet-500/30',
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-16 sm:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <div>
              <Tag>{whyUs.eyebrow}</Tag>
              <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] text-neutral-950 sm:text-5xl">
                {renderTitle(whyUs.title, 'text-brand-600')}
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600 lg:pb-1">{whyUs.description}</p>
          </div>
        </Reveal>

        <Reveal className="mt-10 sm:mt-14">
          {/* gap-px on a tinted background draws the hairline dividers */}
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-card sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.items.map((r, i) => {
              const Icon = r.icon
              return (
                <li key={r.title} className="flex gap-4 bg-white p-5 sm:flex-col sm:gap-5 sm:p-7">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-lg ring-1 ring-white/40 ${chips[i % chips.length]}`}
                  >
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-snug sm:text-lg">{r.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{r.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
