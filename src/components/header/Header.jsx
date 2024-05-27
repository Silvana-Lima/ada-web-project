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
  useTheme,
} from '@chakra-ui/react'

import logoAdaFuscia from '../../assets/logo-fucsia.png'
import { BurgerMenu } from './BurgerMenu'
import { EducationMenu } from './EducationMenu'
import { InstagramCta } from './InstagramCta'

export const Header = () => {
  const theme = useTheme()
  return (
    <Container maxW={'1440'} p={0}>
      {/* Instagram - llamada a la acción */}
      <InstagramCta />

      <Flex
        justifyContent={'space-between'}
        alignItems="center"
        textAlign={'center'}
        px={{ base: '16px', md: '48px' }}
        py={'16px'}
      >
        {/* Logo */}
        <Box>
          <Image
            src={logoAdaFuscia}
            alt="Logo ADA"
            maxWidth={{ base: '104px', md: 'auto' }}
            maxHeight={{ base: '104px', md: 'auto' }}
            width="auto"
            height="auto"
          />
        </Box>

        {/* menu hamburguesa */}
        <Show below="lg">
          <Box>
            <BurgerMenu />
          </Box>
        </Show>

        {/* Menu de navegacion  */}
        <Hide below="lg">
          <Box>
            <Grid
              columns={6}
              templateColumns="repeat(6, auto)"
              gap={[
                theme.space.spacingXs.base,
                theme.space.spacingXs.lg,
                theme.space.spacingXs.xl,
              ]}
              alignItems="center"
              fontSize={[
                'midTxt1.base',
                'midTxt1.base',
                'midTxt1.lg',
                'midTxt1.xl',
              ]}
            >
              <Link maxW={'max-content'} px={'8px'} py={'10px'}>
                Sobre nosotros
              </Link>
              {/* Ofertas educativas */}
              <EducationMenu />

              <Link maxW={'max-content'} px={'8px'} py={'10px'}>
                Blog
              </Link>
              <Link maxW={'max-content'} px={'8px'} py={'10px'}>
                Contrata talento
              </Link>
              <Link
                maxW={'max-content'}
                px={'8px'}
                py={'10px'}
                color={'orange.400'}
                textDecoration="underline"
              >
                Colaborar
              </Link>
              <Button variant={'button-primary'}>Incribite ahora</Button>
            </Grid>
          </Box>
        </Hide>
      </Flex>
    </Container>
  )
}
