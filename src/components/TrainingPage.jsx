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
  SimpleGrid,
  SlideFade,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import imgTemario from '../assets/ourCourses/imgIATemario.jpg'

export const TrainingPage = ({
  flyer,
  title,
  description,
  months,
  week,
  hours,
  syllabus,
}) => {
  return (
    <Container
      maxW={['100%', '100%', '100%', '1235px']}
      px={'spacingL.xl'}
      py={'spacingXl.xl'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
        <SlideFade
          in={true}
          offsetX="400px"
          transition={{ enter: { duration: 2 } }}
          animateOpacity
        >
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box maxW={'503px'}>
              <Image w={'100%'} src={flyer} objectFit={'cover'} alt="flyer" />
            </Box>
          </Box>
        </SlideFade>

        <Box
          h={'100%'}
          p={5}
          fontSize={['midTxt1.base', 'midTxt1.lg', 'midTxt1.xl']}
          maxW={['503px', '503px', '803px', '503px']}
        >
          <Heading
            fontSize="h4.xl"
            color="orange.800"
            textTransform="uppercase"
          >
            {title}
          </Heading>
          <Text mt={'spacingM.xl'} textAlign="justify">
            {description}
          </Text>
          <Stack flexDirection={['column', 'row']} spacing="24px" py={10}>
            <Box w="250px">
              <HStack>
                <Icon icon="mdi:clock-outline" width="27" height="22" />
                <Text>{months}</Text>
              </HStack>
              <HStack>
                <Icon icon="ci:calendar" width="27" height="22" />
                <Text>{week}</Text>
              </HStack>
            </Box>
            <Box w="250px">
              <HStack>
                <Icon icon="fa-regular:hourglass" width="27" height="22" />
                <Text>{hours}</Text>
              </HStack>
              <HStack>
                <Icon icon="pepicons-pop:camera" width="27" height="22" />
                <Text>Clases online</Text>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </SimpleGrid>
      <HStack justifyContent={'center'} pt={'100px'}>
        <Card maxW="lg" boxShadow={'xl'}>
          <CardBody>
            <Image src={imgTemario} alt="women studying" borderRadius="lg" />
          </CardBody>

          <CardFooter display={'flex'} justifyContent={'center'}>
            <Button
              as={Link}
              href={syllabus}
              variant={'gost'}
              color="orange.800"
              isExternal
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

TrainingPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flyer: PropTypes.string.isRequired,
  months: PropTypes.string.isRequired,
  week: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  syllabus: PropTypes.string.isRequired,
}
