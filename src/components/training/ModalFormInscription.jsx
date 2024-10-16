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

import { CourseInscriptionForm } from './CourseInscriptionForm'

export const ModalFormInscription = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Inscribime</Button>

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
            <CourseInscriptionForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
