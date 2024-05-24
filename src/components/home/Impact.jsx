import { Container, Grid, Heading, Text, VStack } from '@chakra-ui/react'

import { ImpactCard } from './ImpactCard'

export const Impact = () => {
  return (
    <Container
      maxW={['328px', '1195px']} // -40px padding 1155px
      minH={'100vh'}
      color={'gray.800'}
      display={'flex'}
      flexDirection={['column', 'column', 'column', 'row']}
      justifyContent={'center'}
      alignItems={'center'}
      p={[0, 0, 5, 5]}
      py={[5, 5, 0, 0]}
    >
      <VStack
        maxWidth={['100%', '100%', '100%', '38%']}
        justifyContent={'center'}
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
          mb={[5, 5, 5, 0]}
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
        maxW={'708px'}
      >
        <ImpactCard
          icon={'pepicons-print:people'}
          number={'+2.100'}
          description={'Egresadas en nuestras capacitaciones'}
        />
        <ImpactCard
          icon={'pepicons-print:handshake'}
          number={'+100'}
          description={'Empresas contratantes'}
        />
        <ImpactCard
          icon={'pepicons-print:dollar'}
          number={'+700 USD'}
          description={'Salario promedio mensual de nuestras egresAdas'}
        />
        <ImpactCard
          icon={'pepicons-print:face-smiling'}
          number={'+90%'}
          description={'Satisfacción al terminar la capacitación'}
        />
      </Grid>
    </Container>
  )
}
