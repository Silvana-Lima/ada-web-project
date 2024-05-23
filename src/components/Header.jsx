import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Link,
  Show,
} from '@chakra-ui/react'

import logoAdaFuscia from '../assets/logo-fucsia.png'
import { BurgerMenu } from './header/BurgerMenu'
import { EducationMenu } from './header/EducationMenu'
import { InstagramCta } from './header/InstagramCta'

export const Header = () => {
  return (
    <Container maxW={'1440'} p={0}>
      {/* Instagram - llamada a la acción */}
      <InstagramCta />

      <Flex
        justifyContent={'space-between'}
        alignItems="center"
        textAlign={'center'}
        px={'48px'}
        py={'16px'}
      >
        {/* Logo */}
        <Box>
          <Image src={logoAdaFuscia} alt="Logo ADA" />
        </Box>

        {/* menu hamburguesa */}
        <Show breakpoint="(max-width: 360px)">
          <BurgerMenu />
        </Show>

        <Grid
          columns={6}
          templateColumns="repeat(6, auto)"
          gap={'32px'}
          alignItems="center"
          fontSize={'midTxt'}
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
          <Button bg={'#cd0055'} color={'white'} fontSize={'midTxt'}>
            Incribite ahora
          </Button>
        </Grid>
      </Flex>
    </Container>
  )
}
