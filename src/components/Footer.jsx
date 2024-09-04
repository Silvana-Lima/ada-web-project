import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import {
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaYoutube,
} from 'react-icons/lia'
import { Link } from 'react-router-dom'

import imageFooter from '../assets/image-footer.png'
import logoAdaBlanco from '../assets/logo-Ada-blanco.png'
import { IconLink } from './IconLink'

export const Footer = () => {
  return (
    <Box w={'100%'} bg={'gray.800'}>
      <HStack justifyContent={'center'}>
        <Grid
          templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}
          w={['100%', '100%', '1440px']}
          // alignItems={'center'}
          gap={[8, 8, 0]}
          color={'#FFFFFF'}
          bgColor={'#222222'}
          py={'32px'}
          px={'48px'}
        >
          <GridItem colSpan={1}>
            <VStack alignItems={['center', 'center', 'flex-start']}>
              <Link to={'/'}>
                <Image
                  h={77}
                  objectFit="cover"
                  src={logoAdaBlanco}
                  alt="Logo Ada"
                />
              </Link>

              <Text
                textAlign={['center', 'center', 'start']}
                fontSize={[
                  'midTxt.base',
                  'midTxt.base',
                  'largeTxt.lg',
                  'largeTxt.xl',
                ]}
              >
                Empoderamos mujeres a través de la tecnología.
              </Text>

              <Text
                fontSize={[
                  'midTxt.base',
                  'midTxt.base',
                  'midTxt.base',
                  'largeTxt.base',
                ]}
              >
                <hr style={{ marginBottom: '10px' }} />
                Queremos agradecer y hacer mención a las personas que hicieron
                posible este sitio web. <br /> Diseño, investigación y
                experiencia de usuario:{' '}
                <ChakraLink href="https://chakra-ui.com" isExternal>
                  Karina Monetti
                </ChakraLink>{' '}
                y{' '}
                <ChakraLink
                  href="https://www.linkedin.com/in/fanimejia/"
                  isExternal
                >
                  Fani Mejía
                </ChakraLink>
                <br /> Desarrollo web e implementación:{' '}
                <ChakraLink
                  href="https://www.linkedin.com/in/poli-ferreyra/"
                  isExternal
                >
                  Poli Ferreyra
                </ChakraLink>{' '}
                y{' '}
                <ChakraLink
                  href="https://www.linkedin.com/in/silvana-lima/"
                  isExternal
                >
                  Silvana Lima
                </ChakraLink>{' '}
                <br />
                Gestion de proyecto:{' '}
                <ChakraLink
                  href="https://www.linkedin.com/in/poli-ferreyra/"
                  isExternal
                >
                  Poli Ferreyra
                </ChakraLink>{' '}
                y{' '}
                <ChakraLink href="https://chakra-ui.com" isExternal>
                  Bernardita Bauque
                </ChakraLink>
                <br />
                Colaboración especial en desarrollo:{' '}
                <ChakraLink
                  href="https://www.linkedin.com/in/cintia-p%C3%A1ez-b80a84244/"
                  isExternal
                >
                  Cintia Páez
                </ChakraLink>
                ,{' '}
                <ChakraLink
                  href="https://www.linkedin.com/in/nancy-clarisa-rojas/"
                  isExternal
                >
                  Nancy Rojas
                </ChakraLink>{' '}
                y <ChakraLink>Angelly Sepúlveda Garcia</ChakraLink>
              </Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={1} justifySelf={['center', 'center', 'end']}>
            <VStack alignItems={'center'}>
              <Image src={imageFooter} alt="Logo Ada" h={'185px'} />
              <HStack>
                <IconLink
                  href="https://www.instagram.com/adaitw/"
                  icon={<LiaInstagram />}
                  isExternal
                />
                <IconLink
                  href="https://www.facebook.com/adaitw/"
                  icon={<LiaFacebook />}
                  isExternal
                />
                <IconLink
                  href="https://www.linkedin.com/school/ada-itw/"
                  icon={<LiaLinkedin />}
                  isExternal
                />
                <IconLink
                  href="https://www.youtube.com/c/AdaITW"
                  icon={<LiaYoutube />}
                  isExternal
                />
              </HStack>
              <HStack>
                <Text
                  textAlign={'center'}
                  fontSize={[
                    'midTxt1.base',
                    'midTxt1.base',
                    'midTxt1.lg',
                    'midTxt1.xl',
                  ]}
                >
                  {' '}
                  © 2024 Ada ITW, todos los derechos reservados.
                </Text>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </HStack>
    </Box>
  )
}
