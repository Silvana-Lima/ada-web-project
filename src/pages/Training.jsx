import { Container } from '@chakra-ui/react'

import { Testimonials } from '../components/about-us/Testimonials'
import { Faqs } from '../components/training/Faqs'
import { OurCourses } from '../components/training/OurCourses'
import { SuccessInfo } from '../components/training/SuccessInfo'
import { TrainingBanner } from '../components/training/TrainingBanner'

export const Training = () => {
  return (
    <Container maxW={'1440px'}>
      <TrainingBanner />
      <OurCourses />
      <Testimonials />
      <SuccessInfo />
      <Faqs />
    </Container>
  )
}
