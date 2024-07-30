import { Button, Container, Flex, Heading, Link, Stack } from '@chakra-ui/react'

export const SupportUs = () => {
  return (
    <Container
      maxW={'1440px'}
      bg={'orange.400'}
      py={{ base: '10px', md: '40px' }}
      px={{ base: '12px', md: '48px' }}
    >
      <Flex
        justifyContent="center"
        alignItems={'center'}
        flexDirection={'column'}
        fontSize={'14px'}
        fontWeight={'medium'}
      >
        <Stack
          maxW={['250px', '780px', '980px']}
          align={'center'}
          gap={['10px', '10px', '15px']}
        >
          <Heading
            as="h2"
            fontSize={['h3.base', 'h3.base', 'h3.lg', 'h2.xl']}
            color={'gray.0'}
            textAlign={'center'}
          >
            Tu contribución nos permite otorgar más becas y cambiar vidas
          </Heading>
          <Button
            as={Link}
            href="https://donaronline.org/ada/sumate-a-nuestra-mision-para-que-mas-mujeres-tengan-acceso-a-los-trabajos-del-futuro"
            isExternal
            size={['md', 'md', 'lg']}
            w={['70%', '50%', '382px']}
          >
            Dona aquí
          </Button>
        </Stack>
      </Flex>
    </Container>
  )
}
