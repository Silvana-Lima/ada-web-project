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
        href="https://wa.me/5491131033575/?text=%C2%A1Hola%21%20Me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20los%20cursos%20en%20Ada%20ITW"
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
