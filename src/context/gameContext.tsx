import { createContext, useState } from "react"
import Game from "../assets/utils/models/Game"

export const GameContext = createContext<any>(null)

export function GameContextProvider(props: { children: React.ReactNode }) {
  const [loadingData, setLoadingData] = useState(true)
  const [games, setGames] = useState<Game[]>([])

  const gameListProvider = (query: string, gameObj: object): object => {
    return fillList(query, gameObj)
  }

  const fetchData = async (query: string | null) => {
    console.log("OK")
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d142297cf2msh024b1853e5b4ee4p11a3b7jsne9bad46a88d0",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }

    try {
      console.log("OK ///")
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games" + query,
        options
      )
      console.log("OK ///")
      const result = await response.json()
      console.log("RESULT OF THE PROMISE ", result)
      return result
    } catch (error) {
      setLoadingData(false)
      console.log("KO /// ", error)
    }
  }

  const fillList = async (query: string | null, gamesObj: object) => {
    const json = await fetchData(query)
    const games: Game[] = Object.keys(json).map((key) => json[key])
    setGames(games)
    return games
  }

  return (
    <GameContext.Provider value={{ gameListProvider, games }}>
      {!loadingData && props.children}
    </GameContext.Provider>
  )
}
