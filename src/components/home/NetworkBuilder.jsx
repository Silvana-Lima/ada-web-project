import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Link,
  Mark,
  Stack,
  Text,
} from '@chakra-ui/react'

import networkingImg from '../../assets/networkingImg.png'
import vectorWavyLines from '../../assets/vector-wavyLines.svg'
import { studentTestimonials } from '../../utils/constants'
import { TestimonyCard } from './testimonials/TestimonyCard'

export const NetworkBuilder = () => {
  return (
    <Stack
      id="network-builder"
      maxW={'1440px'}
      p={0}
      px={{ base: '20px', md: '48px' }}
      py={{ base: '30px', md: '80px' }}
      alignItems={'center'}
      bgGradient="radial(magenta.400 0%, magenta.800 100%)"
      spacing={{ base: '16px', md: '24px' }}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${vectorWavyLines})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
      }}
      zIndex={2}
    >
      {/* IMAGEN */}
      <Box maxW={'400px'} maxH={'230px'}>
        <Image src={networkingImg} alt="networking image" />
      </Box>
      <Heading
        fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
        color={'yellow.600'}
      >
        Construyamos alianzas
      </Heading>
      {/* TEXTO - DESCRIPCION */}
      <Box maxW={'857px'} maxH={'100px'} color={'gray.0'}>
        <Text
          textAlign={'center'}
          fontSize={['midTxt.base', 'midTxt.base', 'midTxt.lg', 'midTxt.xl']}
        >
          En nuestro compromiso con la educación tecnológica,
          <Mark bg="yellow.600" color="magenta.600" fontWeight="bold">
            {' '}
            creamos programas adaptados a diversas <br /> audiencias,
          </Mark>{' '}
          fortaleciendo la misión de ONG&apos;s y gobiernos.
        </Text>
      </Box>
      {/* TESTIMONIOS DE EMPRESAS */}
      <Container
        maxW={'1164px'}
        py={['30px', '30px', '30px', '50px']}
        centerContent
      >
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
          ]}
          templateRows={[
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(1, 1fr)',
          ]}
          gap={'20px'}
        >
          {studentTestimonials.map(
            ({ name, career, comment, photo, id, enterprise }) => {
              if (enterprise) {
                return (
                  <TestimonyCard
                    key={id}
                    comment={comment}
                    name={name}
                    career={career}
                    photo={photo}
                    borderColor={'#d4a4fa'}
                    bg={'rgba(255, 255, 255, 0.1)'}
                    color={'gray.0'}
                    h={['345px', '260px', '300px', '400px']}
                  />
                )
              }
              return null
            }
          )}
        </Grid>
      </Container>
      <Button
        bg={'yellow.600'}
        color={'magenta.600'}
        as={Link}
        href="mailto:javier@adaitw.com.ar?subject=Información sobre alianzas&body=Hola Javier,%0A%0AMe gustaría contar con más información al respecto de las alianzas.%0A%0AGracias!"
        isExternal
        zIndex={3}
        _hover={{
          color: 'magenta.800',
        }}
      >
        Contacta con nosotros
      </Button>
    </Stack>
  )
}
