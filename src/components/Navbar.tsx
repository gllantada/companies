import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const { t, i18n } = useTranslation()
  const current = i18n.language?.startsWith('es') ? 'es' : 'en'
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <a href="#" className="text-base font-semibold text-foreground md:text-lg">
          Devs Extension
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#servicios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('nav.solutions')}
          </a>
          <a href="#contacto" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('nav.howWeWork')}
          </a>
          <a href="#contacto" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t('nav.contact')}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-1 rounded-lg border border-border bg-card p-0.5">
            <button
              onClick={() => i18n.changeLanguage('en')}
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
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          <a
            href="#servicios"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm text-muted-foreground"
          >
            {t('nav.solutions')}
          </a>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm text-muted-foreground"
          >
            {t('nav.howWeWork')}
          </a>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block py-3 text-sm text-muted-foreground"
          >
            {t('nav.contact')}
          </a>
        </div>
      )}
    </nav>
  )
}
