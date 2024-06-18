import { Flex, Link, Tooltip } from '@chakra-ui/react'
import { Icon } from '@iconify/react/dist/iconify.js'

export const Whatsapp = () => {
  return (
    <Flex
      position={'sticky'}
      zIndex={110}
      bottom={[20, 50, 30, 30]}
      justifyContent={'flex-end'}
      pr={[3, 30, 30, 30]}
      h={['46px', '46px', '64px', '64px']}
    >
      <Link
        href="https://web.whatsapp.com/send?phone=5491131033575&text=¡Hola! Me gustaría conocer más sobre los cursos en Ada ITW"
        target="_blank"
        size={'sm'}
      >
        <Tooltip label="Tienes dudas? Aquí estamos para ayudarte">
          <Icon icon="logos:whatsapp-icon" width="100%" />
        </Tooltip>
      </Link>
    </Flex>
  )
}
