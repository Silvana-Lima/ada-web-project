import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  CloseButton,
  Container,
  Flex,
  Grid,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from '@chakra-ui/react'

import logoAdaFuscia from '../assets/logo-fucsia.png'

export const Header = () => {
  return (
    <Container maxW={'1440'}>
      <Flex
        justifyContent={'center'}
        px={'48px'}
        py={'8px'}
        position={'relative'}
        bg={'tomato'}
      >
        <Box>
          Seguinos en nuestro Instagram y no te pierdas de las últimas novedades
        </Box>

        <CloseButton position={'absolute'} right={'48px'} />
      </Flex>
      <Flex
        justifyContent={'space-between'}
        alignItems="center"
        textAlign={'center'}
        px={'48px'}
        py={'16px'}
      >
        <Box>
          <Image src={logoAdaFuscia} alt="Logo ADA" />
        </Box>
        <Grid
          columns={6}
          templateColumns="repeat(6, auto)"
          gap={10}
          alignItems="center"
        >
          <Link maxW={'max-content'}>Sobre nosotros</Link>
          <Menu>
            <MenuButton rightIcon={<ChevronDownIcon />} maxW={'max-content'}>
              Oferta educativa
            </MenuButton>
            <Portal>
              <MenuList p={'24px'}>
                <Text fontWeight={'bold'}>Carreras</Text>
                <MenuItem>Desarrollo web front-end</MenuItem>
                <MenuItem>Desarrollo web back-end</MenuItem>
                <Text fontWeight={'bold'}>Cursos</Text>
                <MenuItem>Diseño UX/UI</MenuItem>
                <MenuItem>Introducción al desarrollo web front-end</MenuItem>
                <MenuItem>Analista QA</MenuItem>
                <MenuItem>Programación en Pyton</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
          <Link maxW={'max-content'}>Blog</Link>
          <Link maxW={'max-content'}>Contrata talento</Link>
          <Link maxW={'max-content'}>Colaborar</Link>
          <Button>Incribite ahora</Button>
        </Grid>
      </Flex>
    </Container>
  )
}
