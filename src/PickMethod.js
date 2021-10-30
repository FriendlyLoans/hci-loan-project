import {
  Flex,
  Text,
  Heading,
  Divider,
  Center,
  Button,
  Box,
  Textarea,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import { Trans } from '@lingui/macro'

export function PickMethod({ currentPaymentState, setCurrentPaymentState }) {
  return (
    <RadioGroup
      value={currentPaymentState}
      onChange={(e) => {
        setCurrentPaymentState(e)
      }}
      px="2rem"
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
  )
}
