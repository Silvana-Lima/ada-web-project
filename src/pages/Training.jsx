import { Container } from '@chakra-ui/react'

import { Testimonials } from '../components/about-us/Testimonials'
import { OurCourses } from '../components/training/OurCourses'
import { TrainingBanner } from '../components/training/TrainingBanner'

export const Training = () => {
  return (
    <Container maxW={'1440px'}>
      <TrainingBanner />
      <OurCourses />
      <Testimonials />
    </Container>
  )
}
