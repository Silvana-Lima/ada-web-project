import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'

import flyer from '../assets/ourCourses/flyerIA.png'
import { TrainingPage } from '../components/TrainingPage'

const description = (
  <>
    <Text>
      Inicia tu camino en la IA comprendiendo sus objetivos y diferenciando
      entre mitos y realidades tecnológicas. Explora su evolución, desde los
      primeros pasos hasta los avances más recientes. Conoce los diversos tipos
      de IA y sus aplicaciones prácticas.
    </Text>

    <Text>
      Desmitifica la IA y descubre sus verdaderas capacidades y limitaciones.
    </Text>

    <Box my={'20px'}>
      <Text>
        Al finalizar el curso, las estudiantes estarán preparadas para:
      </Text>
      <UnorderedList styleType="'-'">
        <ListItem>
          Utilizar herramientas de IA Generativa en entornos profesionales
        </ListItem>
        <ListItem>
          Integrar soluciones de IA en diversos procesos laborales
        </ListItem>
        <ListItem>
          Presentar proyecto completo desarrollado con IA Generativa
        </ListItem>
      </UnorderedList>
    </Box>
  </>
)

export const IACourse = () => {
  return (
    <TrainingPage
      flyer={flyer}
      title="IA Generativa Aplicada"
      description={description}
      months="3 meses"
      week="2 clases por semana"
      hours="3 horas por clase"
      syllabus="https://drive.google.com/file/d/1Ac2utMIEXtADagbJ4fe4YRMORA39K3tQ/view"
    />
  )
}
