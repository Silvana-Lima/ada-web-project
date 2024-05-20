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
          <Heading size="md">{title}</Heading>
          <Divider />
          <Text fontWeight={'bold'}>{career} </Text>
          <Text>{description}</Text>
          <HStack>
            <Icon
              icon="clarity:calendar-line"
              color="#cd0055"
              fontSize={'40px'}
            />
            <Text>{date}</Text>
          </HStack>
          <HStack>
            <Icon icon="ph:clock" color="#cd0055" fontSize={'40px'} />
            <Text>{duration} </Text>
          </HStack>

          <HStack>
            <Icon
              icon="pepicons-print:dollar"
              color="#cd0055"
              fontSize={'40px'}
            />
            <Text>Distintos métodos de financiación disponibles</Text>
          </HStack>
        </Stack>
      </CardBody>

      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          Inscribite ahora
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
