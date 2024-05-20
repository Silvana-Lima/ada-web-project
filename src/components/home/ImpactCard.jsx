import { Container, Image, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const ImpactCard = ({ image, number, description }) => {
  return (
    <Container
      maxW={'346px'}
      maxH={'193px'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      borderColor={'#BCBCBC'}
      borderWidth="1px"
      borderRadius="md"
      color={'#4A4A4A'}
      py={5}
    >
      <Image src={image} />
      <Text fontSize={'h2'} fontWeight={'bold'} color={'gray.800'}>
        {number}
      </Text>
      <Text fontSize={'midTxt1'} align={'center'}>
        {description}
      </Text>
      {/* <Text fontSize={['30px', '30px', '30px', '36px']} fontWeight={'bold'}>
        {number}
      </Text> */}
    </Container>
  )
}

ImpactCard.propTypes = {
  image: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
