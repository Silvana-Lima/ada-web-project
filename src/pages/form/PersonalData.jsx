/* eslint-disable react/prop-types */

import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  // Select,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react'
import { MdArrowForwardIos } from 'react-icons/md'
import bgVectorForm from '../../assets/bg-vector-form.png'
// import { countries } from '../../utils/countries'
import { validationRules } from '../../utils/validation'
import { useMultiStepFormContext } from '../../context/MultiStepFormContext'

const PersonalData = ({ handleNextStep }) => {
  const { updateFormData, formData } = useMultiStepFormContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData })

  const onSubmit = (data) => {
    updateFormData(data)
    handleNextStep()
    console.log('avanzo', data, formData)
  }

  return (
    <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={6} p={4}>
      <GridItem>
        <Heading fontSize={['h1.base', 'h1.lg', 'h1.xl']}>
          Nos alegra que confíes en nosotros para capacitarte en Tecnología.
        </Heading>
        <Text fontSize={['largeTxt.base', 'largeTxt.xl']} mt={2}>
          Completa el siguiente formulario para tu pre-inscripción. En Ada nos
          ocupamos de que las mujeres se capaciten y encuentren su lugar en el
          mundo IT.
        </Text>
        <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
          <Text as="h4" fontSize="xl" fontWeight="bold">
            ¡Reserva tu lugar!
          </Text>
          <FormControl isInvalid={errors.firstName}>
            <FormLabel htmlFor="firstName">Nombre</FormLabel>
            <Input
              id="firstName"
              placeholder="Nombre"
              borderColor="gray.400"
              {...register('firstName', validationRules.firstName)}
            />
            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.lastName}>
            <FormLabel htmlFor="lastName">Apellido</FormLabel>
            <Input
              id="lastName"
              placeholder="Apellido"
              borderColor="gray.400"
              {...register('lastName', validationRules.lastName)}
            />
            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.Email}>
            <FormLabel htmlFor="Email">Correo electrónico</FormLabel>
            <Input
              id="Email"
              type="email"
              placeholder="Correo electrónico"
              borderColor="gray.400"
              {...register('Email', validationRules.Email)}
            />
            <FormErrorMessage>{errors.Email?.message}</FormErrorMessage>
          </FormControl>
          <HStack>
            <FormControl isInvalid={errors.date}>
              <FormLabel htmlFor="date">Fecha de nacimiento</FormLabel>
              <Input
                id="date"
                type="date"
                borderColor="gray.400"
                {...register('date', validationRules.date)}
              />
              <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.country}>
              <FormLabel htmlFor="country">País de residencia</FormLabel>
              <Input
                id="country"
                type="text"
                placeholder="País de residencia"
                borderColor="gray.400"
                {...register('country', validationRules.country)}
              />
              <FormErrorMessage>{errors.country?.message}</FormErrorMessage>
            </FormControl>
          </HStack>
          <HStack>
            <FormControl isInvalid={errors.Phone}>
              <FormLabel htmlFor="Phone">Número de teléfono</FormLabel>
              <Input
                id="Phone"
                type="tel"
                placeholder="Número de teléfono"
                borderColor="gray.400"
                {...register('Phone', validationRules.Phone)}
              />
              <FormErrorMessage>{errors.Phone?.message}</FormErrorMessage>
            </FormControl>
          </HStack>

          <Button type="submit" mt={4}>
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
  )
}

export default PersonalData
