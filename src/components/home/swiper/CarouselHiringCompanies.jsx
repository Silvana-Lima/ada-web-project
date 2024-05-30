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
import accenture from '../../../assets/hiringCompanies/accenture.png'
import aerolab from '../../../assets/hiringCompanies/aerolab.png'
import gire from '../../../assets/hiringCompanies/gire.png'
import globant from '../../../assets/hiringCompanies/globant.png'
import ibm from '../../../assets/hiringCompanies/ibm.png'
import meli from '../../../assets/hiringCompanies/meli.png'

export const CarouselHiringCompanies = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView="auto"
        loop={true}
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="swiper-hiring-companies"
      >
        <SwiperSlide>
          <Image src={meli} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ibm} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={accenture} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={globant} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={aerolab} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={gire} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={meli} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ibm} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={accenture} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={globant} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={aerolab} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={gire} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
