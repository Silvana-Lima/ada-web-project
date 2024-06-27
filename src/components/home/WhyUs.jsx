import {
  Container,
  Flex,
  Grid,
  Heading,
  Highlight,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

import vector from '@/vector-why-us.svg'

import { WhyUsCard } from './WhyUsCard'

export const WhyUs = () => {
  return (
    <Container
      maxW={'100%'}
      h={'805px'}
      bg={'gray.200'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      position="relative"
      zIndex={-3}
    >
      <Image
        src={vector}
        maxW={'571px'}
        position="absolute"
        left={'100px'}
        zIndex={-1}
      />
      <Flex
        color={'gray.800'}
        flexDirection={'row'}
        wrap={'wrap'}
        alignItems={'center'}
        gap={'spacingXl.lg'}
        px={'20px'}
        py={'40px'}
        position="relative"
        zIndex={1}
        justifyContent={'center'}
      >
        <VStack maxWidth={'342px'} gap={'spacingM.base'}>
          <Heading
            as="h1"
            fontSize={'h1.xl'}
            color={'gray.800'}
            textAlign={'left'}
          >
            ¿Por qué estudiar en{' '}
            <Highlight query="ada itw?" styles={{ color: 'magenta.400' }}>
              ADA ITW?
            </Highlight>{' '}
          </Heading>
          <Text fontSize={'largeTxt.lg'} align={'start'} textAlign={'justify'}>
            Nuestra misión es reducir la brecha de género en tecnología y esto
            lo hacemos a través del empoderamiento de las mujeres con cursos de
            programación.
          </Text>
        </VStack>
        <Grid
          templateColumns={'repeat(2, 1fr)'}
          templateRows={'repeat(2, 1fr)'}
          gap={'spacingM.xl'}
        >
          <WhyUsCard
            title={'Habilidades blandas'}
            description={
              'Fomentamos el desarrollo de habilidades en comunicación, liderazgo, trabajo en equipo, metodologías ágiles y más.'
            }
            bgColor={'gray.0'}
          />
          <WhyUsCard
            title={'Inserción laboral'}
            description={
              'Conectamos a nuestras egresadas con oportunidades laborales a través de formación, alianzas empresariales y eventos de desarrollo profesional.'
            }
            bgColor={'gray.0'}
          />
          <WhyUsCard
            title={'Aprendizaje práctico'}
            description={
              'Desafiamos la educación tradicional  para que realmente disfrutes aprender en nuestras sesiones 70 % prácticas.'
            }
            bgColor={'gray.0'}
          />
          <WhyUsCard
            title={'Acompañamiento'}
            description={
              'Integramos un enfoque teórico (60%) con actividades prácticas (40%) para aplicar los conocimientos adquiridos eficazmente.'
            }
            bgColor={'gray.0'}
          />
        </Grid>
      </Flex>
    </Container>
  )
}
