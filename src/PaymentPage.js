import { Flex, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { Trans } from '@lingui/macro'

export const PaymentPage = () => {
  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading mx="auto" my="2rem">
        <Trans>Payment Page</Trans>
      </Heading>
      <Text m="auto" display="block">
        <Trans>This is is some sad stuff, now pay up</Trans>
      </Text>
    </Flex>
  )
}
