import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

export const TestimonyCard = ({ comment, name, career, photo, h }) => {
  const theme = useTheme()
  const rightValue = useBreakpointValue({
    base: '-8px',
    sm: '20px',
    md: '30px',
    lg: '50px',
    xl: '120px',
  })
  return (
    <Stack
      maxW={'100%'}
      h={h}
      borderWidth="1px"
      borderRadius="md"
      borderLeftColor={'magenta.600'}
      borderLeftWidth={'8px'}
      borderLeftRadius={'xl'}
      color={'gray.800'}
      bg={'gray.0'}
      p={['12px', '20px', '30px', 'spacingM.base']}
      px={['spacingM.base', 'spacingM.base', 'spacingM.base', 'spacingL.base']}
      justifyContent="space-between"
      gap={0}
    >
      <Box boxSize={['30px', '40px']}>
        <Icon
          icon={'ri:double-quotes-l'}
          style={{
            color: theme.colors.magenta[600],
            width: '100%',
            height: '100%',
          }}
        />
      </Box>

      <Text
        fontSize={['midTxt1.base', 'midTxt1.base', 'midTxt1.xl', 'midTxt1.xl']}
        textAlign={'justify'}
        fontFamily={'klavikaLightItalic'}
        h={{ base: '108px', md: '160px', lg: '180px' }}
      >
        {comment}
      </Text>
      <HStack position={'relative'} mt="auto">
        <Image
          src={photo}
          borderRadius="full"
          boxSize={['48px', '48px', '48px', '62px']}
        />
        <Stack>
          <Stack position={'relative'} zIndex={1} gap={0}>
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

            {career && (
              <Box minHeight="24px">
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
              </Box>
            )}
          </Stack>

          <Box
            boxSize={['60px', '80px']}
            position={'absolute'}
            zIndex={0}
            right={rightValue}
            top={0}
          >
            <Icon
              icon={'ri:double-quotes-r'}
              style={{
                color: 'rgba(158, 0, 70, 0.08)',
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
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
  h: PropTypes.string.isRequired,
}
