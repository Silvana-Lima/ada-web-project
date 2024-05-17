import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        px: 0,
      },
    },
  },
})

export default theme
