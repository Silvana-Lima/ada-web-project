import { Container, Text } from '@chakra-ui/react'

import imageFrontend from '@/img-banner-frontend.svg'

import { Banner } from '../components/home/Banner'
import { LearningPath } from '../components/training/lerningPath/LearningPath'
import { WhyUs } from '../components/home/whyUs/WhyUs'
import { careersWithAda } from '../utils/constants'

export const Frontend = () => {
  return (
    <Container maxW={'1440px'}>
      <WhyUs
        dataCard={careersWithAda}
        titleBlack1={'¿Qué te ofrecemos estudiando'}
        titleColor1={'Front End'}
        titleBlack2={'con'}
        titleColor2={'ADA?'}
        description={
          'Entendemos los desafíos a los que las mujeres y femineidades nos enfrentamos día a día, por eso queremos acompañarte en tu proceso de aprendizaje y también al finalizar la carrera.'
        }
      />
      <Banner
        img={imageFrontend}
        title={
          <Text whiteSpace="nowrap">¿Qué es el desarrollo Front-End?</Text>
        }
        description={
          'El desarrollo front end consiste en optimizar recursos y diseñar cómo se presenta la información con la que interactúa el usuario en un sitio web o aplicación.'
        }
        addButton={false}
        bgColor={'purple.200'}
      />
      <LearningPath />
    </Container>
  )
}
