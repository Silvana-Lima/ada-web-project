import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, MenuItem, Text } from '@chakra-ui/react'

export const CoursesMenuBox = () => {
  return (
    <Box>
      <Text fontWeight={'bold'} textAlign={'start'}>
        Carreras
      </Text>
      <MenuItem icon={<ChevronRightIcon color={'magenta.400'} />}>
        Desarrollo web front-end
      </MenuItem>
      <MenuItem icon={<ChevronRightIcon color={'magenta.400'} />}>
        Desarrollo web back-end
      </MenuItem>
      <Text fontWeight={'bold'} textAlign={'start'}>
        Cursos
      </Text>
      <MenuItem icon={<ChevronRightIcon color={'magenta.400'} />}>
        Diseño UX/UI
      </MenuItem>
      <MenuItem icon={<ChevronRightIcon color={'magenta.400'} />}>
        Introducción al desarrollo web front-end
      </MenuItem>
      <MenuItem icon={<ChevronRightIcon color={'magenta.400'} />}>
        Analista QA
      </MenuItem>
      <MenuItem icon={<ChevronRightIcon color={'magenta.400'} />}>
        Programación en Pyton
      </MenuItem>
    </Box>
  )
}
