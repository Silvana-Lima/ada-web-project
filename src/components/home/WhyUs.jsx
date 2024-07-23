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

import vector from '@/vector-why-us.svg'

import { whyUs } from '../../utils/constants'
import { WhyUsCard } from './WhyUsCard'

export const WhyUs = () => {
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
            ¿Por qué estudiar en{' '}
            <Highlight query="ada itw?" styles={{ color: 'magenta.400' }}>
              ADA ITW?
            </Highlight>{' '}
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
            Nuestra misión es reducir la brecha de género en tecnología y esto
            lo hacemos a través del empoderamiento de las mujeres con cursos de
            programación.
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
          // maxW={'850px'}
          w={['100%', '400px', '100%', '70%']}
        >
          {whyUs.map(({ id, title, description, bgColor }) => (
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
