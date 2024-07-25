import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'

import flyer from '../assets/ourCourses/flyerIA.png'
import imgTemario from '../assets/ourCourses/imgIATemario.jpg'

export const IACourse = () => {
  return (
    <Container
      maxW={['100%', '100%', '1235px', '1440px']}
      px={'20px'}
      py={'40px'}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box h={'100%'}>
          <Image
            h={'100%'}
            w={'100%'}
            src={flyer}
            objectFit={'cover'}
            alt="flyer"
          />
        </Box>
        <Box h={'100%'} p={5}>
          <Heading fontSize="xl" color="orange.800">
            IA Generativa Aplicada
          </Heading>
          <Text mt={4} textAlign="justify">
            Inicia tu camino en la IA comprendiendo sus objetivos y
            diferenciando entre mitos y realidades tecnológicas. Explora su
            evolución, desde los primeros pasos hasta los avances más recientes.
            Conoce los diversos tipos de IA y sus aplicaciones prácticas.
            Desmitifica la IA y descubre sus verdaderas capacidades y
            limitaciones.
          </Text>
          <Text mt={4} textAlign="justify">
            Al finalizar el curso, las estudiantes estarán preparadas para:
          </Text>
          <UnorderedList mt={4}>
            <ListItem>
              Utilizar herramientas de IA Generativa en entornos profesionales
            </ListItem>
            <ListItem>
              Integrar soluciones de IA en diversos procesos laborales
            </ListItem>
            <ListItem>
              Presentar proyecto completo desarrollado con IA Generativa
            </ListItem>
          </UnorderedList>
          <HStack spacing="24px" py={10}>
            <Box w="250px" h="40px" bg="yellow.200">
              ICONOS
            </Box>
            <Box w="250px" h="40px" bg="yellow.200">
              ICONOS
            </Box>
          </HStack>
        </Box>
      </SimpleGrid>
      <HStack justifyContent={'center'} pt={'100px'}>
        <Card maxW="lg">
          <CardBody>
            <Image
              src={imgTemario}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
          </CardBody>

          <CardFooter display={'flex'} justifyContent={'center'}>
            <Button
              as={Link}
              href="https://drive.google.com/file/d/1Ac2utMIEXtADagbJ4fe4YRMORA39K3tQ/view"
              variant={'gost'}
              color="orange.800"
            >
              Temario
            </Button>
          </CardFooter>
        </Card>
      </HStack>

      {/* Aca iria el componente de formulario de las chicas */}
      <Stack pt={'100px'} px={'100px'}>
        <Text color={'red'} fontWeight={'bold'}>
          Aca va el form de las chicas - este es provisorio
        </Text>
        <FormControl isRequired>
          <FormLabel>Nombre y Apellido</FormLabel>
          <Input placeholder="Nombre y Apellido" />
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" />
          <FormLabel>Telefono</FormLabel>
          <Input placeholder="Telefono" />
          <FormLabel>Nacionalidad</FormLabel>
          <Input placeholder="Nacionalidad" />
        </FormControl>
      </Stack>
    </Container>
  )
}
