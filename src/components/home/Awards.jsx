import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Show,
  Stack,
  Text,
} from '@chakra-ui/react'

import { awards } from '../../utils/constants'

export const Awards = () => {
  return (
    <Stack
      bg={'#f5eef9'}
      py={['64px', '64px', '64px', '120px']}
      px={['40px', '40px', '40px', '80px']}
      justifyContent={'center'}
    >
      <Container
        maxW={['360px', '1238px']}
        bg={'gray.0'}
        textAlign={'center'}
        borderRadius={['8px', '15px', '20px', '24px']}
        boxShadow={'md'}
      >
        <Heading
          color={'gray.0'}
          bg={'purple.400'}
          textAlign={'center'}
          borderRadius={['4px', '8px']}
          fontSize={['midTxt.lg', 'midTxt.lg', 'midTxt.lg', 'h2.lg']}
          py={['4px', '8px']}
          px={['10px', '24px']}
          position={'relative'}
          top={'-25px'}
          display="inline-block"
        >
          Premios y reconocimientos
        </Heading>
        <Show above="sm">
          <Flex
            maxW={'100%'}
            color={'gray.600'}
            direction={'row'}
            wrap={'wrap'}
            alignItems={'center'}
            justify={'center'}
            columnGap={[
              'spacingL.base',
              'spacingL.base',
              'spacingL.base',
              '46px',
            ]}
            rowGap={('spacingL.base', 'spacingL.base', '', '')}
            py={['spacingXl.base', 'spacingXl.base', 'spacingXl.base', '72px']}
            px={['spacingM.base', 'spacingM.base', 'spacingM.base', '40px']}
          >
            {awards.map(({ id, logo, name }) => (
              <Box
                key={id}
                w={['100px', '100px', '100px', '140px']}
                h={['116px', '150px', '180px', '280px']}
              >
                <Flex
                  maxW={['104px', '104px', '104px', '140px']}
                  h={['80px', '80px', '80px', '110px']}
                  justifyContent={'center'}
                >
                  <Image src={logo} />
                </Flex>

                <Text
                  px={3}
                  fontSize={['10px', '10px', '10px', '18px']}
                  textAlign={'center'}
                >
                  {name}
                </Text>
              </Box>
            ))}
          </Flex>
        </Show>

        <Show below="sm">
          <Grid
            templateColumns={'84px 100px'}
            gap={['spacingL.base', '', '', '']}
            py={['spacingXl.base', 'spacingXl.base', 'spacingXl.base', '72px']}
            px={['40px', '40px', '40px', '40px']}
            justifyContent="center"
            alignItems="center"
          >
            {awards.map(({ id, logo, name }) => (
              <GridItem
                key={id}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                gap={'10px'}
              >
                <Flex maxW={['80px', '140px']}>
                  <Image src={logo} />
                </Flex>

                <Text
                  px={3}
                  fontSize={['10px', '10px', '12px', '18px']}
                  textAlign={'center'}
                >
                  {name}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Show>
      </Container>
    </Stack>
  )
}
