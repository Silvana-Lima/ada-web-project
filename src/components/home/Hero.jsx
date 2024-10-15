import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export const Hero = ({
  title,
  description,
  // route,
  // btnText,
  bgVideo,
  formatVideo,
}) => {
  return (
    <Container
      position="relative"
      minH={'100vh'}
      maxW={['100%', '1440px']}
      display={'flex'}
      alignItems={'center'}
      color={'#ffffff'}
      overflow="hidden"
      mb={'spacingXl.base'}
    >
      <Box
        as={formatVideo}
        autoPlay
        loop
        muted
        src={bgVideo}
        type="video/mp4"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-2}
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgGradient="linear(to-t, rgba(0,0,0,0.30), rgba(158,0,70,0.16))"
        zIndex={-1}
        pointerEvents="none"
      />

      <VStack
        maxW={['60%', '50%']}
        h={'50%'}
        marginLeft={['6%', '10%']}
        alignItems={'flex-start'}
        gap={['spacingM.base', 'spacingL.base']}
        position="relative"
        zIndex={1}
      >
        <Heading as="h1" fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}>
          {title}{' '}
        </Heading>
        <Text
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
        >
          {description}
        </Text>
        {/* TODO desarrollo de una nueva pagina que contenga carreras y cursos - a la cual se acceda c/este boton - la logica esta funcionando*/}

        {/* <Button as={Link} to={route} variant={'buttonPrimary'} size={'lg'}>
          {btnText}
        </Button> */}
      </VStack>
    </Container>
  )
}

Hero.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  bgVideo: PropTypes.string.isRequired,
  formatVideo: PropTypes.string.isRequired,
}
