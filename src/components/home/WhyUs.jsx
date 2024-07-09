import {
  Container,
  Flex,
  Grid,
  Heading,
  Highlight,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

import vector from '@/vector-why-us.svg'

import { WhyUsCard } from './WhyUsCard'

export const WhyUs = () => {
  return (
    <Container
      maxW={'100%'}
      py={'40px'}
      px={['spacingM.base', '40px', '40px', '40px']}
      bg={'gray.200'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      position="relative"
      zIndex={-3}
    >
      <Image
        src={vector}
        maxW={['271px', '400px', '400px', '571px']}
        position="absolute"
        left={['85px', '100px', '100px', '100px']}
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
        <Stack
          flexDirection={['row', 'row', 'row', 'column']}
          alignItems={'center'}
          maxWidth={['100%', '100%', '100%', '342px']}
          gap={'spacingM.base'}
        >
          <Heading
            as="h1"
            maxW={['117px', '316px']}
            fontSize={['h1.base', 'h1.lg', 'h1.lg', 'h1.xl']}
            color={'gray.800'}
            textAlign={'left'}
          >
            ¿Por qué estudiar en{' '}
            <Highlight query="ada itw?" styles={{ color: 'magenta.400' }}>
              ADA ITW?
            </Highlight>{' '}
          </Heading>
          <Text
            fontSize={[
              'midTxt.base',
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
            ]}
            align={'start'}
            textAlign={['left', 'justify']}
            maxW={['190px', '316px']}
          >
            Nuestra misión es reducir la brecha de género en tecnología y esto
            lo hacemos a través del empoderamiento de las mujeres con cursos de
            programación.
          </Text>
        </Stack>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
          ]}
          templateRows={[
            'repeat(4, 1fr)',
            'repeat(4, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={['30px', '30px', '30px', '40px']}
          maxW={'850px'}
        >
          <WhyUsCard
            title={'Habilidades blandas'}
            description={
              'Fomentamos el desarrollo de habilidades en comunicación, liderazgo, trabajo en equipo, metodologías ágiles y más.'
            }
            bgColor={'gray.0'}
            borderW={'1px'}
            pY={'spacingL.base'}
            pX={'spacingM.base'}
          />
          <WhyUsCard
            title={'Inserción laboral'}
            description={
              'Conectamos a nuestras egresadas con oportunidades laborales a través de formación, alianzas empresariales y eventos de desarrollo profesional.'
            }
            bgColor={'gray.0'}
            borderW={'1px'}
            pY={'spacingL.base'}
            pX={'spacingM.base'}
          />
          <WhyUsCard
            title={'Aprendizaje práctico'}
            description={
              'Desafiamos la educación tradicional  para que realmente disfrutes aprender en nuestras sesiones 70 % prácticas.'
            }
            bgColor={'gray.0'}
            borderW={'1px'}
            pY={'spacingL.base'}
            pX={'spacingM.base'}
          />
          <WhyUsCard
            title={'Acompañamiento'}
            description={
              'Integramos un enfoque teórico (60%) con actividades prácticas (40%) para aplicar los conocimientos adquiridos eficazmente.'
            }
            bgColor={'gray.0'}
            borderW={'1px'}
            pY={'spacingL.base'}
            pX={'spacingM.base'}
          />
        </Grid>
      </Flex>
    </Container>
  )
}
