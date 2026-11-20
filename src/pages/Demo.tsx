import { usePageMeta } from '../hooks/usePageMeta'
import { MessageSquare, Car, Stethoscope, ArrowRight } from 'lucide-react'

const demos = [
  {
    title: 'Concesionario de Autos',
    description: 'Agente de atencion al cliente para concesionarios de autos usados. Responde consultas, busca vehiculos en el inventario y agenda visitas al local.',
    highlights: ['Busqueda inteligente de inventario', 'Nunca revela precios', 'Recolecta datos del cliente', 'Comparte ubicacion del local'],
    icon: Car,
    color: 'bg-amber-500',
    url: 'https://used-cars-chatbot-production.up.railway.app',
  },
  {
    title: 'Consultorio Dental',
    description: 'Recepcionista virtual para consultorios odontologicos. Atiende pacientes por WhatsApp, agenda turnos y maneja cancelaciones de forma natural.',
    highlights: ['Agenda turnos automaticamente', 'Consulta disponibilidad en tiempo real', 'Manejo de obras sociales', 'Tono calido y profesional'],
    icon: Stethoscope,
    color: 'bg-sky-500',
    url: 'https://dental-chatbot-api-production.up.railway.app',
  },
]

export function DemoPage() {
  usePageMeta('Demos', 'Proba nuestros agentes de IA en vivo. Chatbots inteligentes para distintas industrias.')

  return (
    <section className="mx-auto max-w-6xl px-4 pt-28 pb-16 md:px-6 md:pt-36 md:pb-24">
      <div className="mb-12 text-center md:mb-16">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
          <MessageSquare size={14} />
          Demos en vivo
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Proba nuestros agentes de IA
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Cada demo es un chatbot real funcionando con inteligencia artificial.
          Escribile como si fueras un cliente y ve como responde.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {demos.map((demo) => (
          <DemoCard key={demo.title} demo={demo} />
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-border bg-muted p-8 text-center md:p-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">
          Queres uno para tu negocio?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Creamos agentes personalizados para cualquier industria. Conectados a WhatsApp, tu sistema de turnos, inventario o lo que necesites.
        </p>
        <a
          href="/#contacto"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Hablemos
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}

function DemoCard({ demo }: { demo: typeof demos[number] }) {
  const Icon = demo.icon

  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg md:p-8">
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${demo.color} text-white`}>
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-bold text-foreground md:text-xl">{demo.title}</h3>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
        {demo.description}
      </p>

      <ul className="mb-6 space-y-2">
        {demo.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <a
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Probar demo
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}
