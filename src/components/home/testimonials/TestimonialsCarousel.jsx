// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import './swiperTestimonials.css'

import { Box } from '@chakra-ui/react'
// import required modules
import { Grid, Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { studentTestimonials } from '../../../utils/constants'
import { TestimonyCard } from './TestimonyCard'

export const TestimonialsCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
          columns: 2,
          fill: 'row',
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: 'swiper-pagination-testimonial',
        }}
        className="swiper-container-testimonial"
        modules={[Grid, Pagination]}
      >
        {studentTestimonials.map(({ name, career, comment, photo, id }) => (
          <SwiperSlide key={id} className="testimonialSwiperSlide">
            <TestimonyCard
              comment={comment}
              name={name}
              career={career}
              photo={photo}
            />
          </SwiperSlide>
        ))}
        <Box className="swiper-pagination-testimonial"></Box>
      </Swiper>
    </>
  )
}
