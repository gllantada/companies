import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const { t, i18n } = useTranslation()
  const current = i18n.language?.startsWith('es') ? 'es' : 'en'
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link
          to="/"
          className="text-base font-semibold text-foreground md:text-lg"
          onClick={() => {
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          Devs Extension
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {isHome ? (
            <a href="#servicios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t('nav.solutions')}
            </a>
          ) : (
            <Link to="/#servicios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t('nav.solutions')}
            </Link>
          )}
          <Link to="/desarrollo-web" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('services.development.label')}
          </Link>
          <Link to="/automatizaciones" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('services.automation.label')}
          </Link>
          {isHome ? (
            <a href="#contacto" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t('nav.contact')}
            </a>
          ) : (
            <Link to="/#contacto" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t('nav.contact')}
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-1 rounded-lg border border-border bg-card p-0.5">
            <button
              onClick={() => i18n.changeLanguage('en')}
              aria-pressed={current === 'en'}
              aria-label="English"
              className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${
                current === 'en'
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage('es')}
              aria-pressed={current === 'es'}
              aria-label="Español"
              className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${
                current === 'es'
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              ES
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="ml-1 rounded-lg p-2 text-foreground md:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background px-4 pb-4 md:hidden">
          <Link to="/" onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground">
            Inicio
          </Link>
          <Link to="/desarrollo-web" onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground">
            {t('services.development.label')}
          </Link>
          <Link to="/automatizaciones" onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground">
            {t('services.automation.label')}
          </Link>
          {isHome ? (
            <a href="#contacto" onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground">
              {t('nav.contact')}
            </a>
          ) : (
            <Link to="/#contacto" onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground">
              {t('nav.contact')}
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
