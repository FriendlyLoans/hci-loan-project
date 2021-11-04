import { Text, Button, useToast } from '@chakra-ui/react'
import React from 'react'
import { Trans } from '@lingui/macro'
import { t } from '@lingui/macro'

export function Confirm() {
  const toast = useToast()
  return (
    <Button
      display="block"
      mx="auto"
      onClick={() =>
        toast({
          title: t`Payment sent.`,
          description: t`Your payment has been sent`,
          status: 'info',
          duration: 5000,
          position: 'top-left',
        })
      }
    >
      <Trans>Confirm</Trans>
    </Button>
  )
}
