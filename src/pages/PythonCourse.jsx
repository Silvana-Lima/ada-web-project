import { Text } from '@chakra-ui/react'

import flyer from '../assets/ourCourses/flyerPython.jpeg'
import { TrainingPage } from '../components/TrainingPage'

const description = (
  <>
    <Text mb={'20px'}>
      Aprender este lenguaje de programación es una excelente inversión en tu
      futuro profesional y personal. Te dará habilidades valiosas en
      programación y te permitirá posteriormente explorar campos emocionantes
      como la ciencia de datos, la inteligencia artificial y desarrollo web
      backend.
    </Text>
    <Text>
      Al finalizar el curso, la estudiante estará completamente familiarizada
      con todos los medios principales proporcionados por Python. Esto le
      permitirá especializarse en cualquier área o tecnología que utilice Python
      como lenguaje principal.
    </Text>
  </>
)

export const PythonCourse = () => {
  return (
    <TrainingPage
      flyer={flyer}
      title="Programación en Python"
      description={description}
      months="3 meses "
      week="2 clases por semana"
      hours="2:30 horas por clase"
      syllabus="https://drive.google.com/file/d/198NFGs7O3RfrNvBTVo0gN0HUN_7yikf-/view"
    />
  )
}
