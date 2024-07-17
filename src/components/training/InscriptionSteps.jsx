import {
  Box,
  Container,
  Heading,
  Stack,
  Step,
  StepDescription,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepTitle,
  useBreakpointValue,
  useSteps,
} from '@chakra-ui/react'
import { BsChatSquare } from 'react-icons/bs'

const steps = [
  {
    title: 'Primero',
    description: 'Completar el formulario de pre-inscripción en la web',
  },
  { title: 'Segundo', description: 'Realizar test' },
  { title: 'Tercero', description: 'Firmar acuerdo de pago' },
]

export const InscriptionSteps = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false })
  const { activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <Container
      maxW={'100%'}
      py={{ base: '32px', md: '32px', lg: '80px' }}
      px={{ base: '32px', md: '32px', lg: '' }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      centerContent
    >
      <Stack
        spacing={8}
        w={['100%', '400px', '700px', '900px']}
        alignItems={isMobile && 'center'}
      >
        <Heading
          fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
          color={'gray.800'}
        >
          Proceso de la inscripción
        </Heading>
        <Stepper
          index={activeStep}
          orientation={isMobile ? 'vertical' : 'horizontal'}
          height={isMobile ? '400px' : 'auto'}
          gap="5"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <Stack
                h={isMobile && '100px'}
                direction={isMobile ? 'row' : 'column'}
                alignItems={!isMobile && 'center'}
                textAlign={'center'}
              >
                <Box h={'50px'}>
                  <StepIndicator
                    sx={{
                      border: 'none',
                    }}
                  >
                    {/* no me toma el color theme ❌ */}
                    <BsChatSquare color="red" fontSize={'50px'} />
                  </StepIndicator>
                </Box>

                <Box flexShrink="0">
                  <StepTitle fontWeight={'bold'} fontSize={'20px'}>
                    {step.title}
                  </StepTitle>
                  <StepDescription fontSize={'16px'} w="200px">
                    {step.description}
                  </StepDescription>
                </Box>
              </Stack>

              <StepSeparator
                sx={{
                  borderColor: 'magenta.400',
                  borderWidth: '1px',
                  height: '20px',
                  borderStyle: 'solid',
                }}
              />
            </Step>
          ))}
        </Stepper>
      </Stack>
    </Container>
  )
}
