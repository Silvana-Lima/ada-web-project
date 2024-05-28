import {
  Button,
  Card,
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
}) => {
  const theme = useTheme()

  return (
    <Card
      w={'100%'}
      h={'100%'}
      maxW={['224px', '300px', '350px', '399px']}
      // maxH={['340px', '340px', '340px', '520px']}
      py={['spacingL.xl', 'spacingL.xl', 'spacingL.xl', 'spacingXl.base']}
      px={['spacingM.xl', 'spacingM.xl', 'spacingM.xl', 'spacingXl.base']}
    >
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
      <Stack
        py={['spacingXs.lg', 'spacingXs.lg', 'spacingXs.lg', 'spacingXs.xl']}
      >
        <Text
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
          ]}
          fontFamily={'kMid'}
          color={'magenta.400'}
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
      <Stack
        justify={'center'}
        align={'flex-start'}
        py={['spacingS.base', 'spacingS.base', 'spacingS.base', 'spacingL.xl']}
      >
        <HStack>
          <Icon
            icon="clarity:calendar-line"
            color={'#cd0055'}
            style={{
              fontSize: `calc(${theme.fontSizes.h4.base} + 1vw)`,
            }}
          />
          <Text fontSize={['smTxt.base', 'smTxt.base', 'smTxt.lg', 'smTxt.xl']}>
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
          <Text fontSize={['smTxt.base', 'smTxt.base', 'smTxt.lg', 'smTxt.xl']}>
            {duration}
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
          <Text fontSize={['smTxt.base', 'smTxt.base', 'smTxt.lg', 'smTxt.xl']}>
            Distintos métodos de financiación disponibles
          </Text>
        </HStack>
      </Stack>

      <Button variant="button-secondary" size={'md'} w={'100%'}>
        Inscríbete ahora
      </Button>
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
}
