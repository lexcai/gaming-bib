import React from 'react'
import { type auth } from '../config/firebase'
interface AuthContextType {
  auth: typeof auth
}
export const AuthContext = React.createContext<AuthContextType | null>(null)
