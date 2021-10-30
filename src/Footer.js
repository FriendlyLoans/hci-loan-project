import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Trans } from '@lingui/macro'

export const Footer = () => {
  return (
    <Flex w="100%" bg="blue" minH="5vh" textColor="yellow" mt="auto">
      <Text m="auto">
        <Trans>blabla bla idk copyright 1990 or somthing</Trans>
      </Text>
    </Flex>
  )
}
