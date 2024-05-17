import { CloseButton, Flex, useDisclosure } from '@chakra-ui/react'
import { FaInstagram } from 'react-icons/fa'

export const InstagramCta = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  return (
    <>
      {isOpen && (
        <Flex
          justifyContent={'center'}
          px={'48px'}
          py={'8px'}
          position={'relative'}
          bg="#ff7d00"
        >
          <Flex alignItems="center" gap={'8px'}>
            <FaInstagram />
            Seguinos en nuestro Instagram y no te pierdas de las últimas
            novedades
          </Flex>
          <CloseButton position={'absolute'} right={'48px'} onClick={onClose} />
        </Flex>
      )}
    </>
  )
}
