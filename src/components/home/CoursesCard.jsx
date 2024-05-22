import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
//import customTheme from '../../themes/theme'

export const CoursesCard = ({ title, career, description, date, duration }) => {
  const theme = useTheme()

  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading
            as={'h4'}
            size="md"
            fontFamily={'kMid'}
            fontSize={['h4.base', 'h4.base', 'h4.lg', 'h4.xl']}
          >
            {title}
          </Heading>
          <Divider borderColor={'#222222'} borderWidth={'1.5px'} />
          <Text
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.lg',
            ]}
            fontFamily={'kMid'}
            color={'magenta.400'}
          >
            {career}{' '}
          </Text>
          <Text
            fontSize={[
              'midTxt1.base',
              'midTxt1.base',
              'midTxt1.lg',
              'midTxt1.xl',
            ]}
          >
            {description}
          </Text>
          <HStack>
            <Icon
              icon="clarity:calendar-line"
              color={'#cd0055'}
              style={{
                fontSize: `calc(${theme.fontSizes.h4.base} + 1vw)`,
              }}
            />
            <Text
              fontSize={['smTxt.base', 'smTxt.base', 'smTxt.lg', 'smTxt.xl']}
            >
              {date}
            </Text>
          </HStack>
          <HStack>
            <Icon
              icon="ph:clock"
              color="#cd0055"
              style={{
                fontSize: `calc(${theme.fontSizes.h4.base} + 1vw)`,
              }}
            />
            <Text
              fontSize={['smTxt.base', 'smTxt.base', 'smTxt.lg', 'smTxt.xl']}
            >
              {duration}{' '}
            </Text>
          </HStack>

          <HStack>
            <Icon
              icon="pepicons-print:dollar"
              color="#cd0055"
              style={{
                fontSize: `calc(${theme.fontSizes.h4.base} + 1vw)`,
              }}
            />
            <Text
              fontSize={['smTxt.base', 'smTxt.base', 'smTxt.lg', 'smTxt.xl']}
            >
              Distintos métodos de financiación disponibles
            </Text>
          </HStack>
        </Stack>
      </CardBody>

      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          fontFamily={'kMid'}
          fontSize={'midTxt1'}
          w={'100%'}
          bg={'#222222'}
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
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
}
