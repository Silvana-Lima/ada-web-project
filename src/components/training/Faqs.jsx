import { SearchIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'

import { faqs } from '../../utils/constants'

export const Faqs = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // Filtra según palabra clave
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )
  // solo renderiza 4 preguntas
  const limitedFaqs = filteredFaqs.slice(0, 4)

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
            type="search"
            placeholder="Buscar... Ej: préstamo"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outline"
            focusBorderColor={'magenta.400'}
          />
        </InputGroup>

        <Accordion allowMultiple>
          {limitedFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              boxShadow="md"
              mb={2}
              rounded="md"
              p={'10px'}
            >
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'purple.100', fontWeight: 'bold' }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    {faq.question}
                  </Box>
                  <AccordionIcon color={'magenta.400'} fontSize="20px" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </Stack>
  )
}
