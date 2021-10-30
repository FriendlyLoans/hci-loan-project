import React from 'react'
import { Button } from '@chakra-ui/react'

export function LoginButton() {
  return (
    <Button
      outline="1px solid black"
      textColor="black"
      my="auto"
      ml="auto"
      bg="cyan"
      _hover={{ bg: 'yellow' }}
    >
      Login/Create Account
    </Button>
  )
}
