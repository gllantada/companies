import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const API_URL = import.meta.env.VITE_LEADS_API_URL || 'http://localhost:8000'

const DIAGNOSIS_KEYS = ['Diagnóstico web gratuito', 'Free web diagnosis']

interface ContactSectionProps {
  title: string
  subtitle: string
  cta: string
  defaultInterest?: string
  diagnosisHighlight?: string
  diagnosisCta?: string
}

export function ContactSection({ title, subtitle, cta, defaultInterest, diagnosisHighlight, diagnosisCta }: ContactSectionProps) {
  const { t } = useTranslation()

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <div className="rounded-xl border border-border bg-card p-5 md:rounded-2xl md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
          <p className="mt-2 text-sm text-muted-foreground md:mt-3 md:text-base">{subtitle}</p>
        </div>

        <ContactForm defaultInterest={defaultInterest} submitLabel={cta} />

        {diagnosisHighlight && (
          <div className="mt-8 rounded-lg bg-muted p-4 text-center md:mt-10 md:rounded-xl md:p-6">
            <p className="text-xs text-muted-foreground md:text-sm">{diagnosisHighlight}</p>
            {diagnosisCta && (
              <button
                onClick={() => {
                  const select = document.getElementById('interest') as HTMLSelectElement
                  if (select) {
                    select.value = t('contact.interests.5') || 'Diagnóstico web gratuito'
                    select.dispatchEvent(new Event('change', { bubbles: true }))
                  }
                }}
                className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70 md:mt-3 md:text-sm"
              >
                {diagnosisCta}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function ContactForm({ defaultInterest, submitLabel }: { defaultInterest?: string; submitLabel: string }) {
  const { t } = useTranslation()
  const interests = t('contact.interests', { returnObjects: true }) as string[]
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [interest, setInterest] = useState(defaultInterest || '')

  const isDiagnosis = DIAGNOSIS_KEYS.includes(interest)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company') || '',
          website: formData.get('website') || '',
          interest: formData.get('interest'),
          message: formData.get('message') || '',
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="mt-8 text-center">
        <p className="text-base font-medium text-foreground md:text-lg">{t('contact.success')}</p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20'

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-6 grid max-w-lg gap-3 md:mt-8 md:gap-4">
      <div>
        <label htmlFor="sub-name" className="sr-only">{t('contact.namePlaceholder')}</label>
        <input id="sub-name" type="text" name="name" required autoComplete="name" placeholder={t('contact.namePlaceholder')} className={inputClass} />
      </div>
      <div>
        <label htmlFor="sub-email" className="sr-only">{t('contact.emailPlaceholder')}</label>
        <input id="sub-email" type="email" name="email" required autoComplete="email" placeholder={t('contact.emailPlaceholder')} className={inputClass} />
      </div>
      <div>
        <label htmlFor="sub-company" className="sr-only">{t('contact.companyPlaceholder')}</label>
        <input id="sub-company" type="text" name="company" required autoComplete="organization" placeholder={t('contact.companyPlaceholder')} className={inputClass} />
      </div>
      <div>
        <label htmlFor="sub-interest" className="mb-1 block text-sm text-muted-foreground">{t('contact.interestLabel')}</label>
        <select
          id="sub-interest"
          name="interest"
          required
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={inputClass}
        >
          <option value="">—</option>
          {interests.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      {isDiagnosis && (
        <div>
          <label htmlFor="sub-website" className="sr-only">{t('contact.websitePlaceholder')}</label>
          <input id="sub-website" type="url" name="website" required autoComplete="url" placeholder={t('contact.websitePlaceholder')} className={inputClass} />
        </div>
      )}
      <div>
        <label htmlFor="sub-message" className="sr-only">{t('contact.messagePlaceholder')}</label>
        <textarea id="sub-message" name="message" rows={3} placeholder={t('contact.messagePlaceholder')} className={inputClass} />
      </div>
      {status === 'error' && <p className="text-sm text-red-600">{t('contact.error')}</p>}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === 'sending' ? t('contact.sending') : submitLabel}
      </button>
    </form>
  )
}
