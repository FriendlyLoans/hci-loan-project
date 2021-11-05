import { Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { t } from '@lingui/macro'

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
