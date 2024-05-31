import { Box, Heading, Stack, Text } from '@chakra-ui/react'

import { CareersCardCarousel } from './swiper/CareersCardCarousel'

export const NextBeginnings = () => {
  return (
    <Stack
      maxW={'1440'}
      p={0}
      px={{ base: '16px', md: '48px' }}
      py={{ base: '32px', md: '80px' }}
      bg={'gray.200'}
      spacing={{ base: '16px', md: '40px' }}
    >
      <Stack
        maxW={'1386px'}
        alignItems={{ base: 'start', md: 'center' }}
        align="start"
      >
        <Box
          maxW={'838px'}
          maxH={{ base: '40px', md: '196px' }} // base: 24px h mas los 16 de padding
          textAlign={'center'}
        >
          <Heading
            pb={{ base: '16px', md: '24px' }}
            fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
          >
            Próximos comienzos
          </Heading>
          <Box pb={'24px'}>
            <Text
              display={{ base: 'none', md: 'block' }}
              fontSize={[
                'largeTxt.base',
                'largeTxt.base',
                'largeTxt.lg',
                'largeTxt.xl',
              ]}
            >
              ¡Atrévete a ser tu protagonista en el mundo tecnológico! Nuestros
              cursos para mujeres están aquí para impulsar tu carrera.
              ¡Incríbete ya y comienza a construir tu futuro en la tecnología!
              💡👩‍💻
            </Text>
          </Box>
        </Box>
      </Stack>
      <CareersCardCarousel />
    </Stack>
  )
}
