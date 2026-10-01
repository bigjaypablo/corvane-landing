import { problems } from '../data/content'
import { Container, Reveal, SectionHeading } from './ui'

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={problems.eyebrow} title={problems.title} description={problems.description} />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {problems.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="h-full">
              <article className="h-full rounded-2xl border border-neutral-200/80 bg-neutral-50 p-6 sm:p-7">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <p.icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{p.consequence}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
