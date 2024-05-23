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
      p={5}
    >
      <Image src={image} />
      <Text
        fontSize={['h2.base', 'h2.base', 'h2.lg', 'h2.xl']}
        fontWeight={'bold'}
        color={'gray.800'}
      >
        {number}
      </Text>
      <Text
        fontSize={['midTxt1.base', 'midTxt1.base', 'midTxt1.lg', 'midTxt1.lg']}
        align={'center'}
      >
        {description}
      </Text>
    </Container>
  )
}

ImpactCard.propTypes = {
  image: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
