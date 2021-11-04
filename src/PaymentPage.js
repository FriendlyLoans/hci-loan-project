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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
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
          <Box px="2rem">
            <Menu>
              <MenuButton
                p="0.2rem"
                borderRadius="md"
                borderWidth="1px"
                borderColor="black.100"
                _hover={{ bg: 'gray.100' }}
                _focus={{ boxShadow: 'outline' }}
              >
                <Trans>Card Select</Trans>
              </MenuButton>
              <MenuList>
                <MenuItem>MyCard</MenuItem>
              </MenuList>
            </Menu>
          </Box>
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
          <Confirm />
        </Box>
      </Flex>
    </Flex>
  )
}
