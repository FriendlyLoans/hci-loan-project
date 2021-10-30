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

export const RegisterAccountModalContent = ({
  switchToLogInModal,
  onClose,
}) => {
  const { login } = useUser()

  const schema = yup.object({
    email: yup
      .string()
      .required(t`Email is required.`)
      .email(t`Must enter a valid email.`),
    firstName: yup.string().required(t`First name is required.`),
    lastName: yup.string().required(t`Last name is required.`),
    accountNumber: yup
      .string()
      .required(t`Account number is required.`)
      .matches(/^[0-9]{12}$/, {
        message: t`Account numbers consist of exactly 12 numbers.`,
        excludeEmptyString: true,
      }),
    password: yup
      .string()
      .required(t`Password is required.`)
      .min(8, t`Passwords must be at least 8 characters long.`)
      .max(24, t`Passwords can be at most 24 characters long.`)
      .matches(/^[a-zA-Z0-9 !"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]$/, {
        message: t`Unacceptable characters used.`,
        excludeEmptyString: true,
      }),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const registerSubmit = () => {
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
    <ModalContent>
      <ModalHeader>Register</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleSubmit(registerSubmit)}>
        <ModalBody>
          <Trans>
            <Text>Enter your information below.</Text>
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
            <FormControl isInvalid={errors.firstName} mt="1rem">
              <FormLabel htmlFor="firstName">
                <Trans>First name:</Trans>
              </FormLabel>
              <Input
                {...register('firstName', { required: true })}
                placeholder={t`First name`}
              />
              <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.lastName} mt="1rem">
              <FormLabel htmlFor="lastName">
                <Trans>Last name:</Trans>
              </FormLabel>
              <Input
                {...register('lastName', { required: true })}
                placeholder={t`Last name`}
              />
              <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.accountNumber} mt="1rem">
              <FormLabel htmlFor="accountNumber">
                <Trans>Account number:</Trans>
              </FormLabel>
              <Input
                {...register('accountNumber', { required: true })}
                placeholder={t`Account number`}
              />
              <FormErrorMessage>
                {errors.accountNumber?.message}
              </FormErrorMessage>
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
              Already have an account?{' '}
              <Link onClick={switchToLogInModal} color="teal">
                Click here to log in.
              </Link>
            </Trans>
          </Text>
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
  )
}
