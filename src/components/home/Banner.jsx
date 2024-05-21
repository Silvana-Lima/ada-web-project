import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react'

import imgFondo from '@/fondo-home.png'

export const Banner = () => {
  return (
    <Container
      backgroundImage={imgFondo}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      bgPosition={['-560px', '0']}
      minH={'100vh'}
      maxW={['100%', '1440px']}
      display={'flex'}
      alignItems={'center'}
      color={'#ffffff'}
    >
      <VStack
        maxW={['60%', '50%']}
        h={'50%'}
        marginLeft={['6%', '10%']}
        alignItems={'flex-start'}
        gap={[5, 7]}
      >
        <Heading as="h1" fontSize={['24px', '24px', '24px', '58px']}>
          Empoderamos mujeres a través de la tecnología{' '}
        </Heading>
        <Text fontSize={['14px', '14px', '14px', '24px']}>
          Brindamos capacitaciones en tecnología y potenciamos a mujeres y
          feminidades para que lideren la revolución tecnológica y den forma a
          un mañana inclusivo.
        </Text>
        <Button
          bg={'#cd0055'}
          color={'white'}
          px={['8px', '8px', '32px']}
          py={['8px', '8px', '16px']}
          fontSize={['14px', '14px', '14px', '24px']}
          fontFamily={'heading'}
        >
          Conoce nuestras capacitaciones
        </Button>
      </VStack>
    </Container>
  )
}
