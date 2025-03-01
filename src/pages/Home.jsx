import { Container } from '@chakra-ui/react'

import allData from '@/all-the-data.svg'
import imageCareers from '@/img-banner-carreras.svg'
import bgVideo from '@/mujer-programacion.gif'
import vector from '@/vector-why-us.svg'

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
import { whyUs } from '../utils/constants'

export const Home = () => {
  return (
    <Container maxW={'1440px'}>
      <Hero
        title="Empoderamos mujeres a través de la tecnología"
        description="Brindamos capacitaciones en tecnología y potenciamos a mujeres y
          feminidades para que lideren la revolución tecnológica y den forma a
          un mañana inclusivo."
        btnText="Conoce nuestras capacitaciones"
        route={'/training'}
        bgVideo={bgVideo}
        formatVideo="img"
        isHashLink={false}
      />
      <Impact />
      <Banner
        img={imageCareers}
        title={'¿Te gustaría convertirte en programadora web?'}
        description={
          'Ofrecemos carreras en desarrollo front-end y back-end en donde podrás disfrutar de toda la experiencia Ada.'
        }
        addButton={true}
        btnText={'Ir a carreras'}
        btnLink={'/careers'}
        bgColor={'magenta.200'}
      />
      <Banner
        img={allData}
        title={'¿Buscas algo más corto? También ofrecemos cursos'}
        description={
          ' Nuestros cursos son cortos e intensivos en donde podrás aprender Diseño UX/UI, QA Testing, Python e IA generativa.'
        }
        addButton={true}
        btnText={'Ir a cursos'}
        btnLink={'/training'}
        bgColor={'orange.200'}
      />

      <NextBeginnings />

      <WhyUs
        dataCard={whyUs}
        titleBlack1={'¿Por qué estudiar en'}
        titleColor1={'ADA ITW?'}
        description={
          'Nuestra misión es reducir la brecha de género en tecnología y esto lo hacemos a través del empoderamiento de las mujeres con cursos de  programación.'
        }
        vector={vector}
      />

      <Testimonials />
      <OurGoald />
      <HiringCompanies />
      <Awards />
      <NetworkBuilder />
      <CivicHouseShowcase />
    </Container>
  )
}
