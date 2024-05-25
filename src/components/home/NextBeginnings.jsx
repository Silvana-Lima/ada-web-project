import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

import { CareersCardCarousel } from './swiper/CareersCardCarousel'

export const NextBeginnings = () => {
  return (
    <Stack maxW={'1440'} py={'80px'} px={'48px'}>
      <Container maxW={'1386px'} alignItems="center" align="center">
        <Box w={'838px'} h={'196px'}>
          <Heading>Próximos comienzos</Heading>
          <Text>
            ¡Atrévete a ser tu protagonista en el mundo tecnológico! Nuestros
            cursos para mujeres están aquí para impulsar tu carrera. ¡Incríbete
            ya y comienza a construir tu futuro en la tecnología! 💡👩‍💻
          </Text>
        </Box>

        <Box w={'1290px'}>
          <CareersCardCarousel />
        </Box>
      </Container>
    </Stack>
  )
}
