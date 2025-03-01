import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  GridItem,
  Heading,
  Hide,
  HStack,
  Image,
  Link,
  Show,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import symbol1 from '@/ourCourses/symbol-1.svg'

export const Course = ({
  type,
  name,
  descriptionL,
  descriptionS,
  image,
  skills,
  orderImg,
  orderText,
  showProgram,
}) => {
  return (
    <Container maxW={['100%', '100%', '1235px', '1135px']}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <VStack
          w={['156px', '450px']}
          alignItems={'flex-start'}
          order={orderText}
        >
          <HStack alignItems={'flex-start'}>
            <Image src={symbol1} h={['', '60px']} />
            <VStack alignItems={'flex-start'}>
              <Text
                fontSize={['smTxt.base', '14px']}
                color={'gray.500'}
                textTransform="uppercase"
                fontWeight={'semibold'}
              >
                {type}{' '}
              </Text>
              <Heading
                fontSize={['smTxt.xl', '30px']}
                color={'orange.400'}
                textTransform="uppercase"
              >
                {name}
              </Heading>
            </VStack>
          </HStack>
          <Show below="lg">
            <Text color={'gray.500'} fontSize={['smTxt.xl', '18px']}>
              {descriptionS}
            </Text>
          </Show>
          <Hide below="lg">
            <Text
              color={'gray.500'}
              fontSize={['smTxt.xl', '18px']}
              whiteSpace={'pre-wrap'}
              lineHeight="1.2"
            >
              {descriptionL}{' '}
            </Text>
          </Hide>
        </VStack>
        <Image
          objectFit="cover"
          src={image}
          alt="Girl"
          w={['', '553px']}
          order={orderImg}
        />
      </HStack>
      <VStack py={'32px'} gap={'20px'} alignItems={'flex-start'}>
        <Text
          fontSize={['midTxt1.base', '18px']}
          color={'gray.600'}
          fontWeight={'semibold'}
        >
          Estas son algunas de las herramientas que aprenderás durante la
          carrera:
        </Text>
        <Grid
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
          ]}
          gap={[3, 4, 4, 4]}
          fontSize={['14px', '16px']}
        >
          {skills.map(({ name, icon }) => (
            <GridItem key={name}>
              <HStack>
                <Icon
                  icon={icon}
                  width="20"
                  height="20"
                  style={{ color: '#bcbcbc' }}
                />
                <Text flex="1">{name}</Text>
              </HStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
      <ButtonGroup>
        <Button
          as={Link}
          variant={'outline'}
          minW="154px"
          onClick={showProgram}
        >
          Ver Programa
        </Button>
        <Button
          as={RouterLink}
          to="/inscription"
          bg={'orange.400'}
          minW="154px"
          _hover={{
            color: 'orange.400',
            bg: 'white',
            borderWidth: '2px',
            borderColor: 'orange.400',
          }}
        >
          Quiero pre-inscribirme
        </Button>
      </ButtonGroup>
    </Container>
  )
}

Course.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  descriptionL: PropTypes.string.isRequired,
  descriptionS: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  orderImg: PropTypes.number.isRequired,
  orderText: PropTypes.number.isRequired,
  showProgram: PropTypes.func.isRequired,
}
