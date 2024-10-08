import { Container } from '@chakra-ui/react'

import bgVideo from '@/gif-front.gif'
import imageFrontend from '@/img-banner-frontend.svg'
import vector from '@/vector-why-us-front.svg'

import { Banner } from '../components/home/Banner'
import { Hero } from '../components/home/Hero'
import { WhyUs } from '../components/home/whyUs/WhyUs'
import { LearningPath } from '../components/training/lerningPath/LearningPath'
import { careersWithAda } from '../utils/constants'

export const Frontend = () => {
  return (
    <Container maxW={'1440px'}>
      <Hero
        title={
          <>
            Bienvenida al mundo del desarrollo web: <br />
            Front End
          </>
        }
        description="Brindamos capacitaciones en tecnología y potenciamos a mujeres y
          feminidades para que lideren la revolución tecnológica y den forma a
          un mañana inclusivo."
        btnText="Conoce tu ruta de aprendizaje"
        route="/front-end#learning-path"
        bgVideo={bgVideo}
        formatVideo="img"
        isHashLink
      />
      <WhyUs
        dataCard={careersWithAda}
        titleBlack1={'¿Qué te ofrecemos estudiando'}
        titleColor1={'Front End'}
        titleBlack2={'con'}
        titleColor2={'ADA?'}
        description={
          'Entendemos los desafíos a los que las mujeres y femineidades nos enfrentamos día a día, por eso queremos acompañarte en tu proceso de aprendizaje y también al finalizar la carrera.'
        }
        vector={vector}
      />
      <Banner
        img={imageFrontend}
        title={' ¿Qué es el desarrollo Front-End?'}
        description={
          'El desarrollo front end consiste en optimizar recursos y diseñar cómo se presenta la información con la que interactúa el usuario en un sitio web o aplicación.'
        }
        addButton={false}
        bgColor={'purple.200'}
        vector={vector}
      />
      <LearningPath type="frontend" />
    </Container>
  )
}
