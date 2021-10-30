import React from 'react'
import { Button } from '@chakra-ui/react'
import { Trans } from '@lingui/macro'

export const LoginButton = () => {
  return (
    <Button
      outline="1px solid black"
      textColor="black"
      my="auto"
      ml="auto"
      bg="cyan"
      _hover={{ bg: 'yellow' }}
    >
      <Trans>Login/Create Account</Trans>
    </Button>
  )
}
