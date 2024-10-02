import {
  Container,
  Flex,
  Grid,
  Heading,
  Highlight,
  Image,
  Show,
  Stack,
  Text,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

import vector from '@/vector-why-us.svg'

import { WhyUsCard } from './WhyUsCard'

export const WhyUs = ({
  dataCard,
  titleBlack1,
  titleColor1,
  titleBlack2,
  titleColor2,
  description,
}) => {
  return (
    <Container
      maxW={'100%'}
      py={'40px'}
      px={['spacingM.base', '40px', '40px', '40px']}
      bg={'gray.200'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      position="relative"
      zIndex={-3}
    >
      <Show above="lg">
        <Image
          src={vector}
          maxW={['271px', '400px', '400px', '571px']}
          position="absolute"
          left={['85px', '100px', '100px', '100px']}
          zIndex={-1}
        />
      </Show>

      <Flex
        color={'gray.800'}
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems={['center', 'center', 'normal', 'normal']}
        gap={'40px'}
        px={'20px'}
        py={'40px'}
        position="relative"
        zIndex={1}
        justifyContent={'center'}
      >
        <Stack
          flexDirection={['row', 'row', 'row', 'column']}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxH={'500px'}
          maxWidth={['100%', '100%', '100%', '342px']}
          gap={'spacingM.base'}
        >
          <Heading
            as="h1"
            maxW={['117px', '280px', '280px', '316px']}
            fontSize={['h1.base', 'h2.lg', 'h1.lg', 'h1.xl']}
            color={'gray.800'}
            textAlign={'left'}
          >
            {titleBlack1}{' '}
            <Highlight query={titleColor1} styles={{ color: 'magenta.400' }}>
              {titleColor1}
            </Highlight>
            {titleBlack2 && (
              <>
                {' '}
                {titleBlack2}{' '}
                <Highlight
                  query={titleColor2}
                  styles={{ color: 'magenta.400' }}
                >
                  {titleColor2}
                </Highlight>
              </>
            )}
          </Heading>
          <Text
            fontSize={[
              'midTxt.base',
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
            ]}
            align={'start'}
            textAlign={['left', 'justify']}
            maxW={['190px', '316px']}
          >
            {description}
          </Text>
        </Stack>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
          ]}
          templateRows={[
            'repeat(4, 1fr)',
            'repeat(4, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={['30px', '30px', '30px', '30px']}
          w={['100%', '400px', '100%', '70%']}
        >
          {dataCard.map(({ id, title, description, bgColor }) => (
            <WhyUsCard
              key={id}
              title={title}
              description={description}
              bgColor={bgColor}
              maxW={'406px'}
              pY={'spacingL.base'}
              pX={'spacingL.base'}
            />
          ))}
        </Grid>
      </Flex>
    </Container>
  )
}

WhyUs.propTypes = {
  dataCard: PropTypes.array.isRequired,
  titleBlack1: PropTypes.string.isRequired,
  titleColor1: PropTypes.string.isRequired,
  titleBlack2: PropTypes.string,
  titleColor2: PropTypes.string,
  description: PropTypes.string.isRequired,
}
