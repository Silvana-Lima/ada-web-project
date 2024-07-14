import { Container, Grid, Heading, Hide, Show, Text } from '@chakra-ui/react'

import { studentTestimonials } from '../../utils/constants'
import { TestimonyCard } from '../home/testimonials/TestimonyCard'

export const Testimonials = () => {
  return (
    <Container maxW={'100%'} bg={'gray.200'} centerContent>
      <Container
        maxW={['100%', '1344px']}
        px={['spacingM.base', 'spacingM.base', 'spacingM.base', 'spacingXl.xl']}
        py={['spacingXl.lg', 'spacingXl.lg', 'spacingXl.lg', '80px']}
      >
        <Show below="lg">
          <Container maxWidth={['100%', '100%', '100%', '838px']} p={0}>
            <Heading
              as="h1"
              fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
              color={'gray.800'}
              textAlign={['start', 'start', 'center', 'center']}
              mb={[
                'spacingM.base',
                'spacingM.base',
                'spacingM.base',
                'spacingL.base',
              ]}
            >
              Testimonios
            </Heading>
            <Text
              fontSize={[
                'largeTxt.base',
                'largeTxt.base',
                'largeTxt.lg',
                'largeTxt.xl',
              ]}
              textAlign={['start', 'start', 'center', 'center']}
              mb={['spacingL.xl', 'spacingL.xl', 'spacingL.xl', '']}
            >
              En nuestra organización social, nos enorgullece empoderar a las
              mujeres mediante la educación tecnológica. A continuación, te
              presentamos algunos testimonios que ilustran el impacto positivo
              que hemos tenido en la vida de nuestras alumnas.
            </Text>
          </Container>
        </Show>
        <Container maxW={'1164px'} centerContent>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
            ]}
            templateRows={[
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(1, 1fr)',
            ]}
            gap={'40px'}
          >
            <Hide below="lg">
              {studentTestimonials.map(
                ({ name, career, comment, photo, id, enterprise }) => {
                  if (enterprise) {
                    return (
                      <TestimonyCard
                        key={id}
                        comment={comment}
                        name={name}
                        career={career}
                        photo={photo}
                        h={['345px', '260px', '300px', '400px']}
                      />
                    )
                  }
                  return null
                }
              )}
            </Hide>
            <Show below="lg">
              {studentTestimonials
                .slice(0, 4)
                .map(({ name, career, comment, photo, id }) => (
                  <TestimonyCard
                    key={id}
                    comment={comment}
                    name={name}
                    career={career}
                    photo={photo}
                    h={['330px', '300px', '300px', '420px']}
                  />
                ))}
            </Show>
          </Grid>
        </Container>
      </Container>
    </Container>
  )
}
