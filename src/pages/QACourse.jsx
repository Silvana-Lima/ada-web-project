import { Box } from '@chakra-ui/react'

import flyer from '../assets/ourCourses/flyerTesting.jpg'
import { TrainingPage } from '../components/TrainingPage'

const description = (
  <>
    <Box mb={'20px'}>
      Este curso está pensado especialmente para aquellas personas que deseen
      aprender los conocimientos claves para iniciarse en el mundo de las
      pruebas automáticas de desarrollo, además de comprender cómo éste influye
      en el proceso de desarrollo de código. Se abordarán algunos ejemplos
      prácticos que servirán para interiorizar los conceptos teóricos.
    </Box>
    <Box>
      Al finalizar el curso, la estudiante contará con los conocimientos de los
      procesos que se llevan a cabo para poder reportar errores y agilizar el
      desarrollo de software mediante test automáticos.
    </Box>
  </>
)

export const QACourse = () => {
  return (
    <TrainingPage
      flyer={flyer}
      title="QA Testing"
      description={description}
      months="3 meses"
      week="2 clases por semana"
      hours="3 horas por clase"
      syllabus="https://drive.google.com/file/d/1Zg8IIJ6WZOvak24OEav1ev25MwFb9Jvq/view"
    />
  )
}
