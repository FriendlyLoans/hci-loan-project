import React from 'react'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { Trans } from '@lingui/macro'
import { useForm } from 'react-hook-form'
import { useUser } from './UserContext'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { t } from '@lingui/macro'

export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { login } = useUser()

  const schema = yup.object({
    email: yup
      .string()
      .email(`Must enter a valid email.`)
      .required(`Email is required.`),
    password: yup.string().required(`Password is required.`),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    login({
      email: 'testemail@email.com',
      firstName: 'FIRST',
      lastName: 'LAST',
      loanNumber: 550,
      dateOfBirth: '1/1/1970',
    })
    reset()
    onClose()
  }

  return (
    <>
      <Button
        outline="1px solid black"
        textColor="black"
        my="auto"
        ml="auto"
        bg="themeCyan"
        _hover={{ bg: 'themeYellow' }}
        onClick={onOpen}
      >
        <Trans>Login/Create Account</Trans>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Trans>
                <Text>Please log in below.</Text>
                <FormControl isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...register('email', { required: true })} />
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    {...register('password', { required: true })}
                  />
                  <FormErrorMessage>
                    {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>
              </Trans>
            </ModalBody>

            <ModalFooter>
              <Button ml="auto" colorScheme="teal" type="submit">
                Sign In
              </Button>
              <Button
                colorScheme="teal"
                variant="outline"
                onClick={onClose}
                ml={3}
                mr={3}
              >
                Close
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
