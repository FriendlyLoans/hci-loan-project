import { Flex, Text, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Trans } from '@lingui/macro'

export const AccountPage = () => {
  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading mx="auto" my="2rem">
        <Trans>Account Page</Trans>
      </Heading>
      <Button mx="10rem" as={RouteLink} to="/payment">
        <Trans>Pay Here</Trans>
      </Button>
      <Text m="auto" display="block">
        <Trans>This is some fresshhhhhh stuff</Trans>
      </Text>
    </Flex>
  )
}
