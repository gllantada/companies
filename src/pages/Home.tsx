import { useTranslation } from 'react-i18next'
import { Hero } from '../components/Hero'
import { Problems } from '../components/Problems'
import { Services } from '../components/Services'
import { Examples } from '../components/Examples'
import { WhoAndContact } from '../components/WhoAndContact'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePageMeta } from '../hooks/usePageMeta'

export function HomePage() {
  const { t } = useTranslation()
  useScrollReveal()
  usePageMeta(
    '',
    t('hero.subtitle')
  )

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
