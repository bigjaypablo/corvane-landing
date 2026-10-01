import { demo } from '../data/content'

export function DesignerLink({ className = '' }: { className?: string }) {
  if (!demo.profileUrl) return <span className="font-semibold">{demo.designer}</span>
  return (
    <a href={demo.profileUrl} target="_blank" rel="noopener noreferrer" className={className || 'font-semibold underline underline-offset-2'}>
      {demo.designer}
    </a>
  )
}

export default function DemoBanner() {
  if (!demo.enabled) return null
  return (
    <div className="bg-brand-700 px-4 py-2 text-center text-xs text-white sm:text-sm">
      <span className="font-semibold">Concept project:</span> a conversion landing page for a fictional B2B firm.
      Designed by <DesignerLink />.
    </div>
  )
}
