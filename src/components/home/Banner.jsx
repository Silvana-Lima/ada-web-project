import {
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const Banner = ({ img, title, description, btnText, bgColor }) => {
  return (
    <Stack bg={bgColor} minH={'100vh'} justifyContent={'center'}>
      <Container
        maxW={['328px', '328px', '1195px']}
        color={'magenta.600'}
        display={'flex'}
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems={'center'}
        gap={5}
        p={[0, 0, 5, 5]}
      >
        <Image src={img} w={['100%', '100%', '462px']} />
        <VStack
          maxW={['100%', '682px']}
          alignItems={['center', 'center', 'center', 'flex-start']}
          gap={10}
        >
          <Heading
            as={'h2'}
            fontSize={['h2.base', 'h2.base', 'h2.lg', 'h2.xl']}
            fontFamily={'heading'}
            textAlign={['center', 'center', 'center', 'left']}
          >
            {title}
          </Heading>
          <Text
            fontSize={[
              'largeTxt.xl.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
            textAlign={['center', 'center', 'center', 'left']}
          >
            {description}
          </Text>

          <Button size={'lg'} w={['100%', '23rem']}>
            {btnText}
          </Button>
        </VStack>
      </Container>
    </Stack>
  )
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
}
