/* eslint-disable react/prop-types */
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

const Step3 = ({ control, handleBack, handleSubmit }) => {
  return (
    <>
      <Heading as={'h5'} fontSize={['h5.base', 'h5.base', 'h5.base', 'h5.xl']}>
        Habilidades Digitales Básicas
      </Heading>
      <Text>
        Selecciona las habilidades digitales que ya posees y en las que
        necesitas mejorar.
      </Text>

      <FormControl>
        <FormLabel>¿Sabes manejar un computador?</FormLabel>
        <Controller
          name="basicSkills"
          control={control}
          render={({ field }) => (
            <Stack direction="column" align="flex-start">
              <Switch {...field} value="Si" isChecked={field.value === 'Si'}>
                Sí
              </Switch>
              <Switch {...field} value="No" isChecked={field.value === 'No'}>
                No
              </Switch>
            </Stack>
          )}
        />
      </FormControl>

      <Stack direction="row" mt={4} justifyContent="space-between">
        <Button onClick={handleBack}>Atrás</Button>
        <Button type="submit" onClick={handleSubmit}>
          Enviar
        </Button>
      </Stack>
    </>
  )
}

export default Step3
