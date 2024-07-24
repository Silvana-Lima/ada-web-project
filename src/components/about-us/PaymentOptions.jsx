import {
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'

import { ImpactCard } from '../home/ImpactCard'

export const PaymentOptions = () => {
  return (
    <Container maxW={'100%'} px={[0, 5, 5, 0]}>
      {/* Ayuda economica */}
      <Container
        id="payment-options"
        py={{ base: '20px', md: '40px', lg: '80px' }}
        maxW={['328px', '768px', '920px']}
        textAlign={'center'}
        spacing={['8px', '32px']}
      >
        <Heading
          as="h1"
          fontSize={['22px', 'h1.base', 'h1.lg', 'h1.xl']}
          color={'gray.800'}
          mb={['18px', '32px']}
        >
          Ayuda económica
        </Heading>
        <Text
          fontSize={[
            'midTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
          color={'gray.600'}
        >
          En ADA ITW nos comprometemos con la igualdad de oportunidades y el
          empoderamiento femenino en la industria tecnológica
        </Text>
      </Container>
      {/* Texto prestamo de honor */}
      <Container
        py={{ base: '20px', md: '40px', lg: '80px' }}
        display={'flex'}
        maxW={['328px', '768px', '920px']}
        flexDirection={['column', 'row']}
        alignItems={'center'}
        gap={'20px'}
      >
        <Heading
          fontSize={['largeTxt.base', 'largeTxt.base', 'largeTxt.lg', 'h2.xl']}
          fontFamily={'klavikaBold'}
          color={'gray.800'}
          textAlign={['center', 'left']}
          maxW={['100%', '432px']}
        >
          Ofrecemos un Préstamo de Honor que permite abonar solo una parte de la
          carrera durante el curso.
        </Heading>
        <ImpactCard
          w={['320px', '346px']}
          h={['177px', '193px']}
          icon={'pepicons-print:face-smiling'}
          number={'75%'}
          description={
            'Nuestro préstamo de honor llega a cubrir hasta un 75 %.'
          }
          bg={'gray.200'}
        />
      </Container>

      <Container
        py={{ base: '0px', md: '40px', lg: '80px' }}
        maxW={['328px', '768px', '920px']}
        display={'flex'}
        flexDirection={['column', 'row']}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={'20px'}
      >
        <ImpactCard
          w={['320px', '346px']}
          h={['177px', '193px']}
          bg={'gray.0'}
          icon={'pepicons-print:handshake'}
          description={
            'El porcentaje diferido se calcula según el valor actual de la formación al asegurar el trabajo.'
          }
        />
        <Heading
          fontSize={['largeTxt.base', 'largeTxt.base', 'largeTxt.lg', 'h2.xl']}
          fontFamily={'klavikaBold'}
          color={'gray.800'}
          fontWeight={'bold'}
          textAlign={['center', 'left']}
          maxW={['', '432px']}
        >
          El resto se pospone hasta conseguir empleo en tecnología
        </Heading>
      </Container>
      {/* Texto de aclaración sobre el pago diferido */}
      <Container
        maxW={['328px', '768px', '920px']}
        py={{ base: '20px', md: '40px', lg: '80px' }}
        px={{ base: '16px', md: '16px', lg: '40px' }}
        textAlign={['center', 'left']}
        display={'flex'}
        flexDirection={'column'}
        gap={'20px'}
      >
        <Text
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
        >
          Por ejemplo,
          <Text fontFamily={'klavikaBold'} display={'inline'}>
            {' '}
            si optas por nuestro pago diferido del 75%, pagas sólo el 25%
            durante el curso y el resto después de conseguir empleo en
            tecnología.
          </Text>
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
          fontFamily={'klavikaBold'}
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
          <Text>
            La devolucion del
            <Text display={'inline'} fontFamily={'klavikaBold'}>
              {' '}
              Préstamo de Honor{' '}
            </Text>
            nos permite mantener este modelo, eliminando barreras financieras y
            brindando acceso a más mujeres a la educación tecnológica.
          </Text>
        </Text>
      </Container>
    </Container>
  )
}
