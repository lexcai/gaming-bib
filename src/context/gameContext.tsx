import { createContext, useEffect, useState } from "react";
import { Chat } from "../assets/utils/models/Chat";
import Game from "../assets/utils/models/Game";
import { Users } from "../assets/utils/models/Users";
import { RequestService } from "../Services/Request.service";

export type GameContextProps = {
  games: Game[];
  chats: Chat[];
  fetchOneDataById: (id: string) => Promise<Game>;
  fetchChats: (Game: Game) => Promise<void>;
  createChatHandler: (Chat: Chat) => Promise<void>;
  updateGames: (newGames: Game[]) => void
};

export const GameContext = createContext<GameContextProps>({
  games: [],
  chats: [],
  fetchOneDataById: async (id: string) => {
    return new Promise((resolve, reject) => {})
  },

  fetchChats: async (Game: Game) => {
    return new Promise((resolve, reject) => {});
  },
  createChatHandler: async (Chat: Chat) => {
    return new Promise((resolve, reject) => {});
  },
  updateGames: () => {},
});

export function GameContextProvider(props: { children: React.ReactNode }) {
  const [loadingData, setLoadingData] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const [chats, setChats] = useState<Chat[]>([]);
  const updateGames = (newGames: Game[]) => {
    setGames(newGames)
  }
  let request: RequestService = new RequestService();

  useEffect(() => {
    if (!games.length) {
      initData();
    }
  }, [games]);

  const initData = async () => {
    return fetchDataByQuery("");
  };

  const fetchDataByQuery = async (query: string | null = "") => {
    let data: Game[] = await request.fetchAllData(query);
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

  // CHAT AREA //

  const fetchChats = async (Game: Game) => {
    
    try {
      let chatsData: Chat[] = await request.findChatsByIdGame(Game.id);
      
      for (const chat of chatsData) {
        chat.Users = await request.getUserByUid(chat.IDUSER) as Users;
        chat.Game = await request.fetchData(chat.IdGame.toString()) as Game;
      }
      
      setChats(chatsData);
    } catch (err) {
      console.log("Une erreur est survenue lors de la récupération des chats.");
    } finally {
      setLoadingData(false);
    }
  };

  const createChatHandler = async (Chat: Chat) => {
    try {
      await request.createChat(Chat);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GameContext.Provider
      value={{ games, fetchOneDataById, chats, updateGames, createChatHandler, fetchChats }}>
      {!loadingData && props.children}
    </GameContext.Provider>
  );
}
