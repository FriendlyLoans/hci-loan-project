import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { Trans, t } from '@lingui/macro'
import { useUser } from './UserContext'
import { RegisterAccountModalContent } from './RegisterAccountModalContent'
import { LogInAccountModalContent } from './LogInAccountModalContent'

export const LoginButton = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { logout, isLoggedIn } = useUser()

  const [currentModalState, setCurrentModalState] = useState('login')

  return (
    <>
      <Button
        {...props}
        outline="1px solid black"
        textColor="black"
        my="auto"
        bg="themeCyan"
        _hover={{ bg: 'themeYellow' }}
        transition="0.25s"
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
        <ModalContent>
          {currentModalState === 'login' ? (
            <LogInAccountModalContent
              switchToRegisterModal={() => {
                setCurrentModalState('register')
              }}
              onClose={onClose}
            />
          ) : (
            <RegisterAccountModalContent
              switchToLogInModal={() => {
                setCurrentModalState('login')
              }}
              onClose={onClose}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
