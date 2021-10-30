import {
  Flex,
  Text,
  Heading,
  Button,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'
import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Trans } from '@lingui/macro'
import { History } from './AccHistory'

export const AccountPage = () => {
  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading mx="auto" my="2rem">
        <Trans>Account Page</Trans>
      </Heading>
      <Button mx="10rem" as={RouteLink} to="/payment">
        <Trans>Pay Here</Trans>
      </Button>
      <Text mx="auto" display="block" my="1rem">
        <Trans>History</Trans>
      </Text>
      <Divider />
      <Stat>
        <StatLabel>
          <Trans>Total amount due</Trans>
        </StatLabel>
        <StatNumber>$14503.60</StatNumber>
        <StatHelpText>2018-2019</StatHelpText>
        <Text>
          <Trans>Next payment of (amount) due (date)</Trans>
        </Text>

        {History}
      </Stat>
    </Flex>
  )
}
