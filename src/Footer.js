import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Trans } from '@lingui/macro'

export const Footer = () => {
  return (
    <Flex
      w="100%"
      bg="themeBlue"
      minH="5vh"
      textColor="themeYellow"
      mt="auto"
      flexWrap="wrap"
      px={{ md: '3rem', lg: '4rem' }}
      flexDirection={{ base: 'column', lg: 'row' }}
      py={{ base: '0.5rem', lg: '0' }}
    >
      <Text
        as="a"
        href="tel: 1902-749-6454"
        m="auto"
        mb={{ base: '0.5rem', lg: 'auto' }}
      >
        (+1)902-749-6454
      </Text>
      <Text m="auto" w="33.33%" textAlign="center" order={{ base: 2, lg: 0 }}>
        Copyright &copy;{' '}
        <Trans>All rights reserved for Friendly Loans 2021.</Trans>
      </Text>
      <Text m="auto" textAlign="right" mb={{ base: '0.5rem', lg: 'auto' }}>
        <a href="mailto:help@friendlyloans.ca">Help@FriendlyLoans.ca</a>
      </Text>
    </Flex>
  )
}
