import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useUser } from './UserContext'
import { useToast } from '@chakra-ui/react'
import { t } from '@lingui/macro'

export const PrivateRoute = ({ path, component, pageName }) => {
  const { isLoggedIn } = useUser()
  const toast = useToast()

  if (isLoggedIn()) {
    return <Route path={path} component={component} />
  }

  toast({
    title: t`Must be logged in.`,
    description: t`You must be logged to access the ${pageName} page.`,
    status: 'info',
    duration: 9000,
    isClosable: true,
    position: 'top-left',
  })

  return <Redirect to="/" />
}
