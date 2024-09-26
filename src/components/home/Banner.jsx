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
import { Link } from 'react-router-dom'

export const Banner = ({
  img,
  title,
  description,
  addButton,
  btnText,
  bgColor,
}) => {
  return (
    <Stack bg={bgColor} justifyContent={'center'}>
      <Container
        maxW={['360px', '360px', '1235px', '1235px']}
        color={'magenta.600'}
        display={'flex'}
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems={'center'}
        gap={'spacingM.base'}
        py={['spacingXl.base', 'spacingXl.base', 'spacingXl.base', '80px']}
        px={['spacingM.base', '', '', '40px']}
      >
        <Image src={img} maxW={['100%', '100%', '462px']} />
        <VStack
          maxW={['100%', '682px']}
          alignItems={['center', 'center', 'center', 'flex-start']}
          gap={['spacingS.base', 'spacingXl.base']}
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

          {addButton && (
            <Button as={Link} to="/training" size={'lg'} w={['100%', '382px']}>
              {btnText}
            </Button>
          )}
        </VStack>
      </Container>
    </Stack>
  )
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  addButton: PropTypes.bool.isRequired,
}
