import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Hide,
  HStack,
  Show,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
//import customTheme from '../../themes/theme'

export const CoursesCard = ({
  title,
  career,
  descriptionL,
  descriptionS,
  date,
  duration,
  color,
}) => {
  const theme = useTheme()

  return (
    <Card
      w={['224px', '299px', '299px', '399px']}
      h={['340px', '420px', '420px', '520px']}
      py={['spacingM.xl', 'spacingL.xl', 'spacingL.xl', 'spacingXl.base']}
      px={['spacingM.xl', 'spacingM.xl', 'spacingM.xl', 'spacingXl.base']}
      overflow="hidden"
      color={'gray.600'}
    >
      <CardBody p={0}>
        <Heading
          as={'h4'}
          fontFamily={'kMid'}
          fontSize={['h4.base', 'h4.base', 'h4.base', 'h4.xl']}
        >
          {title}
        </Heading>
        <Divider
          borderColor={'#222222'}
          borderWidth={'1px'}
          mb={'spacingXs.xl'}
        />
        {/* Carrera y descripcion */}
        <Stack
          h={['250px', '250px', '300px', '367px']}
          justifyContent={'space-between'}
        >
          <Stack>
            <Text
              fontSize={[
                'largeTxt.base',
                'largeTxt.base',
                'largeTxt.base',
                'largeTxt.lg',
              ]}
              color={color}
              fontWeight={'semibold'}
            >
              {career}
            </Text>
            <Show below="lg">
              <Text
                fontSize={[
                  'midTxt1.base',
                  'midTxt1.base',
                  'midTxt1.base',
                  'midTxt1.xl',
                ]}
              >
                {descriptionS}
              </Text>
            </Show>
            <Hide below="lg">
              <Text
                fontSize={[
                  'midTxt1.base',
                  'midTxt1.base',
                  'midTxt1.base',
                  'midTxt1.xl',
                ]}
                textAlign={'justify'}
              >
                {descriptionL}
              </Text>
            </Hide>
          </Stack>
          {/* iconos - fecha - duracion -financiacion */}
          <Stack pb={[3, 5]}>
            <HStack>
              <Icon
                icon="clarity:calendar-line"
                color={color}
                style={{
                  fontSize: `calc(${theme.fontSizes.h4.base} + 1vw)`,
                }}
              />
              <Text
                lineHeight="1.2"
                fontSize={['smTxt.base', 'smTxt.base', 'smTxt.lg', 'smTxt.xl']}
              >
                {date}
              </Text>
            </HStack>
            <HStack>
              <Icon
                icon="ph:clock"
                color={color}
                style={{
                  fontSize: `calc(${theme.fontSizes.h4.base} + 1vw)`,
                }}
              />
              <Text
                lineHeight="1.2"
                fontSize={['smTxt.base', 'smTxt.base', 'smTxt.lg', 'smTxt.xl']}
              >
                {duration}
              </Text>
            </HStack>
            <HStack>
              <Icon
                icon="pepicons-print:dollar"
                color={color}
                style={{
                  fontSize: `calc(${theme.fontSizes.h4.base} + 1vw)`,
                }}
              />
              <Text
                lineHeight="1.2"
                fontSize={['smTxt.base', 'smTxt.base', 'smTxt.lg', 'smTxt.xl']}
              >
                Distintos métodos de financiación disponibles
              </Text>
            </HStack>
          </Stack>
        </Stack>
      </CardBody>

      <CardFooter p={0}>
        <Button
          variant="button-secondary"
          size={'md'}
          w={'100%'}
          h={['24px', '38px']}
        >
          Inscríbete ahora
        </Button>
      </CardFooter>
    </Card>
  )
}

CoursesCard.propTypes = {
  title: PropTypes.string.isRequired,
  career: PropTypes.string.isRequired,
  descriptionL: PropTypes.string.isRequired,
  descriptionS: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
