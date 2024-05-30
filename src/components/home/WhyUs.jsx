import {
  Container,
  Flex,
  Grid,
  Heading,
  Highlight,
  Text,
  VStack,
} from '@chakra-ui/react'

import { WhyUsCard } from './WhyUsCard'

export const WhyUs = () => {
  return (
    <Container maxW={['360px', '1235px']} bg={'#fbfbfb'}>
      {/* 1155px + 80px padding */}
      <Flex
        maxW={'100%'}
        color={'gray.800'}
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems={'center'}
        gap={['', '', '', 'spacingXl.lg']}
        pt={['spacingXl.base', 'spacingXl.base', 'spacingXl.base', '80px']}
        pb={['spacingXl.base', 'spacingXl.base', 'spacingXl.base', '160px']}
        px={['spacingM.base', '40px', '40px', '40px']}
      >
        <VStack
          maxWidth={['100%', '100%', '100%', '342px']}
          gap={['spacingS.base', 'spacingM.base']}
        >
          <Heading
            as="h1"
            fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
            color={'gray.800'}
            textAlign={['center', 'center', 'center', 'left']}
          >
            ¿Por qué estudiar en{' '}
            <Highlight query="ada itw?" styles={{ color: 'magenta.400' }}>
              ADA ITW?
            </Highlight>{' '}
          </Heading>
          <Text
            fontSize={[
              'largeTxt.xl.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.lg',
            ]}
            align={['center', 'center', 'center', 'start']}
            mb={['spacingL.xl', 'spacingL.xl', 'spacingL.xl', '']}
            textAlign={'justify'}
          >
            Nuestra misión es reducir la brecha de género en tecnología y esto
            lo hacemos a través del empoderamiento de las mujeres con cursos de
            programación.
          </Text>
        </VStack>
        <Grid
          templateColumns={['', '', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
          templateRows={[
            'repeat(4, 1fr)',
            'repeat(4, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={'spacingM.xl'}
          maxW={'850px'}
        >
          <WhyUsCard
            title={'Habilidades blandas'}
            description={
              'Fomentamos el desarrollo de habilidades en comunicación, liderazgo, trabajo en equipo, metodologías ágiles y más.'
            }
          />
          <WhyUsCard
            title={'Inserción laboral'}
            description={
              'Conectamos a nuestras egresadas con oportunidades laborales a través de formación, alianzas empresariales y eventos de desarrollo profesional.'
            }
          />
          <WhyUsCard
            title={'Aprendizaje práctico'}
            description={
              'Desafiamos la educación tradicional  para que realmente disfrutes aprender en nuestras sesiones 70 % prácticas.'
            }
          />
          <WhyUsCard
            title={'Acompañamiento'}
            description={
              'Integramos un enfoque teórico (60%) con actividades prácticas (40%) para aplicar los conocimientos adquiridos eficazmente.'
            }
          />
        </Grid>
      </Flex>
    </Container>
  )
}
