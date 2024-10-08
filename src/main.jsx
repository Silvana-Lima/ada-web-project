import './assets/fonts/fonts.css'

import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import theme from '../src/themes/theme.js'
import App from './App.jsx'
import { MultiStepFormProvider } from './context/MultiStepFormContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <MultiStepFormProvider>
          <App />
        </MultiStepFormProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
