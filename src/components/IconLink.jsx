import { Link } from '@chakra-ui/react'

export const IconLink = ({ icon, ...props }) => {
  return (
    <Link
      color={'#d07efc'}
      fontSize={'40px'}
      _hover={{ color: '#eac3ff' }}
      {...props}
    >
      {icon}
    </Link>
  )
}
