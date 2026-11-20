import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/Home'
import { DesarrolloWebPage } from './pages/DesarrolloWeb'
import { AutomatizacionesPage } from './pages/Automatizaciones'
import { DemoListPage, DemoDetailPage } from './pages/Demo'

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
                <Route path="/demos" element={<DemoListPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
