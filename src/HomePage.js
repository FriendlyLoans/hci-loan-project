import { Flex, Text, Heading, Box, Image } from '@chakra-ui/react'
import React from 'react'
import { t, Trans } from '@lingui/macro'
import graduationImage from './images/Graduation.svg'

export const HomePage = () => {
  return (
    <Flex width="100%" flexDirection="column" grow={1}>
      <Heading mx="auto" my="2rem">
        <Trans>Welcome to Friendly Loans!</Trans>
      </Heading>
      <Text mx="auto" my="2rem" fontSize="2rem" display="block">
        <Trans>Why Friendly Loans?</Trans>
      </Text>

      <Text mx="auto" fontSize="1.25rem">
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
      />

      <Box padding="2rem" bg="#EDF6F9">
        <Text textAlign="center" my="2rem" fontSize="2rem" fontWeight="bold">
          <Trans>Friendly Loans gives you full access to:</Trans>
        </Text>

        <Text textAlign="center" fontSize="1.25rem">
          <Trans>Pay your Loans</Trans>
        </Text>

        <Text textAlign="center" fontSize="1.25rem">
          <Trans>View your loan statements and payment history</Trans>
        </Text>
      </Box>

      <Box
        width="60%"
        bg="#e9f5db"
        py="2rem"
        my="2rem"
        borderRadius="10px 100px / 120px;"
        mx="auto"
      >
        <Text textAlign="center" fontSize="2rem" my="2rem">
          <Trans>Flexibility at its best!</Trans>
        </Text>
        <Text textAlign="center" my="2rem" fontSize="1.25rem" fontWeight="light">
          <Trans>No Bank Information, use your Debit / Credit Card</Trans>
        </Text>
        <Text textAlign="center" my="2rem" fontSize="1.25rem" fontWeight="light">
          <Trans>No Debit / Credit Card, use your Bank Information</Trans>
        </Text>
      </Box>

      <Text fontSize="1.5rem" mx="auto" my="2rem">
        <Trans>Any questions? Refer to our FAQ page or contact us.
        </Trans></Text>
    </Flex>
  )
}
