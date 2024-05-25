import {
  CloseButton,
  Container,
  Flex,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { FaInstagram } from 'react-icons/fa'

export const InstagramCta = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

  const text = useBreakpointValue({
    base: 'Siguenos en nuestro Instagram',
    md: 'Seguinos en nuestro Instagram y no te pierdas de las últimas novedades',
  })
  return (
    <Container maxW={'1440'}>
      {isOpen && (
        <Flex
          justifyContent={'center'}
          px={'48px'}
          py={'8px'}
          position={'relative'}
          bg="#ff7d00"
        >
          <Flex
            alignItems="center"
            gap={'8px'}
            fontFamily={'kMid'}
            color={'gray.0'}
            fontSize={[
              'midTxt1.base',
              'midTxt1.base',
              'midTxt1.lg',
              'midTxt1.lg',
            ]}
          >
            <FaInstagram />
            {text}
          </Flex>
          <CloseButton
            position={'absolute'}
            right={'48px'}
            onClick={onClose}
            color={'orange.800'}
            background="none"
          />
        </Flex>
      )}
    </Container>
  )
}
