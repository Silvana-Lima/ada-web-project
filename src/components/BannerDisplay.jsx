import {
  Box,
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
      //h={['478px', '580px']}
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
        spacing={{ base: '10px', md: '16px', lg: '16px' }}
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        maxW={['296px', '296px', '900px', '1154px']}
        maxH={['414px', '414px', '414px', '420px']}
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
          >
            <Heading
              color={txtColor}
              fontSize={['h2.base', 'h2.base', 'h2.lg', 'h2.xl']}
            >
              {txt1}{' '}
              <Text
                display={'inline'}
                fontSize={['32px', '32px', '40px', '85px']}
              >
                {txt2}{' '}
              </Text>
              {txt3}{' '}
              <Text
                display={'inline'}
                color={HLColorTxt}
                bg="yellow.600"
                fontSize={['h2.base', 'h2.base', 'h2.lg', 'h2.xl']}
                fontWeight={'bold'}
              >
                {highlightxt}
              </Text>
            </Heading>

            <Box>
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
            </Box>

            <Stack order={3}>
              <Button
                maxW={{ base: '100%', lg: '450px' }}
                variant={'button-secondary'}
              >
                {buttonTxt}
              </Button>
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
          <Image src={displayImg} maxW={['100%', '100%', '100%', '100%']} />
        </Stack>
        {/* link */}

        {isMobile && (
          <Stack order={3} pt={5}>
            <Link
              color={'yellow.600'}
              textDecoration="underline"
              textUnderlineOffset="10px"
              fontWeight={'medium'}
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
  txt: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
  HLColorTxt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  ourGoald: PropTypes.bool.isRequired,
  aboutUs: PropTypes.bool.isRequired,
  // props no requeridas
  txt1: PropTypes.string,
  txt2: PropTypes.string,
  txt3: PropTypes.string,
  description: PropTypes.string,
  buttonTxt: PropTypes.string,
  imgMobile: PropTypes.string,
  linkTxt: PropTypes.string,
}
