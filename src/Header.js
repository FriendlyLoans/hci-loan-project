import React from 'react'

import { Flex, Heading } from '@chakra-ui/react'
import { LoginButton } from './LoginButton'
import { Navigation } from './Navigation'

export function Header() {
  return (
    <>
      <Flex bg="blue" alignContent="center" p="2rem">
        <Heading color="yellow" bg="blue" my="auto">
          Friendly Loans
        </Heading>

        <LoginButton />
      </Flex>

      <Navigation />
    </>
  )
}
