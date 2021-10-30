import { Flex, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { Trans } from '@lingui/macro'

export const ContactPage = () => {
  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading mx="auto" my="2rem">
        <Trans>Contact Page</Trans>
      </Heading>
      <Text m="auto" display="block">
        <Trans>This is some fresshhhhhh stuff CONTACT PAGE</Trans>
      </Text>
    </Flex>
  )
}
