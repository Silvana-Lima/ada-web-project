import {
  Container,
  Grid,
  Heading,
  Highlight,
  HStack,
  Text,
} from '@chakra-ui/react'

import { WhyUsCard } from '../home/WhyUsCard'

export const WhyAda = () => {
  return (
    <Container maxW={'100%'} bg={'gray.200'}>
      <Container
        color={'gray.800'}
        maxW={['296px', '400px', '900px', '1129px']}
        py={'40px'}
      >
        <HStack py={'40px'} justifyContent={'space-between'}>
          <Heading
            as="h1"
            maxW={'285px'}
            fontSize={'h1.xl'}
            color={'gray.800'}
            textAlign={'left'}
          >
            ¿Por qué en{' '}
            <Highlight query="ada itw?" styles={{ color: 'magenta.400' }}>
              ADA ITW?
            </Highlight>{' '}
          </Heading>
          <Text fontSize={'largeTxt.lg'} maxW={'400px'} align={'start'}>
            Nuestra misión es reducir la brecha de género en tecnología y esto
            lo hacemos a través del empoderamiento de las mujeres con cursos de
            programación.
          </Text>
        </HStack>
        <Grid
          templateColumns={'repeat(2, 1fr)'}
          templateRows={'repeat(2, 1fr)'}
          gap={'53px'}
        >
          <WhyUsCard
            title={'Aprendizaje práctico'}
            description={
              'Desafiamos la educación tradicional  para que realmente disfrutes aprender en nuestras sesiones 70 % prácticas.'
            }
            bgColor={'#F0F000'}
            pY={'30px'}
            pX={'30px'}
          />
          <WhyUsCard
            title={'Acompañamiento'}
            description={
              'Integramos un enfoque teórico (60%) con actividades prácticas (40%) para aplicar los conocimientos adquiridos eficazmente.'
            }
            bgColor={'#FCFCCC'}
            pY={'30px'}
            pX={'30px'}
          />
          <WhyUsCard
            title={'Habilidades blandas'}
            description={
              'Fomentamos el desarrollo de habilidades en comunicación, liderazgo, trabajo en equipo,metodologías ágiles y más.'
            }
            bgColor={'#EAC3FF'}
            pY={'30px'}
            pX={'30px'}
          />
          <WhyUsCard
            title={'Inserción laboral'}
            description={
              'Conectamos a nuestras egresadas con oportunidades laborales actuales a través de formación, alianzas empresariales y eventos de desarrollo profesional.'
            }
            bgColor={'#FFBF7D'}
            pY={'30px'}
            pX={'30px'}
          />
        </Grid>
      </Container>
    </Container>
  )
}
