import {
  Box,
  Button,
  Container,
  Heading,
  Highlight,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FiVolume2 } from 'react-icons/fi'

import video from '../assets/careersVideo.mp4'

export const Careers = () => {
  const [isMuted, setIsMuted] = useState(true)

  const handleUnmute = () => {
    setIsMuted(false)
  }
  return (
    <Container maxW={'1440px'}>
      {/* seccion video */}
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
      {/* seccion javascript */}
      <Stack
        bg={'magenta.600'}
        maxW={'100%'}
        px={{ base: '32px', md: '32px', lg: '140px' }}
        py={{ base: '40px', md: '40px', lg: '80px' }}
        spacing={['16px', '26px']}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {/* box izquierda */}
          <Stack spacing={10} justifyContent="space-between">
            <Heading
              fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
              color={'gray.0'}
            >
              <Text fontSize={'30px'} color={'gray.0'}>
                Curso
              </Text>
              <Highlight
                query="javascript"
                styles={{
                  color: 'yellow.600',
                  fontWeight: 'bold',
                }}
              >
                Introducción a la programación con javascript
              </Highlight>
            </Heading>

            <Text
              fontSize={[
                'largeTxt.base',
                'largeTxt.base',
                'largeTxt.lg',
                'largeTxt.xl',
              ]}
              color={'gray.0'}
            >
              Este curso introductorio está diseñado para sentar las{' '}
              <strong>bases de la programación</strong> utilizando JavaScript.
              Se enfocará en los fundamentos esenciales de la programación,
              incluyendo la lógica de control, manejo de datos y funciones.
            </Text>

            <Text
              fontSize={[
                'largeTxt.base',
                'largeTxt.base',
                'largeTxt.lg',
                'largeTxt.xl',
              ]}
              color={'gray.0'}
              fontWeight={'bold'}
            >
              Es el punto de partida para aquellas que desean especializarse en
              desarrollo Frontend o Backend.
            </Text>
          </Stack>

          {/* box derecha */}
          <Stack
            spacing={4}
            alignItems={['start', 'start', 'start', 'end']}
            justifyContent={'center'}
          >
            <Tag
              size={'lg'}
              maxW={'max-content'}
              borderRadius="full"
              variant="solid"
              bg="yellow.600"
              fontWeight={'bold'}
              color={'magenta.600'}
            >
              Duración: 2 meses
            </Tag>
            <Tag
              size={'lg'}
              maxW={'max-content'}
              borderRadius="full"
              variant="solid"
              bg="yellow.600"
              fontWeight={'bold'}
              color={'magenta.600'}
            >
              Certificado
            </Tag>
            <Tag
              size={'lg'}
              maxW={'max-content'}
              borderRadius="full"
              variant="solid"
              bg="yellow.600"
              fontWeight={'bold'}
              color={'magenta.600'}
            >
              Dos veces por semana
            </Tag>
            <Text
              fontSize={[
                'largeTxt.base',
                'largeTxt.base',
                'largeTxt.lg',
                'largeTxt.xl',
              ]}
              color={'gray.0'}
              maxW={'325px'}
              alignItems={['start', 'start', 'start', 'end']}
            >
              La evaluación del curso de basará en un proyecto práctico
              integral.
            </Text>
            <Heading
              as="h3"
              size="lg"
              color={'gray.0'}
              lineHeight="tall"
              alignItems={['start', 'start', 'start', 'end']}
              mt={10}
            >
              Elige tu <br />{' '}
              <Highlight
                query="recorrido"
                styles={{
                  color: 'gray.0',
                  px: '2',

                  rounded: 'full',
                  border: 'solid 5px ',
                  borderColor: 'yellow.600',
                }}
              >
                recorrido
              </Highlight>
            </Heading>
          </Stack>
        </SimpleGrid>
      </Stack>

      {/* sección carreras */}
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        {/* frontend */}
        <Stack
          bg="gray.200"
          maxW={'100%'}
          py={{ base: '32px', md: '32px', lg: '80px' }}
          px={{ base: '32px', md: '32px', lg: '' }}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          centerContent
        >
          <Heading
            fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
            color={'gray.800'}
            maxW={'280px'}
            textShadow={'4px 4px 2px rgba(205,0,85,0.6)'}
          >
            Carrera <br /> Frontend
          </Heading>

          <Text
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
            color={'gray.800'}
            maxW={'360px'}
            flexGrow={1}
          >
            <Highlight
              query="Frontend"
              styles={{
                color: 'magenta.400',
                fontWeight: 'bold',
              }}
            >
              El desarrollo Frontend maneja el lenguaje de programación
              JavaScript y consiste en optimizar recursos y diseñar cómo se
              presenta la información con la que interactúa el usuario en un
              sitio web o aplicación.
            </Highlight>
          </Text>

          <Button
            as={Link}
            mt={10}
            // TODO el link del brochure no funciona - y no hay pdf aprobados con los programas - sacamos el boton? me pasas otro Bernie - me pasas otro enlace de brochure?
            // href={''}
            isExternal
            w={'max-content'}
            variant={'buttonPrimary'}
            // bg="gray.800"
            // color="yellow.600"
            textDecoration={'none'}
            size={'lg'}
            _hover={{ textDecoration: 'none' }}
            _visited={{ textDecoration: 'none' }}
          >
            Conocé la carrera de Frontend
          </Button>
        </Stack>

        {/* backend */}
        <Stack
          bg="gray.200"
          maxW={'100%'}
          py={{ base: '32px', md: '32px', lg: '80px' }}
          px={{ base: '32px', md: '32px', lg: '' }}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          centerContent
        >
          <Heading
            fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
            color={'gray.800'}
            maxW={'280px'}
            textShadow={'4px 4px 2px rgba(205,0,85,0.6)'}
          >
            Carrera <br /> Backend
          </Heading>

          <Text
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
            color={'gray.800'}
            maxW={'360px'}
            flexGrow={1}
          >
            <Highlight
              query="Backend"
              styles={{
                color: 'magenta.400',
                fontWeight: 'bold',
              }}
            >
              Backend hace referencia a la capa de nuestra aplicación que se
              encarga de procesar y manipular toda la data proveniente de la
              base de datos y de implementar las medidas de ciberseguridad
              necesarias, de la manera más eficiente posible, en función de los
              requerimientos del usuario final.
            </Highlight>
          </Text>

          <Button
            as={Link}
            mt={10}
            // TODO el link del brochure no funciona - y no hay pdf aprobados con los programas - sacamos el boton? me pasas otro Bernie - me pasas otro enlace de brochure?
            // href={''}
            isExternal
            w={'max-content'}
            variant={'buttonPrimary'}
            // bg="gray.800"
            // color="yellow.600"
            textDecoration={'none'}
            size={'lg'}
            _hover={{ textDecoration: 'none' }}
            _visited={{ textDecoration: 'none' }}
          >
            Conocé la carrera de Backend
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
