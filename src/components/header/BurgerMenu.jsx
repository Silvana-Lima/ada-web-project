import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { RxHamburgerMenu } from 'react-icons/rx'

import { EducationMenu } from './EducationMenu'
export const BurgerMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<RxHamburgerMenu />}
        variant="unstyled"
        border="none"
        boxShadow="none"
        color={'magenta.400'}
        size="lg"
      />
      <MenuList>
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
