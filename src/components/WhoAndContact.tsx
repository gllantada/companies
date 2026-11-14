import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function WhoAndContact() {
  const { t } = useTranslation()

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      {/* Quien desarrolla */}
      <div className="grid items-center gap-8 md:grid-cols-[45fr_55fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/gonzalo-devsextension.jpg"
            alt="Gonzalo Llantada, desarrollador en Devs Extension"
            loading="lazy"
            className="w-full rounded-xl object-cover md:rounded-2xl"
            style={{ aspectRatio: '4/3' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold leading-tight text-foreground md:text-4xl">
            {t('who.title')}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:mt-4 md:text-base">{t('who.p1')}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:mt-3 md:text-base">{t('who.p2')}</p>

          <div className="mt-5 flex flex-wrap items-center gap-1.5 text-xs font-medium text-foreground md:mt-6 md:gap-2 md:text-sm">
            {t('who.method').split('→').map((step, i, arr) => (
              <span key={i} className="flex items-center gap-1.5 md:gap-2">
                {step.trim()}
                {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contacto */}
      <div className="mt-14 rounded-xl border border-border bg-card p-5 md:mt-20 md:rounded-2xl md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">{t('who.contactTitle')}</h2>
          <p className="mt-2 text-sm text-muted-foreground md:mt-3 md:text-base">{t('who.contactSubtitle')}</p>
        </div>

        <ContactForm />

        <div className="mt-8 rounded-lg bg-muted p-4 text-center md:mt-10 md:rounded-xl md:p-6">
          <p className="text-xs text-muted-foreground md:text-sm">{t('who.diagnosisHighlight')}</p>
          <a
            href="#contacto"
            className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70 md:mt-3 md:text-sm"
          >
            {t('who.diagnosisCta')}
          </a>
        </div>
      </div>
    </section>
  )
}

const API_URL = import.meta.env.VITE_LEADS_API_URL || 'http://localhost:8000'

const DIAGNOSIS_KEY_ES = 'Diagnóstico web gratuito'
const DIAGNOSIS_KEY_EN = 'Free web diagnosis'

function ContactForm() {
  const { t } = useTranslation()
  const interests = t('contact.interests', { returnObjects: true }) as string[]
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [interest, setInterest] = useState('')

  const isDiagnosis = interest === DIAGNOSIS_KEY_ES || interest === DIAGNOSIS_KEY_EN

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

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

      if (!res.ok) throw new Error('Failed to send')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="mt-8 text-center">
        <p className="text-base font-medium text-foreground md:text-lg">
          {t('contact.success')}
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20'

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-6 grid max-w-lg gap-3 md:mt-8 md:gap-4">
      <input
        type="text"
        name="name"
        required
        placeholder={t('contact.namePlaceholder')}
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        required
        placeholder={t('contact.emailPlaceholder')}
        className={inputClass}
      />
      <input
        type="text"
        name="company"
        required
        placeholder={t('contact.companyPlaceholder')}
        className={inputClass}
      />
      <div>
        <label htmlFor="interest" className="mb-1 block text-sm text-muted-foreground">
          {t('contact.interestLabel')}
        </label>
        <select
          id="interest"
          name="interest"
          required
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={inputClass}
        >
          <option value="">—</option>
          {interests.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {isDiagnosis && (
        <input
          type="url"
          name="website"
          required
          placeholder={t('contact.websitePlaceholder')}
          className={inputClass}
        />
      )}

      <textarea
        name="message"
        rows={3}
        placeholder={t('contact.messagePlaceholder')}
        className={inputClass}
      />

      {status === 'error' && (
        <p className="text-sm text-red-600">{t('contact.error')}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === 'sending' ? t('contact.sending') : t('contact.submit')}
      </button>
    </form>
  )
}
