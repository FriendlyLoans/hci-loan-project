import React from 'react'

import {
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  Text,
  Box,
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
import { AccountPage } from './AccountPage'
import { ContactPage } from './ContactPage'
import { FaqPage } from './FaqPage'
import { HomePage } from './HomePage'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex
          maxW={{
            sm: '100%',
            md: '48rem',
            lg: '62rem',
            xl: '80rem',
            '2xl': '96rem',
          }}
          mx="auto"
          w="100%"
          bg="white"
          minH="100vh"
          flexDirection="column"
        >
          <Flex bg="blue" alignContent="center" p="2rem">
            <Heading color="yellow" bg="blue" my="auto">
              Friendly Loans
            </Heading>
            <Button
              outline="1px solid black"
              textColor="black"
              my="auto"
              ml="auto"
              bg="cyan"
              _hover={{ bg: 'yellow' }}
            >
              Login/Create Account
            </Button>
          </Flex>

          <Navigation />

          <Divider orientation="horizontal" />

          <Switch>
            <Route path="/account" component={AccountPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/faq" component={FaqPage} />
            <Route path="/" component={HomePage} />
          </Switch>

          <Flex w="100%" bg="blue" minH="5vh" textColor="yellow" mt="auto">
            <Text m="auto">blabla bla idk copyright 1990 or somthing</Text>
          </Flex>
        </Flex>
      </Router>
    </ChakraProvider>
  )
}

export default App
