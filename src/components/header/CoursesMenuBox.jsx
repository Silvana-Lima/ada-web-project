import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  MenuItem,
} from '@chakra-ui/react'

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
                _hover={menuItemHoverStyle}
                onClick={() => alert('Programa Desarrollo web front-end')}
              >
                Desarrollo web front-end
              </MenuItem>
              <MenuItem
                _hover={menuItemHoverStyle}
                onClick={() => alert('Programa Desarrollo web back-end')}
              >
                Desarrollo web back-end
              </MenuItem>
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
              <MenuItem
                _hover={menuItemHoverStyle}
                onClick={() => alert('Programa Intensivo - Diseño UX/UI')}
              >
                Intensivo - Diseño UX/UI
              </MenuItem>
              <MenuItem
                _hover={menuItemHoverStyle}
                onClick={() => alert('Programa Programación en Python')}
              >
                Programación en Python
              </MenuItem>
              <MenuItem
                _hover={menuItemHoverStyle}
                onClick={() => alert('Programa QA testing')}
              >
                QA testing
              </MenuItem>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}
