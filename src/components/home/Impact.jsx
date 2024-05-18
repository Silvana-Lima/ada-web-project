import { Container, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react'

import dolar from '@/dolar.png'
import hands from '@/hands.png'
import happyFace from '@/happy-face.png'
import peopleIcon from '@/people.png'

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
        maxW={'1155px'}
        minH={'400px'}
        color={'black'}
        display={'flex'}
        flexDirection={['column', 'column', 'row']}
        justifyContent={'space-between'}
        py={0}
        pb={[5, 5, 0]}
      >
        <VStack
          maxWidth={['100%', '100%', '38%']}
          justifyContent={'center'}
          my={[5, 5, 0]}
          mr={[0, 8]}
        >
          <Heading
            as="h1"
            fontSize={['24px', '24px', '36px', '55px']}
            color={'#222222'}
          >
            Nuestro impacto en datos
          </Heading>
          <Text
            fontSize={['16px', '16px', '20px', '24px']}
            align={['center', 'center', 'start']}
            color={'#4a4a4a'}
          >
            Capacitamos en Tecnología a mujeres y feminidades en Latinoamérica
            desde 2018.
          </Text>
        </VStack>
        <Grid
          templateColumns={['', '', 'repeat(2, 1fr)']}
          templateRows={['repeat(4, 1fr)', 'repeat(4, 1fr)', 'repeat(2, 1fr)']}
          gap={4}
        >
          <Container
            maxW={'346px'}
            maxH={'193px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            borderColor={'#BCBCBC'}
            borderWidth="1px"
            borderRadius="md"
            color={'#4A4A4A'}
          >
            <Image src={peopleIcon} />
            <Text
              fontSize={['30px', '30px', '30px', '36px']}
              fontWeight={'bold'}
            >
              +2.100
            </Text>
            <Text align={'center'}>Egresadas en nuestras capacitaciones</Text>
          </Container>
          <Container
            maxW={'346px'}
            maxH={'193px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            borderColor={'#BCBCBC'}
            borderWidth="1px"
            borderRadius="md"
            color={'#4A4A4A'}
          >
            <Image src={hands} />
            <Text
              fontSize={['30px', '30px', '30px', '36px']}
              fontWeight={'bold'}
            >
              +100
            </Text>
            <Text align={'center'}>Empresas contratantes</Text>
          </Container>
          <Container
            maxW={'346px'}
            min
            maxH={'193px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            borderColor={'#BCBCBC'}
            borderWidth="1px"
            borderRadius="md"
            color={'#4A4A4A'}
          >
            <Image src={dolar} />
            <Text
              fontSize={['30px', '30px', '30px', '36px']}
              fontWeight={'bold'}
            >
              +700 USD
            </Text>
            <Text align={'center'}>
              Salario promedio mensual de nuestras egresAdas
            </Text>
          </Container>
          <Container
            maxW={'346px'}
            maxH={'193px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            borderColor={'#BCBCBC'}
            borderWidth="1px"
            borderRadius="md"
            color={'#4A4A4A'}
          >
            <Image src={happyFace} />
            <Text
              fontSize={['30px', '30px', '30px', '36px']}
              fontWeight={'bold'}
            >
              +90%
            </Text>
            <Text align={'center'}>
              Satisfacción al terminar la capacitación
            </Text>
          </Container>
        </Grid>
      </Container>
    </Container>
  )
}
