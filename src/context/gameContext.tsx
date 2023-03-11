import { createContext, useEffect, useState } from "react";
import Game from "../assets/utils/models/Game";
import { RequestService } from "../Services/Request.service"

export type GameContextProps = {
  games: Game[];
  fetchOneDataById: (id: string) => Promise<Game>;
};

export const GameContext = createContext<GameContextProps>({
  games: [],
  fetchOneDataById: async (id: string) => {
    return new Promise((resolve, reject) => {});
  },
});


export function GameContextProvider(props: { children: React.ReactNode }) {
  const [loadingData, setLoadingData] = useState(true);
  const [games, setGames] = useState<Game[]>([]);

  let request : RequestService = new RequestService();

  useEffect(() => {
    if(!games.length) {
      initData();
    }
  }, [games]);

  const initData = async () => {
    return fetchDataByQuery("");
  };

  const fetchDataByQuery = async (query: string | null = "") => {
    let data : Game[] = await request.fetchAllData(query);
    let gamesdata: Game[] = [];
    for (const game of data) {
      gamesdata.push(game);
    }
    setGames(gamesdata);
    setLoadingData(false);
  };

  const fetchOneDataById = async (id: string): Promise<Game> => {
    let data: Game = await request.fetchData(id);
    return data;
  };

  return (
    <GameContext.Provider value={{ games, fetchOneDataById }}>
      {!loadingData && props.children}
    </GameContext.Provider>
  );
}
