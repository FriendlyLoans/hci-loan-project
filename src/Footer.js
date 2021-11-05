import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Trans } from '@lingui/macro'

export const Footer = () => {
  return (
    <Flex w="100%" bg="themeBlue" minH="5vh" textColor="themeYellow" mt="auto">
      <Text m="auto">
        <Trans>Copyright© all right reserved for Friendly Loans</Trans>
      </Text>
      <Text m="auto">(+1)902-749-6454</Text>
      <Text m="auto">Help@FriendlyLoans.ca</Text>
    </Flex>
  )
}
