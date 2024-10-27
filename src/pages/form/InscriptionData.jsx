import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  Image,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Select,
  Text,
} from '@chakra-ui/react'
import womanWorking from '../../assets/woman-working.png'
import { MdArrowForwardIos } from 'react-icons/md'
import { useMultiStepFormContext } from '../../context/MultiStepFormContext'

const InscriptionData = ({
  handleNextStep,
  prevStep,
  setIsCareer,
  isCareer,
  selectedCareer,
  selectedCourse,
}) => {
  const { updateFormData, formData } = useMultiStepFormContext()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  })

  const selectedOption = watch('selection')

  useEffect(() => {
    if (selectedOption === 'career') {
      setIsCareer(true)
    } else {
      setIsCareer(false)
    }
  }, [selectedOption, setIsCareer])

  const onSubmit = (data) => {
    updateFormData(data)
    handleNextStep()
    console.log('avanzo2', data)
  }

  return (
    <>
      <Box display={{ base: 'none', md: 'flex' }} justifyContent="center">
        <Image src={womanWorking} alt="Persona trabajando" objectFit="cover" />
      </Box>
      

      <Heading as={'h5'} fontSize={['h5.base', 'h5.base', 'h5.base', 'h5.xl']}>
        ¿Qué te interesa aprender?
      </Heading>

      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.selection}>
          <FormLabel>Selecciona una opción:</FormLabel>
          <Select
            placeholder="Selecciona Carrera o Curso"
            {...register('selection', { required: 'Selecciona una opción' })}
          >
            <option value="career">Carrera</option>
            <option value="course">Curso</option>
          </Select>
          <FormErrorMessage>{errors.selection?.message}</FormErrorMessage>
        </FormControl>
        {!isCareer && (
          <FormControl isInvalid={!!errors.course}>
            <FormLabel>Curso:</FormLabel>
            <Select
              id="course"
              placeholder="Lista de Cursos"
              {...register('course', { required: 'Selecciona un curso' })}
              defaultValue={selectedCourse}
            >
              <option value="ux-ui">Programa Intensivo - Diseño UX/UI</option>
              <option value="qa">Programa QA Testing</option>
              <option value="ia">Programa IA Inteligencia Artificial</option>
            </Select>
            <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
          </FormControl>
        )}
        {isCareer && (
          <FormControl isInvalid={!!errors.career}>
            <FormLabel>Carrera:</FormLabel>
            <Select
              id="career"
              placeholder="Lista de Carreras"
              {...register('career', { required: 'Selecciona una carrera' })}
              defaultValue={selectedCareer}
            >
              <option value="front">Carrera en Desarrollo web front-end</option>
              <option value="back">Carrera en Desarrollo web back-end</option>
            </Select>
            <FormErrorMessage>{errors.career?.message}</FormErrorMessage>
          </FormControl>
        )}

        <FormLabel>
          ¿Tienes conocimientos básicos en el uso de herramientas de ofimática y
          manejo básico de una computadora (navegar por Internet, enviar correos
          electrónicos, crear documentos)?
        </FormLabel>
        <FormControl isInvalid={!!errors.basicKnowledge}>
          <FormLabel>Conocimientos básicos de ofimática:</FormLabel>
          <Select
            placeholder="Selecciona"
            {...register('basicKnowledge', {
              required: 'Este campo es obligatorio',
            })}
          >
            <option value="SI">Sí, tengo conocimientos básicos</option>
            <option value="NO">No, no tengo conocimientos básicos</option>
            <option value="APRENDIENDO">Estoy aprendiendo</option>
          </Select>
          <FormErrorMessage>{errors.basicKnowledge?.message}</FormErrorMessage>
        </FormControl>
        <HStack justifyContent="space-around" mt={4}>
          <Button variant="link" onClick={prevStep}>
            Ir atrás
          </Button>
          <Button type="submit" mt={4}>
            <HStack justifyContent="space-between" w="100%">
              <Text>Siguiente</Text>
              <MdArrowForwardIos />
            </HStack>
          </Button>
        </HStack>
      </Box>
    </>
  )
}

export default InscriptionData
