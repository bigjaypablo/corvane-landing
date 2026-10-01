import { contactSection, showcase } from '../data/content'
import { Container, Reveal, SectionHeading } from './ui'
import LeadForm from './LeadForm'

export default function CTASection() {
  const q = showcase.cases[0]
  return (
    <section id="contact" className="on-dark relative scroll-mt-16 overflow-hidden bg-black py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[460px]"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(139,92,246,.55) 0%, rgba(91,33,182,.25) 45%, rgba(0,0,0,0) 75%)',
        }}
      />
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <Reveal>
          <SectionHeading dark stack eyebrow={contactSection.eyebrow} title={contactSection.title} description={contactSection.description} />
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-slate-200">What happens next</h3>
          <ol className="mt-4 space-y-4">
            {contactSection.nextSteps.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand-300/40 text-sm font-semibold text-brand-200">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-relaxed text-slate-300">{s}</p>
              </li>
            ))}
          </ol>

          <figure className="mt-10 flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <img src={q.photo} alt={`${q.person}, ${q.role} at ${q.client}`} width={48} height={48} loading="lazy" className="h-12 w-12 shrink-0 rounded-full object-cover" />
            <blockquote className="text-[15px] leading-relaxed text-slate-200">
              “{q.quote}”
              <figcaption className="mt-2 text-sm text-slate-400">
                {q.person}, {q.role} at {q.client}
              </figcaption>
            </blockquote>
          </figure>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="on-light">
            <LeadForm />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
