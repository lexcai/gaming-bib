import { createContext, useState, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal} from 'react'

export const UserContext = createContext<any>(null)

export function UserContextProvider(props: { children: React.ReactNode }) {
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  })

  const toggleModals = (modal: string) => {
    if (modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true,
      })
    }
    if (modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
      })
    }
    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false,
      })
    }
  }

  return (
    <UserContext.Provider value={{ modalState, toggleModals }}>
      {props.children}
    </UserContext.Provider>
  )
}