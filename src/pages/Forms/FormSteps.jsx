import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import PersonalData from './PersonalData'
import bgForm from '../../assets/bg-form.png'
import InscriptionData from './InscriptionData'
import Payment from './Payment'
import formSended from '../../assets/form-sended.png'
import { useFormContext } from '../../context/FormContext'

const FormSteps = () => {
  const {
    myonSubmit,
    step,
    // onSubmit,
    handleSubmit,
    } = useFormContext();
  return (
    <Container maxW={'1440px'}>
      <Box
        as="form"
        onSubmit={handleSubmit(myonSubmit)}
        px={{ base: 4, md: 14 }}
        py={8}
        bg={{ base: 'gray.0', md: step > 1 ? `url(${bgForm})` : 'gray.0' }}
      >
        {step === 1 && <PersonalData />}

        {step > 1 && (
          <Box
            p={4}
            maxWidth="600px"
            mx="auto"
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            boxShadow="md"
            bg="gray.0"
          >
            <Stack spacing={4}>
              <HStack
                justifyContent="space-between"
                px={4}
                mb={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {[
                  'Datos Personales',
                  'Información Académica',
                  'Opciones de Pago',
                ].map((stepLabel, index) => (
                  <HStack key={index}>
                    <Box
                      bg={step === index + 1 ? 'magenta.400' : 'gray.300'}
                      color="gray.0"
                      borderRadius="50%"
                      w={8}
                      h={8}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {index + 1}
                    </Box>
                    <Text
                      fontWeight={step >= index + 1 ? 'bold' : 'normal'}
                      color={step >= index + 1 ? 'magenta.400' : 'gray.500'}
                    >
                      {stepLabel}
                    </Text>
                  </HStack>
                ))}
              </HStack>

              {step === 2 && (
                <InscriptionData
                 
                />
              )}

              {step === 3 && (
                <Payment
                 
                />
              )}
              {step === 4 && (
                <Stack id="formSended" textAlign="center" spacing={4}>
                  <Image
                    src={formSended}
                    alt="Imagen de éxito"
                    mx="auto"
                    maxW={['100%', '100%', '300px']}
                  />
                  <Heading>¡Formulario enviado!</Heading>
                  <Text>
                    En breve nos pondremos en contacto contigo para continuar
                    con el proceso de inscripción.
                  </Text>
                  <Button onClick={() => (window.location.href = '/')}>
                    Volver al inicio
                  </Button>
                </Stack>
              )}
            </Stack>
          </Box>
        )}
      </Box>
    </Container>
  )
}

export default FormSteps
