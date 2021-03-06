import React from 'react'

import { Flex, Heading, Text } from '@chakra-ui/react'
import { LoginButton } from './LoginButton'
import { Navigation } from './Navigation'
import { Trans } from '@lingui/macro'
import { LocaleSwitcher } from './LocaleSwitcher'
import { useUser } from './UserContext'

export const Header = () => {
  const { userState, isLoggedIn } = useUser()

  return (
    <>
      <Flex
        bg="themeBlue"
        alignContent="center"
        px="2rem"
        flexDirection="row"
        w="100%"
        py="1rem"
        flexWrap="wrap"
      >
        <Heading color="themeYellow" bg="themeBlue" mr="auto">
          <Trans>Friendly Loans</Trans>
        </Heading>

        {isLoggedIn() && (
          <Text my="auto" textAlign="right" color="themeYellow">
            <Trans>
              <strong>Hi, </strong>{' '}
              {`${userState?.firstName} ${userState?.lastName}`}
            </Trans>
          </Text>
        )}

        <LoginButton ml="2rem" />

        <LocaleSwitcher ml="2rem" />
      </Flex>

      <Navigation />
    </>
  )
}
