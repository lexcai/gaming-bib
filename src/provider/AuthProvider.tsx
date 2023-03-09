import { createContext, useReducer, Dispatch } from 'react'
import { authReducer, initState } from '../reducers/AuthReducer'

type AuthActions =
  | { type: 'LOGIN', payload: any }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING', payload: boolean }
  | { type: 'UPDATE_USER_INFOS', payload: any }

const defaultValueType = {
  state: initState,
  dispatch: () => null
}

interface AuthProps {
  children: any
}

export const AuthContext = createContext(defaultValueType)

const AuthProvider = ({ children }: AuthProps): any => {
  const [state, dispatch] = useReducer(authReducer, initState)

  return (
    <AuthContext.Provider value={{ state, dispatch({ type: 'LOGIN', payload: { email: 'john@example.com', password: 'password' }}) }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
