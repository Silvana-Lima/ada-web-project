import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

export const WhyUsCard = ({ title, description, bgColor, borderW, pX, pY }) => {
  return (
    <HStack
      justify={'center'}
      alignItems={'center'}
      gap={'spacingL.xl'}
      borderColor={'gray.400'}
      borderWidth={borderW}
      borderRadius="md"
      color={'gray.800'}
      _hover={{ boxShadow: 'lg' }}
      bg={bgColor}
      px={pX}
      py={pY}
    >
      <Box>
        <Icon
          icon={'iconoir:community'}
          style={{
            fontSize: '80px',
          }}
        />
      </Box>

      <Flex direction={'column'}>
        <Heading as={'h4'} fontSize={'largeTxt.xl'}>
          {title}
        </Heading>
        <Text fontSize={'midTxt1.xl'} textAlign={'justify'}>
          {description}
        </Text>
      </Flex>
    </HStack>
  )
}

WhyUsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  borderW: PropTypes.string,
  pY: PropTypes.string,
  pX: PropTypes.string,
}
