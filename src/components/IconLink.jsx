import { Link } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const IconLink = ({ icon, ...props }) => {
  return (
    <Link
      color={'purple.400'}
      fontSize={'35px'}
      _hover={{ color: 'purple.200' }}
      {...props}
    >
      {icon}
    </Link>
  )
}

IconLink.propTypes = {
  icon: PropTypes.any.isRequired,
}
