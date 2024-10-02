import { Container, Text } from '@chakra-ui/react'

import imageBackend from '@/img-banner-backend.svg'

import { Banner } from '../components/home/Banner'
import { WhyUs } from '../components/home/whyUs/WhyUs'
import { careersWithAda } from '../utils/constants'

export const Backend = () => {
  return (
    <Container maxW={'1440px'}>
      <WhyUs
        dataCard={careersWithAda}
        titleBlack1={'¿Qué te ofrecemos estudiando'}
        titleColor1={'Back End'}
        titleBlack2={'con'}
        titleColor2={'ADA?'}
        description={
          'Entendemos los desafíos a los que las mujeres y femineidades nos enfrentamos día a día, por eso queremos acompañarte en tu proceso de aprendizaje y también al finalizar la carrera.'
        }
      />
      <Banner
        img={imageBackend}
        title={<Text whiteSpace="nowrap">¿Qué es el desarrollo Back-End?</Text>}
        description={
          'El desarrollo Back-End hace referencia a la capa de nuestra aplicación que se encarga de procesar y manipular toda la data proveniente de la base de datos y de implementar las medidas de ciberseguridad necesarias, de la manera más eficiente posible, en función de los requerimientos del usuario final.'
        }
        addButton={false}
        bgColor={'magenta.200'}
      />
    </Container>
  )
}
