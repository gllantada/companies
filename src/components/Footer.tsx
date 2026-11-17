import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-foreground">Devs Extension</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Desarrollo web, automatizaciones y agentes IA para empresas.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">{t('nav.solutions')}</p>
            <nav className="mt-2 flex flex-col gap-1.5" aria-label="Footer navigation">
              <Link to="/desarrollo-web" className="text-sm text-muted-foreground hover:text-foreground">
                {t('services.development.label')}
              </Link>
              <Link to="/automatizaciones" className="text-sm text-muted-foreground hover:text-foreground">
                {t('services.automation.label')}
              </Link>
              <Link to="/#contacto" className="text-sm text-muted-foreground hover:text-foreground">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          <address className="not-italic">
            <p className="text-sm font-semibold text-foreground">Contacto</p>
            <div className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
              <span>Pilar, Buenos Aires, Argentina</span>
              <a href="mailto:gllantada@devsextension.com" className="hover:text-foreground">
                gllantada@devsextension.com
              </a>
            </div>
          </address>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Devs Extension. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
