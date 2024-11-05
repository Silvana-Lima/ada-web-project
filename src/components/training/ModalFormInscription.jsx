import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

import { CourseInscriptionForm } from './CourseInscriptionForm'

export const ModalFormInscription = ({ subjectCourse }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Inscribirme</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize={['midTxt11.lg', 'midTxt1.lg', 'midTxt1.lg', 'midTxt1.xl']}
          >
            Completa el formulario e inscríbete ahora
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CourseInscriptionForm subjectCourse={subjectCourse} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
ModalFormInscription.propTypes = {
  subjectCourse: PropTypes.string,
}
