import { Container } from '@chakra-ui/react'

import { Banner } from '../components/home/Banner'
import { Beginnings } from '../components/home/Beginnings'
import { Impact } from '../components/home/Impact'

export const Home = () => {
  return (
    <Container maxW={'1440px'}>
      <Banner />
      <Impact />
      <Beginnings />
    </Container>
  )
}
