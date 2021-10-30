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

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex
          maxW={{ sm: '100%', md: '48rem', lg: '62rem', xl: '80rem', '2xl': '96rem' }}
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
            px="2rem"
          >
            <Heading color="yellow" bg="blue" my="auto">
              Friendly Loans
            </Heading>
            <Button
              outline='1px solid black'
              textColor="black"
              my="auto"
              bg="cyan"
              _hover={{ bg: 'yellow' }}
            >
              Login/Create Account
            </Button>
          </Flex>
          <Navigation />

          <Divider orientation="horizontal" />

          <Box mx="auto" id="main">
            <Switch>
              <Route path="/account" component="" />
              <Route path="/contact" component="" />
              <Route path="/faq" component="" />
              <Route path="/" component="" />
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
