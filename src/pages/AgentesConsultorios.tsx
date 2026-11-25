import { useTranslation } from 'react-i18next'
import { ArrowRight, Clock, CalendarCheck, MessageCircle, Users, Star } from 'lucide-react'
import { ContactSection } from '../components/ContactSection'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageMeta } from '../hooks/usePageMeta'

export function AgentesConsultoriosPage() {
  const { t } = useTranslation()
  useScrollReveal()
  usePageMeta(
    t('dental.meta.title'),
    t('dental.meta.description')
  )

  return (
    <>
      <DentalHero />
      <DentalProblems />
      <DentalSolution />
      <DentalDemo />
      <DentalBenefits />
      <ContactSection
        title={t('dental.close.title')}
        subtitle={t('dental.close.subtitle')}
        cta={t('dental.close.cta')}
        defaultInterest={t('dental.close.interest')}
      />
    </>
  )
}

function DentalHero() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-24 pb-12 md:grid-cols-[52fr_48fr] md:items-center md:gap-12 md:px-6 md:pt-36 md:pb-24">
      <div className="order-1 md:order-none">
        <span className="mb-4 inline-block text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          {t('dental.hero.eyebrow')}
        </span>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {t('dental.hero.title')}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-6 md:max-w-xl md:text-lg">
          {t('dental.hero.subtitle')}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-8">
          <a href="#solucion" className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
            {t('dental.hero.cta')}
          </a>
          <a href="#contacto" className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            {t('dental.hero.ctaSecondary')}
          </a>
        </div>
      </div>
      <div className="order-2 md:order-none">
        <img
          src="/images/dental-hero.jpg"
          alt={t('dental.hero.eyebrow')}
          width={1600}
          height={1131}
          fetchPriority="high"
          className="w-full rounded-xl object-cover md:rounded-2xl"
          style={{ aspectRatio: '4/3' }}
        />
      </div>
    </section>
  )
}

function DentalProblems() {
  const { t } = useTranslation()
  const items = t('dental.problems.items', { returnObjects: true }) as Array<{ icon: string; title: string; description: string }>

  const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock className="h-6 w-6" />,
    MessageCircle: <MessageCircle className="h-6 w-6" />,
    Users: <Users className="h-6 w-6" />,
    CalendarCheck: <CalendarCheck className="h-6 w-6" />,
  }

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:mb-4 md:text-4xl">
        {t('dental.problems.title')}
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground md:mb-12">
        {t('dental.problems.subtitle')}
      </p>
      <div className="scroll-reveal-stagger grid gap-4 sm:grid-cols-2 md:gap-6">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5 md:p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
              {iconMap[item.icon] || <MessageCircle className="h-6 w-6" />}
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function DentalSolution() {
  const { t } = useTranslation()
  const features = t('dental.solution.features', { returnObjects: true }) as string[]

  return (
    <section id="solucion" className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <div className="rounded-xl border border-border bg-card p-5 md:rounded-2xl md:p-10">
        <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
          {t('dental.solution.title')}
        </h2>
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {t('dental.solution.description')}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg bg-muted p-3 md:p-4">
              <Star className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DentalDemo() {
  const { t } = useTranslation()
  const conversation = t('dental.demo.conversation', { returnObjects: true }) as Array<{ role: string; text: string }>
  const record = t('dental.demo.record', { returnObjects: true }) as Record<string, string>

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:text-3xl">
        {t('dental.demo.title')}
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
        {t('dental.demo.subtitle')}
      </p>

      <div className="grid items-start gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-4">
        <div className="rounded-xl border border-border bg-card p-4 md:p-6">
          <p className="mb-4 text-xs font-medium text-muted-foreground uppercase">{t('dental.demo.chatLabel')}</p>
          <div className="space-y-3">
            {conversation.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'patient' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                  msg.role === 'patient' ? 'bg-green-100 text-green-900' : 'bg-muted text-foreground'
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
          <p className="mb-4 text-xs font-medium text-muted-foreground uppercase">{t('dental.demo.recordLabel')}</p>
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
    </section>
  )
}

function DentalBenefits() {
  const { t } = useTranslation()
  const items = t('dental.benefits.items', { returnObjects: true }) as Array<{ metric: string; label: string }>

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:mb-12 md:text-3xl">
        {t('dental.benefits.title')}
      </h2>
      <div className="grid gap-4 sm:grid-cols-3 md:gap-6">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5 text-center md:p-6">
            <p className="text-3xl font-bold text-foreground md:text-4xl">{item.metric}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
