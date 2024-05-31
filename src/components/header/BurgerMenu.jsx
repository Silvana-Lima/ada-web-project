import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

import { EducationMenu } from './EducationMenu'
export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Menu isOpen={isOpen} onClose={handleMenuToggle} onOpen={handleMenuToggle}>
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
      />
      <MenuList w={'100vw'} h={'100vh'} pt={'40px'} px={'24px'}>
        <MenuItem>Sobre nosotros</MenuItem>
        <MenuItem p={0}>
          <EducationMenu hideChevronIcon={true} />
        </MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Contrata talento</MenuItem>
      </MenuList>
    </Menu>
  )
}
