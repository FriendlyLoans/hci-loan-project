import { Flex, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { Trans } from '@lingui/macro'

export const HomePage = () => {
  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading>
        <Trans>Welcome to Friendly Loans!</Trans>
      </Heading>
      <Text m="auto" display="block">
        <Trans>This is some fresshhhhhh stuff HOME PAGE</Trans>
      </Text>
    </Flex>
  )
}
