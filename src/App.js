import React from 'react'

import {
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  Text,
  Box,
  Link,
  Button,
} from '@chakra-ui/react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouteLink,
} from 'react-router-dom'

import { theme } from './theme'
import { Navigation } from './Navigation'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex
          maxW={{ sm: 540, md: 768, lg: 960, xl: 1200 }}
          mx="auto"
          w="100%"
          bg="white"
          minH="95vh"
          flexDirection="column"
        >
          <Flex
            bg="blue"
            alignContent="center"
            justifyContent="space-between"
            height="20"
          >
            <Heading color="yellow" bg="blue" my="auto">
              Friendly Loans
            </Heading>
            <Button
              outlineColor="lightpurple"
              textColor="black"
              w="24%"
              my="auto"
              height="10"
              bg="cyan"
              _hover={{ bg: 'lightpurple' }}
            >
              Login/Create Account
            </Button>
          </Flex>
          <Navigation />

          <Divider orientation="horizontal" />

          <Box mx="auto">
            <Switch>
              <Route path="/account">Account</Route>
              <Route path="/contact">Contact</Route>
              <Route path="/faq">FAQ</Route>
              <Route path="/">Home</Route>
              <Route path="/about">About</Route>
            </Switch>
          </Box>
        </Flex>
        <Flex
          maxW={{ sm: 540, md: 768, lg: 960, xl: 1200 }}
          mx="auto"
          w="100%"
          bg="blue"
          bg="blue"
          minH="5vh"
          textColor="yellow"
        >
          <Text m="auto">blabla bla idk copyright 1990 or somthing</Text>
        </Flex>
      </Router>
    </ChakraProvider>
  )
}

export default App
