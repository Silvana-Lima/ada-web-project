import { Container } from '@chakra-ui/react'

import allData from '@/all-the-data.svg'
import imageCareers from '@/img-banner-carreras.svg'

import { CivicHouseShowcase } from '../components/CivicHouseShowcase'
import { Awards } from '../components/home/Awards'
import { Banner } from '../components/home/Banner'
import { Hero } from '../components/home/Hero'
import { HiringCompanies } from '../components/home/HiringCompanies'
import { Impact } from '../components/home/impact/Impact'
import { NetworkBuilder } from '../components/home/NetworkBuilder'
import { NextBeginnings } from '../components/home/NextBeginnings'
import { OurGoald } from '../components/home/OurGoald'
import { Testimonials } from '../components/home/testimonials/Testimonials'
import { WhyUs } from '../components/home/whyUs/WhyUs'

export const Home = () => {
  return (
    <Container maxW={'1440px'}>
      <Hero />
      <Impact />
      <Banner
        img={imageCareers}
        title={'¿Te gustaría convertirte en programadora web?'}
        description={
          'Ofrecemos carreras en desarrollo front-end y back-end en donde podrás disfrutar de toda la experiencia Ada.'
        }
        btnText={'Ir a carreras'}
        bgColor={'magenta.200'}
      />
      <Banner
        img={allData}
        title={'¿Buscas algo más corto? También ofrecemos cursos'}
        description={
          ' Nuestros cursos son cortos e intensivos en donde podrás aprender Diseño UX/UI, QA Testing, Python e IA generativa.'
        }
        btnText={'Ir a cursos'}
        bgColor={'orange.200'}
      />

      <NextBeginnings />

      <WhyUs />

      <Testimonials />
      <OurGoald />
      <HiringCompanies />
      <Awards />
      <NetworkBuilder />
      <CivicHouseShowcase />
    </Container>
  )
}
