/* eslint-disable react/prop-types */
import { Image } from '@chakra-ui/react'
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
  Select,
  Stack,
  Text,
} from '@chakra-ui/react'
import { MdArrowForwardIos } from 'react-icons/md'

import bgVectorForm from '../../assets/bg-vector-form.png'
import { countries } from '../../utils/countries'
import { useForm } from 'react-hook-form'
import { validationRules } from '../../utils/validation'

const PersonalData = ({ handleNext }) => {
  const {
    register,
    formState: { errors },
  } = useForm()
  return (
    <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={6} p={4}>
      <GridItem>
        <Heading
          as={'h1'}
          fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.lg', 'h1.xl']}
        >
          Nos alegra que confíes en nosotros para capacitarte en Tecnología.
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
          Completa el siguiente formulario para tu pre-inscripción. En Ada nos
          ocupamos de que las mujeres se capaciten y encuentren su lugar en el
          mundo IT.
        </Text>
        <Stack spacing={4}>
          <Text as="h4" fontSize="xl" fontWeight={'bold'}>
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

          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Correo electrónico</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Correo electrónico"
              borderColor="gray.400"
              {...register('email', validationRules.email)}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

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

          <HStack>
            <FormControl isInvalid={errors.countryCode}>
              <FormLabel htmlFor="countryCode">Código de país</FormLabel>
              <Select
                id="countryCode"
                placeholder="Código de país"
                borderColor="gray.400"
                // {...register('countryCode', validationRules.countryCode)}
              >
                {countries.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{errors.countryCode?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.phoneNumber}>
              <FormLabel htmlFor="phoneNumber">Número de teléfono</FormLabel>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Número de teléfono"
                borderColor="gray.400"
                {...register('phoneNumber', validationRules.phoneNumber)}
              />
              <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
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
  )
}

export default PersonalData
