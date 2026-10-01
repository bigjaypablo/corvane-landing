import { ArrowRight } from 'lucide-react'
import { objections } from '../data/content'
import { ButtonLink, Container, Reveal, Tag, renderTitle } from './ui'

// Split the answer so the verdict (first sentence) can be emphasised
function splitAnswer(a: string): [string, string] {
  const i = a.indexOf('. ')
  return i === -1 ? [a, ''] : [a.slice(0, i + 1), a.slice(i + 2)]
}

export default function Objections() {
  return (
    <section id="objections" className="bg-neutral-50 py-16 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <Tag>{objections.eyebrow}</Tag>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] text-neutral-950 sm:text-5xl">
            {renderTitle(objections.title, 'text-brand-600')}
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-slate-600">
            Straight answers to the doubts that stop good-fit buyers from getting in touch.
          </p>
          <ButtonLink href="#contact" className="mt-6 hidden lg:inline-flex">
            Book a Strategy Call <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        </Reveal>

        <ul className="space-y-3 sm:space-y-4">
          {objections.items.map((o, i) => {
            const [verdict, rest] = splitAnswer(o.a)
            return (
              <li key={o.q} className="list-none">
                <Reveal delay={i * 0.04}>
                  <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
                    <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-400 to-purple-600" />
                    <h3 className="text-base font-semibold sm:text-lg">{o.q}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                      <span className="font-medium text-neutral-950">{verdict}</span> {rest}
                    </p>
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
