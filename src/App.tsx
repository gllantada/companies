import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ChatWidget } from './components/ChatWidget'
import { HomePage } from './pages/Home'
import { DesarrolloWebPage } from './pages/DesarrolloWeb'
import { AutomatizacionesPage } from './pages/Automatizaciones'
import { DemoListPage, DemoDetailPage } from './pages/Demo'
import { PrivacyPage } from './pages/Privacy'
import { BlogPage } from './pages/Blog'
import { BlogArticlePage } from './pages/BlogArticle'
import { AgentesConsultoriosPage } from './pages/AgentesConsultorios'
import { AgentesConcesionariasPage } from './pages/AgentesConcesionarias'
import { AgentesEmpresasPage } from './pages/AgentesEmpresas'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Demo detail: fullscreen, no navbar/footer */}
        <Route path="/demos/concesionaria-usados" element={<DemoDetailPage slug="concesionaria-usados" />} />
        <Route path="/demos/consultorio-dental" element={<DemoDetailPage slug="consultorio-dental" />} />

        {/* Regular pages with navbar/footer */}
        <Route path="*" element={
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/desarrollo-web" element={<DesarrolloWebPage />} />
                <Route path="/automatizaciones" element={<AutomatizacionesPage />} />
                <Route path="/agentes-ia-consultorios-odontologicos" element={<AgentesConsultoriosPage />} />
                <Route path="/agentes-ia-concesionarias-autos" element={<AgentesConcesionariasPage />} />
                <Route path="/agentes-ia-para-empresas" element={<AgentesEmpresasPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogArticlePage />} />
                <Route path="/demos" element={<DemoListPage />} />
                <Route path="/privacidad" element={<PrivacyPage />} />
              </Routes>
            </main>
            <Footer />
            <ChatWidget />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
