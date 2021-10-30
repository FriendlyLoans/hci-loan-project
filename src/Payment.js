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
import React from 'react'
import { Trans, t } from '@lingui/macro'
import { Confirm } from './PaymentConf'
import { PickMethod } from './PickMethod'

export const PaymentSelect = ({ currentPaymentState }) => {
  switch (currentPaymentState) {
    case 'card':
      return (
        <Flex px="2rem" flexDirection="column">
          <Input placeholder={t`Card number`} display="block" />
          <Input placeholder={t`Name on card`} display="block" />
          <Input placeholder="CVV" display="block" width="5rem" />
        </Flex>
      )

    case 'bank':
      return (
        <Flex px="2rem" flexDirection="column">
          <Input placeholder={t`Transit number`} display="block" />
          <Input placeholder={t`Institution number`} display="block" />
          <Input placeholder={t`Account number`} display="block" />
        </Flex>
      )
  }
}
