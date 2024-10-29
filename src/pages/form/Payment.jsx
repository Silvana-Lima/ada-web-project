import { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Image,
  Select,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react'
import womanPay from '../../assets/woman-pay.png'
import pay from '../../assets/pay.png'
import DeferredPayment from './DeferredPayment'
import { useForm } from 'react-hook-form'
import { useMultiStepFormContext } from '../../context/MultiStepFormContext'
import { MdArrowForwardIos } from 'react-icons/md'
import { RiArrowLeftLine } from 'react-icons/ri'

const Payment = ({ isCareer, handleNextStep, prevStep }) => {
  const { updateFormData, formData } = useMultiStepFormContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData })
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
  const [paymentOptions, setPaymentOptions] = useState([
    '1-cuotas',
    '3-cuotas',
    '6-cuotas',
  ])

  const handlePaymentMethodChange = (e) => {
    const selectedMethod = e.target.value
    setSelectedPaymentMethod(selectedMethod)

    if (selectedMethod === 'Tradicional') {
      setPaymentOptions(['1-cuota', '3-cuotas', '6-cuotas'])
    } else if (selectedMethod === 'PD 25%' || selectedMethod === 'PD 50%') {
      setPaymentOptions(['12-cuotas', '24-cuotas'])
    }
  }

  const onSubmit = (data) => {
    updateFormData(data)
    handleNextStep()
  }
  const handleSubmitDeferredPayment = (data) => {
    updateFormData(data)
    handleNextStep()
  }

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Image
          display={{ base: 'none', md: 'block' }}
          src={womanPay}
          alt="Persona trabajando"
        />
        <Image
          display={{ base: 'block', md: 'none' }}
          src={pay}
          alt="Persona trabajando"
        />
      </Box>
      <Text as="h4" fontSize="lg">
        Estas postulando a: {formData.career || formData.course}
      </Text>
      <Text as="h4" fontSize="lg">
        Ada ITW ofrece ayudas económicas para que personas como tú puedan
        capacitarse en tecnología.
      </Text>

      <Text as="h4" fontSize="lg" color="#ff7d00">
        Conoce más sobre las modalidades de pago aquí
      </Text>

      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.paymentMethod}>
          <FormLabel>Selecciona método de pago</FormLabel>
          <Select
            {...register('paymentMethod', {
              required: 'Selecciona un método de pago',
            })}
            onChange={handlePaymentMethodChange}
            borderColor="gray.400"
          >
            <option value="">Selecciona</option>
            <option value="Tradicional">Pago tradicional</option>
            {isCareer && (
              <>
                <option value="PD 25%">Diferido 25%</option>
                <option value="PD 50%">Diferido 50%</option>
              </>
            )}
          </Select>
          <Text color="red.500">{errors.paymentMethod?.message}</Text>
        </FormControl>

        {selectedPaymentMethod === 'PD 25%' && (
          <Text as="h4" fontSize="sm">
            Si optas por nuestro plan de pago diferido, solo pagas el 25% de la
            carrera mientras estudias y el resto lo abonas después de obtener un
            trabajo en tecnología.
          </Text>
        )}

        {selectedPaymentMethod === 'PD 50%' && (
          <Text as="h4" fontSize="sm">
            Si optas por nuestro plan de pago diferido, solo pagas el 50% de la
            carrera mientras estudias y el resto lo abonas después de obtener un
            trabajo en tecnología.
          </Text>
        )}

        <FormControl isInvalid={!!errors.installments}>
          <FormLabel>Cuotas</FormLabel>
          <Select
            {...register('installments', {
              required: 'Selecciona una opción de cuotas',
            })}
            borderColor="gray.400"
          >
            {paymentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Text color="red.500">{errors.installments?.message}</Text>
        </FormControl>

        {/* Mostrar el formulario de pago diferido según la selección */}
        {selectedPaymentMethod === 'PD 25%' && (
          <DeferredPayment
            handleBack={prevStep}
            onSubmit={handleSubmitDeferredPayment}
          />
        )}

        {selectedPaymentMethod === 'PD 50%' && (
          <DeferredPayment
            handleBack={prevStep}
            onSubmit={handleSubmitDeferredPayment}
          />
        )}
        {selectedPaymentMethod === 'PD 25%' && (
          <DeferredPayment onSubmit={handleSubmitDeferredPayment} />
        )}

        {selectedPaymentMethod === 'PD 50%' && (
          <DeferredPayment onSubmit={handleSubmitDeferredPayment} />
        )}

        {selectedPaymentMethod === 'Tradicional' && (
          <HStack justifyContent="space-around" mt={4}>
            <Button color={'magenta.400'} variant="link" onClick={prevStep}>
              <RiArrowLeftLine /> Ir atrás
            </Button>
            <Button type="submit" mt={4}>
              <HStack justifyContent="space-between" w="100%">
                <Text>Siguiente</Text>
                <MdArrowForwardIos />
              </HStack>
            </Button>
          </HStack>
        )}
      </Box>
    </>
  )
}

export default Payment
