import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Highlight,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import theme from '../themes/theme'

export const SignUp = ({ career: { modules, classSchedule, duration } }) => {
  return (
    <Container
      maxW={'1440px'}
      py={['spacingXl.base', 'spacingXl.base', 'spacingXl.base', '80px']}
      px={['spacingM.base', '', '', '40px']}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={['spacingM.base', 'spacingXl.base']}
    >
      <Heading
        as="h1"
        fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
        color={'gray.800'}
        textAlign={'center'}
      >
        ¡Inscríbete ahora!
      </Heading>
      <Text
        maxW={'838px'}
        textAlign={'center'}
        fontSize={[
          'largeTxt.base',
          'largeTxt.base',
          'largeTxt.lg',
          'largeTxt.xl',
        ]}
      >
        ¡Atrévete a ser protagonista en el mundo tecnológico! ¡Inscríbete ya y
        comienza a construir tu futuro en desarrollo web! 💡👩‍💻
      </Text>
      <VStack
        maxW={'838px'}
        border={'2px solid'}
        borderColor={'magenta.400'}
        gap={['20px', '30px']}
        py={'10px'}
        px={'30px'}
        borderRadius={'10px'}
      >
        <Heading
          as="h1"
          textAlign={'center'}
          fontSize={['22px', 'h1.base', 'h1.lg', 'h1.lg']}
          color={'magenta.400'}
        >
          Carrera completa
        </Heading>
        <Text
          color={'gray.800'}
          fontSize={['midTxt.lg', 'midTxt.lg', 'midTxt.lg', 'midTxt.xl']}
          fontWeight={'semibold'}
          textAlign={'center'}
        >
          Ideal para quienes buscan certificación e iniciarse en el mundo de la
          tecnología.
        </Text>
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={[5, 10]} maxW={'614px'}>
          <Flex gap={['1px', '15px']}>
            <Box w={'50px'}>
              <Icon
                icon="cil:book"
                style={{
                  fontSize: `calc(${theme.fontSizes.h2.base} + 2vw)`,
                  color: '#cd0055',
                }}
              />
            </Box>

            <Box>
              <Text
                color={'gray.800'}
                fontSize={[
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.xl',
                ]}
                fontWeight={'semibold'}
              >
                Todos los módulos incluidos:
              </Text>
              <UnorderedList
                fontSize={[
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.xl',
                ]}
              >
                {modules?.map((module, index) => (
                  <ListItem key={index}>{module} </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Flex>
          <Flex gap={['10px', '15px']}>
            <Box w={'50px'}>
              <Icon
                icon="gala:clock"
                style={{
                  fontSize: `calc(${theme.fontSizes.h2.base} + 2vw)`,
                  color: '#cd0055',
                }}
              />
            </Box>

            <Box>
              <Text
                color={'gray.800'}
                fontSize={[
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.xl',
                ]}
                fontWeight={'semibold'}
              >
                Días y horarios de cursada:
              </Text>
              <Text
                fontSize={[
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.xl',
                ]}
              >
                {classSchedule}
              </Text>
            </Box>
          </Flex>
          <Flex gap={['10px', '20px']}>
            <Box w={'50px'}>
              <Icon
                icon="ph:certificate-light"
                style={{
                  fontSize: `calc(${theme.fontSizes.h2.base} + 3vw)`,
                  color: '#cd0055',
                }}
              />
            </Box>

            <Box>
              <Text
                fontSize={[
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.xl',
                ]}
              >
                <Highlight
                  query={['Certificado', 'Título']}
                  styles={{
                    fontWeight: 'semibold',
                  }}
                >
                  Certificado en cada módulo + Título al completar la carrera.
                </Highlight>
              </Text>
            </Box>
          </Flex>
          <Flex gap={['0px', '15px']}>
            <Box w={'50px'}>
              <Icon
                icon="ion:calendar-outline"
                style={{
                  fontSize: `calc(${theme.fontSizes.h2.base} + 2vw)`,
                  color: '#cd0055',
                }}
              />
            </Box>

            <Box>
              <Text
                color={'gray.800'}
                fontSize={[
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.xl',
                ]}
                fontWeight={'semibold'}
              >
                Duración total estimada:
              </Text>
              <Text
                fontSize={[
                  'midTxt11.lg',
                  'midTxt1.lg',
                  'midTxt1.lg',
                  'midTxt1.xl',
                ]}
              >
                {duration}
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
        {/* TODO este boton deberia abrir un modal con el formulario que se usa en las page de los cursos */}
        <Button
          as={NavLink}
          // to="/inscription"
          variant={'buttonPrimary'}
          px={'32px'}
          mb={'10px'}
        >
          Inscribirme
        </Button>
      </VStack>
    </Container>
  )
}

SignUp.propTypes = {
  career: PropTypes.shape({
    modules: PropTypes.arrayOf(PropTypes.string).isRequired,
    classSchedule: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
}
