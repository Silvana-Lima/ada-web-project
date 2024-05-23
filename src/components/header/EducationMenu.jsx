import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
export const EducationMenu = ({ hideChevronIcon }) => {
  return (
    <Menu>
      <MenuButton maxW={'max-content'} px={'8px'} py={'10px'}>
        Oferta educativa {!hideChevronIcon && <ChevronDownIcon pl={'4px'} />}
      </MenuButton>
      <Portal>
        <MenuList p={'24px'}>
          <Text fontWeight={'bold'}>Carreras</Text>
          <MenuItem icon={<ChevronRightIcon />}>
            Desarrollo web front-end
          </MenuItem>
          <MenuItem icon={<ChevronRightIcon />}>
            Desarrollo web back-end
          </MenuItem>
          <Text fontWeight={'bold'}>Cursos</Text>
          <MenuItem icon={<ChevronRightIcon />}>Diseño UX/UI</MenuItem>
          <MenuItem icon={<ChevronRightIcon />}>
            Introducción al desarrollo web front-end
          </MenuItem>
          <MenuItem icon={<ChevronRightIcon />}>Analista QA</MenuItem>
          <MenuItem icon={<ChevronRightIcon />}>Programación en Pyton</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  )
}
