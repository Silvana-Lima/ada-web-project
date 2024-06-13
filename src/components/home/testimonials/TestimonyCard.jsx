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
      maxW={'100%'}
      h={['312px', '312px', '312px', '320px']}
      borderWidth="1px"
      borderRadius="md"
      borderLeftColor={'magenta.600'}
      borderLeftWidth={'8px'}
      borderLeftRadius={'xl'}
      color={'gray.800'}
      bg={'gray.0'}
      p={'spacingM.base'}
      px={['spacingM.base', 'spacingM.base', 'spacingM.base', 'spacingL.base']}
      justifyContent="space-between"
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
        // modifique los altos para que no se superpongan texto con avatar
        h={{ base: '200px', md: '160px', lg: '200px' }}
      >
        {comment}
      </Text>
      <HStack position={'relative'} mt="auto">
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
              // agregue bottom para acomodar mas o menos las comillas
              bottom: '-5px',
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
