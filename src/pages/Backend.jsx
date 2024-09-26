import { Container } from '@chakra-ui/react'

import imageCareers from '@/img-banner-carreras.svg'

import { Banner } from '../components/home/Banner'

export const Backend = () => {
  return (
    <Container maxW={'1440px'}>
      <Banner
        img={imageCareers}
        title={'¿Qué es el desarrollo Back-End?'}
        description={
          'El desarrollo Back-End hace referencia a la capa de nuestra aplicación que se encarga de procesar y manipular toda la data proveniente de la base de datos y de implementar las medidas de ciberseguridad necesarias, de la manera más eficiente posible, en función de los requerimientos del usuario final.'
        }
        addButton={false}
        bgColor={'magenta.200'}
      />
    </Container>
  )
}
