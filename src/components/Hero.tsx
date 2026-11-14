import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-24 pb-12 md:grid-cols-[53fr_47fr] md:items-center md:gap-12 md:px-6 md:pt-36 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="order-1 md:order-none"
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          {t('hero.title')}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-6 md:max-w-xl md:text-lg">
          {t('hero.subtitle')}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-8">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t('hero.cta')}
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="order-2 md:order-none"
      >
        <img
          src="/images/hero-empresa.jpg"
          alt="Equipo trabajando en soluciones web para empresas"
          className="w-full rounded-xl object-cover md:rounded-2xl"
          style={{ aspectRatio: '4/3' }}
        />
      </motion.div>
    </section>
  )
}
