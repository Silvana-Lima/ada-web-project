/* eslint-disable react/prop-types */
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

const Payment = ({ isCareer, handleBack}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')

  const [paymentOptions, setPaymentOptions] = useState([
    '1 cuota',
    '3 cuotas',
    '6 cuotas',
  ])

  const handlePaymentMethodChange = (e) => {
    const selectedMethod = e.target.value
    setSelectedPaymentMethod(selectedMethod)

    if (selectedMethod === 'Pago tradicional') {
      setPaymentOptions(['1 cuota', '3 cuotas', '6 cuotas'])
    } else if (
      selectedMethod === 'Diferido 25%' ||
      selectedMethod === 'Diferido 50%'
    ) {
      setPaymentOptions(['12 cuotas', '24 cuotas'])
    }
  }

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Image
          display={{ base: 'none', md: 'block' }}
          src={womanPay}
          alt="Persona trabajando"
          objectFit="cover"
        />
        <Image
          display={{ base: 'block', md: 'none' }}
          src={pay}
          alt="Persona trabajando"
          objectFit="cover"
        />
      </Box>

      <Text as="h4" fontSize="lg">
        Ada ITW ofrece ayudas económicas para que personas como tú puedan
        capacitarse en tecnología.
      </Text>

      <Text as="h4" fontSize="lg" color="#ff7d00">
        Conoce más sobre las modalidades de pago aquí
      </Text>

      <FormControl>
        <FormLabel>Selecciona método de pago</FormLabel>
        <Select onChange={handlePaymentMethodChange} borderColor="gray.400">
          <option value="">Selecciona</option>
          <option value="Pago tradicional">Pago tradicional</option>
          {isCareer && (
            <>
              <option value="Diferido 25%">Diferido 25%</option>
              <option value="Diferido 50%">Diferido 50%</option>
            </>
          )}
        </Select>
      </FormControl>

      {selectedPaymentMethod === 'Diferido 25%' && (
        <Text as="h4" fontSize="sm">
          Si optas por nuestro plan de pago diferido, solo pagas el 25% de la
          carrera mientras estudias y el resto lo abonas después de obtener un
          trabajo en tecnología.
        </Text>
      )}

      {selectedPaymentMethod === 'Diferido 50%' && (
        <Text as="h4" fontSize="sm">
          Si optas por nuestro plan de pago diferido, solo pagas el 50% de la
          carrera mientras estudias y el resto lo abonas después de obtener un
          trabajo en tecnología.
        </Text>
      )}

      <FormControl>
        <FormLabel>Cuotas</FormLabel>
        <Select borderColor="gray.400">
          {paymentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </FormControl>

      {selectedPaymentMethod === 'Diferido 25%' && <DeferredPayment />}
      {selectedPaymentMethod === 'Diferido 50%' && <DeferredPayment />}
      {selectedPaymentMethod === 'Pago tradicional' && (
        <HStack justifyContent="space-around" mt={4}>
          <Button variant="link" onClick={handleBack}>
            Ir atrás
          </Button>
          <Button type="submit">Enviar formulario</Button>
        </HStack>
      )}
    </>
  )
}

export default Payment
