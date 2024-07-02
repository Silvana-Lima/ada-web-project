// import { Box, Show } from '@chakra-ui/react'

import AboutUsImg from '../../assets/image/bannerUsImg.png'
import networkingImg from '../../assets/networkingImg.png'
import { BannerDisplay } from '../BannerDisplay'
import { AboutUsVideo } from './AboutUsVideo'

export const AboutUsSection = () => {
  return (
    <>
      {/* Video about us */}
      <AboutUsVideo />
      {/* <Show below="md">
        <Box>
          <AboutUsVideo />
        </Box>
      </Show> */}

      {/* Banner about us */}
      <BannerDisplay
        bgColor={'magenta.400'}
        aboutUs={true}
        txtColor={'gray.0'}
        txt1={'Creemos que la tecnología tiene un'}
        highlightxt={' alto poder transformador'}
        HLColorTxt={'#4a4a4a'}
        txt2={'y buscamos generar oportunidades para todas las mujeres'}
        img={AboutUsImg}
        imgMobile={networkingImg}
        linkTxt={'Conoce nuestras capacitaciones'}
      />
    </>
  )
}
