import { Container, Text } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

export const ImpactCard = ({ icon, number, description }) => {
  const theme = useTheme()
  return (
    <Container
      maxW={['280px', '346px']}
      maxH={['120px', '193px']}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      borderColor={'#BCBCBC'}
      borderWidth="1px"
      borderRadius="md"
      color={'#4A4A4A'}
      pt={[2, 2, 4, 5]}
      pb={[2, 2, 3, 3]}
      _hover={{ boxShadow: 'lg' }}
    >
      <Icon
        icon={icon}
        style={{
          fontSize: `calc(${theme.fontSizes.h2.xl} + 2vw)`,
          color: '#ff7d00',
        }}
      />
      <Text
        fontSize={['h2.base', 'h2.base', 'h2.lg', 'h2.xl']}
        fontWeight={'bold'}
        color={'gray.800'}
      >
        {/* modifico para que me mantenga el espacio aun sin data */}
        {number ? number : <span>&nbsp;</span>}
      </Text>
      <Text
        fontSize={['midTxt1.base', 'midTxt1.base', 'midTxt1.xl', 'midTxt1.xl']}
        align={'center'}
        w={'279px'}
      >
        {description}
      </Text>
    </Container>
  )
}

ImpactCard.propTypes = {
  icon: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
