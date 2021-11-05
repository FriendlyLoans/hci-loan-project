import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react'

import React, { useState } from 'react'
import { t, Trans } from '@lingui/macro'
import { Confirm } from './PaymentConf'

export const PaymentPage = () => {
  const [currentPaymentState, setCurrentPaymentState] = useState('card')
  const [currentCardState, setCurrentCardState] = useState('existing')
  const [currentBankState, setCurrentBankState] = useState('existing')

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
              <FormLabel htmlFor="number">
                <Trans>Card number</Trans>
              </FormLabel>
              <Input
                name="number"
                placeholder={t`Card number`}
                maxW="95%"
                w="40ch"
                mb="1rem"
              />
            </FormControl>

            <FormControl id="name">
              <FormLabel htmlFor="name">
                <Trans>Name on card</Trans>
              </FormLabel>
              <Input
                name="name"
                placeholder={t`Name on card`}
                maxW="95%"
                w="40ch"
                mb="1rem"
              />
            </FormControl>

            <FormControl id="cvv">
              <FormLabel htmlFor="cvv">
                <Trans>CVV</Trans>
              </FormLabel>
              <Input name="cvv" placeholder={t`CVV`} w="10ch" mb="1rem" />
            </FormControl>
          </Flex>
        </form>
      )}
    </Flex>
  )

  const bankPayment = (
    <Flex w="100%" flexDirection="column">
      <Text px="2rem" mx="auto">
        <Trans>Pay with existing bank account or add new</Trans>
      </Text>
      <RadioGroup
        value={currentBankState}
        onChange={(e) => {
          setCurrentBankState(e)
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

      {currentBankState === 'existing' ? (
        <Flex
          direction="column"
          alignItems="center"
          px="2rem"
          mx="auto"
          mb="2rem"
        >
          <Select name="selectBank" placeholder={t`Select account`}>
            <option value="bank1">{t`RBC *9999`}</option>
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
            <FormControl id="transit">
              <FormLabel htmlFor="transit">
                <Trans>Transit number</Trans>
              </FormLabel>
              <Input
                name="transit"
                placeholder={t`Transit number`}
                maxW="95%"
                w="40ch"
                mb="1rem"
              />
            </FormControl>

            <FormControl id="institution">
              <FormLabel htmlFor="name">
                <Trans>Institution number</Trans>
              </FormLabel>
              <Input
                name="institution"
                placeholder={t`Institution number`}
                maxW="95%"
                w="40ch"
                mb="1rem"
              />
            </FormControl>

            <FormControl id="account">
              <FormLabel htmlFor="cvv">
                <Trans>Account number</Trans>
              </FormLabel>
              <Input
                name="account"
                placeholder={t`Account number`}
                w="40ch"
                maxW="95%"
                mb="1rem"
              />
            </FormControl>
          </Flex>
        </form>
      )}
    </Flex>
  )
  return (
    <Flex minH="30rem" width="100%" flexDirection="column">
      <Heading mx="auto" my="2rem">
        <Trans>Payment Page</Trans>
      </Heading>
      <Flex flexDirection="column">
        <Text textAlign="center" pl="2rem">
          <Trans>Select your payment method</Trans>
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
              <FormLabel>
                <Trans>Payment amount</Trans>
              </FormLabel>
              <NumberInput>
                <NumberInputField
                  w="40ch"
                  maxW="100%"
                  name="paymentAmount"
                  placeholder={t`Payment amount`}
                  mb="2rem"
                  type="number"
                />
              </NumberInput>
            </FormControl>
          </form>
        </Flex>

        <Confirm />
      </Flex>
    </Flex>
  )
}
