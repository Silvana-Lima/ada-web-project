import { Container } from '@chakra-ui/react'

import { AboutUsSection } from '../components/about-us/AboutUsSection'
import { Faqs } from '../components/about-us/Faqs'
import { FoundersProfiles } from '../components/about-us/FoundersProfiles'
import { PaymentOptions } from '../components/about-us/PaymentOptions'
import { SupportUs } from '../components/about-us/SupportUs'
import { TeamWork } from '../components/about-us/TeamWork'
import { Testimonials } from '../components/about-us/Testimonials'
import { WhyAda } from '../components/about-us/WhyAda'
import { CivicHouseShowcase } from '../components/CivicHouseShowcase'
import { SuccessInfo } from '../components/training/SuccessInfo'

export const AboutUs = () => {
  return (
    <Container maxW={'1440px'}>
      <AboutUsSection />
      <WhyAda />
      <TeamWork />
      <FoundersProfiles />
      <PaymentOptions />
      <SuccessInfo />
      <Faqs />
      <Testimonials />
      <CivicHouseShowcase />
      <SupportUs />
    </Container>
  )
}
