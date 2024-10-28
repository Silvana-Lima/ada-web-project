import { useForm } from 'react-hook-form'
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  FormErrorMessage,
} from '@chakra-ui/react'
import { RiArrowLeftLine } from 'react-icons/ri'

const DeferredPayment = ({
  formData,
  updateFormData,
  handleNextStep,
  handleBack,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData })

  const onSubmit = (data) => {
    updateFormData({ ...formData, data })
    handleNextStep()
    console.log('avanzo4 deferred', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text as="h4" fontSize="lg">
        Para poder solicitar el Pago Diferido deberás completar los siguientes
        campos.
      </Text>

      <Text as="h4" fontSize="lg" color="#ff7d00">
        ¿Por qué pedimos esta información?
      </Text>

      <FormControl isInvalid={errors.householdHead}>
        <FormLabel>¿Quién está a cargo de tu hogar?</FormLabel>
        <RadioGroup>
          <Stack direction="column" mb={4}>
            <Radio
              value="Yo"
              {...register('householdHead', { required: 'Campo requerido' })}
            >
              Yo
            </Radio>
            <Radio value="Padres" {...register('householdHead')}>
              Padres
            </Radio>
            <Radio value="Pareja" {...register('householdHead')}>
              Pareja/concubino
            </Radio>
            <Radio value="Otro" {...register('householdHead')}>
              Otros familiares
            </Radio>
          </Stack>
        </RadioGroup>
        <FormErrorMessage>{errors.householdHead?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.workStatus}>
        <FormLabel>¿Cuál es tu situación laboral?</FormLabel>
        <RadioGroup>
          <Stack spacing={2} mb={4}>
            <Radio
              value="full_time_white"
              {...register('workStatus', { required: 'Campo requerido' })}
            >
              Trabajo en blanco a tiempo completo
            </Radio>
            <Radio value="part_time_white" {...register('workStatus')}>
              Trabajo en blanco a medio tiempo
            </Radio>
            <Radio value="freelance" {...register('workStatus')}>
              Trabajo freelance
            </Radio>
            <Radio value="hourly_work" {...register('workStatus')}>
              Trabajo por horas
            </Radio>
            <Radio value="full_time_black" {...register('workStatus')}>
              Trabajo en negro a tiempo completo
            </Radio>
            <Radio value="part_time_black" {...register('workStatus')}>
              Trabajo en negro a medio tiempo
            </Radio>
            <Radio value="unemployed" {...register('workStatus')}>
              Actualmente no tengo trabajo
            </Radio>
            <Radio value="multiple_jobs" {...register('workStatus')}>
              Tengo más de un trabajo
            </Radio>
          </Stack>
        </RadioGroup>
        <FormErrorMessage>{errors.workStatus?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.motivation}>
        <FormLabel>
          ¿Qué te motiva a pedir un porcentaje del pago diferido?
        </FormLabel>
        <Textarea
          placeholder="Escribe tus motivos aquí..."
          {...register('motivation', {
            required: 'Por favor, describe tu motivación',
          })}
          borderColor="gray.400"
        />
        <FormErrorMessage>{errors.motivation?.message}</FormErrorMessage>
      </FormControl>

      <HStack justifyContent="space-around" mt={4}>
        <Button color={'magenta.400'} variant="link" onClick={handleBack}>
          <RiArrowLeftLine /> Ir atrás
        </Button>
        <Button type="submit">Siguiente</Button>
      </HStack>
    </form>
  )
}

export default DeferredPayment
