import { Container, Flex, Grid, Heading, Text, VStack } from '@chakra-ui/react'

import { ImpactCard } from './ImpactCard'

export const Impact = () => {
  return (
    <Container maxW={['360px', '1235px']}>
      {/* 1155px + 80px padding */}
      <Flex
        maxW={'100%'}
        color={'gray.800'}
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems={'center'}
        gap={['', '', '', 'spacingM.xl']}
        pt={['spacingXl.base', 'spacingXl.base', 'spacingXl.base', '80px']}
        pb={['spacingXl.base', 'spacingXl.base', 'spacingXl.base', '160px']}
        px={['spacingM.base', '40px', '40px', '40px']}
      >
        <VStack
          maxWidth={['100%', '100%', '100%', '38%']}
          gap={['spacingS.base', 'spacingM.base']}
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
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
            align={['center', 'center', 'center', 'start']}
            mb={['spacingL.xl', 'spacingL.xl', 'spacingL.xl', '']}
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
          gap={'spacingM.xl'}
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
      </Flex>
    </Container>
  )
}
