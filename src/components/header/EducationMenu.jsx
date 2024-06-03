import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from '@chakra-ui/icons'
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
export const EducationMenu = ({ hideChevronIcon }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Menu>
      <MenuButton
        maxW={'max-content'}
        px={'8px'}
        py={'10px'}
        onClick={onToggle}
        color={isOpen && 'magenta.400'}
      >
        Oferta educativa{' '}
        {!hideChevronIcon && (
          <Box as="span" pl="4px">
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Box>
        )}
      </MenuButton>
      <Portal>
        <MenuList
          p={'24px'}
          w="100vw"
          h="100vh"
          display="flex"
          flexDirection={'column'}
          zIndex="1000"
          position={'relative'}
        >
          <Box position="absolute" left="60%" w="25%" maxW="max-content">
            <Text fontWeight={'bold'}>Carreras</Text>
            <MenuItem icon={<ChevronRightIcon color={'magenta.400'} />}>
              Desarrollo web front-end
            </MenuItem>
            <MenuItem icon={<ChevronRightIcon color={'magenta.400'} />}>
              Desarrollo web back-end
            </MenuItem>
            <Text fontWeight={'bold'}>Cursos</Text>
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
        </MenuList>
      </Portal>
    </Menu>
  )
}
