import { Grid, GridItem, HStack, Image, Text, VStack } from '@chakra-ui/react'
import {
  LiaCopyright,
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaYoutube,
} from 'react-icons/lia'

import { IconLink } from './IconLink'

export const Footer = () => {
  return (
    <HStack bgColor={'#222222'} py={'32px'} justifyContent={'center'}>
      <Grid
        templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}
        w={['100%', '100%', '1200px']}
        alignItems={'center'}
        gap={[8, 0]}
      >
        <GridItem colSpan={1}>
          <VStack alignItems={['center', 'flex-start']}>
            <Image
              boxSize={178}
              h={77}
              objectFit="cover"
              src="/logo-blanco.svg"
              alt="Logo Ada"
            />
            <Text color={'#FFFFFF'}>
              Empoderamos mujeres a través de la tecnología.
            </Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={1} justifySelf={'end'}>
          <VStack alignItems={'center'}>
            <Image src="/image-footer.png" alt="Logo Ada" />
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
            <HStack color={'#FFFFFF'}>
              <LiaCopyright />
              <Text>2024 Ada ITW, todos los derechos reservados.</Text>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </HStack>
  )
}
