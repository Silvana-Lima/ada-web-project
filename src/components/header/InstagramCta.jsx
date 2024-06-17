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
    base: 'Síguenos en nuestro Instagram',
    md: 'Síguenos en nuestro Instagram y no te pierdas de las últimas novedades',
  })
  return (
    <Container maxW={'1440'}>
      {isOpen && (
        <Flex
          justifyContent={'center'}
          px={'48px'}
          py={'spacingXs.xl'}
          position={'relative'}
          bg="#ff7d00"
        >
          <Flex
            alignItems="center"
            gap={'spacingXs.xl'}
            fontFamily={'kMid'}
            color={'gray.0'}
            fontSize={[
              'midTxt1.base',
              'midTxt1.base',
              'midTxt1.lg',
              'midTxt1.lg',
            ]}
          >
            <FaInstagram size={'24px'} />
            {text}
          </Flex>
          <CloseButton
            position={'absolute'}
            right={{ base: '11px', md: '48px' }}
            bottom={['spacingXs.xl', 'spacingXs.xl', '3px', '3px']}
            onClick={onClose}
            color={'orange.800'}
            _hover={'none'}
            size={['sm', 'sm', 'md', 'md']}
          />
        </Flex>
      )}
    </Container>
  )
}
