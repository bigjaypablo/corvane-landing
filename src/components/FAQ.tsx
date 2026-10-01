import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Minus, Plus } from 'lucide-react'
import { faq } from '../data/content'
import { ButtonLink, Container, Reveal, Tag, renderTitle } from './ui'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-16 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <Tag>{faq.eyebrow}</Tag>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] text-neutral-950 sm:text-5xl">
            {renderTitle(faq.title, 'text-brand-600')}
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-slate-600">
            Short, honest answers. Anything else, we cover on the call.
          </p>
          <ButtonLink href="#contact" className="mt-6 hidden lg:inline-flex">
            Book a Strategy Call <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        </Reveal>

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? 'border-brand-200 bg-brand-50/40 shadow-card' : 'border-slate-200 bg-white'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-[60px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-neutral-950 sm:px-6 sm:text-base"
                  >
                    {item.q}
                    <span
                      aria-hidden="true"
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pr-14 text-[15px] leading-relaxed text-slate-600 sm:px-6 sm:pr-16">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
