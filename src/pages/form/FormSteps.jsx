import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import PersonalData from './PersonalData'
import bgForm from '../../assets/bg-form.png'
import { useForm } from 'react-hook-form'
import InscriptionData from './InscriptionData'
import Payment from './Payment'
import formSended from '../../assets/form-sended.png'
import { useMultiStepFormContext } from '../../context/MultiStepFormContext'
import { Link } from 'react-router-dom'

const FormSteps = () => {
  const toast = useToast()
  const [isCareer, setIsCareer] = useState(true)
  const [step, setStep] = useState(1)
  const { formData, updateFormData } = useMultiStepFormContext()
  const {
    register,
    formState: { errors },
    trigger,
    watch,
    reset,
  } = useForm({
    defaultValues: formData,
  })

  useEffect(() => {
    reset(formData)
  }, [formData, reset])

  const selectedCareer = watch('career')
  const selectedCourse = watch('course')
  const selectedPaymentMethod = watch('paymentMethod')

  const onSubmit = async () => {
    try {
      const response = await fetch('https://eocjk4asea3vads.m.pipedream.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        updateFormData({})
      }
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText)
      }
      setStep(5)
      toast({
        title: 'Formulario enviado con éxito',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      const errorMessage = error.message
      console.log(errorMessage)
      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  const prevStep = () => setStep(step - 1)

  const nextStep = async () => {
    const result = await trigger()
    if (result) {
      if (!errors.selection) {
        setStep(step + 1)
      }
    }
  }

  const handleNextStep = (data) => {
    updateFormData(data)
    nextStep()
  }

  return (
    <Container maxW={'1440px'}>
      <Box
        px={{ base: 4, md: 14 }}
        py={8}
        bg={{ base: 'gray.0', md: step > 1 ? `url(${bgForm})` : 'gray.0' }}
      >
        {step === 1 && (
          <PersonalData handleNextStep={handleNextStep} register={register} />
        )}

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
                  prevStep={prevStep}
                  handleNextStep={handleNextStep}
                  register={register}
                  selectedCareer={selectedCareer}
                  selectedCourse={selectedCourse}
                  setIsCareer={setIsCareer}
                  isCareer={isCareer}
                />
              )}

              {step === 3 && (
                <Payment
                  prevStep={prevStep}
                  handleNextStep={handleNextStep}
                  isCareer={isCareer}
                  selectedPaymentMethod={selectedPaymentMethod}
                  register={register}
                />
              )}
              {step === 4 && (
                <>
                  <Image
                    src={formSended}
                    alt="Imagen de éxito"
                    mx="auto"
                    maxW={['100%', '100%', '300px']}
                  />
                  <Text as="h4" fontSize="lg">
                    Estas postulando a: {formData.career || formData.course}
                  </Text>
                  <Text as="h4" fontSize="lg">
                    Estas seleccionando el método de pago :{' '}
                    {formData.paymentMethod}
                  </Text>
                  <Text as="h4" fontSize="lg">
                    En {formData.installments}
                  </Text>
                  <Button onClick={() => onSubmit()}>Enviar Formulario</Button>
                </>
              )}

              {step === 5 && (
                <Stack id="formSended" textAlign="center" spacing={4}>
                  <Image
                    src={formSended}
                    alt="Imagen de éxito"
                    mx="auto"
                    maxW={['100%', '100%', '300px']}
                  />
                  <Text as="h4" fontSize="lg">
                    Haz postulado a: {formData.career || formData.course}
                  </Text>
                  <Text as="h4" fontSize="lg">
                    Haz seleccionado el método de pago :{formData.paymentMethod}
                  </Text>
                  <Text as="h4" fontSize="lg">
                    Haz en : {formData.installments}
                  </Text>
                  <Heading>¡Formulario enviado!</Heading>
                  <Text>
                    En breve nos pondremos en contacto contigo para continuar
                    con el proceso de inscripción.
                  </Text>
                  <Button as={Link} to={'/'}>
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
