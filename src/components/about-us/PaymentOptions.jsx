import {
  Container,
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
    <Container maxW={'1440px'} py={{ base: '48px', md: '48px', lg: '80px' }}>
      {/* Ayuda economica */}
      <Stack
        px={{ base: '16px', md: '16px', lg: '40px' }}
        py={'15px'}
        spacing={['24px', '40px', '50px', '80px']}
        justifyContent={'center'}
        alignItems={'center'}
        bg="gray.0"
      >
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
            maxW={'290px'}
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
          >
            En ADA ITW, nos comprometemos con la igualdad de oportunidades y el
            empoderamiento femenino en la industria tecnológica.
          </Text>
        </Stack>
      </Stack>
      {/* Texto prestamo de honor */}
      <Stack py={'16px'} alignItems={'center'} textAlign={'center'}>
        <Text
          maxW={'256px'}
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
      </Stack>
      {/* Cards */}
      <Stack>
        <ImpactCard
          icon={'pepicons-print:face-smiling'}
          number={'75%'}
          description={'Nuestro préstamo de honor llega a cubrir un 75%'}
        />
        <ImpactCard
          icon={'pepicons-print:handshake'}
          number={''}
          description={
            'El porcentaje diferido se calcula según el valor actual de la fromación al asegurar el trabajo'
          }
        />
      </Stack>
      <Stack
        px={{ base: '16px', md: '16px', lg: '40px' }}
        py={'16px'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <Text
          maxW={'256px'}
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
        py={'16px'}
        alignItems={'center'}
        textAlign={'justify'}
      >
        <Text
          maxW={'270px'}
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
          maxW={'270px'}
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
        >
          Estas opción esta disponible para mujeres que:
        </Text>
        <UnorderedList styleType="'-  '" fontWeight={'bold'} maxW={'270px'}>
          <ListItem>Carecen de acceso a la educación superior</ListItem>
          <ListItem>Tienen empleos precarios</ListItem>
          <ListItem>
            Están desempleadas o en situación de vulnerabilidad social
          </ListItem>
        </UnorderedList>
        <Text
          maxW={'270px'}
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
    </Container>
  )
}
