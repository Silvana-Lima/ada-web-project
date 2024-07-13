import { Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { LiaLinkedin } from 'react-icons/lia'

export const TeamCard = ({ name, teamRole, teamImg, socialLink }) => {
  return (
    <Stack
      maxW={['121px', '150px', '200px', '327px']}
      px={{ base: '10px', md: '10px', lg: '16px' }}
      py={{ base: '8px', md: '8px', lg: '16px' }}
      bg={'gray.0'}
      minH={'170px'}
      borderRadius={'4px'}
    >
      {/* Imagen */}
      <Stack w={'100%'}>
        <Image
          h={['78px', '100px', '170px', '190px']}
          src={teamImg}
          objectFit={'cover'}
          alt="Imagen de mienbro del equipo"
        />
      </Stack>
      {/* Nombre - cargo */}
      <Stack flex={1}>
        <Stack gap={'2px'} textAlign={'center'} alignItems={'Center'}>
          <Heading
            fontSize={['smTxt.base', 'smTxt.base', 'smTxt.lg', 'smTxt.xl']}
          >
            {name}
          </Heading>
          <Text lineHeight={'0.8'} fontSize={['10px', '12px', '14px']}>
            {teamRole}
          </Text>
          {/* Linkedin */}

          <Link
            href={socialLink}
            isExternal
            color={'purple.400'}
            fontSize={['20px', '35px', '40px', '50px']}
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
  socialLink: PropTypes.string,
}
