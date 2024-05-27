import { extendTheme } from '@chakra-ui/react'
//import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px - modifique el tamaño de 48 a 55 para que el burguer menu se siga viendo -
  lg: '62em', // 992px
  xl: '80em', // 1280px
}

const theme = extendTheme({
  breakpoints,
  // Tamaño de fuentes
  fontSizes: {
    h1: { base: '24px', lg: '36px', xl: '56px' },
    h2: { base: '20px', lg: '32px', xl: '36px' },
    h3: { base: '16px', lg: '24px', xl: '34px' },
    h4: { base: '16px', lg: '20px', xl: '26px' },
    largeTxt: { base: '16px', lg: '20px', xl: '24px' },
    midTxt: { base: '14px', lg: '18px', xl: '20px' },
    midTxt1: { base: '14px', lg: '16px', xl: '18px' },
    smTxt: { base: '12px', lg: '14px', xl: '16px' },
  },
  fonts: {
    heading: "'klavikaBold', sans-serif",
    body: "'klavikaLight', sans-serif",
    kMid: "'klavikaMedium', sans-serif",
    kRegItalic: "'klavikaRegularItalic', sans-serif",
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
      800: '#222222',
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
    // Botón customizado
    Button: {
      baseStyle: {},
      sizes: {
        lg: {
          fontSize: [
            'largeTxt.base',
            'largeTxt.base',
            'largeTxt.lg',
            'largeTxt.xl',
          ],
          px: ['8px', '8px', '32px'],
          py: ['8px', '8px', '16px'],
        },
        md: {
          fontSize: ['midTxt.base', 'midTxt.base', 'midTxt.md', 'midTxt.lg'],
          px: ['8px', '8px', '8px', '16px'],
          py: ['4px', '4px', '8px', '8px'],
        },
      },
      variants: {
        'button-primary': {
          bg: 'magenta.400',
          color: 'gray.0',
          fontFamily: 'heading',
          _hover: { bg: 'magenta.600' },
        },
        'button-secondary': {
          bg: 'gray.800',
          color: 'gray.0',
          fontFamily: 'heading',
          _hover: { bg: 'gray.600' },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'button-primary',
        fontFamily: 'heading',
      },
    },
  },
  // Tamaños de espaciado
  space: {
    spacingXl: { base: '32px', lg: '32px', xl: '48px' },
    spacingL: { base: '24px', lg: '24px', xl: '24px' },
    spacingM: { base: '16px', lg: '16px', xl: '16px' },
    spacingS: { base: '8px', lg: '8px', xl: '16px' },
    spacingXs: { base: '4px', lg: '4px', xl: '8px' },
  },
})

export default theme
