import flyer from '../assets/ourCourses/flyerPython.jpeg'
import { TrainingPage } from '../components/TrainingPage'

export const PythonCourse = () => {
  return (
    <TrainingPage
      flyer={flyer}
      title="Programación en Python"
      description={
        'En este curso aprenderás conceptos de programación como ejecución condicional, bucles, tipos de datos complejos, la sintaxis del lenguaje de programación Python, semántica y el entorno de tiempo de ejecución, así como con técnicas generales de codificación y programación orientada a objetos. Python es un lenguaje muy versátil y puede ser usado en muchos campos diferentes. Permite programar desde videojuegos hasta sitios web.'
      }
      months="3 meses "
      week="2 clases por semana"
      hours="2:30 horas por clase"
      syllabus="https://drive.google.com/file/d/198NFGs7O3RfrNvBTVo0gN0HUN_7yikf-/view"
    />
  )
}
