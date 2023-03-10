import { createContext, useState, useEffect } from "react"

export const GameContext = createContext<any>(null)

export function GameContextProvider(props: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)




//   const signUp = (email: string, pwd: string) =>
//     createUserWithEmailAndPassword(auth, email, pwd)
//   const signIn = (email: string, pwd: string) =>
//     signInWithEmailAndPassword(auth, email, pwd)

//   console.log("MAJ", currentUser)

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
//       setCurrentUser(currentUser)
//       setLoadingData(false)
//     })

//     return unsubscribe
//   }, [])

  return (
    <GameContext.Provider value={{  }}>
      {!loadingData && props.children}
    </GameContext.Provider>
  )
}
