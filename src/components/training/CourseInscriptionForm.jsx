import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

// eslint-disable-next-line react/prop-types
export const CourseInscriptionForm = ({ subjectCourse }) => {
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const subject = `${subjectCourse} ${data.name}`

    // TODO no se cierra el form al hacer el envio

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
      // TODO no se muestra el toast al hacer el envio tampoco
      toast({
        title: 'Envío de formulario',
        description: 'El formulario se envió satisfactoriamente',
        status: 'success',
        duration: 1000,
        isClosable: true,
      })

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
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <input type="hidden" name="orgid" value="00D3i000000ui1H" />
      <input type="hidden" name="retURL" value="https://adaitw.org/" />
      <input id="subject" name="subject" value={subjectCourse} type="hidden" />

      <FormControl isRequired mb={4} px={'10px'}>
        <FormLabel htmlFor="name">Nombre y apellido</FormLabel>
        <Input
          w={'100%'}
          id="name"
          name="name"
          placeholder="Nombre y apellido"
          {...register('name', { required: true })}
          borderColor="gray.400"
          focusBorderColor="gray.600"
          _hover={{ borderColor: 'gray.600' }}
        />
        {errors.name && <Text color="red.500">Este campo es obligatorio</Text>}
      </FormControl>

      <FormControl isRequired mb={4} px={'10px'}>
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Input
          id="email"
          name="email"
          placeholder="E-mail"
          type="email"
          {...register('email', { required: true })}
          borderColor="gray.400"
          focusBorderColor="gray.600"
          _hover={{ borderColor: 'gray.600' }}
        />
        {errors.email && <Text color="red.500">Este campo es obligatorio</Text>}
      </FormControl>

      <FormControl isRequired mb={4} px={'10px'}>
        <FormLabel htmlFor="phone">Teléfono</FormLabel>
        <Input
          id="phone"
          name="phone"
          placeholder="Teléfono"
          {...register('phone', { required: true })}
          borderColor="gray.400"
          focusBorderColor="gray.600"
          _hover={{ borderColor: 'gray.600' }}
        />
        {errors.phone && <Text color="red.500">Este campo es obligatorio</Text>}
      </FormControl>

      <FormControl isRequired mb={4} px={'10px'}>
        <FormLabel htmlFor="00NVW000000MCXB">Nacionalidad</FormLabel>
        <Input
          id="00NVW000000MCXB"
          name="00NVW000000MCXB"
          placeholder="Nacionalidad"
          {...register('nationality', { required: true })}
          borderColor="gray.400"
          focusBorderColor="gray.600"
          _hover={{ borderColor: 'gray.600' }}
        />
        {errors.nationality && (
          <Text color="red.500">Este campo es obligatorio</Text>
        )}
      </FormControl>

      <Box display="flex" justifyContent="center" mt={6}>
        <Button
          type="submit"
          size={'md'}
          w={['100%', '166px', '200px']}
          mt={'16px'}
          bg="orange.400"
          _hover={{ bg: 'orange.800' }}
        >
          Enviar
        </Button>
      </Box>
    </form>
  )
}
