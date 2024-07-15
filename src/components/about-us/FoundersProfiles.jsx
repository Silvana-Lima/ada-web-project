import { Box, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'

import ezequielGonzalez from '/teamWork/ezequiel-gonzalez.png'
import maCeleteMedina from '/teamWork/ma-celeste-medina.png'

import { TeamCard } from './TeamCard'

export const FoundersProfiles = () => {
  return (
    <Container maxW={'1440px'} bg="gray.200">
      <Stack
        px={{ base: '32px', md: '32px', lg: '140px' }}
        py={{ base: '40px', md: '40px', lg: '80px' }}
        spacing={['16px', '26px']}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Heading
          as="h1"
          fontSize={['h1.base', 'h1.base', 'h1.lg', 'h1.xl']}
          color={'gray.800'}
        >
          Conoce a los fundadores
        </Heading>
        <Text
          textAlign={'center'}
          fontSize={[
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ]}
        >
          Apasionados por empoderar a mujeres en TECH
        </Text>
      </Stack>

      <HStack
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        spacing={['36px', '90px']}
      >
        <TeamCard
          name="Maria Celeste Medina"
          teamRole="Co-Founder"
          teamImg={maCeleteMedina}
          socialLink="https://www.linkedin.com/in/mariacelestemedina/"
        />
        <Box>
          <TeamCard
            name="Ezequiel Gonzalez"
            teamRole="Co-Founder"
            teamImg={ezequielGonzalez}
            socialLink="https://www.linkedin.com/in/ezequielgonzalez01/"
          />
        </Box>
      </HStack>
      {/* <Stack
        px={{ base: '32px', md: '32px', lg: '140px' }}
        py={'20px'}
        textAlign={['justify', 'justify', 'center']}
        alignItems={'center'}
      >
        <Text
          fontSize={['midTxt.base', 'midTxt.base', 'midTxt.lg', 'midTxt.xl']}
        >
          La historia nace de la experiencia vivida por María Celeste Medina y
          Ezequiel González, que estudiaron y trabajaron en la industria IT de
          Argentina. González, por un lado, se desempeñó por 10 años como
          desarrollador y arquitecto de Software en empresas como UNICEF,
          Epidata y Hexacta. Por su parte, su co-fundadora, se desarrolló como
          programadora de Business Intelligence y es referente regional en
          cuanto a proyectos que involucran el entrecruce de
          tecnología-educación y género. A través de su trabajo en Ada, ...
        </Text>
      </Stack> */}
    </Container>
  )
}
