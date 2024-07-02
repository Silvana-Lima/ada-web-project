import { Container, Show } from '@chakra-ui/react'

import { AboutUsSection } from '../components/about-us/AboutUsSection'
import { OurStory } from '../components/about-us/OurStory'
import { PaymentOptions } from '../components/about-us/PaymentOptions'
import { TeamWork } from '../components/about-us/TeamWork'
import { Testimonials } from '../components/about-us/Testimonials'
import { WhyAda } from '../components/about-us/WhyAda'
import { CivicHouseShowcase } from '../components/CivicHouseShowcase'
import { SupportUs } from '../components/SupportUs'

export const AboutUs = () => {
  return (
    <Container maxW={'1440px'}>
      <AboutUsSection />
      <Show above="lg">
        <WhyAda />
      </Show>
      <OurStory />
      <TeamWork />
      {/* <SupportUs /> */}
      <Testimonials />
      <PaymentOptions />
      <SupportUs />
      <CivicHouseShowcase />
    </Container>
  )
}
