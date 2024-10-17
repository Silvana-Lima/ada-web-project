import { CloseIcon, SearchIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'

import { faqs } from '../../utils/constants'

export const Faqs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFaqs, setShowFaqs] = useState(4)

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    setShowFaqs(4)
  }

  const handleToggle = () => {
    setShowFaqs((prev) => (prev >= filteredFaqs.length ? 4 : prev + 4))
  }

  return (
    <Stack
      maxW={'1440px'}
      bg="gray.200"
      py={{ base: '40px', md: '40px', lg: '120px' }}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={['16px', '52px']}
    >
      <Heading
        as="h1"
        fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
        color={'magenta.400'}
        textAlign={'center'}
      >
        Preguntas frecuentes
      </Heading>

      <Stack w={'80%'} spacing={'30px'}>
        {/* input de búsqueda */}
        <InputGroup
          border={'solid 0.5px'}
          borderColor={'gray.400'}
          rounded="md"
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.600" />
          </InputLeftElement>
          <Input
            placeholder="Buscar... Ej: préstamo"
            value={searchTerm}
            onChange={handleSearchChange}
            variant="outline"
            focusBorderColor={'magenta.400'}
          />
          {searchTerm && (
            <InputRightElement>
              <IconButton
                aria-label="Clear search"
                icon={<CloseIcon color="magenta.400" />}
                size="sm"
                onClick={() => setSearchTerm('')}
                variant="ghost"
              />
            </InputRightElement>
          )}
        </InputGroup>

        {/* Accordion con FAQS */}
        <Accordion allowMultiple>
          {filteredFaqs.slice(0, showFaqs).map((faq, index) => (
            <AccordionItem
              key={index}
              boxShadow="md"
              mb={4}
              rounded="md"
              p={'10px'}
            >
              <AccordionButton
                _expanded={{ bg: 'purple.100', fontWeight: 'bold' }}
              >
                <Box as="span" flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon color={'magenta.400'} fontSize="20px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Textarea
                  value={faq.answer}
                  isReadOnly
                  variant="unstyled"
                  resize="none"
                  overflow="auto"
                  h={'100px'}
                  color="gray.700"
                  // scrollbar
                  css={{
                    '&::-webkit-scrollbar': {
                      width: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: '#cd0055',
                      borderRadius: '4px',
                    },
                  }}
                />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        {filteredFaqs.length > 4 && (
          <Button onClick={handleToggle} pt={4}>
            Mostrar {showFaqs >= filteredFaqs.length ? 'Menos' : 'Más'}
          </Button>
        )}
      </Stack>
    </Stack>
  )
}
