import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MessageCircle, Monitor, Database, Plug } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  Monitor,
  Database,
  Plug,
}

export function Problems() {
  const { t } = useTranslation()
  const items = t('problems.items', { returnObjects: true }) as Array<{
    icon: string
    title: string
    description: string
  }>

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:mb-12 md:text-4xl">
        {t('problems.title')}
      </h2>

      <div className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
        {items.map((item, i) => (
          <ProblemCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProblemCard({
  item,
  index,
}: {
  item: { icon: string; title: string; description: string }
  index: number
}) {
  const [expanded, setExpanded] = useState(false)
  const Icon = iconMap[item.icon] || MessageCircle

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group cursor-pointer rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20 focus-within:border-foreground/20 md:p-6"
      tabIndex={0}
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setExpanded(!expanded)
        }
      }}
      role="button"
      aria-expanded={expanded}
    >
      <Icon className="mb-3 h-5 w-5 text-muted-foreground md:mb-4 md:h-6 md:w-6" />
      <h3 className="text-sm font-semibold text-foreground md:text-base">{item.title}</h3>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          expanded ? 'mt-3 max-h-40 opacity-100' : 'max-h-0 opacity-0 md:group-hover:mt-3 md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-focus-within:mt-3 md:group-focus-within:max-h-40 md:group-focus-within:opacity-100'
        }`}
      >
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}
