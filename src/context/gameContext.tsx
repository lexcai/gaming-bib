import { createContext, useEffect, useState } from "react";
import Game from "../assets/utils/models/Game";

export const GameContext = createContext<any>(null);

export function GameContextProvider(props: { children: React.ReactNode }) {
  const [loadingData, setLoadingData] = useState(true);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    if(!games.length) {
      initData();
    }
  }, [games]);

  const initData = async () => {
    return fillList("");
  };

  const fetchData = async (query: string | null) => {
    const options = {
      headers: {
        'X-RapidAPI-Key': '7a8f0a0e71msh0e7b6644496df46p15454bjsn2f2c71a49a68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      },
    };

    try {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games" + query,
        options
      );
      const result = await response.json();
      return result;
    } catch (error) {
      setLoadingData(false);
    }
  };

  const fillList = async (query: string | null = "") => {
    let data : Game[] = await fetchData(query);
    let gamesdata: Game[] = [];
    for (const game of data) {
      gamesdata.push(game);
    }
    setGames(gamesdata);
    setLoadingData(false);
  };
  

  return (
    <GameContext.Provider value={{ games }}>
      {!loadingData && props.children}
    </GameContext.Provider>
  );
}
