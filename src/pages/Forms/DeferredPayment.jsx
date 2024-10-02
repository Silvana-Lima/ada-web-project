/* eslint-disable react/prop-types */
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
} from '@chakra-ui/react'

const DeferredPayment = ({ handleBack }) => {
  return (
    <>
      <Text as="h4" fontSize="lg">
        Para poder solicitar el Pago Diferido deberás completar los siguientes
        campos.
      </Text>

      <Text as="h4" fontSize="lg" color="#ff7d00">
        ¿Por qué pedimos esta información?
      </Text>

      <FormControl>
        <FormLabel>¿Quién está a cargo de tu hogar?</FormLabel>
        <RadioGroup>
          <Stack direction="column" mb={4}>
            <Radio value="Yo">Yo</Radio>
            <Radio value="Padres">Padres</Radio>
            <Radio value="Pareja">Pareja/concubino</Radio>
            <Radio value="Otro">Otros familiares</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>¿Cuál es tu situación laboral?</FormLabel>
        <RadioGroup>
          <Stack spacing={2} mb={4}>
            <Radio value="full_time_white">
              Trabajo en blanco a tiempo completo
            </Radio>
            <Radio value="part_time_white">
              Trabajo en blanco a medio tiempo
            </Radio>
            <Radio value="freelance">Trabajo freelance</Radio>
            <Radio value="hourly_work">Trabajo por horas</Radio>
            <Radio value="full_time_black">
              Trabajo en negro a tiempo completo
            </Radio>
            <Radio value="part_time_black">
              Trabajo en negro a medio tiempo
            </Radio>
            <Radio value="unemployed">Actualmente no tengo trabajo</Radio>
            <Radio value="multiple_jobs">Tengo más de un trabajo</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>
          ¿Qué te motiva a pedir un porcentaje del pago diferido?*
        </FormLabel>
        <Text mb={2} as="h4" fontSize="sm">
          Te pedimos completar esta pregunta con el mayor detalle posible para
          conocer a profundidad tu situación actual. Mientras más información
          nos brindes, mejor.
        </Text>
        <Textarea
          placeholder="Escribe tus motivos aquí..."
          borderColor="gray.400"
        />
      </FormControl>

      <HStack justifyContent="space-around" mt={4}>
        <Button variant="link" onClick={handleBack}>
          Ir atrás
        </Button>

        <Button type="submit">Enviar formulario</Button>
      </HStack>
    </>
  )
}

export default DeferredPayment
