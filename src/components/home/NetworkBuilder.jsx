import { Box, Heading, Image, Link, Mark, Stack, Text } from '@chakra-ui/react'

import networkingImg from '../../assets/networkingImg.png'
import vectorWavyLines from '../../assets/vector-wavyLines.svg'

export const NetworkBuilder = () => {
  return (
    <Stack
      maxW={'1440px'}
      maxH={'600px'}
      p={0}
      px={{ base: '20px', md: '48px' }}
      py={{ base: '16px', md: '80px' }}
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
      <Link
        maxW={'max-content'}
        px={'8px'}
        py={'10px'}
        color={'yellow.600'}
        textDecoration="underline"
      >
        Contacta con nosotros
      </Link>
    </Stack>
  )
}
