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
import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link as NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { CoursesMenuBox } from './CoursesMenuBox'

// personalizado de menu item
const menuItemStyles = {
  _hover: { bg: 'none' },
  _focus: { bg: 'none' },
  _active: { bg: 'none' },
}

// se pasan props para el manejo del cierre del menu en el onClick del logo - en el componente header
export const BurgerMenu = ({ isOpen, onClose, onToggle }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(false)

  const handleSubMenu = () => {
    setActiveSubMenu(!activeSubMenu)
    if (!isOpen) {
      onToggle()
    }
  }

  const handleCloseMenu = () => {
    setActiveSubMenu(false)
    onClose()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // funcion para redireccionar a una seccion dentro de una page usando HashLink de router
  const handleToNetworkBuilder = () => {
    const yOffset = -100
    const element = document.getElementById('network-builder')
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<Icon as={isOpen ? IoClose : RxHamburgerMenu} boxSize="32px" />}
        variant="unstyled"
        border="none"
        boxShadow="none"
        color={'magenta.400'}
        size="xl"
        display="flex"
        justifyContent="flex-end"
        onClick={onToggle}
      />
      <MenuList
        w={{ base: '100vw', md: '45vw' }}
        h={'100vh'}
        pt={'40px'}
        px={'24px'}
        overflowX="hidden"
      >
        <NavLink to="/aboutUs">
          <MenuItem {...menuItemStyles} onClick={handleCloseMenu}>
            Sobre nosotros
          </MenuItem>
        </NavLink>

        {/* desplegable para ofertas educativas */}
        <Flex direction="column">
          <MenuItem
            justifyContent="space-between"
            alignItems="center"
            onClick={handleSubMenu}
            bg={activeSubMenu && 'purple.200'}
          >
            Ofertas educativas
            {activeSubMenu ? (
              <ChevronDownIcon color={'magenta.400'} fontSize={'25px'} />
            ) : (
              <ChevronRightIcon color={'magenta.400'} fontSize={'25px'} />
            )}
          </MenuItem>
          {/* Menu con carreras y cursos */}
          {activeSubMenu && <CoursesMenuBox onClose={onClose} />}
        </Flex>
        <HashLink
          to="/#network-builder"
          smooth
          scroll={handleToNetworkBuilder}
          onClick={handleCloseMenu}
        >
          <MenuItem>Alianzas</MenuItem>
        </HashLink>
        <MenuItem {...menuItemStyles}>Contrata talento</MenuItem>
        <Stack pt={'40px'} align={{ md: 'start' }}>
          <Button as={NavLink} to="/inscription" size={'md'} w={'100%'}>
            Inscríbete
          </Button>
        </Stack>
      </MenuList>
    </Menu>
  )
}
BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
}
