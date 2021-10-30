import React from 'react'

import { ChakraProvider, Flex } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AccountPage } from './AccountPage'
import { FaqPage } from './FaqPage'
import { HomePage } from './HomePage'
import { Header } from './Header'
import { Footer } from './Footer'
import { theme } from './theme'
import { PaymentPage } from './PaymentPage'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages } from './locales/en/messages'

i18n.load('en', messages)
i18n.activate('en')

const App = () => {
  return (
    <I18nProvider i18n={i18n}>
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
              <Route path="/faq" component={FaqPage} />
              <Route path="/" component={HomePage} />
              <Route path="/payment" component={PaymentPage} />
            </Switch>
            <Footer />
          </Flex>
        </Router>
      </ChakraProvider>
    </I18nProvider>
  )
}

export default App
