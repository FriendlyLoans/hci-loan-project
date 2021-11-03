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

      <Text mx="auto">
        <Trans>
          Canada Students loans are managed by the{' '}
          <Text as="u" _hover={{ color: 'teal' }}>
            {' '}
            <a href="https://www.csnpe-nslsc.canada.ca/en/home">
              National Student Loans Service Centre (NSLSC).{' '}
            </a>{' '}
          </Text>{' '}
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
    </Flex>
  )
}
