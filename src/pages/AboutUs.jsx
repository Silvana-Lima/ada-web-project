import { Container } from '@chakra-ui/react'

import { AboutUsSection } from '../components/about-us/AboutUsSection'
import { OurStory } from '../components/about-us/OurStory'

export const AboutUs = () => {
  return (
    <Container maxW={'1440px'}>
      <AboutUsSection />
      <OurStory />
    </Container>
  )
}
