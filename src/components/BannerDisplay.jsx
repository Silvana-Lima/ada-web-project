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
  txt,
  txt1,
  description,
  buttonTxt,
  txtColor,
  HLColorTxt,
  img,
  imgMobile,
  bgColor,
  linkTxt,
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
    <Container maxW={'1440px'}>
      {/* texto - descripcion */}
      <Stack
        bg={bgColor}
        px={{ base: '32px', md: '32px', lg: '80px' }}
        py={{ base: '32px', md: '32px', lg: '80px' }}
        spacing={{ base: '16px', md: '16px', lg: '80px' }}
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        alignItems={'center'}
      >
        {/* textos */}
        <Stack
          maxW={{ base: '100%', lg: '450px' }}
          fontWeight={'bold'}
          order={{ base: 2, md: 1 }}
        >
          <Heading
            color={txtColor}
            fontSize={['h2.base', 'h2.base', 'h2.lg', 'h2.xl']}
          >
            {txt}{' '}
            <Heading
              as={'span'}
              color={HLColorTxt}
              bg="yellow.600"
              fontSize={['h2.base', 'h2.base', 'h2.lg', 'h2.xl']}
              fontWeight={'bold'}
              maxW={'max-content'}
            >
              {highlightxt}
            </Heading>{' '}
            {txt1 && txt1}
          </Heading>

          {description && (
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
          )}
          {buttonTxt && (
            <Stack order={2}>
              <Button
                maxW={{ base: '100%', lg: '450px' }}
                variant={'button-secondary'}
              >
                {buttonTxt}
              </Button>
            </Stack>
          )}
        </Stack>
        {/* imagen */}
        <Stack order={{ base: 1, lg: 2 }}>
          <Image
            src={displayImg}
            maxW={['100%', '100%', '462px']}
            // bgSize={'cover'}
            // bgPosition={"cover"}
            // bgRepeat={'no-repeat'}
          />
        </Stack>
        {/* link */}
        <Stack order={2}>
          {isMobile && (
            <Link
              color={'yellow.600'}
              textDecoration="underline"
              textUnderlineOffset="10px"
              fontWeight={'medium'}
            >
              {linkTxt}
            </Link>
          )}
        </Stack>
      </Stack>
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
  // props no requeridas
  txt1: PropTypes.string,
  description: PropTypes.string,
  buttonTxt: PropTypes.string,
  imgMobile: PropTypes.string,
  linkTxt: PropTypes.string,
}
