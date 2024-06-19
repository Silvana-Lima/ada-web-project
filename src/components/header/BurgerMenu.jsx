import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
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
      <MenuList
        w={'100vw'}
        h={'100vh'}
        pt={'40px'}
        px={'24px'}
        overflowX="hidden"
      >
        <NavLink to="/aboutUs">
          <MenuItem {...menuItemStyles}>Sobre nosotros</MenuItem>
        </NavLink>

        {/* desplegable para ofertas educativas */}
        <Accordion allowToggle={false} defaultIndex={[0]}>
          <AccordionItem w={'max-content'}>
            <AccordionButton
              _expanded={{
                bg: 'purple.200',
                color: 'magenta.400',
                borderBottom: '2px ',
                borderColor: 'magenta.400',
                padding: '12px 24px',
                width: ['312px', '382px'],
              }}
            >
              <Box textAlign="left">Ofertas educativas</Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <CoursesMenuBox />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <MenuItem>Blog</MenuItem>
        <MenuItem pb={'40px'}>Contrata talento</MenuItem>
        <Stack align={{ md: 'start' }}>
          <Button size={'md'} w={['100%', '382px']}>
            Inscríbete
          </Button>
        </Stack>
      </MenuList>
    </Menu>
  )
}
