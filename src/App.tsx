import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Problems } from './components/Problems'
import { Services } from './components/Services'
import { Examples } from './components/Examples'
import { WhoAndContact } from './components/WhoAndContact'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <Examples />
      <WhoAndContact />
    </div>
  )
}

export default App
