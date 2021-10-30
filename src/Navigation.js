import { Flex, Button } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'
import React from 'react'

export const Navigation = () => {
  return (
    <Flex flexDirection="row" bg="blue" color="darkpurple">
      <Button
        borderRadius="1em"
        _hover={{ background: 'yellow' }}
        border="1px solid black"
        flex="1"
        as={RouteLink}
        to="/"
        borderBottomRadius="0"
        bg="cyan"
      >
        Home
      </Button>
      <Button
        borderRadius="1rem"
        _hover={{ background: 'yellow' }}
        border="1px solid black"
        flex="1"
        as={RouteLink}
        to="/account"
        borderBottomRadius="0"
        bg="cyan"
      >
        Account
      </Button>
      <Button
        borderRadius="1rem"
        _hover={{ background: 'yellow' }}
        border="1px solid black"
        flex="1"
        as={RouteLink}
        to="/contact"
        borderBottomRadius="0"
        bg="cyan"
      >
        Contact
      </Button>
      <Button
        borderRadius="1rem"
        _hover={{ background: 'yellow' }}
        border="1px solid black"
        flex="1"
        as={RouteLink}
        to="/faq"
        borderBottomRadius="0"
        bg="cyan"
      >
        FAQ
      </Button>
    </Flex>
  )
}
