import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
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
import { InstagramCta } from '../components/InstagramCta'

export const Header = () => {
  return (
    <Container maxW={'1440'} p={0}>
      <InstagramCta />
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
          gap={'32px'}
          alignItems="center"
        >
          <Link maxW={'max-content'} px={'8px'} py={'10px'}>
            Sobre nosotros
          </Link>
          <Menu>
            <MenuButton maxW={'max-content'} px={'8px'} py={'10px'}>
              Oferta educativa <ChevronDownIcon pl={'4px'} />
            </MenuButton>
            <Portal>
              <MenuList p={'24px'}>
                <Text fontWeight={'bold'}>Carreras</Text>
                <MenuItem icon={<ChevronRightIcon />}>
                  Desarrollo web front-end
                </MenuItem>
                <MenuItem icon={<ChevronRightIcon />}>
                  Desarrollo web back-end
                </MenuItem>
                <Text fontWeight={'bold'}>Cursos</Text>
                <MenuItem icon={<ChevronRightIcon />}>Diseño UX/UI</MenuItem>
                <MenuItem icon={<ChevronRightIcon />}>
                  Introducción al desarrollo web front-end
                </MenuItem>
                <MenuItem icon={<ChevronRightIcon />}>Analista QA</MenuItem>
                <MenuItem icon={<ChevronRightIcon />}>
                  Programación en Pyton
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
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
          <Button bg={'#cd0055'} color={'white'}>
            Incribite ahora
          </Button>
        </Grid>
      </Flex>
    </Container>
  )
}
