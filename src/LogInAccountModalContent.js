import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react'
import { t, Trans } from '@lingui/macro'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUser } from './UserContext'

export const LogInAccountModalContent = ({
  onClose,
  switchToRegisterModal,
}) => {
  const { login } = useUser()
  const schema = yup.object({
    email: yup
      .string()
      .required(t`Email is required.`)
      .email(t`Must enter a valid email.`),
    password: yup
      .string()
      .required(t`Password is required.`)
      .min(8, t`Password must be at least 8 characters long.`),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const loginSubmit = (data) => {
    login({
      email: 'testemail@email.com',
      firstName: 'Ashley',
      lastName: 'Furniture',
      loanNumber: 550,
      dateOfBirth: '1/1/1970',
    })
    reset()
    onClose()
  }

  return (
    <>
      <ModalHeader>
        <Trans>Sign In</Trans>
      </ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleSubmit(loginSubmit)}>
        <ModalBody>
          <Trans>
            <Text>Please log in below.</Text>
            <FormControl isInvalid={errors.email} mt="1rem">
              <FormLabel htmlFor="email">
                <Trans>Email:</Trans>
              </FormLabel>
              <Input
                {...register('email', { required: true })}
                placeholder={t`Email`}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password} mt="1rem">
              <FormLabel htmlFor="password">
                <Trans>Password:</Trans>
              </FormLabel>
              <Input
                type="password"
                placeholder={`Password`}
                {...register('password', { required: true })}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
          </Trans>

          <Text mt="1rem">
            <Trans>
              Don't have an account?{' '}
              <Link onClick={switchToRegisterModal} color="teal">
                Click here to register.
              </Link>
            </Trans>
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button ml="auto" colorScheme="teal" type="submit">
            <Trans>Sign In</Trans>
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={onClose}
            ml={3}
            mr={3}
          >
            <Trans>Close</Trans>
          </Button>
        </ModalFooter>
      </form>
    </>
  )
}
