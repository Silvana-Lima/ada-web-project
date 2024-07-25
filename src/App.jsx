import { Flex, Stack } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/header/Header'
import { Whatsapp } from './components/home/Whatsapp'
import { AboutUs } from './pages/AboutUs'
import { Home } from './pages/Home'
import { InscriptionForm } from './pages/InscriptionForm'
import { Training } from './pages/Training'
import ScrollToTop from './utils/scrollToTop'
import { IACourse } from './pages/IACourse'

function App() {
  return (
    <Flex flexDirection="column" minH="100vh" position="relative">
      <Header />
      <Stack
        flex="1"
        alignItems={'center'}
        bg={'secondary.50'}
        position="relative"
      >
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/training" element={<Training />} />
            <Route path="/inscription" element={<InscriptionForm />} />
            <Route path="/ia" element={<IACourse />} />
          </Routes>
        </ScrollToTop>
      </Stack>
      <Footer />
      <Whatsapp />
    </Flex>
  )
}

export default App
