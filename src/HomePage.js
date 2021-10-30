import { Flex, Text, Heading, Box } from '@chakra-ui/react'
import React from 'react'
import { Trans } from '@lingui/macro'

export const HomePage = () => {
  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading mx="auto" my="2rem">
        <Trans>Welcome to Friendly Loans!</Trans>
      </Heading>
      <Text mx="auto" my="2rem" display="block" fontSize="25px">
        <Trans>Why Friendly Loans?</Trans>
      </Text>

      <Text mx="auto" fontSize="1rem">
      Friendly Loans is a service for all students to access their student loans in Nova Scotia.
      </Text>

      <Text mx="auto">
        <Trans>Canada Students loans are managed by the  <Text as="u" _hover={{color:"teal"}}> <a href="https://www.csnpe-nslsc.canada.ca/en/home" >National Student Loans Service Centre (NSLSC). </a> </Text> </Trans>
      </Text>
    </Flex>
  )
}
