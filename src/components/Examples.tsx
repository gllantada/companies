import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export function Examples() {
  const { t } = useTranslation()
  const items = t('examples.items', { returnObjects: true }) as Array<{
    title: string
    promise: string
    hover: string
    cta: string
    interest: string
    image: string
  }>

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:mb-12 md:text-4xl">
        {t('examples.title')}
      </h2>

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {items.map((item, i) => (
          <ExampleCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

function ExampleCard({
  item,
  index,
}: {
  item: {
    title: string
    promise: string
    hover: string
    cta: string
    interest: string
    image: string
  }
  index: number
}) {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
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
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-72 md:h-96"
      />

      <div
        className={`absolute inset-0 transition-colors duration-200 ${
          active ? 'bg-gradient-to-t from-black/80 via-black/50 to-black/20' : 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'
        }`}
      />

      <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
        <h3 className="text-lg font-bold md:text-xl">{item.title}</h3>
        <p className="mt-1 text-sm text-white/80">{item.promise}</p>

        {/* Mobile: always show CTA */}
        <a
          href="#contacto"
          className="mt-3 inline-block text-sm font-medium text-white underline underline-offset-4 md:hidden"
        >
          {item.cta}
        </a>

        {/* Desktop: hover reveal */}
        <div
          className={`hidden overflow-hidden transition-all duration-200 md:block ${
            active ? 'mt-3 max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-sm leading-relaxed text-white/90">{item.hover}</p>
          <a
            href="#contacto"
            className="mt-4 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            {item.cta}
          </a>
        </div>
      </div>
    </motion.div>
  )
}
