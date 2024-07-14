import {
  Container,
  Grid,
  Heading,
  Highlight,
  HStack,
  Text,
} from '@chakra-ui/react'

import { whyAda } from '../../utils/constants'
import { WhyUsCard } from '../home/WhyUsCard'

export const WhyAda = () => {
  return (
    <Container
      maxW={'100%'}
      bg={'gray.200'}
      px={{ base: 'spacingM.base', md: '32px', lg: '' }}
      py={'40px'}
    >
      <Container
        color={'gray.800'}
        maxW={['100%', '480px', '900px', '1129px']}
        display={'flex'}
        flexDirection={'column'}
        alignItems={['center', 'center', 'center', 'normal']}
      >
        <HStack
          py={['20px', '20px', '40px', '40px']}
          justifyContent={'space-between'}
          gap={'40px'}
        >
          <Heading
            as="h1"
            maxW={['117px', '316px']}
            fontSize={['h1.base', 'h1.lg', 'h1.lg', 'h1.xl']}
            color={'gray.800'}
            textAlign={'left'}
          >
            ¿Por qué en{' '}
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
            maxW={['190px', '400px']}
            align={'start'}
          >
            Nuestra misión es reducir la brecha de género en tecnología y esto
            lo hacemos a través del empoderamiento de las mujeres con cursos de
            programación.
          </Text>
        </HStack>
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
          pb={'40px'}
          gap={['30px', '30px', '30px', '40px']}
          w={['100%', '400px', '100%', '100%']}
        >
          {whyAda.map(({ id, title, description, bgColor }) => (
            <WhyUsCard
              key={id}
              title={title}
              description={description}
              bgColor={bgColor}
              pY={'30px'}
              pX={'30px'}
            />
          ))}
        </Grid>
      </Container>
    </Container>
  )
}
