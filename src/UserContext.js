import React, { createContext, useContext, useReducer } from 'react'
import { act } from 'react-dom/test-utils'

const UserContext = createContext()

const userReducer = (state, action) => {
  switch (action.type) {
    case 'login': {
      return {
        user: {
          email: action.email,
          firstName: action.firstName,
          lastName: action.lastName,
          loanNumber: action.loanNumber,
          dateOfBirth: action.dateOfBirth,
        },
      }
    }
    case 'logout': {
      return {
        user: {
          email: null,
          firstName: null,
          lastName: null,
          loanNumber: null,
          dateOfBirth: null,
        },
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    email: null,
    firstName: null,
    lastName: null,
    loanNumber: null,
    dateOfBirth: null,
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
    dispatch({ type: 'login', userDetails })
  }
  const logout = () => {
    dispatch({ type: 'logout' })
  }
  return { userState: state, login, logout }
}

export { UserProvider, useUser }
