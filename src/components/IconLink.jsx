import { Link } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const IconLink = ({ icon, ...props }) => {
  return (
    <Link
      color={'#d07efc'}
      fontSize={'35px'}
      _hover={{ color: '#eac3ff' }}
      {...props}
    >
      {icon}
    </Link>
  )
}

IconLink.propTypes = {
  icon: PropTypes.any.isRequired,
}
