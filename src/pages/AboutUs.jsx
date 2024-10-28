import { Container } from '@chakra-ui/react'

import { AboutUsSection } from '../components/about-us/AboutUsSection'
import { Faqs } from '../components/about-us/Faqs'
import { FoundersProfiles } from '../components/about-us/FoundersProfiles'
// import { BlogComponent } from '../components/about-us/BlogComponent'
// import { OurStory } from '../components/about-us/OurStory'
import { PaymentOptions } from '../components/about-us/PaymentOptions'
import { SupportUs } from '../components/about-us/SupportUs'
import { TeamWork } from '../components/about-us/TeamWork'
import { Testimonials } from '../components/about-us/Testimonials'
import { WhyAda } from '../components/about-us/WhyAda'
import { CivicHouseShowcase } from '../components/CivicHouseShowcase'

export const AboutUs = () => {
  return (
    <Container maxW={'1440px'}>
      <AboutUsSection />
      <WhyAda />
      <TeamWork />
      <FoundersProfiles />
      <PaymentOptions />
      <Faqs />
      <Testimonials />
      <SupportUs />
      <CivicHouseShowcase />
    </Container>
  )
}
