import { createContext, useState, useEffect} from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../firebase-config'

export const UserContext = createContext<any>(null)

export function UserContextProvider(props: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState()
  const [loadingData, setLoadingData] = useState(true)

  const signUp = (email: string, pwd: string) =>
  createUserWithEmailAndPassword(auth, email, pwd)
  const signIn = (email: string, pwd: string) =>
    signInWithEmailAndPassword(auth, email, pwd)
  
  console.log("MAJ", currentUser)

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
        setCurrentUser(currentUser)
        setLoadingData(false)
      })

      return unsubscribe
    }, [])

  
  return (
    <UserContext.Provider
      value={{ signUp, currentUser, signIn }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  )
}