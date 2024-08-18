import {
  Button,
  FormControl,
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

// eslint-disable-next-line react/prop-types
export const Step1 = ({ handleNext, register }) => (
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
        Completa el siguiente formulario y reserva tu lugar. En Ada nos ocupamos
        de que las mujeres se capaciten y encuentren su lugar en el mundo IT.
      </Text>
      <Stack spacing={4}>
        <Text as="h4" fontSize="xl" fontWeight={'bold'}>
          ¡Reserva tu lugar!
        </Text>
        <FormControl>
          <Input
            placeholder="Nombre completo"
            borderColor="gray.400"
            {...register('fullName', { required: true })}
          />
        </FormControl>
        <FormControl>
          <Input
            type="email"
            placeholder="Correo electrónico"
            borderColor="gray.400"
            {...register('email', { required: true })}
          />
        </FormControl>
        <FormControl>
          <Input
            type="date"
            borderColor="gray.400"
            {...register('birthdate', { required: true })}
          />
        </FormControl>
        <HStack>
          <FormControl>
            <Select
              placeholder="Código de país"
              borderColor="gray.400"
              {...register('countryCode')}
            />
          </FormControl>
          <FormControl>
            <Input
              type="tel"
              placeholder="Número de teléfono"
              borderColor="gray.400"
              {...register('phone', { required: true })}
            />
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
    <GridItem>{/* Aquí va la imagen de fondo */}</GridItem>
  </Grid>
)
