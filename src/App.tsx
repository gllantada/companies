import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/Home'
import { DesarrolloWebPage } from './pages/DesarrolloWeb'
import { AutomatizacionesPage } from './pages/Automatizaciones'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/desarrollo-web" element={<DesarrolloWebPage />} />
          <Route path="/automatizaciones" element={<AutomatizacionesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
