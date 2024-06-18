import { Flex, Link, Tooltip } from '@chakra-ui/react'
import { Icon } from '@iconify/react/dist/iconify.js'

export const Whatsapp = () => {
  return (
    <Flex
      position={'fixed'}
      alignSelf="flex-end"
      zIndex={110}
      bottom={['70px', '70px', '70px', '80px']}
      right={['15px', '15px', '50px', '80px']}
    >
      <Link
        href="https://web.whatsapp.com/send?phone=5491131033575&text=¡Hola! Me gustaría conocer más sobre los cursos en Ada ITW"
        target="_blank"
        size={'sm'}
      >
        <Tooltip label="Tienes dudas? Aquí estamos para ayudarte">
          <Icon
            icon="logos:whatsapp-icon"
            style={{
              fontSize: `calc(48px + (16 * ((100vw - 320px) / 1600)))`,
            }}
          />
        </Tooltip>
      </Link>
    </Flex>
  )
}
