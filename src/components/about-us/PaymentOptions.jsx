import {
  Box,
  Heading,
  Highlight,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'

import { ImpactCard } from '../home/ImpactCard'

export const PaymentOptions = () => {
  return (
    <Stack
      maxW={'1440'}
      py={{ base: '32px', md: '40px' }}
      alignItems={'center'}
      spacing={{ base: '16px', md: '40px' }}
    >
      {/* Ayuda economica */}
      <Stack
        maxW={['328px', '768px', '1160px']}
        textAlign={'center'}
        spacing={'8px'}
      >
        <Heading
          as="h1"
          fontSize={['22px', 'h1.base', 'h1.lg', 'h1.xl']}
          color={'gray.800'}
        >
          Ayuda económica
        </Heading>
        <Text
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
        >
          En ADA ITW nos compormetemos con la igualdad de oportunidades y el
          empoderamiento femenino en la industria tecnológica
        </Text>
      </Stack>
      {/* Texto prestamo de honor */}
      <Box px={{ base: '40px', md: '70px' }} textAlign={'center'}>
        <Text
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
          fontWeight={'bold'}
        >
          Ofrecemos un Préstamo de Honor que permite abonar solo una parte de la
          carrera durante el curso.
        </Text>
      </Box>
      {/* Cards */}
      <Stack maxW={'100%'} alignItems={'center'}>
        <ImpactCard
          icon={'pepicons-print:face-smiling'}
          number={'+90%'}
          description={'Satisfacción al terminar la capacitación'}
        />
        <ImpactCard
          icon={'pepicons-print:handshake'}
          number={'+100'}
          description={'Empresas contratantes'}
        />
      </Stack>
      {/* Texto de aclaración sobre el pago diferido */}
      <Stack maxW={['328px', '768px', '1160px']} textAlign={'center'}>
        <Text
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
          fontWeight={'bold'}
        >
          El resto se prospone hasta conseguir empleo en tecnología
        </Text>
      </Stack>
      <Stack
        px={{ base: '16px', md: '16px', lg: '40px' }}
        // py={'16px'}
        alignItems={'center'}
        textAlign={'justify'}
        lineHeight={'40px'}
      >
        <Text
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
        >
          Por ejemplo, si optas por nuestro pago diferido del 75%, pagas sólo el
          25% durante el curso y el resto después de conseguir empleo en
          tecnología.
        </Text>
        <Text
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
          alignSelf={'start'}
        >
          Estas opción esta disponible para mujeres que:
        </Text>
        <UnorderedList
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
          styleType="'-   '"
          fontWeight={'bold'}
        >
          <ListItem>Carecen de acceso a la educación superior</ListItem>
          <ListItem>Tienen empleos precarios</ListItem>
          <ListItem>
            Están desempleadas o en situación de vulnerabilidad social
          </ListItem>
        </UnorderedList>
        <Text
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
        >
          <Highlight query="Préstamo de Honor" styles={{ fontWeight: 'bold' }}>
            La devolucion del Préstamo de Honor nos permite mantener este
            modelo, eliminando barreras financieras y brindando acceso a más
            mujeres a la educación tecnológica.
          </Highlight>
        </Text>
      </Stack>
    </Stack>
  )
}
