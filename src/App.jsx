import { Flex, Stack } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/header/Header'
import { AboutUs } from './pages/AboutUs'
import { Home } from './pages/Home'

function App() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Header />
      <Stack flex="1" alignItems={'center'} bg={'secondary.50'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </Stack>
      <Footer />
    </Flex>
  )
}

export default App
