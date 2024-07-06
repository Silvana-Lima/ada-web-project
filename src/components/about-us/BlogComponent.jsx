import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { MdArrowOutward } from 'react-icons/md'

import img1 from '../../assets/image/blogImg1.png'
import img2 from '../../assets/image/blogImg2.png'
import img3 from '../../assets/image/blogImg3.png'

export const BlogComponent = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false })
  return (
    <Container maxW={'1440px'}>
      <Stack
        px={{ base: '32px', md: '16px', lg: '40px' }}
        py={{ base: '40px', md: '48px', lg: '60px' }}
        spacing={['24px', '40px', '50px', '80px']}
        bg={'purple.200'}
      >
        {/* Titulo */}
        <HStack textAlign={'center'} justifyContent={'center'} w={'100%'}>
          <Heading
            as="h2"
            fontSize={['18px', 'h1.base', 'h1.lg', 'h2.xl']}
            color={'magenta.400'}
          >
            {isMobile
              ? 'Conoce nuestro Blog'
              : 'Conoce nuestro Blog de tecnología'}
          </Heading>
          <Spacer />
          {!isMobile && (
            <Button
              bg={'gray.800'}
              borderRadius={'8px'}
              rightIcon={<MdArrowOutward />}
            >
              Más post
            </Button>
          )}
        </HStack>
        {/* Grid - imagen y texto */}
        <Stack w={'100%'} alignItems={'center'}>
          <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
            {/* cards */}
            <Card maxW="sm" bg={'transparent'}>
              <CardBody align={'center'}>
                <Stack spacing={'16px'}>
                  <Image src={img1} />
                  <Text
                    fontSize={[
                      'largeTxt.base',
                      'largeTxt.base',
                      'largeTxt.lg',
                      'largeTxt.xl',
                    ]}
                    fontWeight={'bold'}
                  >
                    La tecnología en América Latina, una región que comienza a
                    envejecer
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" bg={'transparent'}>
              <CardBody align={'center'}>
                <Stack spacing={'16px'}>
                  <Image src={img2} />
                  <Text
                    fontSize={[
                      'largeTxt.base',
                      'largeTxt.base',
                      'largeTxt.lg',
                      'largeTxt.xl',
                    ]}
                    fontWeight={'bold'}
                  >
                    Participación de la mujer en el mercado laboral actual
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" bg={'transparent'}>
              <CardBody align={'center'}>
                <Stack spacing={'16px'}>
                  <Image src={img3} />
                  <Text
                    fontSize={[
                      'largeTxt.base',
                      'largeTxt.base',
                      'largeTxt.lg',
                      'largeTxt.xl',
                    ]}
                    fontWeight={'bold'}
                  >
                    Mujeres en la tecnología y la programación
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Stack>
        {isMobile && (
          <Box textAlign={'center'} w={'100%'}>
            <Button
              w={['100%', '382px']}
              bg={'gray.800'}
              borderRadius={'8px'}
              rightIcon={<MdArrowOutward />}
            >
              Más post
            </Button>
          </Box>
        )}
      </Stack>
    </Container>
  )
}
