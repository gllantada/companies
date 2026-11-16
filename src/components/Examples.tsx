import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:mb-12 md:text-4xl">
        {t('examples.title')}
      </h2>

      <div className="scroll-reveal-stagger grid gap-4 md:grid-cols-3 md:gap-6">
        {items.map((item, i) => (
          <ExampleCard key={i} item={item} />
        ))}
      </div>
    </section>
  )
}

function ExampleCard({ item }: {
  item: { title: string; promise: string; hover: string; cta: string; image: string }
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
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="card-overlay-image !h-56 sm:!h-64 md:!h-96"
      />
      <div className="card-overlay-gradient" />
      <div className="card-overlay-content">
        <h3 className="card-overlay-title text-lg md:text-xl">{item.title}</h3>
        <p className="card-overlay-tagline">{item.promise}</p>

        <a href="#contacto" className="card-overlay-mobile-cta">{item.cta}</a>

        <div className="card-overlay-detail mt-3">
          <p className="text-sm leading-relaxed text-white/90">{item.hover}</p>
          <a href="#contacto" className="mt-4 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-90">
            {item.cta}
          </a>
        </div>
      </div>
    </div>
  )
}
