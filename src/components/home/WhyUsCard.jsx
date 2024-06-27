import { Flex, Heading, HStack, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

export const WhyUsCard = ({ title, description, bgColor }) => {
  return (
    <HStack
      maxW={'406px'}
      justify={'center'}
      alignItems={'center'}
      gap={'spacingL.xl'}
      borderColor={'gray.400'}
      borderWidth="1px"
      borderRadius="md"
      color={'gray.800'}
      _hover={{ boxShadow: 'lg' }}
      bg={bgColor}
      p={5}
    >
      <Icon
        icon={'iconoir:community'}
        style={{
          fontSize: '80px',
        }}
      />
      <Flex maxW={'262px'} direction={'column'}>
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
}
