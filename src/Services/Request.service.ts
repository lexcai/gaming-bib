import { Firestore } from "firebase/firestore";
import Game from "../assets/utils/models/Game";
import { Users } from "../assets/utils/models/Users";
import { db } from "../firebase-config";
import { Chat } from "../interfaces/IChat";

export class RequestService {
  public options = {
    headers: {
      "X-RapidAPI-Key": "7a8f0a0e71msh0e7b6644496df46p15454bjsn2f2c71a49a68",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  public fetchData(id: string): Promise<Game> {
    return fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id,
      this.options
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  public async fetchAllData(query: string | null) {
    try {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games" + query,
        this.options
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return;
    }
  }

  public async getUserByUid(uid: string) {
    try {
      const usersRef = db.collection("Users");
      const querySnapshot = await usersRef.where("uid", "==", uid).get();
      if (querySnapshot.empty) {
        console.log("Aucun utilisateur trouvé pour l'UID donné");
        return null;
      }
      const user: Users = querySnapshot.docs[0].data();
      return user;
    } catch (error) {
      console.error("Erreur lors de la recherche de l'utilisateur : ", error);
      return null;
    }
  }

  public async findChatsByIdGame(idGame: number): Promise<Chat[]> {
    const chatsRef = db.collection("Chat");
    const snapshot = await chatsRef.where("idGame", "==", idGame).get();

    if (snapshot.empty) {
      return [];
    }

    const chats: Chat[] = [];

    snapshot.forEach((doc: any) => {
      const chat = doc.data() as Chat;
      chat.id = doc.id;
      chats.push(chat);
    });

    return chats;
  }

  public async createChat(chat: Chat): Promise<void> {
    const firestore = db.firestore();
    try {
      const newChatRef = await firestore.collection('Chat').doc();
      await newChatRef.set(chat);
      console.log('Le message a été créé avec succès !');
    } catch (error) {
      console.error('Erreur lors de la création du chat :', error);
    }
  }
}
