import { Flex, Stack } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/header/Header'
import { Whatsapp } from './components/home/Whatsapp'
import { AboutUs } from './pages/AboutUs'
import { Backend } from './pages/Backend'
import { Careers } from './pages/Careers'
import FormSteps from './pages/form/FormSteps'
import { Frontend } from './pages/Frontend'
import { Home } from './pages/Home'
import { IACourse } from './pages/IACourse'
import { PythonCourse } from './pages/PythonCourse'
import { QACourse } from './pages/QACourse'
import { Training } from './pages/Training'
import { UxUiCourse } from './pages/UxUiCourse'
import ScrollToTop from './utils/scrollToTop'

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
            <Route path="/inscription" element={<FormSteps />} />
            <Route path="/ia" element={<IACourse />} />
            <Route path="/ux-ui" element={<UxUiCourse />} />
            <Route path="/qa" element={<QACourse />} />
            <Route path="/python" element={<PythonCourse />} />
            <Route path="/front-end" element={<Frontend />} />
            <Route path="/back-end" element={<Backend />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </ScrollToTop>
      </Stack>
      <Footer />
      <Whatsapp />
    </Flex>
  )
}

export default App
