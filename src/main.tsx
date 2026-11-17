import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import i18n from './i18n'
import './index.css'
import App from './App'

// Sync <html lang> with i18n language
function syncHtmlLang(lng: string) {
  document.documentElement.lang = lng.startsWith('es') ? 'es' : 'en'
}
syncHtmlLang(i18n.language)
i18n.on('languageChanged', syncHtmlLang)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
