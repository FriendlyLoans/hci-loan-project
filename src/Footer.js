import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Trans } from '@lingui/macro'

export const Footer = () => {
  return (
    <Flex w="100%" bg="blue" minH="5vh" textColor="yellow" mt="auto">
      <Text m="auto">
        <Trans>I dont know copyright 1990 or something</Trans>
      </Text>
      <Text m="auto">
        <Trans>1800-IDK-SOME </Trans>
      </Text>
      <Text m="auto">
        <Trans>example@example.ca </Trans>
      </Text>
    </Flex>
  )
}
