import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

import bgImg from '../../assets/image/trainingBgImg.png'

export const TrainingBanner = () => {
  return (
    <Container maxW={'1440px'}>
      <Stack
        minH={['340px', '500px']}
        position="relative"
        px={{ base: '32px', md: '32px', lg: '140px' }}
        py={{ base: '40px', md: '40px', lg: '80px' }}
        spacing={['16px', '26px']}
        justifyContent={['start', 'center']}
        alignItems={'center'}
        bgImage={`url(${bgImg})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgGradient:
            'linear(rgba(33, 33, 33, 0.74) 0%, rgba(0, 0, 0, 0.42) 100%)',
          zIndex: 0,
        }}
      >
        <Box
          maxW={{ base: '100%', md: '100%' }}
          textAlign={['left', 'center']}
          zIndex={1}
          position="relative"
        >
          <Heading
            fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
            color={'gray.0'}
          >
            ¡Conoce nuestra oferta educativa!
          </Heading>
          <Text
            color={'gray.0'}
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
          >
            Somos una organización sin fines de lucro que empodera a mujeres y
            feminidades a través de la tecnología mediante cursos y carreras de
            programación. Ofrecemos programas pagos para generar ingresos que
            sustentan becas y préstamos.
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}
