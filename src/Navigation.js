import { Flex, Button } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { useUser } from './UserContext'

export const Navigation = () => {
  const { isLoggedIn } = useUser()
  return (
    <Flex flexDirection="row" bg="themeBlue" color="themeDarkPurple">
      <Button
        borderRadius="1em"
        _hover={{ background: 'themeYellow' }}
        transition="0.25s"
        border="1px solid black"
        flex="1"
        as={RouteLink}
        to="/"
        borderBottomRadius="0"
        bg="themeCyan"
      >
        <Trans>Home</Trans>
      </Button>

      {isLoggedIn() && (
        <Button
          borderRadius="1rem"
          _hover={{ background: 'themeYellow' }}
          transition="0.25s"
          border="1px solid black"
          flex="1"
          as={RouteLink}
          to="/account"
          borderBottomRadius="0"
          bg="themeCyan"
        >
          <Trans>Account</Trans>
        </Button>
      )}
      <Button
        borderRadius="1rem"
        _hover={{ background: 'themeYellow' }}
        transition="0.25s"
        border="1px solid black"
        flex="1"
        as={RouteLink}
        to="/faq"
        borderBottomRadius="0"
        bg="themeCyan"
      >
        <Trans>FAQ</Trans>
      </Button>
    </Flex>
  )
}
