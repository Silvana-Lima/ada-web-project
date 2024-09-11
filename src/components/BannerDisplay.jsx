import {
  Button,
  Container,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

export const BannerDisplay = ({
  highlightxt,
  txt1,
  txt2,
  txt3,
  description,
  buttonTxt,
  txtColor,
  HLColorTxt,
  img,
  imgMobile,
  bgColor,
  linkTxt,
  ourGoald,
  aboutUs,
  useHashLink,
  linkProps,
}) => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  })
  const displayImg = useBreakpointValue({
    base: imgMobile,
    md: img,
  })
  return (
    <Container
      maxW={'100%'}
      bg={bgColor}
      py={{ base: '32px', md: '32px', lg: '80px' }}
      px={{ base: '32px', md: '32px', lg: '' }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      centerContent
    >
      {/* texto - descripcion */}
      <Container
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        gap={{ base: '10px', md: '35px', lg: '20px' }}
        maxW={['296px', '400px', '900px', '1129px']}
        maxH={['', '', '414px', '420px']}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        {/* textos */}
        {ourGoald && (
          <Stack
            maxW={['100%', '350px', '350px', '450px']}
            h={['', '', '', '420px']}
            fontWeight={'bold'}
            order={{ base: 2, md: 1, lg: 1 }}
            justifyContent={'space-between'}
            gap={['16px', '20px', '20px', '']}
          >
            <Heading
              color={txtColor}
              fontSize={['h2.base', 'h2.base', 'h2.base', 'h2.xl']}
            >
              {txt1}{' '}
              <Text
                display={'inline'}
                fontSize={['32px', '32px', '32px', '79px']}
              >
                {txt2}{' '}
              </Text>
              {txt3}{' '}
              <Text
                display={'inline'}
                color={HLColorTxt}
                bg="yellow.600"
                fontSize={['h2.base', 'h2.base', 'h2.base', 'h2.xl']}
                fontWeight={'bold'}
              >
                {highlightxt}
              </Text>
            </Heading>

            <Text
              fontSize={[
                'largeTxt.base',
                'largeTxt.base',
                'largeTxt.base',
                'largeTxt.xl',
              ]}
            >
              {description}
            </Text>

            <Stack order={3}>
              {/* agrego un hashlink para la redireccion del boton en el banner de nuestro objetivo */}
              {useHashLink && (
                <Button
                  {...linkProps}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="gray.800"
                  color="gray.0"
                  fontFamily="heading"
                  fontSize={{ base: '14px', md: '16px' }}
                  maxW={{ base: '100%', lg: '450px' }}
                  borderRadius={5}
                  _hover={{ bg: 'gray.600' }}
                  textAlign={'center'}
                >
                  {buttonTxt}
                </Button>
              )}
            </Stack>
          </Stack>
        )}
        {aboutUs && (
          <Stack
            maxW={['100%', '350px', '350px', '432px']}
            h={['', '', '', '307px']}
            fontWeight={'bold'}
            order={{ base: 2, md: 1, lg: 1 }}
            pt={[5, 0]}
            //   justifyContent={'space-between'}
          >
            <Heading
              color={txtColor}
              fontSize={['h2.base', 'h2.base', 'h2.lg', 'h2.xl']}
            >
              {txt1}{' '}
              <Text
                display={'inline'}
                color={HLColorTxt}
                bg="yellow.600"
                fontSize={['h2.base', 'h2.base', 'h2.lg', 'h1.xl']}
                fontWeight={'bold'}
              >
                {highlightxt}
              </Text>{' '}
              {txt2}
            </Heading>
          </Stack>
        )}
        {/* imagen */}
        <Stack order={{ base: 1, lg: 2 }}>
          <Image src={displayImg} maxW={'100%'} />
        </Stack>
        {/* link */}

        {isMobile && aboutUs && (
          <Stack order={3} pt={5}>
            <Link
              as={RouterLink}
              color={'yellow.600'}
              textDecoration="underline"
              textUnderlineOffset="10px"
              fontWeight={'medium'}
              to={'/training'}
            >
              {linkTxt}
            </Link>
          </Stack>
        )}
      </Container>
    </Container>
  )
}
BannerDisplay.propTypes = {
  // props requeridas
  highlightxt: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
  HLColorTxt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,

  // props no requeridas
  txt: PropTypes.string,
  txt1: PropTypes.string,
  txt2: PropTypes.string,
  txt3: PropTypes.string,
  description: PropTypes.string,
  buttonTxt: PropTypes.string,
  imgMobile: PropTypes.string,
  linkTxt: PropTypes.string,
  ourGoald: PropTypes.bool,
  aboutUs: PropTypes.bool,
  useHashLink: PropTypes.bool,
  linkProps: PropTypes.object,
}
