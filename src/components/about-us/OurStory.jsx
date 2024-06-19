import {
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

import image from '../../assets/image/ourStoryImg.png'

export const OurStory = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Container maxW={'1440px'}>
      <Stack
        px={{ base: '32px', md: '32px', lg: '140px' }}
        py={{ base: '40px', md: '40px', lg: '80px' }}
        spacing={['16px', '26px']}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Stack maxW={['296px', '1160px']} textAlign={'center'} spacing={'16px'}>
          <Heading
            as="h1"
            fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
            color={'gray.800'}
          >
            {isMobile ? 'Nuestra Historia' : 'Así nació ADA ITW'}
          </Heading>
          <Text
            color={isMobile && 'magenta.400'}
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
          >
            {useBreakpointValue({
              base: 'En Ada ITW capacitamos en Tecnología a mujeres y feminidades en Latinoamérica desde 2018',
              md: 'Capacitamos en Tecnología a mujeres y feminidades en Latinoamérica desde 2018',
            })}
          </Text>
        </Stack>
        <Stack maxW={['252px', '630px']}>
          <Image src={image} alt="Imagen de Ma.Celeste y Ezequiel" />
        </Stack>
        <Stack maxW={['296px', '1161px']}>
          <Text
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
          >
            La historia nace de la experiencia vivida por María Celeste Medina y
            Ezequiel González, que estudiaron y trabajaron en la industria IT de
            Argentina. González, por un lado, se desempeñó por 10 años como
            desarrollador y arquitecto de Software en empresas como UNICEF,
            Epidata y Hexacta. Por su parte, su co-fundadora, se desarrolló como
            programadora de Business Intelligence y es referente regional en
            cuanto a proyectos que involucran el entrecruce de
            tecnología-educación y género. A través de su trabajo en Ada, ...
          </Text>
        </Stack>
      </Stack>
    </Container>
  )
}
