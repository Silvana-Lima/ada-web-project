import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  MenuItem,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

const menuItemHoverStyle = {
  color: 'magenta.400',
  bg: 'none',
}

export const CoursesMenuBox = ({ onClose }) => {
  const handleCloseBurgerMenu = () => {
    onClose()
  }
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
                as={RouterLink}
                to="/front-end"
                onClick={handleCloseBurgerMenu}
                _hover={menuItemHoverStyle}
              >
                Desarrollo web front-end
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/back-end"
                onClick={handleCloseBurgerMenu}
                _hover={menuItemHoverStyle}
              >
                Desarrollo web Back-end
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
                as={RouterLink}
                to="/ux-ui"
                onClick={handleCloseBurgerMenu}
                _hover={menuItemHoverStyle}
              >
                Intensivo - Diseño UX/UI
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/python"
                onClick={handleCloseBurgerMenu}
                _hover={menuItemHoverStyle}
              >
                Programación en Python
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/qa"
                onClick={handleCloseBurgerMenu}
                _hover={menuItemHoverStyle}
              >
                QA testing
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/ia"
                onClick={handleCloseBurgerMenu}
                _hover={menuItemHoverStyle}
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
CoursesMenuBox.propTypes = {
  onClose: PropTypes.func,
}
