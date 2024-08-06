import { Text } from '@chakra-ui/react'

import flyer from '../assets/ourCourses/flyerUxUi.png'
import { TrainingPage } from '../components/TrainingPage'

const description = (
  <>
    <Text mb={'20px'}>
      Este curso está pensado especialmente para aquellas personas que deseen
      aprender los fundamentos básicos de UX y UI, comprender el proceso y las
      distintas etapas para el desarrollo de un producto digital. Se abordarán
      algunos ejemplos prácticos que servirán para interiorizar los conceptos
      teóricos.
    </Text>
    <Text>
      Al finalizar el curso, la estudiante contará con los conocimientos para
      poder adentrarse en el mundo de la experiencia de usuarios y las
      interfaces digitales.
    </Text>
  </>
)

export const UxUiCourse = () => {
  return (
    <TrainingPage
      flyer={flyer}
      title="Introducción a UX/UI"
      description={description}
      months="2 meses y medio"
      week="2 clases por semana"
      hours="3 horas por clase"
      syllabus="https://adaitw.org/wp-content/uploads/2023/03/Brochure-curso-ux_ui-NUEVO-numero.pdf"
    />
  )
}
