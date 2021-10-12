import { Flex, Link } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'
import React from 'react'

export const Navigation = () => {
  return (
    <Flex flexDirection="row" color="darkpurple">
      <Link as={RouteLink} to="/" ml="3rem">
        Home
      </Link>
      <Link as={RouteLink} to="/history" ml="3rem">
        History
      </Link>
      <Link as={RouteLink} to="/contact" ml="3rem">
        Contact
      </Link>
      <Link as={RouteLink} to="/faq" ml="3rem">
        FAQ
      </Link>
    </Flex>
  )
}
