import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

import { teamWork } from '../../utils/constants'
import { TeamCard } from './TeamCard'

export const TeamWork = () => {
  // const isMobile = useBreakpointValue({
  //   base: true,
  //   md: false,
  // })

  return (
    <Container maxW={'1440px'} bg="gray.200">
      <Stack
        px={{ base: '16px', md: '16px', lg: '40px' }}
        py={{ base: '48px', md: '48px', lg: '80px' }}
        spacing={['24px', '40px', '50px', '80px']}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Stack
          maxW={['328px', '768px', '1160px']}
          textAlign={'center'}
          spacing={'8px'}
        >
          <Heading
            as="h1"
            fontSize={['22px', 'h1.base', 'h1.lg', 'h1.xl']}
            color={'gray.800'}
          >
            Conoce nuestro equipo de trabajo
          </Heading>
          <Text
            fontSize={[
              'largeTxt.base',
              'largeTxt.base',
              'largeTxt.lg',
              'largeTxt.xl',
            ]}
          >
            Somos personas apasionadas por empoderar a mujeres en TECH
          </Text>
        </Stack>
        <Stack maxW={['254px', '1160px']}>
          <SimpleGrid
            columns={[2, 2, 3]}
            spacingX={['12px', '12px', '50px', '90px']}
            spacingY={['12px', '12px', '25px', '40px']}
          >
            {teamWork.map(({ id, name, teamRole, image, socialLink }) => (
              <Box minW={['121px']} key={id}>
                <TeamCard
                  name={name}
                  teamRole={teamRole}
                  teamImg={image}
                  socialLink={socialLink}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  )
}
