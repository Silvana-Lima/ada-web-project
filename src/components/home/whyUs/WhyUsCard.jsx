import { Box, Flex, Heading, HStack, Text, useTheme } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

export const WhyUsCard = ({
  title,
  description,
  icon = 'iconoir:community',
  iconColor,
  bgColor = 'gray.0',
  borderW,
  maxW,
  pX,
  pY,
}) => {
  const theme = useTheme()
  return (
    <HStack
      justify={'center'}
      alignItems={'center'}
      gap={'spacingL.xl'}
      borderColor={'gray.400'}
      borderWidth={borderW}
      borderRadius="md"
      color={'gray.800'}
      bg={bgColor}
      px={pX}
      py={pY}
      maxW={maxW}
      minWidth={'317px'}
    >
      <Box w={'80px'}>
        <Icon
          icon={icon}
          style={{
            fontSize: `calc(${theme.fontSizes.h2.xl} + 2vw)`,
            color: `${iconColor}`,
          }}
        />
      </Box>

      <Flex direction={'column'}>
        <Heading
          as={'h4'}
          fontSize={[
            'largeTxt.lg',
            'largeTxt.lg',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
        >
          {title}
        </Heading>
        <Text
          fontSize={[
            'smTxt.base',
            'midTxt1.base',
            'midTxt1.base',
            'midTxt1.xl',
          ]}
          textAlign={'justify'}
        >
          {description}
        </Text>
      </Flex>
    </HStack>
  )
}

WhyUsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderW: PropTypes.string,
  pY: PropTypes.string,
  pX: PropTypes.string,
  maxW: PropTypes.string,
}
