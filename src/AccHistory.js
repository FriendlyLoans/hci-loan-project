import {
  Flex,
  Text,
  Heading,
  Button,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from '@chakra-ui/react'
import React from 'react'
import { Trans } from '@lingui/macro'

export const History = (
  <Box overflowX="scroll">
    <Table variant="simple" mb="2rem">
      <TableCaption placement="top" fontWeight="bold" fontSize="1.5rem">
        <Trans>Account History</Trans>
      </TableCaption>
      <Thead>
        <Tr>
          <Th>
            <Trans>Date</Trans>
          </Th>
          <Th>
            <Trans>Transaction Type</Trans>
          </Th>
          <Th isNumeric>
            <Trans>Amount Due</Trans>
          </Th>
          <Th isNumeric>
            <Trans>Amount Paid</Trans>
          </Th>
          <Th isNumeric>
            <Trans>Balance Remaining</Trans>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>20-1-2020</Td>
          <Td>
            <Trans>Payment</Trans>
          </Td>
          <Td isNumeric>$0.00</Td>
          <Td isNumeric>$8502.20</Td>
          <Td isNumeric>$14503.60</Td>
        </Tr>
        <Tr bg="gray.200">
          <Td>20-11-2019</Td>
          <Td>
            <Trans>Payment</Trans>
          </Td>
          <Td isNumeric>$0.00</Td>
          <Td isNumeric>$267.00</Td>
          <Td isNumeric>$14236.60</Td>
        </Tr>
        <Tr>
          <Td>20-10-2019</Td>
          <Td>
            <Trans>Payment Due</Trans>
          </Td>
          <Td isNumeric>$267.00</Td>
          <Td isNumeric>$0.00</Td>
          <Td isNumeric>$14503.60</Td>
        </Tr>
        <Tr bg="gray.200">
          <Td>10-10-2018</Td>
          <Td>
            <Trans>Payment</Trans>
          </Td>
          <Td isNumeric>$0.00</Td>
          <Td isNumeric>$10004.20</Td>
          <Td isNumeric>$23005.80</Td>
        </Tr>
        <Tr>
          <Td>20-09-2017</Td>
          <Td>
            <Trans>Deposit</Trans>
          </Td>
          <Td isNumeric>$0.00</Td>
          <Td isNumeric>$33010</Td>
          <Td isNumeric>$33010</Td>
        </Tr>
      </Tbody>
    </Table>
  </Box>
)
