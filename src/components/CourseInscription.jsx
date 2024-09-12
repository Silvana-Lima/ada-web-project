import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

// eslint-disable-next-line react/prop-types
export const CourseInscription = ({ subjectCourse }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const subject = `${subjectCourse} ${data.name}`

    const formData = new URLSearchParams({
      ...data,
      subject,
      orgid: '00D3i000000ui1H',
      retURL: 'https://adaitw.org/',
    })

    try {
      const response = await fetch(
        'https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00D3i000000ui1H',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        }
      )

      if (response.ok) {
        // Redirigir si el envío fue exitoso
        window.location.href = 'https://adaitw.org/'
      } else {
        console.error('Error en el envío del formulario')
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="orgid" value="00D3i000000ui1H" />
      <input type="hidden" name="retURL" value="https://adaitw.org/" />
      <input id="subject" name="subject" value={subjectCourse} type="hidden" />

      <Stack></Stack>
      <FormControl isRequired mb={4}>
        <FormLabel htmlFor="name">Nombre y apellido</FormLabel>
        <Input
          id="name"
          name="name"
          placeholder="Nombre y apellido"
          {...register('name', { required: true })}
        />
        {errors.name && <Text color="red.500">Este campo es obligatorio</Text>}
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Input
          id="email"
          name="email"
          placeholder="E-mail"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && <Text color="red.500">Este campo es obligatorio</Text>}
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel htmlFor="phone">Teléfono</FormLabel>
        <Input
          id="phone"
          name="phone"
          placeholder="Teléfono"
          {...register('phone', { required: true })}
        />
        {errors.phone && <Text color="red.500">Este campo es obligatorio</Text>}
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel htmlFor="00NVW000000MCXB">Nacionalidad</FormLabel>
        <Input
          id="00NVW000000MCXB"
          name="00NVW000000MCXB"
          placeholder="Nacionalidad"
          {...register('nationality', { required: true })}
        />
        {errors.nationality && (
          <Text color="red.500">Este campo es obligatorio</Text>
        )}
      </FormControl>

      <Box display="flex" justifyContent="center" mt={6}>
        <Button
          type="submit"
          bg="#ef7e29"
          color="white"
          borderRadius="20px"
          px={8}
        >
          Enviar
        </Button>
      </Box>
    </form>
  )
}
