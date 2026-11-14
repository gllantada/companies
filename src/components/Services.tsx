import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  image: string
  label: string
  tagline: string
  hoverText: string
  cta: string
  ctaSecondary?: string
  alt: string
}

function ServiceCard({ image, label, tagline, hoverText, cta, ctaSecondary, alt }: ServiceCardProps) {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative cursor-pointer overflow-hidden rounded-xl focus-within:ring-2 focus-within:ring-foreground/20 md:rounded-2xl"
      tabIndex={0}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onClick={() => setActive(!active)}
      role="button"
      aria-expanded={active}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-72 md:h-96"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
        <h3 className="text-xl font-bold md:text-2xl">{label}</h3>
        <p className="mt-1 text-sm text-white/80">{tagline}</p>

        {/* Mobile: always show CTA link */}
        <a
          href="#contacto"
          className="mt-3 inline-block text-sm font-medium text-white underline underline-offset-4 md:hidden"
        >
          {cta}
        </a>

        {/* Desktop: hover reveal */}
        <div
          className={`hidden overflow-hidden transition-all duration-200 md:block ${
            active ? 'mt-3 max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-sm leading-relaxed text-white/90">{hoverText}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              {cta}
            </a>
            {ctaSecondary && (
              <a
                href="#contacto"
                className="inline-block rounded-lg border border-white/40 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                {ctaSecondary}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Services() {
  const { t } = useTranslation()

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:mb-12 md:text-4xl">
        {t('services.title')}
      </h2>

      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <ServiceCard
          image="/images/servicio-desarrollo.jpg"
          label={t('services.development.label')}
          tagline={t('services.development.tagline')}
          hoverText={t('services.development.hover')}
          cta={t('services.development.cta')}
          ctaSecondary={t('services.development.ctaSecondary')}
          alt="Desarrollo web a medida para empresas"
        />
        <ServiceCard
          image="/images/servicio-automatizacion.jpg"
          label={t('services.automation.label')}
          tagline={t('services.automation.tagline')}
          hoverText={t('services.automation.hover')}
          cta={t('services.automation.cta')}
          alt="Automatización de procesos empresariales"
        />
      </div>
    </section>
  )
}
