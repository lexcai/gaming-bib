import { createContext, useState } from "react"

export const GameContext = createContext<any>(null)

export function GameContextProvider(props: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)




  return (
    <GameContext.Provider value={{  }}>
      {!loadingData && props.children}
    </GameContext.Provider>
  )
}
