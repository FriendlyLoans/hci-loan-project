import { Text, Button, useToast } from '@chakra-ui/react'
import React from 'react'
import { Trans } from '@lingui/macro'

export function Confirm() {
  return (
    <Button display="block" mx="2rem">
      <Trans>Confirm</Trans>
    </Button>
  )
}
