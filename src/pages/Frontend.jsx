import { Container } from '@chakra-ui/react'

import imageFrontend from '@/img-banner-frontend.svg'

import { Banner } from '../components/home/Banner'

export const Frontend = () => {
  return (
    <Container maxW={'1440px'}>
      <Banner
        img={imageFrontend}
        title={'¿Qué es el desarrollo Front-End?'}
        description={
          'El desarrollo front end consiste en optimizar recursos y diseñar cómo se presenta la información con la que interactúa el usuario en un sitio web o aplicación.'
        }
        addButton={false}
        bgColor={'purple.200'}
      />
    </Container>
  )
}
