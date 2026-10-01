export interface LeadPayload {
  name: string
  email: string
  company: string
  phone: string
  need: string
  details: string
}

/**
 * Set VITE_LEAD_ENDPOINT in a .env file to post to a real API
 * (e.g. VITE_LEAD_ENDPOINT=https://api.yoursite.com/leads).
 * Without it, submission is simulated on the frontend.
 */
const ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined

export async function submitLead(payload: LeadPayload): Promise<void> {
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error(`Lead submission failed (${res.status})`)
    return
  }
  await new Promise((resolve) => setTimeout(resolve, 900))
  console.info('[lead:simulated]', payload)
}
