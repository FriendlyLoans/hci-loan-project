import React from 'react'

import {
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  Text,
  Box,
  Link,
} from '@chakra-ui/react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouteLink,
} from 'react-router-dom'

import { theme } from './theme'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex
          maxW={{ sm: 540, md: 768, lg: 960, xl: 1200 }}
          mx="auto"
          w="100%"
          bg="blue"
          minH="100vh"
          flexDirection="column"
        >
          <Flex flexDirection="row" color="darkpurple">
            <Link as={RouteLink} to="/" ml="3rem">
              Home
            </Link>
            <Link as={RouteLink} to="/history" ml="3rem">
              History
            </Link>
            <Link as={RouteLink} to="/contact" ml="3rem">
              Contact
            </Link>
            <Link as={RouteLink} to="/faq" ml="3rem">
              FAQ
            </Link>
          </Flex>

          <Heading color="yellow" my="0.5rem">
            Friendly Loans
          </Heading>
          <Divider orientation="horizontal" />

          <Box mx="auto">
            <Switch>
              <Route path="/history">History</Route>
              <Route path="/contact">Contact</Route>
              <Route path="/faq">FAQ</Route>
              <Route path="/">Home</Route>
            </Switch>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  )
}

export default App
