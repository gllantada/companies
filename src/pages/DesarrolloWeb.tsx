import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ContactSection } from '../components/ContactSection'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageMeta } from '../hooks/usePageMeta'

export function DesarrolloWebPage() {
  const { t } = useTranslation()
  useScrollReveal()
  usePageMeta(
    t('webDev.hero.title'),
    t('webDev.hero.subtitle')
  )

  return (
    <>
      <WebHero />
      <WebCards />
      <WebExamples />
      <ContactSection
        title={t('webDev.close.title')}
        subtitle={t('webDev.close.subtitle')}
        cta={t('webDev.close.cta')}
        diagnosisHighlight={t('webDev.close.diagnosisHighlight')}
        diagnosisCta={t('webDev.close.diagnosisCta')}
      />
    </>
  )
}

function WebHero() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-24 pb-12 md:grid-cols-[52fr_48fr] md:items-center md:gap-12 md:px-6 md:pt-36 md:pb-24">
      <div className="order-1 md:order-none">
        <span className="mb-4 inline-block text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          {t('webDev.hero.eyebrow')}
        </span>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {t('webDev.hero.title')}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-6 md:max-w-xl md:text-lg">
          {t('webDev.hero.subtitle')}
        </p>
        <div className="mt-6 md:mt-8">
          <a href="#contacto" className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
            {t('webDev.hero.cta')}
          </a>
        </div>
      </div>
      <div className="order-2 md:order-none">
        <img
          src="/images/web-hero.jpg"
          alt={t('webDev.hero.alt')}
          width={800}
          height={600}
          fetchPriority="high"
          className="w-full rounded-xl object-cover md:rounded-2xl"
          style={{ aspectRatio: '4/3' }}
        />
      </div>
    </section>
  )
}

function WebCards() {
  const { t } = useTranslation()
  const cards = t('webDev.cards.items', { returnObjects: true }) as Array<{
    title: string; tagline: string; hover: string; cta: string; interest: string; image: string
  }>

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:mb-12 md:text-4xl">
        {t('webDev.cards.title')}
      </h2>
      <div className="scroll-reveal-stagger grid gap-4 md:grid-cols-3 md:gap-6">
        {cards.map((card, i) => (
          <WebCard key={i} card={card} />
        ))}
      </div>
    </section>
  )
}

function WebCard({ card }: {
  card: { title: string; tagline: string; hover: string; cta: string; image: string }
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
      <img src={card.image} alt={card.title} loading="lazy" className="card-overlay-image h-72 md:h-96" style={{ aspectRatio: '4/5' }} />
      <div className="card-overlay-gradient" />
      <div className="card-overlay-content">
        <h3 className="card-overlay-title text-lg md:text-xl">{card.title}</h3>
        <p className="card-overlay-tagline">{card.tagline}</p>
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

function WebExamples() {
  const { t } = useTranslation()
  const examples = t('webDev.examples.items', { returnObjects: true }) as Array<{
    title: string; text: string; image: string
  }>

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:mb-12 md:text-4xl">
        {t('webDev.examples.title')}
      </h2>
      <div className="scroll-reveal-stagger grid gap-4 md:grid-cols-3 md:gap-6">
        {examples.map((ex, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-border bg-card md:rounded-2xl">
            <img src={ex.image} alt={ex.title} loading="lazy" className="h-48 w-full object-cover object-top md:h-56" />
            <div className="p-4 md:p-5">
              <h3 className="text-sm font-semibold text-foreground md:text-base">{ex.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ex.text}</p>
              <a href="#contacto" className="mt-3 inline-block text-sm font-medium text-foreground underline underline-offset-4">
                {t('webDev.examples.cta')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
