import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  MenuItem,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const menuItemHoverStyle = {
  color: 'magenta.400',
  bg: 'none',
}

export const CoursesMenuBox = () => {
  return (
    <Accordion allowMultiple>
      {/* Carreras */}
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton bg={isExpanded && 'purple.100'}>
                <Box as="span" flex="1" textAlign="left">
                  Carreras
                </Box>
                {!isExpanded ? (
                  <ChevronRightIcon color={'magenta.400'} fontSize="20px" />
                ) : (
                  <ChevronDownIcon color={'magenta.400'} fontSize="20px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MenuItem
                as={Link}
                href="https://adaitw.org/wp-content/uploads/2022/01/Ada-_-Desarrollo-Frontend.pdf"
                isExternal
                _hover={menuItemHoverStyle}
              >
                Desarrollo web front-end
              </MenuItem>
              {/* <MenuItem
                _hover={menuItemHoverStyle}
                onClick={() => alert('Programa Desarrollo web back-end')}
              >
                Desarrollo web back-end
              </MenuItem> */}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      {/* Cursos */}
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton bg={isExpanded && 'purple.100'}>
                <Box as="span" flex="1" textAlign="left">
                  Cursos
                </Box>
                {!isExpanded ? (
                  <ChevronRightIcon color={'magenta.400'} fontSize="20px" />
                ) : (
                  <ChevronDownIcon color={'magenta.400'} fontSize="20px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MenuItem as={RouterLink} to="/ux-ui" _hover={menuItemHoverStyle}>
                Intensivo - Diseño UX/UI
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/python"
                // as={Link}
                // href="https://adaitw.org/wp-content/uploads/2023/04/Brochure_phyton.pdf"
                // isExternal
                _hover={menuItemHoverStyle}
              >
                Programación en Python
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/qa"
                _hover={menuItemHoverStyle}
                // onClick={() => alert('Programa QA Testing')}
              >
                QA testing
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/ia"
                _hover={menuItemHoverStyle}
                // onClick={() => alert('Programa IA Generativa')}
              >
                IA Generativa
              </MenuItem>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}
