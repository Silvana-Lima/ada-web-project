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
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

import logoAdaFuscia from '../../assets/logo-fucsia.png'
import { BurgerMenu } from './BurgerMenu'
import { EducationMenu } from './EducationMenu'
import { InstagramCta } from './InstagramCta'

export const Header = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <Container
      maxW={'1440'}
      p={0}
      position={'sticky'}
      top={0}
      bg="gray.0"
      zIndex={100}
    >
      {/* Instagram - llamada a la acción */}
      <InstagramCta />

      <Flex
        justifyContent={'space-between'}
        alignItems="center"
        textAlign={'center'}
        px={{ base: '16px', md: '48px' }}
        py={'16px'}
      >
        {/* Logo Ada */}
        <Link as={NavLink} to="/" onClick={handleScrollToTop}>
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
        <Show below="md">
          <Box>
            <BurgerMenu />
          </Box>
        </Show>

        {/* Menu de navegacion  */}
        <Hide below="md">
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
                onClick={handleScrollToTop}
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

              {/* <Link
                maxW={'max-content'}
                px={'8px'}
                py={'10px'}
                _hover={{
                  color: 'orange.400',
                  textDecoration: 'underline',
                  textUnderlineOffset: '10px',
                }}
              >
                Blog
              </Link> */}
              <Link
                maxW={'max-content'}
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
                px={'8px'}
                py={'10px'}
                color={'orange.400'}
                textDecoration="underline"
                textUnderlineOffset="10px"
                _hover={{
                  color: 'magenta.400',
                }}
              >
                Colaborar
              </Link>
              <Button variant={'button-primary'}>Inscríbete ahora</Button>
            </Grid>
          </Box>
        </Hide>
      </Flex>
    </Container>
  )
}
