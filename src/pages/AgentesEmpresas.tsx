import { useTranslation } from 'react-i18next'
import { ArrowRight, Bot, MessageCircle, Zap, BarChart3, Clock, Plug } from 'lucide-react'
import { ContactSection } from '../components/ContactSection'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageMeta } from '../hooks/usePageMeta'

export function AgentesEmpresasPage() {
  const { t } = useTranslation()
  useScrollReveal()
  usePageMeta(
    t('agents.meta.title'),
    t('agents.meta.description')
  )

  return (
    <>
      <AgentsHero />
      <AgentsUseCases />
      <AgentsHow />
      <AgentsDemo />
      <AgentsBenefits />
      <ContactSection
        title={t('agents.close.title')}
        subtitle={t('agents.close.subtitle')}
        cta={t('agents.close.cta')}
        defaultInterest={t('agents.close.interest')}
      />
    </>
  )
}

function AgentsHero() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-24 pb-12 md:grid-cols-[52fr_48fr] md:items-center md:gap-12 md:px-6 md:pt-36 md:pb-24">
      <div className="order-1 md:order-none">
        <span className="mb-4 inline-block text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          {t('agents.hero.eyebrow')}
        </span>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {t('agents.hero.title')}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-6 md:max-w-xl md:text-lg">
          {t('agents.hero.subtitle')}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-8">
          <a href="#casos" className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
            {t('agents.hero.cta')}
          </a>
          <a href="#contacto" className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            {t('agents.hero.ctaSecondary')}
          </a>
        </div>
      </div>
      <div className="order-2 md:order-none">
        <img
          src="/images/agents-hero.jpg"
          alt={t('agents.hero.eyebrow')}
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

function AgentsUseCases() {
  const { t } = useTranslation()
  const items = t('agents.useCases.items', { returnObjects: true }) as Array<{ icon: string; title: string; description: string }>

  const iconMap: Record<string, React.ReactNode> = {
    MessageCircle: <MessageCircle className="h-6 w-6" />,
    Clock: <Clock className="h-6 w-6" />,
    Zap: <Zap className="h-6 w-6" />,
    Plug: <Plug className="h-6 w-6" />,
    BarChart3: <BarChart3 className="h-6 w-6" />,
    Bot: <Bot className="h-6 w-6" />,
  }

  return (
    <section id="casos" className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:mb-4 md:text-4xl">
        {t('agents.useCases.title')}
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground md:mb-12">
        {t('agents.useCases.subtitle')}
      </p>
      <div className="scroll-reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5 md:p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
              {iconMap[item.icon] || <Bot className="h-6 w-6" />}
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AgentsHow() {
  const { t } = useTranslation()
  const steps = t('agents.how.steps', { returnObjects: true }) as Array<{ title: string; description: string }>

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:mb-12 md:text-3xl">
        {t('agents.how.title')}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {steps.map((step, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-5 md:p-6">
            <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
              {i + 1}
            </span>
            <h3 className="mb-2 text-base font-semibold text-foreground">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AgentsDemo() {
  const { t } = useTranslation()
  const conversation = t('agents.demo.conversation', { returnObjects: true }) as Array<{ role: string; text: string }>
  const record = t('agents.demo.record', { returnObjects: true }) as Record<string, string>

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:text-3xl">
        {t('agents.demo.title')}
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
        {t('agents.demo.subtitle')}
      </p>

      <div className="grid items-start gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-4">
        <div className="rounded-xl border border-border bg-card p-4 md:p-6">
          <p className="mb-4 text-xs font-medium text-muted-foreground uppercase">{t('agents.demo.chatLabel')}</p>
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
          <p className="mb-4 text-xs font-medium text-muted-foreground uppercase">{t('agents.demo.recordLabel')}</p>
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

function AgentsBenefits() {
  const { t } = useTranslation()
  const items = t('agents.benefits.items', { returnObjects: true }) as Array<{ metric: string; label: string }>

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:mb-12 md:text-3xl">
        {t('agents.benefits.title')}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
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
