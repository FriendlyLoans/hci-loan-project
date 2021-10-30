import {
  Flex,
  Text,
  Heading,
  Divider,
  Center,
  Button,
  Box,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import React from 'react'
import { Trans } from '@lingui/macro'

export function Confirm() {
  const toast = useToast()
  return (
    <Button
    //   onClick={() =>
    //     toast({
    //       title: 'Payment Sent.',
    //       description: "We've sent you payment to be processed.",
    //       status: 'successful send',
    //       duration: 9000,
    //       isClosable: true,
    //     })
    //   }
    >
      <Trans>Confirm</Trans>
    </Button>
  )
}
