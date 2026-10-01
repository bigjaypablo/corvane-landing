import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { demo, formOptions } from '../data/content'
import { submitLead, type LeadPayload } from '../lib/submitLead'

type Errors = Partial<Record<keyof LeadPayload, string>>

const FREE_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'proton.me', 'protonmail.com']
const empty: LeadPayload = { name: '', email: '', company: '', phone: '', need: '', details: '' }

function validate(v: LeadPayload): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  const email = v.email.trim().toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email address.'
  else if (FREE_DOMAINS.includes(email.split('@')[1])) e.email = 'Please use your work email so we can prepare for the call.'
  if (v.company.trim().length < 2) e.company = 'Please enter your company name.'
  if (v.phone && !/^[+()\d\s.-]{7,20}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.'
  if (!v.need) e.need = 'Please choose what you need help with.'
  return e
}

const inputCls = (err?: string) =>
  `mt-1.5 block w-full rounded-xl border bg-slate-50 px-3.5 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/30 ${
    err ? 'border-red-500' : 'border-slate-300'
  }`

function Field({
  id, label, error, optional, children,
}: { id: string; label: string; error?: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-800">
        {label} {optional && <span className="font-normal text-slate-500">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default function LeadForm() {
  const [values, setValues] = useState<LeadPayload>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const successRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  const set = (k: keyof LeadPayload) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: ev.target.value }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const aria = (k: keyof LeadPayload) => ({
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `${k}-error` : undefined,
  })

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    if (honeypot) return
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(`lead-${first}`)?.focus()
      return
    }
    setStatus('loading')
    try {
      await submitLead(values)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-2xl bg-white p-8 text-center shadow-lift sm:p-10">
        <CheckCircle2 className="mx-auto text-green-600" size={44} aria-hidden="true" />
        <h3 ref={successRef} tabIndex={-1} className="mt-4 text-2xl font-semibold focus:outline-none">
          Request received
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-slate-600">
          Thanks, {values.name.split(' ')[0]}. We will review your details and email you at{' '}
          <span className="font-medium text-slate-900">{values.email}</span> with times for your strategy call.{demo.enabled && <span className="mt-3 block text-sm text-slate-500">Demo project: no data was sent or stored.</span>}
        </p>
        <button
          type="button"
          onClick={() => { setValues(empty); setStatus('idle') }}
          className="mt-6 text-sm font-medium text-brand-700 underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-lift ring-1 ring-white/20 sm:p-8">
      <h3 className="text-xl font-semibold">Request your strategy call</h3>
      <p className="mt-1 text-sm text-slate-500">Takes about a minute. No obligation.</p>

      <div className="mt-6 space-y-4">
        <Field id="lead-name" label="Full name" error={errors.name}>
          <input id="lead-name" type="text" autoComplete="name" value={values.name} onChange={set('name')} className={inputCls(errors.name)} {...aria('name')} />
        </Field>
        <Field id="lead-email" label="Work email" error={errors.email}>
          <input id="lead-email" type="email" inputMode="email" autoComplete="email" value={values.email} onChange={set('email')} placeholder="you@company.com" className={inputCls(errors.email)} {...aria('email')} />
        </Field>
        <Field id="lead-company" label="Company" error={errors.company}>
          <input id="lead-company" type="text" autoComplete="organization" value={values.company} onChange={set('company')} className={inputCls(errors.company)} {...aria('company')} />
        </Field>
        <Field id="lead-phone" label="Phone" optional error={errors.phone}>
          <input id="lead-phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} className={inputCls(errors.phone)} {...aria('phone')} />
        </Field>
        <Field id="lead-need" label="What do you need help with?" error={errors.need}>
          <select id="lead-need" value={values.need} onChange={set('need')} className={inputCls(errors.need)} {...aria('need')}>
            <option value="">Select one…</option>
            {formOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field id="lead-details" label="Anything we should know?" optional>
          <textarea id="lead-details" rows={3} value={values.details} onChange={set('details')} className={inputCls()} />
        </Field>

        {/* Honeypot: hidden from people, catches basic bots */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label>
            Website
            <input type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
          </label>
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          Something went wrong sending your request. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 text-base font-semibold text-white transition-colors hover:bg-brand-700 active:bg-brand-800 disabled:opacity-70"
      >
        {status === 'loading' ? (
          <><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending…</>
        ) : (
          <>Request My Strategy Call <ArrowRight size={18} aria-hidden="true" /></>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-slate-500">We only use your details to arrange the call. No spam.</p>
    </form>
  )
}
