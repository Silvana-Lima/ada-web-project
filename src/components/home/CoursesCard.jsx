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
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

export const CoursesCard = ({ title, career, description, date, duration }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading as={'h4'} size="md" fontFamily={'kMid'} fontSize={['26px']}>
            {title}
          </Heading>
          <Divider borderColor={'#222222'} borderWidth={'1.5px'} />
          <Text fontSize={'midTxt'} color={'magenta.400'}>
            {career}{' '}
          </Text>
          <Text fontSize={'midTxt1'}>{description}</Text>
          <HStack>
            <Icon
              icon="clarity:calendar-line"
              color={'#cd0055'}
              fontSize={'26px'}
            />
            <Text fontSize={'16px'}>{date}</Text>
          </HStack>
          <HStack>
            <Icon icon="ph:clock" color="#cd0055" fontSize={'26px'} />
            <Text fontSize={'16px'}>{duration} </Text>
          </HStack>

          <HStack>
            <Icon
              icon="pepicons-print:dollar"
              color="#cd0055"
              fontSize={'26px'}
            />
            <Text fontSize={'16px'}>
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
