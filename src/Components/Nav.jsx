import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

import embl from '../Media/embl.png';


const Nav = () => {
  return (
    <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'rgb(5,21,71)'} color={'white'} p={'20px 0px'} >
        <Image src={embl} style={{width:'100px'}}></Image>
        <Heading>
           Goods and Services Tax
        </Heading>

        <Button colorScheme='yellow'>Login</Button>
    </Flex>
  )
}

export default Nav