import {
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

export const TestimonyCard = ({ comment, name, career, photo }) => {
  const theme = useTheme()
  const rightValue = useBreakpointValue({
    base: '0px',
    sm: '20px',
    md: '30px',
    lg: '50px',
    xl: '80px',
  })
  return (
    <Stack
      // maxW={'555px'}
      h={'320px'}
      maxW={'100%'}
      //maxH={'100%'}
      borderWidth="1px"
      borderRadius="md"
      borderLeftColor={'magenta.600'}
      borderLeftWidth={'8px'}
      borderLeftRadius={'xl'}
      color={'gray.800'}
      _hover={{ boxShadow: 'lg' }}
      bg={'gray.0'}
      p={'spacingM.base'}
      px={['spacingM.base', 'spacingM.base', 'spacingM.base', 'spacingL.base']}
    >
      <Icon
        icon={'ri:double-quotes-l'}
        style={{
          color: theme.colors.magenta[600],
          fontSize: '40px',
        }}
      />
      <Text
        fontSize={['midTxt1.base', 'midTxt1.base', 'midTxt1.xl', 'midTxt1.xl']}
        textAlign={'justify'}
        fontFamily={'klavikaLightItalic'}
      >
        {comment}
      </Text>
      <HStack position={'relative'}>
        <Image
          src={photo}
          borderRadius="full"
          boxSize={['48px', '48px', '48px', '72px']}
        />
        <Stack>
          <Stack position={'relative'} zIndex={1}>
            <Text
              fontSize={[
                'midTxt.base',
                'midTxt.base',
                'midTxt.base',
                'midTxt.xl',
              ]}
              fontFamily={'kMid'}
            >
              {name}
            </Text>
            <Text
              fontSize={[
                'midTxt1.base',
                'midTxt1.base',
                'midTxt1.base',
                'midTxt1.xl',
              ]}
            >
              {career}{' '}
            </Text>
          </Stack>

          <Icon
            icon={'ri:double-quotes-r'}
            style={{
              color: 'rgba(158, 0, 70, 0.08)',
              fontSize: '80px',
              position: 'absolute',
              zIndex: 0,
              right: rightValue,
            }}
          />
        </Stack>
      </HStack>
    </Stack>
  )
}

TestimonyCard.propTypes = {
  comment: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  career: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
}
