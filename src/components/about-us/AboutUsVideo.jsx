import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FiVolume2 } from 'react-icons/fi'

import video from '../../assets/aboutUsVideo.mp4'

export const AboutUsVideo = () => {
  const [isMuted, setIsMuted] = useState(true)

  const handleUnmute = () => {
    setIsMuted(false)
  }
  return (
    <Container maxW={'1440px'}>
      <Stack
        px={{ base: '32px', md: '32px', lg: '140px' }}
        py={{ base: '40px', md: '40px', lg: '80px' }}
        spacing={['16px', '26px']}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          maxW={{ base: '100%', md: '100%' }}
          textAlign={['justify', 'center']}
        >
          <Heading
            fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
            color={'gray.800'}
          >
            Sobre Ada ITW
          </Heading>
          <Text
            color={'gray.600'}
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
          >
            Somos una organización sin fines de lucro que desde el año 2018
            capacita a mujeres en tecnología con el objetivo de reducir la
            brecha de género y brindar mejores oportunidades a las mujeres y
            feminidades de América Latina y el mundo.
          </Text>
        </Box>
        <Text
          color={'gray.800'}
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
          fontWeight={'bold'}
        >
          Conoce más sobre nuestro trabajo de la mano de nuestra directora
          ejecutiva:
        </Text>

        <Box pos={'relative'}>
          <Box
            as="video"
            w="100%"
            src={video}
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
    </Container>
  )
}
