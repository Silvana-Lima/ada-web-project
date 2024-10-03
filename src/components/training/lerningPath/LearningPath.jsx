import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Link,
  Stack,
  Step,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
  useSteps,
} from '@chakra-ui/react'

import { steps } from '../../../utils/constants'
import StepDescription from './StepDescription'

export const LearningPath = () => {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  return (
    <Container maxW={'1440px'} bg="gray.200">
      {/* Título y descripción */}
      <Stack
        px={{ base: '32px', md: '32px', lg: '140px' }}
        py={{ base: '40px', md: '40px', lg: '80px' }}
        spacing={['16px', '26px']}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Heading
          as="h1"
          fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
          color={'gray.800'}
          textAlign={'center'}
        >
          Conoce tu ruta de aprendizaje
        </Heading>
        <Text
          textAlign={'center'}
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
        >
          La duración de la carrera es una estimación que supone hacer un módulo
          a la vez, de manera consecutiva hasta finalizar la ruta de
          aprendizaje.
        </Text>
      </Stack>

      {/* Stepper */}
      <Stack
        px={{ base: '32px', md: '32px', lg: '140px' }}
        py={{ base: '40px', md: '40px', lg: '80px' }}
      >
        <Stepper
          // TODO no logro modificarle el color del borde por defecto (azul) al primer step - al activeStep
          index={activeStep}
          color={'magenta.400'}
          orientation="vertical"
          size="lg"
          // si le agrego height al stepper (para darle espaciado sin desplegar) se superpone el accordion en otros componentes - solucion actual agregar un divider
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator
                bg="#FBEDF3"
                border={'solid 1px'}
                borderColor={'#F3BFD5'}
                boxSize="40px"
              >
                <StepStatus />
              </StepIndicator>

              {/* Accordion */}

              <Accordion allowToggle>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton p={0}>
                        <Box flex="1" textAlign="left">
                          <StepTitle
                            fontSize={['h2.base', 'h1.base', 'h1.lg']}
                            lineHeight="shorter"
                          >
                            {step.title}
                          </StepTitle>
                        </Box>
                      </AccordionButton>

                      {/* AccordionPanel */}
                      <AccordionPanel pb={4}>
                        <StepDescription
                          color={'black'}
                          details={step.details}
                          id={step.id}
                        />
                      </AccordionPanel>

                      {/* le agrego este divider transparente para poder agregar el espacio si el accordion no esta desplegado */}
                      {/* TODO habria que ver si existe otra manera de hacerlo */}
                      {!isExpanded && (
                        <Divider
                          orientation="vertical"
                          borderColor="transparent"
                          height="100px"
                        />
                      )}
                    </>
                  )}
                </AccordionItem>
              </Accordion>

              {/* Separador */}
              <StepSeparator
                _vertical={{
                  backgroundColor: '#FBEDF3',
                }}
              />
            </Step>
          ))}
        </Stepper>
        <Button
          // TODO ver de cambiar el href por el nuevo brochure - hay que alojar los nuevos pdf's en el mismo lugar que tienen este🤔
          as={Link}
          href="https://adaitw.org/wp-content/uploads/2022/01/Ada-_-Desarrollo-Frontend.pdf"
          isExternal
          w={'max-content'}
          variant={'buttonPrimary'}
          textDecoration={'none'}
          size={'lg'}
          alignSelf={'center'}
          _hover={{ textDecoration: 'none' }}
          _visited={{ textDecoration: 'none' }}
        >
          Descargá el contenido completo
        </Button>
      </Stack>
    </Container>
  )
}
