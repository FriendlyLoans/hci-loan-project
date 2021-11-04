import { Flex, Text, Heading, Box, Image } from '@chakra-ui/react'
import React from 'react'
import { t, Trans } from '@lingui/macro'
import graduationImage from './images/Graduation.svg'

export const HomePage = () => {
  return (
    <Flex minH="30rem" width="100%" flexDirection="column" grow={1}>
      <Heading mx="auto" my="2rem">
        <Trans>Welcome to Friendly Loans!</Trans>
      </Heading>
      <Text mx="auto" my="2rem" display="block" fontSize="25px">
        <Trans>Why Friendly Loans?</Trans>
      </Text>

      <Text mx="auto" fontSize="1rem">
        <Trans>
          Friendly Loans is a service for all students to access their student
          loans in Nova Scotia.
        </Trans>
      </Text>

      <Image
        src={graduationImage}
        alt={t`Student receiving their diploma`}
        opacity="0.8"
        maxW={{ base: '100%', sm: '90%', md: '80%', lg: '60%', xl: '50%' }}
        m="auto"
        display="block"
      />

      <Box padding="2rem" bg="#EDF6F9">
        <Text textAlign="center" fontSize="2rem">
          KEEP IT SIMPLE. ALL IN ONE PLACE.
        </Text>

        <Text textAlign="center">
          Friendly Loans gives you full access to:
        </Text>

        <Text textAlign="center">
          Pay your Loans
        </Text>

        <Text textAlign="center">
          View your loan statements and payment history
        </Text>
      </Box>

      <Box width="60%" bg="#e9f5db" fontSize="1.2rem" py="2rem" my="2rem" borderRadius="10px 100px / 120px;" mx="auto">
        <Text textAlign="center" my="2rem">Flexibility at its best!</Text>
        <Text textAlign="center" my="2rem" fontWeight="light">No Bank Information, use your Debit / Credit Card</Text>
        <Text textAlign="center" my="2rem" fontWeight="light">No Debit / Credit Card, use your Bank Information</Text>
      </Box>

      <Text textAlign="center" fontSize="1.5rem" my="2rem">
        AND NO... You will not be redirected to another website.
      </Text>
    </Flex>
  )
}
