import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdArrowForwardIos } from 'react-icons/md'

import bgForm from '../assets/bg-form.png'
import bgVectorForm from '../assets/bg-vector-form.png'
import formSended from '../assets/form-sended.png'
import pay from '../assets/pay.png'
import womanPay from '../assets/woman-pay.png'
import womanWorking from '../assets/woman-working.png'

export const InscriptionForm = () => {
  const [step, setStep] = useState(1)
  const [hasDisability, setHasDisability] = useState('')
  const [selectedCareer, setSelectedCareer] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [paymentOptions, setPaymentOptions] = useState([])
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

  const { handleSubmit } = useForm()

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleDisabilityChange = (value) => {
    setHasDisability(value)
  }

  const handleCareerChange = (e) => {
    setSelectedCareer(e.target.value)
    setSelectedCourse('')
    setSelectedPaymentMethod('')
    setPaymentOptions([])
  }

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value)
    setSelectedCareer('')
    setSelectedPaymentMethod('')
    setPaymentOptions([])
  }

  const handleFormSubmit = () => {
    setStep(5)
  }

  const handlePaymentMethodChange = (e) => {
    const selectedMethod = e.target.value
    setSelectedPaymentMethod(selectedMethod)
    let options = []

    // Argentina
    if (selectedCourse) {
      options =
        selectedMethod === 'Pago Tradicional'
          ? ['1 pago (25% off) por transf. bancaria', '3 pagos', '6 pagos']
          : []
    } else {
      switch (selectedMethod) {
        case 'Pago Tradicional':
          options = [
            '1 pago (10% descuento)',
            '3 pagos',
            '6 pagos',
            '9 pagos',
            '12 pagos',
          ]
          break
        case 'Diferido 25%':
          options = ['1 pago', '3 pagos', '6 pagos', '9 pagos']
          break
        case 'Diferido 50%':
          options = ['1 pago', '3 pagos', '6 pagos', '9 pagos']
          break
        default:
          options = []
      }
    }
    setPaymentOptions(options)
  }

  return (
    <Container maxW={'1440px'}>
      <Box
        as="form"
        onSubmit={handleSubmit(handleFormSubmit)}
        px={{ base: 4, md: 14 }}
        py={8}
        bg={{ base: 'gray.0', md: step > 1 ? `url(${bgForm})` : 'gray.0' }}
      >
        {step === 1 && (
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
            gap={6}
            p={4}
          >
            <GridItem>
              <Heading
                as={'h1'}
                fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.lg', 'h1.xl']}
              >
                Nos alegra que confíes en nosotros para capacitarte en
                Tecnología.
              </Heading>
              <Text
                fontSize={[
                  'largeTxt.base',
                  'largeTxt.base',
                  'largeTxt.lg',
                  'largeTxt.xl',
                ]}
                mb={['spacingL.xl', 'spacingL.xl', 'spacingL.xl', '']}
                mt={2}
              >
                Completa el siguiente formulario y reserva tu lugar. En Ada nos
                ocupamos de que las mujeres se capaciten y encuentren su lugar
                en el mundo IT.
              </Text>
              <Stack spacing={4}>
                <Text as="h4" fontSize="xl" fontWeight={'bold'}>
                  ¡Reserva tu lugar!
                </Text>
                <FormControl>
                  <Input placeholder="Nombre completo" borderColor="gray.400" />
                </FormControl>

                <FormControl>
                  <Input type="email" placeholder="Correo electrónico" borderColor="gray.400" />
                </FormControl>

                <FormControl>
                  <Input type="date" borderColor="gray.400" />
                </FormControl>

                <HStack>
                  <FormControl>
                    <Select placeholder="Código de país" borderColor="gray.400"></Select>
                  </FormControl>

                  <FormControl>
                    <Input type="tel" placeholder="Número de teléfono" borderColor="gray.400" />
                  </FormControl>
                </HStack>
                <Button onClick={handleNext} mt={4}>
                  <HStack justifyContent="space-between" w="100%">
                    <Text>Siguiente</Text>
                    <MdArrowForwardIos />
                  </HStack>
                </Button>
              </Stack>
            </GridItem>
            <GridItem>
              <Box
                display={{ base: 'none', lg: 'flex' }}
                justifyContent="center"
                alignItems="center"
                h="100%"
              >
                <Image
                  src={bgVectorForm}
                  alt="Imagen de fondo"
                  objectFit="cover"
                  maxHeight="90%"
                  maxWidth="90%"
                />
              </Box>
            </GridItem>
          </Grid>
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
                <HStack>
                  <Box
                    bg={step === 1 ? 'magenta.400' : 'gray.300'}
                    color="gray.0"
                    borderRadius="50%"
                    w={8}
                    h={8}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    1
                  </Box>
                  <Text
                    fontWeight={step >= 1 ? 'bold' : 'normal'}
                    color={step >= 1 ? 'gray.800' : 'gray.400'}
                    opacity={step > 1 ? 0.5 : 1}
                  >
                    Datos personales
                  </Text>
                </HStack>
                <HStack>
                  <Box
                    bg={step === 2 ? 'magenta.400' : 'gray.300'}
                    color="gray.0"
                    borderRadius="50%"
                    w={8}
                    h={8}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    2
                  </Box>
                  <Text
                    fontWeight={step >= 2 ? 'bold' : 'normal'}
                    color={step >= 2 ? 'gray.800' : 'gray.400'}
                    opacity={step > 2 ? 0.5 : 1}
                  >
                    Capacitación
                  </Text>
                </HStack>
                <HStack>
                  <Box
                    bg={step >= 3 ? 'magenta.400' : 'gray.300'}
                    color="gray.0"
                    borderRadius="50%"
                    w={8}
                    h={8}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    3
                  </Box>
                  <Text
                    fontWeight={step >= 3 ? 'bold' : 'normal'}
                    color={step >= 3 ? 'gray.800' : 'gray.400'}
                  >
                    Tipo de pago
                  </Text>
                </HStack>
              </HStack>

              {step === 2 && (
                <>
                  <Box
                    display={{ base: 'none', md: 'flex' }}
                    justifyContent="center"
                  >
                    <Image
                      src={womanWorking}
                      alt="Persona trabajando"
                      objectFit="cover"
                    />
                  </Box>
                  <FormControl>
                    <FormLabel>
                      ¿Cómo te identificas en término de género?
                    </FormLabel>
                    <RadioGroup onChange={handleDisabilityChange}>
                      <Stack direction="column" align="flex-start">
                        <Radio value="mujer-cis">Mujer Cis</Radio>
                        <Radio value="mujer-trans">Mujer Trans</Radio>
                        <Radio value="feminidad">Feminidad</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>

                  <FormControl>
                    <FormLabel>
                      En ADA nos interesa poder acompañarte de la mejor manera,
                      ¿Es usted una persona con discapacidad?
                    </FormLabel>
                    <RadioGroup onChange={handleDisabilityChange}>
                      <Stack direction="column" align="flex-start">
                        <Radio value="Sí">Sí</Radio>
                        <Radio value="No">No</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>

                  {hasDisability === 'Sí' && (
                    <FormControl mt={4}>
                      <FormLabel color="purple.600">
                        ¿Nos cuentas un poco más?
                      </FormLabel>
                      <Textarea placeholder="Escribe tus comentarios" />
                    </FormControl>
                  )}

                  <Heading
                    as={'h5'}
                    fontSize={['h5.base', 'h5.base', 'h5.base', 'h5.xl']}
                  >
                    ¿Qué te interesa aprender?
                  </Heading>

                  <FormControl>
                    <FormLabel>Carrera:</FormLabel>

                    <Select
                      placeholder="Lista de Carreras"
                      onChange={handleCareerChange}
                      value={selectedCareer}
                      isDisabled={selectedCourse !== ''}
                      borderColor="gray.400"
                    >
                      <option value="front">
                        Carrera en Desarrollo web front-end
                      </option>
                      {/* <option value="back">
                        Carrera en Desarrollo web back-end
                      </option> */}
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Curso:</FormLabel>

                    <Select
                      placeholder="Lista de Cursos"
                      onChange={handleCourseChange}
                      value={selectedCourse}
                      isDisabled={selectedCareer !== ''}
                      borderColor="gray.400"
                    >
                      <option value="ux-ui">
                        Programa Intensivo - Diseño UX/UI
                      </option>
                      <option value="qa">Programa QA Testing</option>
                      <option value="ia">
                        Programa IA Inteligencia Artificial
                      </option>
                    </Select>
                  </FormControl>

                  <Heading
                    as={'h5'}
                    fontSize={['h5.base', 'h5.base', 'h5.base', 'h5.xl']}
                  >
                    ¿Cuál es tu intención al entrar a estudiar a Ada ITW?
                  </Heading>

                  <FormControl>
                    <Select placeholder="Selecciona" borderColor="gray.400">
                      <option value="">
                        Cambiar de profesión y entrar en el sector tecnológico
                      </option>
                      <option value="">
                        Obtener un empleo en el área de tecnología
                      </option>
                      <option value="">
                        Mejorar mis habilidades actuales en tecnología
                      </option>
                      <option value="">
                        Ampliar mis conocimientos para emprender o innovar en el
                        área tecnológica
                      </option>
                    </Select>
                  </FormControl>

                  <FormLabel>
                    ¿Tienes conocimientos básicos en el uso de herramientas de
                    ofimática y manejo básico de una computadora (navegar por
                    Internet, enviar correos electrónicos, crear documentos)?
                  </FormLabel>

                  <FormControl>
                    <Select placeholder="Selecciona" borderColor="gray.400">
                      <option value="">Sí, tengo conocimientos básicos</option>
                      <option value="">
                        No, no tengo conocimientos básicos
                      </option>
                      <option value="">Estoy aprendiendo</option>
                    </Select>
                  </FormControl>

                  <HStack justifyContent="space-around" mt={4}>
                    <Button variant="link" onClick={handleBack}>
                      Ir atrás
                    </Button>
                    <Button
                      rightIcon={<MdArrowForwardIos />}
                      onClick={handleNext}
                    >
                      Siguiente
                    </Button>
                  </HStack>
                </>
              )}

              {step === 3 && (
                <>
                  <Text as="h4" fontSize="lg">
                    Estas postulando a:
                  </Text>

                  {selectedCareer && (
                    <Text
                      as="h4"
                      fontSize="xl"
                      fontWeight={'bold'}
                      color="magenta.400"
                    >
                      {selectedCareer === 'front'
                        ? 'Carrera en Desarrollo web front-end'
                        : 'Carrera en Desarrollo web back-end'}
                    </Text>
                  )}

                  {selectedCourse && (
                    <Text
                      as="h4"
                      fontSize="xl"
                      fontWeight={'bold'}
                      color="magenta.400"
                    >
                      {selectedCourse === 'ux-ui'
                        ? 'Programa Intensivo - Diseño UX/UI'
                        : selectedCourse === 'qa'
                          ? 'Programa QA Testing'
                          : 'Programa IA Inteligencia Artificial'}
                    </Text>
                  )}

                  <Text as="h4" fontSize="lg">
                    Importe a pagar:
                  </Text>

                  <Box display="flex" justifyContent="center">
                    <Image
                      display={{ base: 'none', md: 'block' }}
                      src={womanPay}
                      alt="Persona trabajando"
                      objectFit="cover"
                    />
                    <Image
                      display={{ base: 'block', md: 'none' }}
                      src={pay}
                      alt="Persona trabajando"
                      objectFit="cover"
                    />
                  </Box>

                  <Text as="h4" fontSize="lg">
                    Ada ITW ofrece ayudas económicas para que personas como tu
                    puedan capacitarse en tecnología.
                  </Text>

                  <Text as="h4" fontSize="lg" color="#ff7d00">
                    Conoce más sobre las modalidades de pago aquí
                  </Text>

                  <FormControl>
                    <FormLabel>Selecciona método de pago</FormLabel>
                    <Select onChange={handlePaymentMethodChange} borderColor="gray.400">
                      <option value="Selecciona">Selecciona</option>
                      <option value="Pago Tradicional">Pago Tradicional</option>
                      {!selectedCourse && (
                        <>
                          <option value="Diferido 25%">Diferido 25%</option>
                          <option value="Diferido 50%">Diferido 50%</option>
                        </>
                      )}
                    </Select>
                  </FormControl>

                  {selectedPaymentMethod === 'Diferido 25%' && (
                    <Text as="h4" fontSize="sm">
                      Si optas por nuestro plan de pago diferido, solo pagas el
                      75% de la carrera mientras estudias y el resto lo abonas
                      después de obtener un trabajo en tecnología.
                      {/* Con el pago diferido del 25%, abonarías el 75% del costo
                      durante el curso, en cuotas sin interés. El 25% restante
                      se paga al obtener un trabajo en IT. */}
                    </Text>
                  )}

                  {selectedPaymentMethod === 'Diferido 50%' && (
                    <Text as="h4" fontSize="sm">
                      Si optas por nuestro plan de pago diferido, solo pagas el
                      50% de la carrera mientras estudias y el resto lo abonas
                      después de obtener un trabajo en tecnología.
                      {/* Con el pago diferido del 50%, abonarías el 50% del costo
                      durante el curso, en cuotas sin interés. El 50% restante
                      se paga al obtener un trabajo en IT. */}
                    </Text>
                  )}

                  <FormControl>
                    <FormLabel>Cuotas</FormLabel>
                    <Select borderColor="gray.400">
                      {paymentOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Select>
                  </FormControl>

                  <HStack justifyContent="space-around" mt={4}>
                    <Button variant="link" onClick={handleBack}>
                      Ir atrás
                    </Button>
                    <Button
                      rightIcon={<MdArrowForwardIos />}
                      onClick={handleNext}
                    >
                      Siguiente
                    </Button>
                  </HStack>
                </>
              )}

              {step === 4 && (
                <>
                  <Text as="h4" fontSize="lg">
                    Estas postulando a
                  </Text>

                  {selectedCareer && (
                    <Text
                      as="h4"
                      fontSize="xl"
                      fontWeight={'bold'}
                      color="magenta.400"
                    >
                      {selectedCareer === 'front'
                        ? 'Carrera en Desarrollo web front-end'
                        : 'Carrera en Desarrollo web back-end'}
                    </Text>
                  )}

                  {selectedCourse && (
                    <Text
                      as="h4"
                      fontSize="xl"
                      fontWeight={'bold'}
                      color="magenta.400"
                    >
                      {selectedCourse === 'ux-ui'
                        ? 'Programa Intensivo - Diseño UX/UI'
                        : selectedCourse === 'qa'
                          ? 'Programa QA Testing'
                          : 'Programa IA Inteligencia Artificial'}
                    </Text>
                  )}

                  <Text as="h4" fontSize="lg">
                    Importe a pagar:{}
                  </Text>
                  <Text as="h4" fontSize="lg">
                    Modalidad de pago:{}
                  </Text>

                  <Box display="flex" justifyContent="center">
                    <Image
                      display={{ base: 'none', md: 'block' }}
                      src={womanPay}
                      alt="Persona trabajando"
                      objectFit="cover"
                    />
                    <Image
                      display={{ base: 'block', md: 'none' }}
                      src={pay}
                      alt="Persona trabajando"
                      objectFit="cover"
                    />
                  </Box>
                  {(selectedPaymentMethod === 'Diferido 25%' ||
                    selectedPaymentMethod === 'Diferido 50%') && (
                    <>
                      <Text as="h4" fontSize="lg">
                        Para poder solicitar el Pago Diferido deberás completar
                        los siguientes campos.
                      </Text>

                      <Text as="h4" fontSize="lg" color="#ff7d00">
                        ¿Por qué pedimos esta información?
                      </Text>

                      <FormControl>
                        <FormLabel>¿Quién está a cargo de tu hogar?</FormLabel>
                        <RadioGroup>
                          <Stack direction="column" mb={4}>
                            <Radio value="Yo">Yo</Radio>
                            <Radio value="Padres">Padres</Radio>
                            <Radio value="Pareja">Pareja/concubino</Radio>
                            <Radio value="Otro">Otros familiares</Radio>
                          </Stack>
                        </RadioGroup>
                      </FormControl>

                      <FormControl>
                        <FormLabel>¿Cuál es tu situación laboral?</FormLabel>
                        <RadioGroup>
                          <Stack spacing={2} mb={4}>
                            <Radio value="full_time_white">
                              Trabajo en blanco a tiempo completo
                            </Radio>
                            <Radio value="part_time_white">
                              Trabajo en blanco a medio tiempo
                            </Radio>
                            <Radio value="freelance">Trabajo freelance</Radio>
                            <Radio value="hourly_work">Trabajo por horas</Radio>
                            <Radio value="full_time_black">
                              Trabajo en negro a tiempo completo
                            </Radio>
                            <Radio value="part_time_black">
                              Trabajo en negro a medio tiempo
                            </Radio>
                            <Radio value="unemployed">
                              Actualmente no tengo trabajo
                            </Radio>
                            <Radio value="multiple_jobs">
                              Tengo más de un trabajo
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </FormControl>

                      <FormControl>
                        <FormLabel>
                          ¿Qué te motiva a pedir un porcentaje del pago
                          diferido?*
                        </FormLabel>
                        <Text mb={2} as="h4" fontSize="sm">
                          Te pedimos completar esta pregunta con el mayor
                          detalle posible para conocer a profundidad tu
                          situación actual. Mientras más información nos
                          brindes, mejor.
                        </Text>
                        <Textarea placeholder="Escribe tus motivos aquí..." borderColor="gray.400" />
                      </FormControl>
                    </>
                  )}

                  <HStack justifyContent="space-around" mt={4}>
                    <Button variant="link" onClick={handleBack}>
                      Ir atrás
                    </Button>

                    <Button type="submit">Enviar formulario</Button>
                  </HStack>
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
