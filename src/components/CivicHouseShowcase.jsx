import { Box, Container, Flex, Image, Link, Text } from '@chakra-ui/react'

import logoCivicHouse from '../assets/logo-CivicHouse.png'

export const CivicHouseShowcase = () => {
  return (
    // <Show above="md">
    // <Box>
    <Container maxW={'1440px'} py={{ base: '20px', md: '48px' }}>
      <Flex
        gap={'12px'}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems={'center'}
        fontSize={['smTxt.base', 'midTxt.base', 'largeTxt.lg', 'largeTxt.xl']}
        fontWeight={'medium'}
      >
        <Text>Somos parte de</Text>
        <Box
          as={Link}
          maxWidth={{ base: '50px', lg: '70px' }}
          maxHeight={{ base: '50px', lg: '70px' }}
          href="https://www.civic.house/"
          isExternal
        >
          <Image src={logoCivicHouse} alt="Logo Civic House" />
        </Box>
        <Box>
          <Text>Inovación Cívica y Tecnología con propósito</Text>
        </Box>
      </Flex>
    </Container>
    // </Box>
    // </Show>
  )
}
