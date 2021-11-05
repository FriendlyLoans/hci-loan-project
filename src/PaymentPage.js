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
  FormLabel,
  FormControl,
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
        <Flex
          direction="column"
          alignItems="center"
          px="2rem"
          mx="auto"
          mb="2rem"
        >
          <Select name="selectCard" placeholder={t`Select card`}>
            <option value="card1">VISA *9999</option>
          </Select>
        </Flex>
      ) : (
        <form>
          <Flex
            flexDirection="column"
            alignItems="left"
            w="min-content"
            mx="auto"
          >
            <FormControl id="number">
              <FormLabel htmlFor="number">Card number</FormLabel>
              <Input
                name="number"
                placeholder={t`Card number`}
                maxW="95%"
                w="40ch"
                mb="1rem"
              />
            </FormControl>

            <FormControl id="name">
              <FormLabel htmlFor="name">Name on card</FormLabel>
              <Input
                name="name"
                placeholder={t`Name on card`}
                maxW="95%"
                w="40ch"
                mb="1rem"
              />
            </FormControl>

            <FormControl id="cvv">
              <FormLabel htmlFor="cvv">CVV</FormLabel>
              <Input name="cvv" placeholder={t`CVV`} w="10ch" mb="1rem" />
            </FormControl>
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

        <Divider orientation="horizontal" mb="2rem" />

        <Flex flexDirection="column" w="min-content" mx="auto">
          <form>
            <FormControl id="paymentAmount">
              <FormLabel>Payment amount</FormLabel>
              <Input
                w="40ch"
                maxW="100%"
                name="paymentAmount"
                placeholder="Payment amount"
                mb="2rem"
              />
            </FormControl>
          </form>
        </Flex>

        <Confirm />
      </Flex>
    </Flex>
  )
}
