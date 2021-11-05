import {
  Button,
  Divider,
  Flex,
  Heading,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { History } from './AccHistory'

export const AccountPage = () => {
  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading mx="auto" my="2rem">
        <Trans>Your Loans</Trans>
      </Heading>

      <Divider />
      <Stat
        bg="themeBlue"
        textColor="white"
        py="3rem"
        borderWidth="6px"
        borderStyle="solid"
        borderColor="themeYellow"
      >
        <StatLabel px="1rem">
          <Trans>Total amount due</Trans>
        </StatLabel>
        <StatNumber px="1rem">$14236.60</StatNumber>
        <StatHelpText px="1rem">2017-2020</StatHelpText>
        <Text px="1rem">
          <Trans>Next payment of $267 due 30/11/2021</Trans>
        </Text>
      </Stat>
      {History}

      <Button
        mx="auto"
        as={RouteLink}
        to="/payment"
        bg="themeCyan"
        border="1px solid black"
        w="min-content"
        _hover={{ bg: 'themeYellow' }}
      >
        <Trans>Pay Here</Trans>
      </Button>
    </Flex>
  )
}
