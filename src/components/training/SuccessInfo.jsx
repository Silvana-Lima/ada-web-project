import { Box, Heading, Image, Link, Mark, Stack, Text } from '@chakra-ui/react'

import successIlustration from '../../assets/image/successIlustration.png'

export const SuccessInfo = () => {
  return (
    <Stack
      maxW={'1440px'}
      maxH={'600px'}
      p={0}
      px={{ base: '16px', md: '48px' }}
      py={{ base: '60px', md: '80px' }}
      alignItems={'center'}
      spacing={{ base: '16px', md: '24px' }}
      bg={'magenta.400'}
    >
      {/* IMAGEN */}
      <Box maxW={'400px'} maxH={'230px'}>
        <Image src={successIlustration} alt="woman ilustration " />
      </Box>
      <Heading fontSize={['40px', '40px', '50px', '60px']} color={'yellow.600'}>
        +940 egresAdas
      </Heading>
      {/* TEXTO - DESCRIPCION */}
      <Box maxW={'857px'} maxH={'100px'} color={'gray.0'}>
        <Text textAlign={'center'} fontSize={['18px', '18px', '25px', '35px']}>
          ¿Sabías que más del 40% de nuestras egresAdas ya{' '}
          <Mark bg="yellow.600" color="magenta.600" fontWeight="bold">
            consiguieron trabajo en tecnología?
          </Mark>
        </Text>
      </Box>
      <Link
        href="https://docs.google.com/presentation/d/19-Z3Wp_VGbGi2I1ogxEUlA0JBusHbnuka-C2IxChtTY/edit#slide=id.g2a62be3f90f_0_0"
        isExternal
        fontSize={['midTxt.base', 'midTxt.base', 'midTxt.lg', 'midTxt.xl']}
        maxW={'max-content'}
        px={'8px'}
        py={'10px'}
        color={'yellow.600'}
        textDecoration="underline"
      >
        Mira nuestro último informe
      </Link>
    </Stack>
  )
}
