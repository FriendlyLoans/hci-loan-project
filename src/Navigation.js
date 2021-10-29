import { Flex, Link, Button } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'
import React from 'react'

export const Navigation = () => {
  return (
    <Flex
      flexDirection="row"
      bg="blue"
      color="darkpurple"
      justifyContent="space-evenly"
    >
      <Button as={RouteLink} to="/" ml="3rem" borderBottomRadius="0" bg="cyan">
        Home
      </Button>
      <Button
        as={RouteLink}
        to="/account"
        ml="3rem"
        borderBottomRadius="0"
        bg="cyan"
      >
        Account
      </Button>
      <Button
        as={RouteLink}
        to="/contact"
        ml="3rem"
        borderBottomRadius="0"
        bg="cyan"
      >
        Contact
      </Button>
      <Button
        as={RouteLink}
        to="/faq"
        ml="3rem"
        borderBottomRadius="0"
        bg="cyan"
      >
        FAQ
      </Button>
    </Flex>
  )
}
