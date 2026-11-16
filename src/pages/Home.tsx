import { Hero } from '../components/Hero'
import { Problems } from '../components/Problems'
import { Services } from '../components/Services'
import { Examples } from '../components/Examples'
import { WhoAndContact } from '../components/WhoAndContact'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function HomePage() {
  useScrollReveal()

  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Examples />
      <WhoAndContact />
    </>
  )
}
