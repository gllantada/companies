import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { ContactSection } from '../components/ContactSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function AutomatizacionesPage() {
  const { t } = useTranslation()
  useScrollReveal()

  return (
    <>
      <AutoHero />
      <AutoSolutions />
      <AutoDemo />
      <ContactSection
        title={t('auto.close.title')}
        subtitle={t('auto.close.subtitle')}
        cta={t('auto.close.cta')}
      />
    </>
  )
}

function AutoHero() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-24 pb-12 md:grid-cols-[52fr_48fr] md:items-center md:gap-12 md:px-6 md:pt-36 md:pb-24">
      <div className="order-1 md:order-none">
        <span className="mb-4 inline-block text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          {t('auto.hero.eyebrow')}
        </span>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {t('auto.hero.title')}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-6 md:max-w-xl md:text-lg">
          {t('auto.hero.subtitle')}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-8">
          <a href="#soluciones" className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
            {t('auto.hero.cta')}
          </a>
          <a href="#contacto" className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            {t('auto.hero.ctaSecondary')}
          </a>
        </div>
      </div>
      <div className="order-2 md:order-none">
        <img
          src="/images/auto-hero.jpg"
          alt={t('auto.hero.alt')}
          className="w-full rounded-xl object-cover md:rounded-2xl"
          style={{ aspectRatio: '4/3' }}
        />
      </div>
    </section>
  )
}

function AutoSolutions() {
  const { t } = useTranslation()
  const cards = t('auto.solutions.items', { returnObjects: true }) as Array<{
    title: string; promise: string; hover: string; cta: string; interest: string; image: string
  }>

  return (
    <section id="soluciones" className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:mb-4 md:text-4xl">
        {t('auto.solutions.title')}
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground md:mb-12">
        {t('auto.solutions.subtitle')}
      </p>
      <div className="scroll-reveal-stagger grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {cards.map((card, i) => (
          <SolutionCard key={i} card={card} />
        ))}
      </div>
    </section>
  )
}

function SolutionCard({ card }: {
  card: { title: string; promise: string; hover: string; cta: string; image: string }
}) {
  const [active, setActive] = useState(false)

  return (
    <div
      className={`card-overlay cursor-pointer ${active ? 'is-active' : ''}`}
      tabIndex={0}
      onClick={() => setActive(!active)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(!active) } }}
      role="button"
      aria-expanded={active}
    >
      <img src={card.image} alt={card.title} loading="lazy" className="card-overlay-image !h-56 sm:!h-64 md:!h-80 object-center" />
      <div className="card-overlay-gradient" />
      <div className="card-overlay-content">
        <h3 className="card-overlay-title text-lg">{card.title}</h3>
        <p className="card-overlay-tagline">{card.promise}</p>
        <a href="#contacto" className="card-overlay-mobile-cta">{card.cta}</a>
        <div className="card-overlay-detail mt-3">
          <p className="text-sm leading-relaxed text-white/90">{card.hover}</p>
          <a href="#contacto" className="mt-4 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-90">
            {card.cta}
          </a>
        </div>
      </div>
    </div>
  )
}

function AutoDemo() {
  const { t } = useTranslation()
  const conversation = t('auto.demo.conversation', { returnObjects: true }) as Array<{ role: string; text: string }>
  const record = t('auto.demo.record', { returnObjects: true }) as Record<string, string>

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:text-3xl">
        {t('auto.demo.title')}
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
        {t('auto.demo.subtitle')}
      </p>

      <div className="grid items-start gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-4">
        <div className="rounded-xl border border-border bg-card p-4 md:p-6">
          <p className="mb-4 text-xs font-medium text-muted-foreground uppercase">{t('auto.demo.chatLabel')}</p>
          <div className="space-y-3">
            {conversation.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'client' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                  msg.role === 'client' ? 'bg-green-100 text-green-900' : 'bg-muted text-foreground'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-center self-center md:flex">
          <ArrowRight className="h-6 w-6 text-muted-foreground" />
        </div>
        <div className="flex justify-center md:hidden">
          <ArrowRight className="h-5 w-5 rotate-90 text-muted-foreground" />
        </div>

        <div className="rounded-xl border border-border bg-card p-4 md:p-6">
          <p className="mb-4 text-xs font-medium text-muted-foreground uppercase">{t('auto.demo.recordLabel')}</p>
          <div className="space-y-2">
            {Object.entries(record).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b border-border pb-2 text-sm last:border-0">
                <span className="font-medium text-foreground">{key}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="#contacto" className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
          {t('auto.demo.cta')}
        </a>
      </div>
    </section>
  )
}
