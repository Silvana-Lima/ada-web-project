import { Container } from '@chakra-ui/react'

import { InscriptionSteps } from '../components/training/InscriptionSteps'
import { TrainingBanner } from '../components/training/TrainingBanner'

export const TrainingSection = () => {
  return (
    <Container maxW={'1440px'}>
      <TrainingBanner />
      <InscriptionSteps />
    </Container>
  )
}
