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
        py={0}
        px={[0, 5, 5, 0]}
        pb={[5, 5, 0]}
      >
        <VStack
          maxWidth={['100%', '100%', '100%', '38%']}
          justifyContent={'center'}
          my={[5, 5, 5, 0]}
          mr={[0, 5, 5, 8]}
        >
          <Heading
            as="h1"
            fontSize={['24px', '24px', '24px', '50px']}
            color={'#222222'}
            textAlign={['center', 'center', 'center', 'start']}
          >
            Nuestro impacto en datos
          </Heading>
          <Text
            fontSize={['16px', '16px', '16px', '24px']}
            align={['center', 'center', 'center', 'start']}
            color={'#4a4a4a'}
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
