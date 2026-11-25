import { usePageMeta } from '../hooks/usePageMeta'

export function PrivacyPage() {
  usePageMeta('Política de Privacidad', 'Política de privacidad de Devs Extension.')

  return (
    <section className="mx-auto max-w-3xl px-4 pt-28 pb-16 md:px-6 md:pt-36 md:pb-24">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Política de Privacidad
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Última actualización: noviembre 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">1. Responsable</h2>
          <p>Devs Extension, con domicilio en Pilar, Buenos Aires, Argentina. Contacto: gllantada@devsextension.com</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">2. Datos que recopilamos</h2>
          <p>Recopilamos los datos que nos proporcionás voluntariamente a través de nuestros formularios de contacto, chatbot o mensajería (WhatsApp, Instagram, Facebook Messenger): nombre, email, empresa, teléfono y descripción de tu consulta.</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">3. Uso de los datos</h2>
          <p>Utilizamos tus datos exclusivamente para responder tu consulta, agendar reuniones y ofrecerte nuestros servicios. No vendemos ni compartimos tus datos con terceros.</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">4. Servicios de terceros</h2>
          <p>Utilizamos Google Calendar para agendar reuniones, MongoDB Atlas para almacenar conversaciones y Anthropic (Claude) para procesar mensajes del chatbot. Estos servicios tienen sus propias políticas de privacidad.</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">5. Retención de datos</h2>
          <p>Conservamos tus datos mientras sean necesarios para la finalidad para la que fueron recopilados. Podés solicitar la eliminación de tus datos en cualquier momento.</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">6. Tus derechos</h2>
          <p>Podés solicitar el acceso, rectificación o eliminación de tus datos personales escribiendo a gllantada@devsextension.com</p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">7. Cookies</h2>
          <p>Nuestro sitio utiliza almacenamiento local del navegador para mantener el estado del chat. No utilizamos cookies de seguimiento ni publicidad.</p>
        </div>
      </div>
    </section>
  )
}
