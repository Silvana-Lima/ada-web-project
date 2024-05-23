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
        <Heading as="h1" fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}>
          Empoderamos mujeres a través de la tecnología{' '}
        </Heading>
        <Text
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
        >
          Brindamos capacitaciones en tecnología y potenciamos a mujeres y
          feminidades para que lideren la revolución tecnológica y den forma a
          un mañana inclusivo.
        </Text>
        <Button variant={'button-primary'} size={'lg'}>
          Conoce nuestras capacitaciones
        </Button>
      </VStack>
    </Container>
  )
}
