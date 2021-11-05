import {
  Flex,
  Text,
  Heading,
  Divider,
  Box,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  RadioGroup,
  Stack,
  Radio,
  Button,
  Select,
  Tab,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import React, { useState } from 'react'
import { Trans, t } from '@lingui/macro'
import { Confirm } from './PaymentConf'

export const PaymentPage = () => {
  const [currentPaymentState, setCurrentPaymentState] = useState('card')
  const [currentCardState, setCurrentCardState] = useState('existing')

  const cardPayment = (
    <Flex w="100%" flexDirection="column">
      <Text px="2rem" mx="auto">
        <Trans>Pay with existing information or add new</Trans>
      </Text>
      <RadioGroup
        value={currentCardState}
        onChange={(e) => {
          setCurrentCardState(e)
        }}
        pl="2rem"
        mb="2rem"
        mx="auto"
      >
        <Stack spacing={5} direction="row">
          <Radio colorScheme="blue" value="existing">
            <Trans>Existing</Trans>
          </Radio>
          <Radio colorScheme="blue" value="new">
            <Trans>New</Trans>
          </Radio>
        </Stack>
      </RadioGroup>

      {currentCardState === 'existing' ? (
        <Box px="2rem" mx="auto" mb="2rem">
          <label htmlFor="selectCard">
            <Trans>Select card</Trans>
          </label>
          <Select name="selectCard" placeholder={t`Select card`}>
            <option value="card1">VISA *9999</option>
          </Select>
        </Box>
      ) : (
        <form>
          <Flex
            flexDirection="column"
            alignItems="left"
            w="min-content"
            mx="auto"
          >
            <label htmlFor="number">Card number</label>
            <Input
              name="number"
              placeholder={t`Card number`}
              maxW="95%"
              w="40ch"
              mb="1rem"
            />
            <label htmlFor="name">Name on card</label>
            <Input
              name="name"
              placeholder={t`Name on card`}
              maxW="95%"
              w="40ch"
              mb="1rem"
            />
            <label htmlFor="cvv">CVV</label>
            <Input name="cvv" placeholder={t`CVV`} w="10ch" mb="1rem" />
          </Flex>
        </form>
      )}
    </Flex>
  )

  const bankPayment = <Flex>BANK</Flex>

  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading mx="auto" my="2rem">
        <Trans>Payment Page</Trans>
      </Heading>
      <Flex flexDirection="column">
        <Text textAlign="center" pl="2rem">
          Select your payment method
        </Text>
        <RadioGroup
          mx="auto"
          value={currentPaymentState}
          onChange={(e) => {
            setCurrentPaymentState(e)
          }}
          pl="2rem"
          mb="2rem"
        >
          <Stack spacing={5} direction="row">
            <Radio colorScheme="blue" value="card">
              <Trans>Credit/Debit</Trans>
            </Radio>
            <Radio colorScheme="blue" value="bank">
              <Trans>Bank</Trans>
            </Radio>
          </Stack>
        </RadioGroup>

        <Divider orientation="horizontal" mb="2rem" />

        <Box>{currentPaymentState === 'card' ? cardPayment : bankPayment}</Box>

        <Divider orientation="horizontal" />

        <label htmlFor="paymentAmount">Payment amount</label>
        <Input name="paymentAmount" placeholder="Payment amount" />

        <Confirm />
      </Flex>
    </Flex>
  )
}
