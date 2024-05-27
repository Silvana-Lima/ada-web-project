import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'

import bgVideo from '@/mujer-programacion.mp4'

export const Hero = () => {
  return (
    <Container
      position="relative"
      minH={'100vh'}
      maxW={['100%', '1440px']}
      display={'flex'}
      alignItems={'center'}
      color={'#ffffff'}
      overflow="hidden"
      mb={'spacingXl.base'}
    >
      <Box
        as="video"
        autoPlay
        loop
        muted
        src={bgVideo}
        type="video/mp4"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-2}
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgGradient="linear(to-t, rgba(0,0,0,0.30), rgba(158,0,70,0.16))"
        zIndex={-1}
        pointerEvents="none"
      />

      <VStack
        maxW={['60%', '50%']}
        h={'50%'}
        marginLeft={['6%', '10%']}
        alignItems={'flex-start'}
        gap={['spacingM.base', 'spacingL.base']}
        position="relative"
        zIndex={1}
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
