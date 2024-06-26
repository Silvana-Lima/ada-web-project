import { Container } from '@chakra-ui/react'

import { AboutUsSection } from '../components/about-us/AboutUsSection'
import { OurStory } from '../components/about-us/OurStory'
import { PaymentOptions } from '../components/about-us/PaymentOptions'
import { TeamWork } from '../components/about-us/TeamWork'
import { CivicHouseShowcase } from '../components/CivicHouseShowcase'

export const AboutUs = () => {
  return (
    <Container maxW={'1440px'}>
      <AboutUsSection />
      <OurStory />
      <TeamWork />
      <PaymentOptions />
      <CivicHouseShowcase />
    </Container>
  )
}
