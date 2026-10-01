import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { hero } from '../data/content'
import { ButtonLink, Container, renderTitle } from './ui'
import SocialProof from './SocialProof'
import FlowTiles from './FlowTiles'

export default function Hero() {
  return (
    <section id="top" className="on-dark relative overflow-hidden bg-black text-white">
      {/* Purple glow: tweak the stops below to taste */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%]"
        style={{
          background:
            'radial-gradient(ellipse 85% 100% at 50% 100%, #c4b5fd 0%, #8b5cf6 28%, #5b21b6 55%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-b from-transparent via-white/90 to-white sm:h-[42%]"
      />

      <Container className="relative z-10 pb-10 pt-12 sm:pt-20 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16"
        >
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[4.25rem]">
              {renderTitle(hero.title, 'text-brand-300')}
            </h1>
          </div>

          <div className="lg:pt-16">
            <p className="text-base leading-relaxed text-slate-300">{hero.subtitle}</p>
            <p className="mt-4 text-base font-medium text-white">{hero.titleMuted}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href="#contact" variant="white" className="w-full sm:w-auto lg:w-full xl:w-auto">
                {hero.primaryCta} <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="#how-it-works" variant="outlineDark" className="w-full sm:w-auto lg:w-full xl:w-auto">
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>
        </motion.div>

        <div className="mt-24 flex flex-col gap-8 sm:mt-32 lg:mt-40 lg:flex-row lg:items-end lg:justify-between">
          <div className="order-first w-full lg:order-last lg:w-[460px] mb-2">
            <FlowTiles />
          </div>

          <div>
            <SocialProof />
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
              {hero.assurances.map((a) => (
                <li key={a} className="flex items-center gap-1.5">
                  <Check size={16} className="text-brand-600" aria-hidden="true" /> {a}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-sm text-sm text-slate-500">{hero.builtFor}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
