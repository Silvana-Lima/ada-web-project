import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link as NavLink } from 'react-router-dom'

import { CoursesMenuBox } from './CoursesMenuBox'

// personalizado de menu item
const menuItemStyles = {
  _hover: { bg: 'none' },
  _focus: { bg: 'none' },
  _active: { bg: 'none' },
}

export const BurgerMenuCopyDefaultFalse = () => {
  const [activeItem, setActiveItem] = useState(false)

  const handleActiveItem = () => {
    setActiveItem(!activeItem)
  }

  return (
    <Menu defaultIsOpen={false} closeOnSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={
              <Icon as={isOpen ? IoClose : RxHamburgerMenu} boxSize="32px" />
            }
            variant="unstyled"
            border="none"
            boxShadow="none"
            color={'magenta.400'}
            size="xl"
            display="flex"
            justifyContent="flex-end"
          />
          <MenuList
            w={{ base: '100vw', md: '45vw' }}
            h={'100vh'}
            pt={'40px'}
            px={'24px'}
            overflowX="hidden"
          >
            <NavLink to="/aboutUs">
              <MenuItem {...menuItemStyles}>Sobre nosotros</MenuItem>
            </NavLink>

            {/* desplegable para ofertas educativas */}
            <Flex direction="column">
              <MenuItem
                {...menuItemStyles}
                justifyContent="space-between"
                alignItems="center"
                onClick={handleActiveItem}
                bg={activeItem && 'purple.200'}
              >
                Ofertas educativas
                {!activeItem ? (
                  <ChevronRightIcon color={'magenta.400'} fontSize={'25px'} />
                ) : (
                  <ChevronDownIcon color={'magenta.400'} fontSize={'25px'} />
                )}
              </MenuItem>
              {/* Menu con cursos */}
              {activeItem && <CoursesMenuBox />}
            </Flex>

            <MenuItem {...menuItemStyles}>Blog</MenuItem>
            <MenuItem {...menuItemStyles}>Contrata talento</MenuItem>
            <Stack pt={'40px'} align={{ md: 'start' }}>
              <Button size={'md'} w={'100%'}>
                Inscríbete
              </Button>
            </Stack>
          </MenuList>
        </>
      )}
    </Menu>
  )
}
