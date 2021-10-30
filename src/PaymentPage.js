import {
  Flex,
  Text,
  Heading,
  Divider,
  Center,
  Button,
  Box,
  Textarea,
} from '@chakra-ui/react'
import React from 'react'
import { Trans } from '@lingui/macro'
import { Confirm } from './PaymentConf'

export const PaymentPage = () => {
  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading mx="auto" my="2rem">
        <Trans>Payment Page</Trans>
      </Heading>
      <Center>
        <Flex>
          <Box>
            <Text px="2rem">
              <Trans>Pay with existing inforamtion</Trans>
            </Text>
            <Confirm />
          </Box>
          <Divider orientation="vertical" height="30rem" />
          <Box>
            <Text px="2rem">
              <Trans>Add card/Bank inforamtion</Trans>
            </Text>
          </Box>
        </Flex>
      </Center>
    </Flex>
  )
}
