import React from 'react'

import { ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { theme } from './theme'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" minHeight="100vh" bg="gray.100">
        <Text color="cyan">WOOOOOO</Text>
      </Flex>
    </ChakraProvider>
  )
}

export default App
