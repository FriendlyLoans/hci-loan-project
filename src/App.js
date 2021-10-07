import React from 'react'

import { ChakraProvider, Text } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Text fontWeight="bold">Welcome to Debt!</Text>
    </ChakraProvider>
  )
}

export default App
