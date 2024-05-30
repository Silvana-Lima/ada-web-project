import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'

import { CarouselHiringCompanies } from './home/swiper/CarouselHiringCompanies'

export const HiringCompanies = () => {
  return (
    <Stack
      maxW={'1440'}
      p={0}
      px={{ base: '16px', md: '48px' }}
      py={{ base: '32px', md: '32px' }}
      alignItems={'center'}
    >
      <Stack maxW={'1386px'} alignItems="center" align="start">
        <Box
          maxW={'838px'}
          // h={{ base: '24px', md: '196px' }}
          textAlign={'center'}
        >
          <Heading
            pb={{ base: '16px', md: '24px' }}
            fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
          >
            Empresas empleadoras
          </Heading>
          <Box
            pb={{ base: '16px', md: '24px' }}
            maxW={{ base: '296', md: '100%' }}
          >
            <Text
              fontSize={[
                'largeTxt.base',
                'largeTxt.base',
                'largeTxt.lg',
                'largeTxt.xl',
              ]}
            >
              Más de 100 empresas confiaron en nosotros y sumaron egresADAs a
              sus equipos
            </Text>
          </Box>
        </Box>
      </Stack>
      <CarouselHiringCompanies />
      <Button
        variant="button-secondary"
        size={'md'}
        w={['100%', '166px', '200px']}
        mt={'16px'}
      >
        Contrata talento
      </Button>
    </Stack>
  )
}
