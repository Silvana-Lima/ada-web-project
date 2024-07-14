import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

import bgImg from '../../assets/image/trainingBgImg.png'

export const TrainingBanner = () => {
  return (
    <Container maxW={'1440px'}>
      <Stack
        position="relative"
        w="100%"
        minH={'364px'}
        bgImage={`url(${bgImg})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
        px={{ base: '16px', md: '16px', lg: '40px' }}
        py={{ base: '48px', md: '48px', lg: '80px' }}
        spacing={['24px', '40px', '50px', '80px']}
        justifyContent={'center'}
        alignItems={'center'}
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
        <Box zIndex={1} position="relative">
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
