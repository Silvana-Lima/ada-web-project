// Import Swiper styles
import 'swiper/css'
import './styles.css'
import 'swiper/css/pagination'

import { Box } from '@chakra-ui/react'
// import required modules
import { Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { Beginnings } from '../Beginnings'

export const CareersCardCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={16}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom', // Clase personalizada para paginación
        }}
        className="swiper-container-custom"
        modules={[Pagination]}
        // Responsive breakpoints
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
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
        <Box className="swiper-pagination-custom"></Box>
      </Swiper>
    </>
  )
}
