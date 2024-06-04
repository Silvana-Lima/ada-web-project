import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Portal,
  useDisclosure,
} from '@chakra-ui/react'

import { CoursesMenuBox } from './CoursesMenuBox'

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
          {/* items del menu */}
          <Box position="absolute" left="60%" w="30%" maxW="max-content">
            <CoursesMenuBox />
          </Box>
        </MenuList>
      </Portal>
    </Menu>
  )
}
