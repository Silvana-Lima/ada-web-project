// Import Swiper React components
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles.css'

import { Image } from '@chakra-ui/react'
// import required modules
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// logos
import accenture from '/hiringCompanies/accenture.svg'
import aerolab from '/hiringCompanies/aerolab.svg'
import gire from '/hiringCompanies/gire.svg'
import globant from '/hiringCompanies/globant.svg'
import ibm from '/hiringCompanies/ibm.svg'
import meli from '/hiringCompanies/meli.svg'
// import neoris from '/hiringCompanies/neoris.png'
// import { employerLogos } from '../../../utils/constants'

export const HiringCompaniesCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={24}
        slidesPerView="auto"
        loop={true}
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="swiper-hiring-companies"
        // Responsive breakpoints
        breakpoints={{
          768: {
            spaceBetween: 30,
          },
          992: {
            spaceBetween: 50,
          },
          1280: {
            spaceBetween: 50,
          },
        }}
      >
        {/* {employerLogos.map(({ id, logo }) => (
          <SwiperSlide key={id}>
            <Box boxSize={{ base: '80px', md: '220px' }} maxH="100%">
              <Image src={logo} w={'100%'} h={'100%'} objectFit={'contain'} />
            </Box>
          </SwiperSlide>
        ))} */}
        <SwiperSlide>
          <Image src={meli} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ibm} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={accenture} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={globant} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={aerolab} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={gire} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={meli} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ibm} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={accenture} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={globant} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={aerolab} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={gire} boxSize={{ base: '80px', md: '220px' }} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
