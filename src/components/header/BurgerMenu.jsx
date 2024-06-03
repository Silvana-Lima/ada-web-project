import { ChevronRightIcon } from '@chakra-ui/icons'
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
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

// personalizado de menu item
const menuItemStyles = {
  _hover: { bg: 'none' },
  _focus: { bg: 'none' },
  _active: { bg: 'none' },
}

// import { EducationMenu } from './EducationMenu'
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
        <MenuItem {...menuItemStyles}>Sobre nosotros</MenuItem>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton
              _expanded={{
                bg: 'purple.200',
                color: 'magenta.400',
                borderBottom: '2px ',
                borderColor: 'magenta.400',
              }}
            >
              <Box textAlign="left">Ofertas educativas</Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Box>
                <Text fontWeight={'bold'} textAlign="left">
                  Carreras
                </Text>
                <MenuItem icon={<ChevronRightIcon color={'magenta.400'} />}>
                  Desarrollo web front-end
                </MenuItem>
                <MenuItem icon={<ChevronRightIcon color={'magenta.400'} />}>
                  Desarrollo web back-end
                </MenuItem>
                <Text fontWeight={'bold'} textAlign="left">
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
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <MenuItem>Blog</MenuItem>
        <MenuItem pb={'40px'}>Contrata talento</MenuItem>
        <Button size={'md'} w={['100%', '382px']}>
          Inscríbete
        </Button>
      </MenuList>
    </Menu>
  )
}
