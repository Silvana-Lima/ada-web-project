import {
  Box,
  Button,
  Container,
  Highlight,
  Image,
  Mark,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'

import ourGoalImg from '../../assets/ourGoalImg.png'

// breakpoint 360 y 1280 OK - revisar diseño desde 480...

export const OurGoald = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <Container
      maxW={'1440px'}
      px={{ base: '32px', md: '80px' }}
      py={{ base: '32px', md: '80px' }}
      h={{ base: '480px', lg: '600px' }}
      bg="yellow.100"
    >
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        {/* TEXTO */}
        <Stack
          w={{ base: '300px', md: '450px' }}
          maxH={{ base: '200px', md: '420px' }}
          order={{ base: 2, lg: 1 }}
        >
          <Box>
            {isMobile ? (
              // texto para mobile
              <>
                <Text fontSize="h3.base" fontWeight="extrabold">
                  Nuestro{' '}
                  <Highlight query="objetivo" styles={{ fontSize: '40px' }}>
                    objetivo
                  </Highlight>{' '}
                  es <Mark bg="yellow.600">reducir la</Mark>
                </Text>
                <Text fontSize="h3.base" fontWeight="extrabold">
                  <Mark bg="yellow.600">brecha de género en tecnología</Mark>
                </Text>
                <Box w={{ base: '300px', lg: '450px' }}>
                  <Text
                    fontSize={['h3.base', 'h3.base', 'h3.lg', 'h3.xl']}
                    pt={'16px'}
                    pb={{ base: '16px', md: '32px' }}
                  >
                    Ada brinda ayudas económicas en forma de pagos diferidos a
                    las mujeres y feminidades que quieran capacitarse y entrar
                    en el mundo IT.
                  </Text>
                </Box>
              </>
            ) : (
              // texto para desktop
              <>
                <Text
                  fontSize={['h3.base', 'h3.lg', 'h3.xl']}
                  fontWeight="extrabold"
                >
                  <Highlight
                    query="objetivo"
                    styles={{
                      fontSize: { base: '40px', md: '40px', lg: '60px' },
                    }}
                  >
                    Nuestro objetivo
                  </Highlight>
                </Text>

                <Text
                  fontSize={['h3.base', 'h3.lg', 'h3.xl']}
                  fontWeight="bold"
                >
                  es{' '}
                  <Mark bg="yellow.600">
                    reducir la brecha de <br /> género en tecnología
                  </Mark>
                </Text>
                <Text
                  fontSize={['h3.base', 'h3.lg']}
                  pt={'32px'}
                  pb={{ base: '16px', md: '32px' }}
                >
                  Ada brinda ayudas económicas en forma de pagos diferidos a las
                  mujeres y feminidades que quieran capacitarse y entrar en el
                  mundo IT.
                </Text>
              </>
            )}

            <Button
              size="md"
              w={{ base: '300px', md: '450px' }}
              variant={'button-secondary'}
            >
              Información sobre ayudas económicas
            </Button>
          </Box>
          {/* IMAGEN */}
        </Stack>
        <Stack h={{ base: '200px', md: '420px' }} order={{ base: 1, lg: 2 }}>
          <Image
            bgImage={ourGoalImg}
            width="100%"
            height="100%"
            bgSize={'cover'}
            bgRepeat={'no-repeat'}
          />
        </Stack>
      </SimpleGrid>
    </Container>
  )
}
