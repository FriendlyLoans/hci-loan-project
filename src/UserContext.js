import React, { createContext, useContext, useReducer } from 'react'
import { act } from 'react-dom/test-utils'

const UserContext = createContext()

const userReducer = (state, action) => {
  switch (action.type) {
    case 'login': {
      return {
        email: action.email,
        firstName: action.firstName,
        lastName: action.lastName,
        loanNumber: action.loanNumber,
        dateOfBirth: action.dateOfBirth,
      }
    }
    case 'logout': {
      return {
        email: undefined,
        firstName: undefined,
        lastName: undefined,
        loanNumber: undefined,
        dateOfBirth: undefined,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    email: undefined,
    firstName: undefined,
    lastName: undefined,
    loanNumber: undefined,
    dateOfBirth: undefined,
  })

  const value = { state, dispatch }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const useUser = () => {
  const { state, dispatch } = useContext(UserContext)
  if (state === undefined || dispatch === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  const login = (userDetails) => {
    dispatch({ type: 'login', ...userDetails })
  }
  const logout = () => {
    dispatch({ type: 'logout' })
  }
  const isLoggedIn = () => {
    return !!state?.email
  }
  return { userState: state, login, logout, isLoggedIn }
}

export { UserProvider, useUser }
