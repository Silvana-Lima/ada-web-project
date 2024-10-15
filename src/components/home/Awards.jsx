import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Hide,
  Image,
  Show,
  Stack,
  Text,
} from '@chakra-ui/react'

import { awards } from '../../utils/constants'

export const Awards = () => {
  return (
    <Stack
      bg={'gray.0'}
      py={['64px', '64px', '64px', '120px']}
      px={['40px', '40px', '40px', '80px']}
      justifyContent={'center'}
    >
      <Container
        maxW={['360px', '1238px']}
        bg={'gray.0'}
        textAlign={'center'}
        borderRadius={['spacingXs.xl', '15px', '20px', 'spacingL.xl']}
        boxShadow={'md'}
      >
        <Heading
          color={'gray.0'}
          bg={'purple.400'}
          textAlign={'center'}
          borderRadius={[
            'spacingXs.base',
            'spacingXs.base',
            'spacingXs.base',
            'spacingXs.xl',
          ]}
          fontSize={['midTxt.lg', 'midTxt.lg', 'midTxt.xl', 'h2.lg']}
          py={[
            'spacingXs.base',
            'spacingXs.base',
            'spacingXs.base',
            'spacingXs.xl',
          ]}
          px={['spacingS.lg', 'spacingS.lg', 'spacingS.lg', 'spacingL.xl']}
          position={'relative'}
          top={['-17px', '-17px', '-17px', '-25px']}
          display="inline-block"
        >
          Premios y reconocimientos
        </Heading>
        <Hide below="sm">
          <Flex
            maxW={'100%'}
            color={'gray.600'}
            direction={'row'}
            wrap={'wrap'}
            alignItems={'center'}
            justify={'center'}
            columnGap={['', 'spacingL.base', 'spacingL.base', '46px']}
            py={['', 'spacingXl.base', 'spacingXl.base', '72px']}
            px={['', 'spacingM.base', 'spacingM.base', '40px']}
            marginTop={['', '-17px', '-17px', '-47px']}
          >
            {awards.map(({ id, logo, name }) => (
              <Box
                key={id}
                w={['', '100px', '100px', '140px']}
                h={['', '190px', '200px', '280px']}
              >
                <Flex
                  maxW={['', '104px', '104px', '140px']}
                  h={['', '80px', '80px', '110px']}
                  justifyContent={'center'}
                >
                  <Image src={logo} />
                </Flex>

                <Text
                  h={['', '110px', '120px', '170px']}
                  px={[0, 1, 2, 3]}
                  fontSize={['', 'smTxt.base', 'smTxt.base', 'midTxt1.xl']}
                  textAlign={'center'}
                >
                  {name}
                </Text>
              </Box>
            ))}
          </Flex>
        </Hide>

        <Show below="sm">
          <Grid
            templateColumns={'84px 100px'}
            gap={'spacingL.base'}
            py={'spacingXl.base'}
            px={'40px'}
            marginTop={'-17px'}
            justifyContent="center"
            alignItems="center"
          >
            {awards.map(({ id, logo, name }) => (
              <GridItem
                key={id}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                gap={'spacingS.lg'}
              >
                <Flex maxW={'80px'}>
                  <Image src={logo} />
                </Flex>

                <Text px={1} fontSize={'10px'} textAlign={'center'}>
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
