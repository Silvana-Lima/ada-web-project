import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Hide,
  Image,
  Link,
  Show,
  useDisclosure,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import logoAdaFuscia from '../../assets/logo-fucsia.png'
import { handleHashLink } from '../../utils/functions'
import { BurgerMenu } from './BurgerMenu'
import { EducationMenu } from './EducationMenu'
import { InstagramCta } from './InstagramCta'

export const Header = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  // En version mobile - el logo redirige a home y el onclick cierra del burgerMenu
  const handleCloseBurgerMenu = () => {
    if (isOpen) {
      onClose()
    }
  }

  return (
    <Box w="100%" position="sticky" top={0} bg="gray.0" zIndex={100}>
      <InstagramCta />
      <Container maxW="1440px" p={0}>
        {/* Instagram - llamada a la acción */}
        <Flex
          justifyContent={'space-between'}
          alignItems="center"
          textAlign={'center'}
          px={{ base: '16px', md: '48px' }}
          py={'16px'}
        >
          {/* Logo Ada */}
          <Link as={NavLink} to="/" onClick={handleCloseBurgerMenu}>
            <Image
              src={logoAdaFuscia}
              alt="Logo ADA"
              maxWidth={{ base: '104px', md: 'auto' }}
              maxHeight={{ base: '104px', md: 'auto' }}
              width="auto"
              height="auto"
            />
          </Link>

          {/* menu hamburguesa */}
          <Show below="lg">
            <Box>
              <BurgerMenu
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                onToggle={onToggle}
              />
            </Box>
          </Show>

          {/* Menu de navegacion  */}
          <Hide below="lg">
            <Box>
              <Grid
                columns={6}
                templateColumns="repeat(6, auto)"
                gap={['spacingXs.base', 'spacingXs.lg', 'spacingXs.xl']}
                alignItems="center"
                fontSize={[
                  'midTxt1.base',
                  'midTxt1.base',
                  'midTxt1.lg',
                  'midTxt1.xl',
                ]}
              >
                <Link
                  as={NavLink}
                  to="/aboutUs"
                  maxW={'max-content'}
                  px={'8px'}
                  py={'10px'}
                  _hover={{
                    color: 'orange.400',
                    textDecoration: 'underline',
                    textUnderlineOffset: '10px',
                  }}
                >
                  Sobre nosotros
                </Link>
                {/* Ofertas educativas */}
                <EducationMenu />

                <Link
                  as={HashLink}
                  smooth
                  scroll={handleHashLink}
                  to="/#network-builder"
                  maxW={'max-content'}
                  px={'8px'}
                  py={'10px'}
                  _hover={{
                    color: 'orange.400',
                    textDecoration: 'underline',
                    textUnderlineOffset: '10px',
                  }}
                >
                  Alianzas
                </Link>
                <Link
                  maxW={'max-content'}
                  href="https://ada.fonselp.com/talents"
                  isExternal
                  px={'8px'}
                  py={'10px'}
                  _hover={{
                    color: 'orange.400',
                    textDecoration: 'underline',
                    textUnderlineOffset: '10px',
                  }}
                >
                  Contrata talento
                </Link>
                <Link
                  maxW={'max-content'}
                  href="https://donaronline.org/ada/sumate-a-nuestra-mision-para-que-mas-mujeres-tengan-acceso-a-los-trabajos-del-futuro"
                  isExternal
                  px={'8px'}
                  py={'10px'}
                  color={'orange.400'}
                  textDecoration="underline"
                  textUnderlineOffset="10px"
                  _hover={{
                    color: 'magenta.400',
                  }}
                >
                  Dona aquí
                </Link>
                <Button
                  as={NavLink}
                  to="/inscription"
                  variant={'buttonPrimary'}
                >
                  Inscríbete ahora
                </Button>
              </Grid>
            </Box>
          </Hide>
        </Flex>
      </Container>
    </Box>
  )
}
