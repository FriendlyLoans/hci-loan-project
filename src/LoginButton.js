import React, { useState } from 'react'
import { Button, Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Trans, t } from '@lingui/macro'
import { useUser } from './UserContext'
import { RegisterAccountModalContent } from './RegisterAccountModalContent'
import { LogInAccountModalContent } from './LogInAccountModalContent'

export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { logout, isLoggedIn } = useUser()

  const [currentModalState, setCurrentModalState] = useState('login')

  return (
    <>
      <Button
        outline="1px solid black"
        textColor="black"
        my="auto"
        ml="auto"
        bg="themeCyan"
        _hover={{ bg: 'themeYellow' }}
        onClick={
          isLoggedIn()
            ? logout
            : () => {
                setCurrentModalState('login')
                onOpen()
              }
        }
      >
        {isLoggedIn() ? (
          <Trans>Log out</Trans>
        ) : (
          <Trans>Login/Create Account</Trans>
        )}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {currentModalState === 'login' ? (
          <LogInAccountModalContent
            switchToRegisterModal={() => {
              setCurrentModalState('register')
            }}
          />
        ) : (
          <RegisterAccountModalContent
            switchToLogInModal={() => {
              setCurrentModalState('login')
            }}
            onClose={onClose}
          />
        )}
      </Modal>
    </>
  )
}
