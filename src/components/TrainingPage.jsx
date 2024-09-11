import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  SlideFade,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

import imgTemario from '../assets/ourCourses/imgIATemario.jpg'
import { CourseInscriptionForm } from './training/CourseInscriptionForm'

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
      {/* Descripcion y flyer */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} mb={10}>
        <SlideFade
          in={true}
          offsetX="400px"
          transition={{ enter: { duration: 1.5 } }}
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
          <Box mt={'spacingM.xl'} textAlign="justify">
            {description}
          </Box>
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

      {/* Formulario y Temario */}
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
        <VStack>
          <Heading
            as={Link}
            href={syllabus}
            variant={'gost'}
            color="orange.800"
            isExternal
            fontSize={'h4.xl'}
          >
            TEMARIO
          </Heading>

          <Image src={imgTemario} alt="women studying" borderRadius="lg" />
        </VStack>
        <VStack>
          <Heading color="orange.800" fontSize={'h4.xl'}>
            INCRIBITE
          </Heading>
          <CourseInscriptionForm />
        </VStack>
      </SimpleGrid>
    </Container>
  )
}

TrainingPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  flyer: PropTypes.string.isRequired,
  months: PropTypes.string.isRequired,
  week: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  syllabus: PropTypes.string.isRequired,
}
