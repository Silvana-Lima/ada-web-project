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
import PropTypes from 'prop-types'

import { steps } from '../../../utils/constants'
import StepDescription from './StepDescription'

export const LearningPath = ({ type }) => {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  // Filtra  tipo
  const filterSteps = steps.filter(
    (step) => step.type === type || step.id === 1
  )

  // Brochure según el tipo

  // TODO los path no son los actuales - modificar cuando esten diseñados y activos

  // const brochureLink =
  //   type === 'frontend'
  //     ? 'https://adaitw.org/wp-content/uploads/2022/01/Ada-_-Desarrollo-Frontend.pdf'
  //     : 'https://adaitw.org/wp-content/uploads/2023/02/Brochure_backend.pdf'

  return (
    <Container id="learning-path" maxW={'1440px'} bg="gray.200">
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
        >
          {filterSteps.map((step, index) => (
            <Step key={step.id}>
              <StepIndicator
                bg="#FBEDF3"
                border={'solid 1px'}
                borderColor={'#F3BFD5'}
                boxSize="40px"
              >
                <StepStatus />
              </StepIndicator>

              {/* Accordion */}
              <Accordion defaultIndex={index === 0 ? [0] : []} allowToggle>
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
                          textLink={
                            step.id === 1
                              ? '¿Ya tenes conocimiento en Javascript? Comunícate con nosotros acá.'
                              : ''
                          }
                          id={step.id}
                        />
                      </AccordionPanel>

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
          as={Link}
          // TODO no hay programas aprobados - se comenta hasta que esten diseñados y activos
          // href={brochureLink}
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

export default LearningPath
LearningPath.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number,
}
