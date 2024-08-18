/* eslint-disable react/prop-types */
// Step2.js
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { MdArrowForwardIos } from 'react-icons/md'

export const Step2 = ({
  handleNext,
  handleBack,
  handleCareerChange,
  handleCourseChange,
  handleDisabilityChange,
  selectedCareer,
  selectedCourse,
  hasDisability,
  register,
}) => (
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
            bg="magenta.400"
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
          <Text fontWeight={'bold'} color="gray.800">
            Datos personales
          </Text>
        </HStack>
        <HStack>
          <Box
            bg="magenta.400"
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
          <Text fontWeight={'bold'} color="gray.800">
            Capacitación
          </Text>
        </HStack>
        <HStack>
          <Box
            bg="magenta.400"
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
          <Text fontWeight={'bold'} color="gray.800">
            Tipo de pago
          </Text>
        </HStack>
      </HStack>
      <Heading as={'h5'} fontSize={['h5.base', 'h5.base', 'h5.base', 'h5.xl']}>
        ¿Cómo te identificas en término de género?
      </Heading>
      <FormControl>
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
          En ADA nos interesa poder acompañarte de la mejor manera, ¿Es usted
          una persona con discapacidad?
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
          <FormLabel color="purple.600">¿Nos cuentas un poco más?</FormLabel>
          <Textarea
            placeholder="Escribe tus comentarios"
            borderColor="gray.400"
            {...register('disabilityDetails')}
          />
        </FormControl>
      )}
      <Heading as={'h5'} fontSize={['h5.base', 'h5.base', 'h5.base', 'h5.xl']}>
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
          {...register('career')}
        >
          <option value="front">Carrera en Desarrollo web front-end</option>
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
          {...register('course')}
        >
          <option value="ux-ui">Programa Intensivo - Diseño UX/UI</option>
          <option value="qa">Programa QA Testing</option>
          <option value="ia">Programa IA Inteligencia Artificial</option>
        </Select>
      </FormControl>
      <Heading as={'h5'} fontSize={['h5.base', 'h5.base', 'h5.base', 'h5.xl']}>
        ¿Cuál es tu intención al entrar a estudiar a Ada ITW?
      </Heading>
      <FormControl>
        <Select
          placeholder="Selecciona"
          borderColor="gray.400"
          {...register('intention')}
        >
          <option value="">
            Cambiar de profesión y entrar en el sector tecnológico
          </option>
          <option value="">Obtener un empleo en el área de tecnología</option>
          <option value="">
            Mejorar mis habilidades actuales en tecnología
          </option>
          <option value="">
            Ampliar mis conocimientos para emprender o innovar en el área
            tecnológica
          </option>
        </Select>
      </FormControl>
      <FormLabel>
        ¿Tienes conocimientos básicos en el uso de herramientas de ofimática y
        manejo básico de una computadora (navegación en internet, correo
        electrónico, etc.)?
      </FormLabel>
      <FormControl>
        <RadioGroup {...register('basicComputerSkills')}>
          <Stack direction="column">
            <Radio value="Sí">Sí</Radio>
            <Radio value="No">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <HStack justifyContent="space-between" mt={4}>
        <Button variant="link" onClick={handleBack}>
          Ir atrás
        </Button>
        <Button onClick={handleNext} rightIcon={<MdArrowForwardIos />}>
          Siguiente
        </Button>
      </HStack>
    </Stack>
  </Box>
)
