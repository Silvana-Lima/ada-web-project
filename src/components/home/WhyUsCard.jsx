import { Flex, Heading, HStack, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

export const WhyUsCard = ({ title, description }) => {
  return (
    <HStack
      w={'406px'}
      h={'200px'}
      justify={'center'}
      alignItems={'center'}
      gap={'spacingL.xl'}
      borderColor={'gray.400'}
      borderWidth="1px"
      borderRadius="md"
      color={'gray.800'}
      _hover={{ boxShadow: 'lg' }}
      bg={'gray.0'}
    >
      <Icon
        icon={'iconoir:community'}
        style={{
          fontSize: '80px',
        }}
      />
      <Flex w={'262px'} direction={'column'}>
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
}
