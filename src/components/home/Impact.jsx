import { Container, Grid, Heading, Text, VStack } from '@chakra-ui/react'

import dolar from '@/dolar.png'
import hands from '@/hands.png'
import happyFace from '@/happy-face.png'
import peopleIcon from '@/people.png'

import { ImpactCard } from './ImpactCard'

export const Impact = () => {
  return (
    <Container
      minH={'100vh'}
      maxW={['100%', '1440px']}
      display={'flex'}
      alignItems={'center'}
      color={'#ffffff'}
    >
      <Container
        maxW={['328px', '1155px']}
        minH={'400px'}
        color={'black'}
        display={'flex'}
        flexDirection={['column', 'column', 'column', 'row']}
        justifyContent={'space-between'}
        px={[0, 5, 5, 0]}
        pb={[5, 5, 0]}
      >
        <VStack
          maxWidth={['100%', '100%', '100%', '38%']}
          // maxW={'448px'}
          justifyContent={'center'}
          my={[5, 5, 5, 0]}
          mr={[0, 5, 5, 8]}
        >
          <Heading
            as="h1"
            fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
            color={'gray.800'}
            textAlign={['center', 'center', 'center', 'left']}
          >
            Nuestro impacto en datos
          </Heading>
          <Text
            fontSize={[
              'largeTxt.xl.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
            align={['center', 'center', 'center', 'start']}
          >
            Capacitamos en Tecnología a mujeres y feminidades en Latinoamérica
            desde 2018.
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
          gap={4}
        >
          <ImpactCard
            image={peopleIcon}
            number={'+2.100'}
            description={'Egresadas en nuestras capacitaciones'}
          />
          <ImpactCard
            image={hands}
            number={'+100'}
            description={'Empresas contratantes'}
          />
          <ImpactCard
            image={dolar}
            number={'+700 USD'}
            description={'Salario promedio mensual de nuestras egresAdas'}
          />
          <ImpactCard
            image={happyFace}
            number={'+90%'}
            description={'Satisfacción al terminar la capacitación'}
          />
        </Grid>
      </Container>
    </Container>
  )
}
