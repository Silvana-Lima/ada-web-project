import { Container, Heading, VStack } from '@chakra-ui/react'

import bgTitle from '@/ourCourses/bg-title-ourcourses.svg'

import { courses } from '../../utils/constants'
import { Course } from './Course'

export const OurCourses = () => {
  const showProgram = (programUrl) => {
    if (programUrl) {
      window.open(programUrl, '_blank')
    } else {
      alert('Falta el programa')
    }
  }
  return (
    <Container maxW={'100%'} px={'spacingM.xl'} py={['spacingXl.base', '80px']}>
      <Container
        color={'white'}
        textAlign={'center'}
        py={'spacingS.xl'}
        bgImg={bgTitle}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'contain'}
        mb={'32px'}
      >
        <Heading fontSize={['midTxt1.xl', '24px', '24px', '28px']}>
          NUESTROS CURSOS
        </Heading>
      </Container>
      <VStack gap={['50px', '100px']}>
        {courses.map((course, index) => (
          <Course
            key={course.id}
            {...course}
            orderImg={index % 2 === 0 ? 1 : 0} // Alterna entre 1 y 0 para el Image
            orderText={index % 2 === 0 ? 0 : 1}
            showProgram={() => showProgram(course.programUrl)}
          />
        ))}
      </VStack>
    </Container>
  )
}
