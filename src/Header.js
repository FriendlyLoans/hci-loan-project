import React from 'react'

import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { LoginButton } from './LoginButton'
import { Navigation } from './Navigation'
import { Trans } from '@lingui/macro'
import { LocaleSwitcher } from './LocaleSwitcher'
import { useUser } from './UserContext'

export const Header = () => {
  const { userState, isLoggedIn } = useUser()

  const welcomeString = `Hi, ${userState?.firstName} ${userState?.lastName}`

  return (
    <>
      <Flex
        bg="themeBlue"
        alignContent="center"
        px="2rem"
        pb="2rem"
        flexDirection="column"
      >
        <Flex w="100%">
          <LocaleSwitcher ml="auto" />
        </Flex>

        <Flex flexDirection="row">
          <Heading color="themeYellow" bg="themeBlue" my="auto">
            <Trans>Friendly Loans</Trans>
          </Heading>

          <LoginButton />
        </Flex>

        {isLoggedIn() && (
          <Text ml="auto" mt="1rem" color="themeYellow">
            {welcomeString}
          </Text>
        )}
      </Flex>

      <Navigation />
    </>
  )
}
