import {
  Flex,
  Text,
  Heading,
  Divider,
  Button,
  Box,
  Textarea,
  Input,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Trans, t } from '@lingui/macro'
import { Confirm } from './PaymentConf'
import { PickMethod } from './PickMethod'
import { PaymentSelect } from './Payment'

export const PaymentPage = () => {
  const [currentPaymentState, setCurrentPaymentState] = useState('card')
  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading mx="auto" my="2rem">
        <Trans>Payment Page</Trans>
      </Heading>
      <Flex flexDirection="column">
        <Box>
          <Text px="2rem">
            <Trans>Pay with existing information</Trans>
          </Text>
          <Confirm />
        </Box>
        <Divider py="1rem" />
        <Box py="1rem">
          <Text px="2rem">
            <Trans>Add Credit/Bank information</Trans>
          </Text>
          <PickMethod
            currentPaymentState={currentPaymentState}
            setCurrentPaymentState={setCurrentPaymentState}
          />
          <PaymentSelect currentPaymentState={currentPaymentState} />
        </Box>
      </Flex>
    </Flex>
  )
}
