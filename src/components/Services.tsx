import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  image: string
  label: string
  tagline: string
  hoverText: string
  cta: string
  ctaSecondary?: string
  alt: string
  href: string
}

function ServiceCard({ image, label, tagline, hoverText, cta, ctaSecondary, alt, href }: ServiceCardProps) {
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
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="card-overlay-image h-64 sm:h-72 md:h-96"
      />
      <div className="card-overlay-gradient" />
      <div className="card-overlay-content">
        <h3 className="card-overlay-title text-xl md:text-2xl">{label}</h3>
        <p className="card-overlay-tagline">{tagline}</p>

        <Link
          to={href}
          className="card-overlay-mobile-cta"
          onClick={(e) => e.stopPropagation()}
        >
          {cta}
        </Link>

        <div className="card-overlay-detail mt-3">
          <p className="text-sm leading-relaxed text-white/90">{hoverText}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to={href}
              className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              onClick={(e) => e.stopPropagation()}
            >
              {cta}
            </Link>
            {ctaSecondary && (
              <Link
                to={href}
                className="inline-block rounded-lg border border-white/40 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {ctaSecondary}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  const { t } = useTranslation()

  return (
    <section id="servicios" className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:mb-12 md:text-4xl">
        {t('services.title')}
      </h2>

      <div className="scroll-reveal-stagger grid gap-4 md:grid-cols-2 md:gap-6">
        <ServiceCard
          image="/images/servicio-desarrollo.jpg"
          label={t('services.development.label')}
          tagline={t('services.development.tagline')}
          hoverText={t('services.development.hover')}
          cta={t('services.development.cta')}
          ctaSecondary={t('services.development.ctaSecondary')}
          alt="Desarrollo web a medida para empresas"
          href="/desarrollo-web"
        />
        <ServiceCard
          image="/images/servicio-automatizacion.jpg"
          label={t('services.automation.label')}
          tagline={t('services.automation.tagline')}
          hoverText={t('services.automation.hover')}
          cta={t('services.automation.cta')}
          alt="Automatización de procesos empresariales"
          href="/automatizaciones"
        />
      </div>
    </section>
  )
}
