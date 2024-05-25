// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'

import { Box } from '@chakra-ui/react'
// import required modules
import { Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { Beginnings } from '../Beginnings'

export const CareersCardCarousel = () => {
  return (
    <Box>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Beginnings />
        </SwiperSlide>
        <SwiperSlide>
          <Beginnings />
        </SwiperSlide>
        <SwiperSlide>
          <Beginnings />
        </SwiperSlide>
        <SwiperSlide>
          <Beginnings />
        </SwiperSlide>
        <SwiperSlide>
          <Beginnings />
        </SwiperSlide>
        <SwiperSlide>
          <Beginnings />
        </SwiperSlide>
        <SwiperSlide>
          <Beginnings />
        </SwiperSlide>
        <SwiperSlide>
          <Beginnings />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
