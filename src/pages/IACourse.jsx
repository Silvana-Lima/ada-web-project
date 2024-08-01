import flyer from '../assets/ourCourses/flyerIA.png'
import { TrainingPage } from '../components/TrainingPage'

export const IACourse = () => {
  return (
    <TrainingPage
      flyer={flyer}
      title="IA Generativa Aplicada"
      description={
        'Inicia tu camino en la IA comprendiendo sus objetivos y diferenciando entre mitos y realidades tecnológicas. Explora su evolución, desde los primeros pasos hasta los avances más recientes. Conoce los diversos tipos de IA y sus aplicaciones prácticas.Desmitifica la IA y descubre sus verdaderas capacidades y limitaciones. Al finalizar el curso, las estudiantes estarán preparadas para: - Utilizar herramientas de IA Generativa en entornos profesionales - Integrar soluciones de IA en diversos procesos laborales Presentar proyecto completo desarrollado con IA Generativa'
      }
      months="3 meses"
      week="2 clases por semana"
      hours="3 horas por clase"
      syllabus="https://drive.google.com/file/d/1Ac2utMIEXtADagbJ4fe4YRMORA39K3tQ/view"
    />
  )
}
