import { HStack, Link, Stack, Text, useTheme, VStack } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

const StepDescription = ({ details, id }) => {
  const theme = useTheme()

  return (
    <VStack maxW={'750px'} align="start" spacing={4} color={'black'}>
      <Stack
        bg={'#fefafb'}
        minW={'260px'}
        px={{ base: 'spacingM.base', md: 'spacingL.base' }}
        py={{ base: 'spacingM.base', md: 'spacingL.base' }}
        borderRadius={8}
        border={'solid 1px '}
        borderColor={'gray.400'}
      >
        <Text
          fontWeight="bold"
          as={'h4'}
          fontSize={[
            'largeTxt.lg',
            'largeTxt.lg',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
        >
          {details.introTitle}
        </Text>
        <Text
          fontSize={[
            'smTxt.base',
            'midTxt1.base',
            'midTxt1.base',
            'midTxt1.xl',
          ]}
        >
          {details.introDescription}
        </Text>
        {/* TODO modificar texto - actualmente muestra el mismo en todos los steps  */}
        <Link
          href="mailto:sol@adaitw.com.ar?subject=Tengo conocimientos en Javascript&body=Hola Sol,%0A%0AYa tengo conocimientos en Javascript y me gustaría saber cómo inscribirme en una carrera. ¿Cuáles serían mis próximos pasos?.%0A%0AGracias!"
          isExternal
          fontSize={['midTxt.base', 'midTxt.base', 'midTxt.lg', 'midTxt.xl']}
          maxW={'max-content'}
          px={'8px'}
          py={'10px'}
          color={'orange.400'}
          textDecoration="underline"
          alignSelf={'flex-end'}
        >
          ¿Ya tenes conocimientos en Javascript? Comunicate acá
        </Link>
      </Stack>

      {/* box con iconos */}
      <HStack borderRadius="md" textAlign={'center'} minW={'260px'}>
        <Stack
          w={'100%'}
          h={'150px'}
          bg={'#fefafb'}
          px={{ base: 'spacingM.base', md: 'spacingL.base' }}
          py={{ base: 'spacingM.base', md: 'spacingL.base' }}
          borderRadius={8}
          border={'solid 1px '}
          borderColor={'gray.400'}
        >
          <VStack spacing={4}>
            <Icon
              color={theme.colors.magenta[400]}
              icon="gala:clock"
              style={{
                fontSize: `calc(${theme.fontSizes.largeTxt.xl} + 2vw)`,
              }}
            />

            <Text
              fontSize={['10px', 'midTxt1.base', 'midTxt1.base', 'midTxt1.lg']}
            >
              {details.schedule}
            </Text>
          </VStack>
        </Stack>
        <Stack
          w={'100%'}
          h={'150px'}
          bg={'#fefafb'}
          px={{ base: 'spacingM.base', md: 'spacingL.base' }}
          py={{ base: 'spacingM.base', md: 'spacingL.base' }}
          borderRadius={8}
          border={'solid 1px '}
          borderColor={'gray.400'}
        >
          <VStack>
            <Icon
              color={theme.colors.magenta[400]}
              icon="ph:certificate-light"
              style={{
                fontSize: `calc(${theme.fontSizes.h4.xl} + 2vw)`,
              }}
            />

            <Text
              fontSize={['10px', 'midTxt1.base', 'midTxt1.base', 'midTxt1.lg']}
            >
              {details.certification}
            </Text>
          </VStack>
        </Stack>
        <Stack
          w={'100%'}
          h={'150px'}
          bg={'#fefafb'}
          px={{ base: 'spacingM.base', md: 'spacingL.base' }}
          py={{ base: 'spacingM.base', md: 'spacingL.base' }}
          borderRadius={8}
          border={'solid 1px '}
          borderColor={'gray.400'}
        >
          <VStack>
            {id === 1 ? (
              <Icon
                color={theme.colors.magenta[400]}
                icon="fluent:laptop-briefcase-24-regular"
                style={{
                  fontSize: `calc(${theme.fontSizes.h4.xl} + 2vw)`,
                }}
              />
            ) : (
              <Icon
                color={theme.colors.magenta[400]}
                icon="ion:calendar-outline"
                style={{
                  fontSize: `calc(${theme.fontSizes.largeTxt.xl} + 2vw)`,
                }}
              />
            )}

            <Text
              fontSize={['10px', 'midTxt1.base', 'midTxt1.base', 'midTxt1.lg']}
            >
              {details.info}
            </Text>
          </VStack>
        </Stack>
      </HStack>
    </VStack>
  )
}

export default StepDescription
StepDescription.propTypes = {
  details: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}
