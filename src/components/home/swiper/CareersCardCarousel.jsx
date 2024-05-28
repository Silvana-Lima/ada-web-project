// Import Swiper styles
import 'swiper/css'
import './styles.css'
import 'swiper/css/pagination'

import { HStack } from '@chakra-ui/react'
// import required modules
import { Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { Beginnings } from '../Beginnings'

export const CareersCardCarousel = () => {
  return (
    <HStack bg={'blue.200'}>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        // Responsive breakpoints
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
          992: {
            slidesPerView: 2.5,
            spaceBetween: 20,
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
      </Swiper>
    </HStack>
  )
}
