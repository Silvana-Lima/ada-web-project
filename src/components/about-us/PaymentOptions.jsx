import {
  Box,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import { Icon as IconifyIcon } from '@iconify/react'

export const PaymentOptions = () => {
  const theme = useTheme()
  return (
    <Container maxW={'100%'} px={'20px'} py={'60px'}>
      <Container
        maxW={'100%'}
        px={'10px'}
        py={'60px'}
        border={`2.4px solid`}
        borderColor={'magenta.400'}
        borderRadius={'8px'}
        position={'relative'}
      >
        {/* Icono centrado en el borde superior */}
        <Box
          position={'absolute'}
          top={'-21px'}
          left={'50%'}
          transform={'translateX(-50%)'}
          bg={'#FFBFDA'}
          border={'2px solid'}
          borderColor={'magenta.400'}
          color={'magenta.400'}
          p={'10px'}
          borderRadius={'full'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <IconifyIcon
            icon={'pepicons-print:dollar'}
            style={{
              // calcula el tamaño final de la fuente sumando el tamaño fijo de theme + un valor variable basado en el 2% del ancho de la ventana (2vw).
              fontSize: `calc(${theme.fontSizes.h2.base} + 2vw)`,
              color: '#cd0055',
            }}
          />
        </Box>

        <Container
          id="payment-options"
          py={{ base: '20px', md: '40px', lg: '80px' }}
          maxW={['328px', '768px', '920px']}
          textAlign={'start'}
          spacing={['8px', '32px']}
        >
          <Heading
            as="h1"
            textAlign={'center'}
            fontSize={['22px', 'h1.base', 'h1.lg', 'h1.xl']}
            color={'magenta.400'}
            mb={['18px', '32px']}
          >
            Opciones de financiamiento
          </Heading>
          <Stack gap={'16px'}>
            {/* descripcion */}
            <Box px={'20px'}>
              <Text
                fontSize={[
                  'midTxt.base',
                  'largeTxt.base',
                  'largeTxt.lg',
                  'largeTxt.xl',
                ]}
                color={'gray.600'}
                textAlign={'justify'}
              >
                En ADA ITW nos comprometemos con la igualdad de oportunidades y
                el empoderamiento femenino en la industria tecnológica.
              </Text>
              <br />
              <Text
                fontSize={[
                  'midTxt.base',
                  'largeTxt.base',
                  'largeTxt.lg',
                  'largeTxt.xl',
                ]}
                color={'gray.600'}
                fontWeight={'bold'}
                textAlign={'justify'}
              >
                Ofrecemos un Préstamo de Honor que permite abonar solo una parte
                de la carrera durante el curso.
              </Text>
            </Box>
            {/* box iconos */}
            <VStack px={'16px'} py={'16px'}>
              <HStack spacing="8px" py={'6px'} alignItems="start">
                <Box flex="0 0 20%">
                  <IconifyIcon
                    icon={'pepicons-print:handshake'}
                    fontSize={'50px'}
                    style={{ color: '#cd0055' }}
                  />
                </Box>
                <Box flex="1">
                  <Heading as="h4" size="md">
                    Máximo del 50%
                  </Heading>
                  <Text
                    fontSize={[
                      'midTxt.base',
                      'largeTxt.base',
                      'largeTxt.lg',
                      'largeTxt.xl',
                    ]}
                    color={'gray.600'}
                    textAlign={'justify'}
                  >
                    Nuestro préstamo de honor llega a cubrir hasta un 50% del
                    valor total de la capacitación.
                  </Text>
                </Box>
              </HStack>
              <HStack spacing="8px" pt={'4px'} alignItems="start">
                <Box flex="0 0 20%">
                  <IconifyIcon
                    icon={'ph:suitcase-duotone'}
                    fontSize={'50px'}
                    style={{ color: '#cd0055' }}
                  />
                </Box>
                <Box flex="1">
                  <Heading as="h4" size="md">
                    El resto lo pagas después
                  </Heading>
                  <Text
                    fontSize={[
                      'midTxt.base',
                      'largeTxt.base',
                      'largeTxt.lg',
                      'largeTxt.xl',
                    ]}
                    color={'gray.600'}
                    textAlign={'justify'}
                  >
                    Una vez que encuentres empleo en tecnología deberás abonar
                    el resto. Éste se calculará en función del valor de la
                    formación en ese momento.
                  </Text>
                </Box>
              </HStack>
            </VStack>
            {/* Texto de aclaración sobre el pago diferido */}
            <Container
              maxW={['328px', '768px', '920px']}
              px={'10px'}
              textAlign={['center', 'left']}
              display={'flex'}
              flexDirection={'column'}
              gap={'20px'}
            >
              <Text
                fontFamily={'klavikaBold'}
                fontSize={[
                  'largeTxt.base',
                  'largeTxt.base',
                  'largeTxt.lg',
                  'largeTxt.xl',
                ]}
                as="mark"
                maxW={'max-content'}
              >
                Ejemplo:
              </Text>
              <Text
                fontSize={[
                  'largeTxt.base',
                  'largeTxt.base',
                  'largeTxt.lg',
                  'largeTxt.xl',
                ]}
                textAlign={'justify'}
              >
                Al elegir el Préstamo de Honor del 50%, abonas el 50% durante el
                curso y el resto cuando consigas empleo en tecnología, al costo
                actual de la formación en ese momento.
              </Text>
              <Text
                fontSize={[
                  'largeTxt.base',
                  'largeTxt.base',
                  'largeTxt.lg',
                  'largeTxt.xl',
                ]}
                textAlign={'justify'}
              >
                Este porcentaje restante se convierte en una oportunidad de
                Préstamo de Honor para futuras alumnas, generando así una cadena
                de apoyo. La devolución de este porcentaje diferido es crucial
                para nosotros, ya que nos permite mantener esta modalidad de
                pago para futuras alumnas, eliminando barreras financieras y
                brindando acceso a más mujeres a la educación tecnológica.
              </Text>
              <Text
                fontSize={[
                  'largeTxt.base',
                  'largeTxt.base',
                  'largeTxt.lg',
                  'largeTxt.xl',
                ]}
                textAlign={'justify'}
              >
                Este préstamo solo está disponible para mujeres sin acceso a
                educación superior, con empleo precario, desempleadas o en
                situación de vulnerabilidad social.
              </Text>
            </Container>
          </Stack>
        </Container>
      </Container>
    </Container>
  )
}
