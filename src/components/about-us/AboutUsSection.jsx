import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FiVolume2 } from 'react-icons/fi'

import aboutUsVideo from '../../assets/aboutUsVideo.mp4'
import AboutUsImg from '../../assets/image/bannerUsImg.png'

export const AboutUsSection = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  })

  const [isMuted, setIsMuted] = useState(true)

  const handleUnmute = () => {
    setIsMuted(false)
  }
  return (
    <Container bg="magenta.400" maxW={'1440px'}>
      {isMobile ? (
        <Stack
          px={'16px'}
          pb={'40px'}
          pt={'32px'}
          spacing={'16px'}
          alignItems={'center'}
          bg="gray.0"
        >
          <Box maxW={{ base: '100%', md: '100%' }}>
            <Heading
              color={'gray.800'}
              fontSize={'h1.base'}
              fontWeight={'medium'}
              // letterSpacing="17px" no estaria reflejando lo mismo que el proto
            >
              Sobre Ada ITW
            </Heading>
            <Text
              color={'gray.600'}
              fontSize={'largeTxt.base'}
              textAlign={'justify'}
            >
              Somos una organización sin fines de lucro que desde el año 2018
              capacita a mujeres en tecnología con el objetivo de reducir la
              brecha de género y brindar mejores oportunidades a las mujeres y
              feminidades de América Latina y el mundo.
            </Text>
          </Box>
          <Text color={'gray.800'} fontSize={'midTxt.base'} fontWeight={'bold'}>
            Conoce más sobre nuestro trabajo de la mano de nuestra directora
            ejecutiva:
          </Text>

          <Box pos={'relative'}>
            <Box
              as="video"
              w="100%"
              src={aboutUsVideo}
              controls
              autoPlay
              loop
              muted={isMuted}
              type="video/mp4"
            />
            {isMuted && (
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                zIndex="1"
              >
                <Button
                  leftIcon={<FiVolume2 size={'30px'} />}
                  variant="solid"
                  color={'gray.0'}
                  bg={'gray.800'}
                  onClick={handleUnmute}
                >
                  Activar sonido
                </Button>
              </Box>
            )}
          </Box>
        </Stack>
      ) : (
        // DESKTOP
        <Stack
          px={'80px'}
          py={'80px'}
          spacing={{ md: '16px', lg: '80px' }}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box maxW={{ md: '300px', xl: '432px' }} fontWeight={'bold'}>
            <Text
              color={'gray.0'}
              fontSize={{ md: 'h3.lg', lg: 'h2.lg', xl: '40px' }}
            >
              Creemos que la tecnología tiene un{'  '}
              <Heading
                as={'span'}
                color={'gray.600'}
                bg="yellow.600"
                fontSize={{ md: 'h2.lg', lg: '40px', xl: '64px' }}
                fontWeight={'bold'}
                maxW={'max-content'}
              >
                alto poder transformador
              </Heading>{' '}
              y buscamos generar oportunidades para todas las mujeres
            </Text>
          </Box>
          <Box maxW={{ md: '100%', lg: '624px' }}>
            <Image
              src={AboutUsImg}
              width="100%"
              height="100%"
              bgSize={'cover'}
              bgRepeat={'no-repeat'}
            />
          </Box>
        </Stack>
      )}
    </Container>
  )
}
