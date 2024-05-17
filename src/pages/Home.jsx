import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

import imgFondo from '../assets/fondo-home.png'
import peopleIcon from '../assets/people.png'

export const Home = () => {
  return (
    <>
      <Container
        backgroundImage={imgFondo}
        h={'100vh'}
        maxW={['100%', '1440px']}
        display={'flex'}
        alignItems={'center'}
        color={'#ffffff'}
      >
        <VStack
          maxW={['60%', '50%']}
          h={'50%'}
          marginLeft={'10%'}
          alignItems={'flex-start'}
          gap={[5, 7]}
        >
          <Heading as="h1" fontSize={['24px', '24px', '58px']}>
            Empoderamos mujeres a través de la tecnología{' '}
          </Heading>
          <Text fontSize={['14px', '14px', '24px']}>
            Brindamos capacitaciones en tecnología y potenciamos a mujeres y
            feminidades para que lideren la revolución tecnológica y den forma a
            un mañana inclusivo.
          </Text>
          <Button
            bg={'#cd0055'}
            color={'white'}
            px={['8px', '8px', '32px']}
            py={['8px', '8px', '16px']}
            fontSize={['14px', '14px', '24px']}
          >
            Conoce nuestras capacitaciones
          </Button>
        </VStack>
      </Container>
      <Container
        h={'100vh'}
        maxW={['100%', '1440px']}
        display={'flex'}
        alignItems={'center'}
        color={'#ffffff'}
      >
        <Container
          maxW={'1155px'}
          color={'black'}
          display={'flex'}
          flexDirection={['column', 'row']}
        >
          <VStack maxW={'448px'}>
            <Heading as="h1" fontSize={['24px', '24px', '58px']}>
              Nuestro impacto en datos
            </Heading>
            <Text fontSize={['14px', '14px', '24px']}>
              Capacitamos en Tecnología a mujeres y feminidades en Latinoamérica
              desde 2018.
            </Text>
          </VStack>
          <Grid
            templateColumns={['', 'repeat(2, 1fr)']}
            templateRows={['repeat(4, 1fr)', 'repeat(2, 1fr)']}
            gap={6}
          >
            <GridItem
              w={'346px'}
              h={'193px'}
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
              <Text fontSize={'36px'} fontWeight={'bold'}>
                +2.100
              </Text>
              <Text>Egresadas en nuestras capacitaciones</Text>
            </GridItem>
            <GridItem
              w={'346px'}
              h={'193px'}
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
              <Text fontSize={'36px'} fontWeight={'bold'}>
                +2.100
              </Text>
              <Text>Egresadas en nuestras capacitaciones</Text>
            </GridItem>
            <GridItem
              w={'346px'}
              h={'193px'}
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
              <Text fontSize={'36px'} fontWeight={'bold'}>
                +2.100
              </Text>
              <Text>Egresadas en nuestras capacitaciones</Text>
            </GridItem>
            <GridItem
              w={'346px'}
              h={'193px'}
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
              <Text fontSize={'36px'} fontWeight={'bold'}>
                +2.100
              </Text>
              <Text>Egresadas en nuestras capacitaciones</Text>
            </GridItem>
          </Grid>
        </Container>
      </Container>
    </>
  )
}
