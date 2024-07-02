import {
  Box,
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
    <Container maxW={'1440px'}>
      <Stack
        px={{ base: '32px', md: '32px', lg: '140px' }}
        py={{ base: '40px', md: '40px', lg: '80px' }}
        spacing={['16px', '26px']}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {/* Ayuda economica */}
        <Stack
          maxW={['328px', '768px', '1160px']}
          textAlign={['justify', 'center']}
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
        <Box
          maxW={['296px', '1161px']}
          // px={{ base: '40px', md: '70px' }}
          textAlign={['justify', 'center']}
        >
          <Text
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
            fontWeight={'bold'}
          >
            Ofrecemos un Préstamo de Honor que permite abonar solo una parte de
            la carrera durante el curso.
          </Text>
        </Box>
        {/* Cards */}
        <Stack
          maxW={'100%'}
          alignItems={'center'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <ImpactCard
            icon={'pepicons-print:face-smiling'}
            number={'75%'}
            description={
              'Nuestro préstamo de honor llega a cubrir hasta un 75 %.'
            }
          />
          <ImpactCard
            icon={'pepicons-print:handshake'}
            description={
              'El porcentaje diferido se calcula según el valor actual de la formación al asegurar el trabajo.'
            }
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
          maxW={['296px', '1161px']}
          px={{ base: '16px', md: '16px', lg: '40px' }}
          alignItems={'center'}
          textAlign={'justify'}
        >
          <Text
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
          >
            Por ejemplo, si optas por nuestro pago diferido del 75%, pagas sólo
            el 25% durante el curso y el resto después de conseguir empleo en
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
            py={'16px'}
          >
            <Highlight
              query="Préstamo de Honor"
              styles={{ fontWeight: 'bold' }}
            >
              La devolucion del Préstamo de Honor nos permite mantener este
              modelo, eliminando barreras financieras y brindando acceso a más
              mujeres a la educación tecnológica.
            </Highlight>
          </Text>
        </Stack>
      </Stack>
    </Container>
  )
}
