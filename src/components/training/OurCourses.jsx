import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'

import bgTitle from '@/ourCourses/bg-title-ourcourses.svg'
import girlPc1 from '@/ourCourses/girl-pc-1.svg'
import symbol1 from '@/ourCourses/symbol-1.svg'

export const OurCourses = () => {
  return (
    <Container maxW={'100%'} px={'spacingM.xl'} py={'spacingXl.base'}>
      <Container
        color={'white'}
        textAlign={'center'}
        py={'spacingS.xl'}
        bgImg={bgTitle}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'contain'}
        mb={'32px'}
      >
        <Heading fontSize={'midTxt1.xl'}>NUESTROS CURSOS</Heading>
      </Container>

      <HStack>
        <VStack w={'156px'}>
          <HStack>
            <Image src={symbol1} />
            <VStack>
              <Text fontSize={'smTxt.base'}>CURSOS INTENSIVOS</Text>
              <Heading fontSize={'smTxt.xl'} color={'orange.400'}>
                DISEÑO UX/UI
              </Heading>
            </VStack>
          </HStack>
          <Text color={'gray.500'} fontSize={'smTxt.xl'}>
            Tras el curso, la estudiante dominará el diseño UX/UI, planificación
            de productos digitales y creación de prototipos mobile first en
            Figma desde un MVP, adquiriendo esenciales conocimientos para la
            interacción digital.
          </Text>
        </VStack>
        <Image objectFit="cover" src={girlPc1} alt="Girl" />
      </HStack>
      <VStack py={'32px'} gap={'20px'}>
        <Text
          fontSize={'midTxt1.base'}
          color={'gray.600'}
          fontWeight={'semibold'}
        >
          Estas son algunas de las herramientas que aprenderás durante la
          carrera:
        </Text>
        <Grid
          templateColumns={['repeat(3, 1fr)']}
          templateRows="repeat(3, auto)"
          gap={4}
        >
          <GridItem colSpan={1} rowSpan={1}>
            <HStack>
              <Icon
                icon="bi:git"
                width="20"
                height="20"
                style={{ color: '#bcbcbc' }}
              />
              <Text fontSize={'14px'}>GIT</Text>
            </HStack>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <HStack>
              <Icon
                icon="mdi:sass"
                width="20"
                height="20"
                style={{ color: '#bcbcbc' }}
              />
              <Text fontSize={'14px'}>SASS</Text>
            </HStack>
          </GridItem>
          <GridItem colSpan={1} rowSpan={3}>
            <HStack alignItems={'flex-start'}>
              <Icon
                icon="mdi:responsive"
                width="20"
                height="20"
                style={{ color: '#bcbcbc' }}
              />
              <Text fontSize={'14px'}>Responsive Design</Text>
            </HStack>
          </GridItem>

          <GridItem colSpan={1} rowSpan={1}>
            <HStack>
              <Icon
                icon="ri:html5-fill"
                width="20"
                height="20"
                style={{ color: '#bcbcbc' }}
              />
              <Text fontSize={'14px'}>HTML5</Text>
            </HStack>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <HStack>
              <Icon
                icon="cib:js"
                width="20"
                height="20"
                style={{ color: '#bcbcbc' }}
              />
              <Text fontSize={'14px'}>JavaScript</Text>
            </HStack>
          </GridItem>

          <GridItem colSpan={1} rowSpan={1}>
            <HStack>
              <Icon
                icon="fa-brands:css3-alt"
                width="20"
                height="20"
                style={{ color: '#bcbcbc' }}
              />
              <Text fontSize={'14px'}>CSS3</Text>
            </HStack>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <HStack>
              <Icon
                icon="mdi:react"
                width="20"
                height="20"
                style={{ color: '#bcbcbc' }}
              />
              <Text fontSize={'14px'}>React.js</Text>
            </HStack>
          </GridItem>
        </Grid>
      </VStack>
      <ButtonGroup>
        <Button variant={'outline'} minW="154px">
          Ver Programa
        </Button>
        <Button
          bg={'orange.400'}
          minW="154px"
          _hover={{
            color: 'orange.400',
            bg: 'white',
            borderWidth: '2px',
            borderColor: 'orange.400',
          }}
        >
          Quiero preinscribirme
        </Button>
      </ButtonGroup>
    </Container>
  )
}
