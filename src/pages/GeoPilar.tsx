import { Link } from 'react-router-dom'
import { MapPin, Monitor, Zap, Bot, Check } from 'lucide-react'
import { ContactSection } from '../components/ContactSection'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageMeta } from '../hooks/usePageMeta'

export function GeoPilarPage() {
  useScrollReveal()
  usePageMeta(
    'Desarrollo Web y Agentes de IA en Pilar, Buenos Aires',
    'Empresa de desarrollo web, automatizaciones y agentes de inteligencia artificial en Pilar, zona norte de Buenos Aires. Atendemos empresas, consultorios y comercios de la zona.'
  )

  return (
    <>
      <GeoHero
        eyebrow="DESARROLLO WEB Y AGENTES IA EN PILAR"
        title="Desarrollo web y agentes de IA para empresas en Pilar"
        subtitle="Somos una empresa de tecnologia ubicada en Pilar, Buenos Aires. Desarrollamos sitios web, aplicaciones a medida y agentes de inteligencia artificial que automatizan la atencion al cliente por WhatsApp. Trabajamos con empresas, consultorios y comercios de Pilar y zona norte."
        location="Pilar, Buenos Aires"
      />
      <LocalServices />
      <Verticals />
      <LocalTrust />
      <ContactSection
        title="Hablemos sobre tu proyecto"
        subtitle="Estamos en Pilar. Podemos reunirnos para conocer tu negocio y evaluar como ayudarte con tecnologia."
        cta="Agendar una reunion"
      />
    </>
  )
}

export function GeoZonaNortePage() {
  useScrollReveal()
  usePageMeta(
    'Desarrollo Web y Agentes de IA en Zona Norte, Buenos Aires',
    'Empresa de desarrollo web, automatizaciones y agentes de IA en zona norte de Buenos Aires. Atendemos empresas en Pilar, Escobar, Tigre, San Isidro, San Fernando y alrededores.'
  )

  return (
    <>
      <GeoHero
        eyebrow="DESARROLLO WEB Y AGENTES IA EN ZONA NORTE"
        title="Desarrollo web y agentes de IA para empresas en zona norte"
        subtitle="Somos una empresa de tecnologia en Pilar que atiende empresas de toda la zona norte de Buenos Aires: Escobar, Tigre, San Isidro, San Fernando, Vicente Lopez, Campana y alrededores. Desarrollamos sitios web, aplicaciones y agentes de IA para automatizar ventas y atencion al cliente."
        location="Zona Norte, Buenos Aires"
      />
      <LocalServices />
      <ZonaNorteLocalities />
      <Verticals />
      <LocalTrust />
      <ContactSection
        title="Hablemos sobre tu proyecto"
        subtitle="Estamos en Pilar y atendemos toda la zona norte. Podemos reunirnos para conocer tu negocio."
        cta="Agendar una reunion"
      />
    </>
  )
}

function GeoHero({ eyebrow, title, subtitle, location }: { eyebrow: string; title: string; subtitle: string; location: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-24 pb-12 md:px-6 md:pt-36 md:pb-20">
      <div className="max-w-3xl">
        <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          <MapPin className="h-4 w-4" />
          {eyebrow}
        </span>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
          {subtitle}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-8">
          <a href="#contacto" className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
            Contactanos
          </a>
          <a href="#servicios" className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
            Ver servicios
          </a>
        </div>
        <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {location}
        </div>
      </div>
    </section>
  )
}

function LocalServices() {
  const services = [
    {
      icon: Bot,
      title: 'Agentes de IA por WhatsApp',
      description: 'Asistentes conversacionales que atienden consultas, agendan turnos, califican leads y gestionan pedidos automaticamente. Funcionan 24/7.',
      link: '/agentes-ia-para-empresas',
    },
    {
      icon: Monitor,
      title: 'Desarrollo web a medida',
      description: 'Sitios web profesionales, portales para clientes, cotizadores online y aplicaciones a medida para digitalizar tu negocio.',
      link: '/desarrollo-web',
    },
    {
      icon: Zap,
      title: 'Automatizaciones',
      description: 'Conectamos tus sistemas para que la informacion fluya sin carga manual. CRM, WhatsApp, agenda, facturacion, todo integrado.',
      link: '/automatizaciones',
    },
  ]

  return (
    <section id="servicios" className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:mb-4 md:text-3xl">
        Que hacemos
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground md:mb-12">
        Tres servicios para empresas que quieren vender mas, atender mejor y trabajar con menos tareas manuales.
      </p>
      <div className="scroll-reveal-stagger grid gap-4 sm:grid-cols-3 md:gap-6">
        {services.map((service, i) => (
          <Link key={i} to={service.link} className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20 md:p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
              <service.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground group-hover:underline">{service.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

function Verticals() {
  const verticals = [
    {
      title: 'Consultorios odontologicos',
      description: 'Agente de IA que agenda turnos, responde consultas de pacientes y envia recordatorios por WhatsApp.',
      link: '/agentes-ia-consultorios-odontologicos',
    },
    {
      title: 'Concesionarias de autos',
      description: 'Agente de IA que responde sobre vehiculos, califica compradores y agenda visitas al salon.',
      link: '/agentes-ia-concesionarias-autos',
    },
    {
      title: 'Comercios y pymes',
      description: 'Agente de IA para atencion al cliente, pedidos y cotizaciones automaticas por WhatsApp.',
      link: '/agentes-ia-para-empresas',
    },
  ]

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:mb-4 md:text-3xl">
        Industrias que atendemos en la zona
      </h2>
      <div className="scroll-reveal-stagger mt-8 grid gap-4 sm:grid-cols-3 md:gap-6">
        {verticals.map((v, i) => (
          <Link key={i} to={v.link} className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20 md:p-6">
            <h3 className="mb-2 text-base font-semibold text-foreground group-hover:underline">{v.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

function ZonaNorteLocalities() {
  const localities = [
    'Pilar', 'Escobar', 'Tigre', 'San Isidro', 'San Fernando',
    'Vicente Lopez', 'Campana', 'Zarate', 'Pacheco', 'Don Torcuato',
    'Nordelta', 'Del Viso', 'Tortuguitas', 'Los Polvorines', 'San Miguel',
  ]

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:mb-4 md:text-3xl">
        Localidades que atendemos
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted-foreground">
        Estamos en Pilar y trabajamos con empresas de toda la zona norte de Buenos Aires.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {localities.map((loc) => (
          <span key={loc} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">
            {loc}
          </span>
        ))}
      </div>
    </section>
  )
}

function LocalTrust() {
  const points = [
    'Empresa radicada en Pilar, Buenos Aires',
    'Hablas directamente con quien desarrolla tu solucion',
    'Podemos reunirnos presencialmente para conocer tu proyecto',
    'Soporte continuo despues de la implementacion',
    'Mas de 50 proyectos entregados para empresas argentinas',
  ]

  return (
    <section className="scroll-reveal mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <div className="rounded-xl border border-border bg-card p-5 md:rounded-2xl md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="h-6 w-6 text-foreground" />
          <h2 className="text-xl font-bold text-foreground md:text-2xl">Por que elegirnos</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg bg-muted p-3 md:p-4">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
              <span className="text-sm text-foreground">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
