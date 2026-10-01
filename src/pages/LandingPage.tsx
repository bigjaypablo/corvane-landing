import { MotionConfig } from 'framer-motion'
import Navbar from '../components/Navbar'
import DemoBanner from '../components/DemoBanner'
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import Services from '../components/Services'
import Process from '../components/Process'
import Proof from '../components/Proof'
import WhyUs from '../components/WhyUs'
import Objections from '../components/Objections'
import CTASection from '../components/CTASection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import MobileCTA from '../components/MobileCTA'

export default function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg">
        Skip to content
      </a>
      <DemoBanner />
      <Navbar />
      <main id="main">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <Services />
        <Process />
        <Proof />
        <WhyUs />
        <Objections />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
    </MotionConfig>
  )
}
