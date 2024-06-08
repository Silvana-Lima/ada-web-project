import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

import { awards } from '../../utils/constants'

export const Awards = () => {
  return (
    <Stack
      bg={'#f5eef9'}
      py={['64px', '120px']}
      px={['40px', '80px']}
      justifyContent={'center'}
    >
      <Container
        maxW={['360px', '1238px']}
        bg={'gray.0'}
        textAlign={'center'}
        borderRadius={['8px', '24px']}
        boxShadow={'md'}
      >
        <Heading
          color={'gray.0'}
          bg={'purple.400'}
          textAlign={'center'}
          borderRadius={['4px', '8px']}
          fontSize={['midTxt.lg', 'h2.lg']}
          py={['4px', '8px']}
          px={['10px', '24px']}
          position={'relative'}
          top={'-25px'}
          display="inline-block"
        >
          Premios y reconocimientos
        </Heading>
        <Flex
          maxW={'100%'}
          maxH={['100%', '704px']}
          color={'gray.600'}
          direction={'row'}
          wrap={'wrap'}
          alignItems={'center'}
          justify={'center'}
          columnGap={['', '', '', '46px']}
          rowGap={('spacingL.base', '', '', '')}
          py={['spacingXl.base', 'spacingXl.base', 'spacingXl.base', '72px']}
          px={['spacingM.base', '40px', '40px', '40px']}
        >
          {awards.map(({ id, logo, name }) => (
            <Box key={id} w={'140px'} h={['116px', '280px']}>
              <Flex
                maxW={['104px', '140px']}
                h={['80px', '110px']}
                justifyContent={'center'}
              >
                <Image src={logo} />
              </Flex>

              <Text px={3} fontSize={['10px', '18px']} textAlign={'center'}>
                {name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Container>
    </Stack>
  )
}
