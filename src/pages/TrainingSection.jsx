import { Container } from '@chakra-ui/react'

import { Testimonials } from '../components/about-us/Testimonials'
import { InscriptionSteps } from '../components/training/InscriptionSteps'
import { SuccessInfo } from '../components/training/SuccessInfo'
import { TrainingBanner } from '../components/training/TrainingBanner'

export const TrainingSection = () => {
  return (
    <Container maxW={'1440px'}>
      <TrainingBanner />
      <InscriptionSteps />
      <Testimonials />
      <SuccessInfo />
    </Container>
  )
}
