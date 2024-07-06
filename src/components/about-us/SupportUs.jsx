import { Button, Container, Flex, Heading, Stack } from '@chakra-ui/react'

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
        <Stack w={['250px', '250px', '680px']} align={'center'} gap={'8px'}>
          <Heading
            as="h2"
            fontSize={['h3.base', 'h3.base', 'h3.lg', 'h2.xl']}
            color={'gray.0'}
          >
            ¿Te gustaría apoyar nuesta causa?
          </Heading>
          <Button size={['md', 'md', 'lg']} w={['70%', '50%', '382px']}>
            Dona aquí
          </Button>
        </Stack>
      </Flex>
    </Container>
  )
}
