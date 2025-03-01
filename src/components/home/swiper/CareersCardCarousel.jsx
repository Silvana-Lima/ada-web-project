import 'swiper/css'
import './styles.css'
import 'swiper/css/pagination'

import { Box } from '@chakra-ui/react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { beginningCards } from '../../../utils/constants'
import { CoursesCard } from '../CoursesCard'

export const CareersCardCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1.4}
        spaceBetween={16}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom', // Clase personalizada para paginación
        }}
        className="swiper-next-beginning"
        modules={[Pagination]}
        // Responsive breakpoints
        breakpoints={{
          480: {
            slidesPerView: 1.4,
            spaceBetween: 16,
          },
          600: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 2.8,
            spaceBetween: 16,
          },
        }}
      >
        {beginningCards.map(
          ({
            id,
            title,
            career,
            descriptionL,
            descriptionS,
            date,
            duration,
            color,
          }) => (
            <SwiperSlide className=".swiper-slide-beggining" key={id}>
              <CoursesCard
                title={title}
                career={career}
                descriptionL={descriptionL}
                descriptionS={descriptionS}
                date={date}
                duration={duration}
                color={color}
              />
            </SwiperSlide>
          )
        )}

        <Box className="swiper-pagination-custom"></Box>
      </Swiper>
    </>
  )
}
