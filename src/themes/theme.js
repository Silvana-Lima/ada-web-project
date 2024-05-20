import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  // Tamaño de fuentes
  fontSizes: {
    h1: '56px',
    h2: '48px',
    h3: '40px',
    h4: '32px',
    h5: '24px',
    h6: '20px',
    largeTxt: '24px',
    midTxt: '20px',
    midTxt1: '18px',
  },
  // Peso de fuente
  fontWeights: {
    bold: 'bold',
    light: '300',
  },
  // Paleta de colores
  colors: {
    magenta: {
      200: '#ff92c0',
      400: '#cd0055',
      600: '#9e0046',
    },
    gray: {
      0: '#FFFFFF',
      400: '#bcbcbc',
      600: '#4a4a4a',
      800: '391f1f',
    },
    orange: {
      200: '#ffbf7d',
      400: '#ff7d00',
      800: '#e14d00',
    },
    yellow: {
      600: 'f0f000',
    },
    purple: {
      200: '#eac4ff',
      400: '#d07efc',
      600: '#be44ff',
    },
  },
  // Estilos generales
  styles: {
    global: {
      body: {
        color: 'gray.600',
        fontFamily: 'Klavika, sans-serif',
      },
    },
  },
  // Eliminación de padding por defecto en componenente Container
  components: {
    Container: {
      baseStyle: {
        px: 0,
        py: 0,
      },
    },
  },
})

export default theme
