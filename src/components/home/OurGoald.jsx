import { Box, Button, Highlight, Image, Stack, Text } from '@chakra-ui/react'

import ourGoalImg from '../../assets/ourGoalImg.png'

export const OurGoald = () => {
  return (
    <Stack
      maxW={'1440'}
      maxH={'600'}
      px={{ base: '32px', lg: '80px' }}
      py={{ base: '32px', lg: '80px' }}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'space-between' }}
      justifyContent={'space-between'}
      bg="yellow.100"
    >
      {/* TITULO - DESCRIPCION */}
      <Stack
        order={{ base: 2, md: 1 }}
        w={{ base: '296px', md: '432px' }}
        gap={{ base: '16px', md: '32px' }}
      >
        <Text fontSize={['h2.base', 'h2.lg', 'h2.lg']} fontWeight="bold">
          Nuestro{' '}
          <Highlight
            query="objetivo"
            styles={{
              fontWeight: 'extrabold',
              fontSize: ['30px', '45px', '70px'],
            }}
          >
            objetivo es
          </Highlight>{' '}
          <Text
            as="span"
            w="100%"
            fontSize={['h2.base', 'h2.lg', 'h2.lg']}
            maxW={'max-content'}
            bg="yellow.600"
            fontWeight="bold"
          >
            reducir la brecha de género en tecnología
          </Text>
        </Text>
        <Box>
          <Text
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
          >
            Ada brinda ayudas económicas en forma de pagos diferidos a las
            mujeres y feminidades que quieran capacitarse y entrar en el mundo
            IT.
          </Text>
        </Box>
        <Button
          size="md"
          maxW={{ base: '300px', lg: '450px' }}
          variant={'button-secondary'}
        >
          Información sobre ayudas económicas
        </Button>
      </Stack>

      {/* IMAGEN */}
      <Stack
        w={{ base: '296px', md: '624px' }}
        h={{ base: '200px', md: '420px' }}
        order={{ base: 1, lg: 2 }}
      >
        <Image
          src={ourGoalImg}
          width="100%"
          height="100%"
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
        />
      </Stack>
    </Stack>
  )
}
