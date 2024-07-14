import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'

import logoCivicHouse from '../assets/logo-CivicHouse.png'

export const CivicHouseShowcase = () => {
  return (
    // <Show above="md">
    // <Box>
    <Container maxW={'1440px'} bg={'gray.0'} py={{ base: '20px', md: '48px' }}>
      <Flex
        gap={'12px'}
        justifyContent="center"
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={'center'}
        fontSize={'14px'}
        fontWeight={'medium'}
      >
        <Text>Somos parte de</Text>
        <Image
          src={logoCivicHouse}
          alt="Logo Civic House"
          maxWidth={{ base: '52px', md: 'auto' }}
          maxHeight={{ base: '30px', md: 'auto' }}
          width="auto"
          height="auto"
        />
        <Box>
          <Text>Inovación Cívica y Tecnología con propósito</Text>
        </Box>
      </Flex>
    </Container>
    // </Box>
    // </Show>
  )
}
