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
import { LoginButton } from './LoginButton'
import { Header } from './Header'
import { Footer } from './Footer'

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
          <Header />

          <Switch>
            <Route path="/account" component={AccountPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/faq" component={FaqPage} />
            <Route path="/" component={HomePage} />
          </Switch>

          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  )
}

export default App
