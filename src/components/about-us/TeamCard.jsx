import { Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { LiaLinkedin } from 'react-icons/lia'

export const TeamCard = ({ name, teamRole, teamImg }) => {
  return (
    <Stack
      maxW={['121px', '150px', '200px', '327px']}
      px={{ base: '10px', md: '10px', lg: '16px' }}
      py={{ base: '8px', md: '8px', lg: '16px' }}
      h={'100%'}
    >
      {/* Imagen */}
      <Stack w={'100%'}>
        <Image
          h={['100px', '120px', '170px', '190px']}
          src={teamImg}
          objectFit={'cover'}
          alt="Imagen de mienbro del equipo"
        />
      </Stack>
      {/* Nombre - cargo */}
      <Stack h={'100%'}>
        <Stack gap={'2px'} textAlign={'center'} alignItems={'Center'}>
          <Heading
            fontSize={['smTxt.base', 'smTxt.base', 'smTxt.lg', 'smTxt.xl']}
          >
            {name}
          </Heading>
          <Text fontSize={['10px', '12px', '14px']}>{teamRole}</Text>
          {/* Linkedin */}
          <Link
            href="https://chakra-ui.com"
            isExternal
            color={'purple.400'}
            fontSize={['15px', '30px', '40px', '50px']}
          >
            <LiaLinkedin />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}
TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  teamRole: PropTypes.string.isRequired,
  teamImg: PropTypes.string.isRequired,
}
