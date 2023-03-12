import Game from "../assets/utils/models/Game";
import { Users } from "../assets/utils/models/Users";
import { collection, addDoc, getDocs, query, where, orderBy } from "firebase/firestore";
import { Chat } from "../interfaces/IChat";
import { db } from "../firebase-config";

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

  public async getUserByUid(uid: string): Promise<Users | null> {
    try {
      const usersRef = collection(db, "Users");
      const q = query(usersRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("Aucun utilisateur trouvé pour l'UID donné");
        return null;
      }
      const user: Users = querySnapshot.docs[0].data() as Users;
      return user;
    } catch (error) {
      console.error("Erreur lors de la recherche de l'utilisateur : ", error);
      return null;
    }
  }

  public async createUser (currentuser: any) : Promise<Users> {
    const user : Users = new Users();
    const userData = {
        uid: currentuser.uid,
        Mail: currentuser.email,
      };
    try {
        const usersRef = collection(db, "Users");
        const usersObject = Object.assign({}, userData); // convertir l'objet User en objet simple
        console.log("object", usersObject);
        await addDoc(usersRef, usersObject);
        user.Mail = usersObject.Mail;
        user.uid = usersObject.uid
      console.log('Utilisateur créé avec succès :', userData);
      return user;
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
      throw error;
    }
  };

  public async findChatsByIdGame(idGame: number): Promise<Chat[]> {
    
    const chatsRef = collection(db, "Chat");
    const q = query(chatsRef, where("IdGame", "==", idGame));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return [];
    }

    const chats: Chat[] = [];

    snapshot.forEach((doc: any) => {
      const chat = doc.data() as Chat;
      chat.id = doc.id;
      chats.push(chat);
    });

    chats.sort(this.compareDates);

    return chats;
  }

  public compareDates(a: Chat, b: Chat): number {
    const dateA = a.date;
    const dateB = b.date;
    console.log('date 1', a.date);
    console.log('date 2', b.date);
    
  
    if (dateA > dateB) {
      return 1;
    } else if (dateA < dateB) {
      return -1;
    } else {
      return 0;
    }
  }

  public async createChat(chat: Chat): Promise<void> {
    const sendData = {
      IDUSER: chat.IDUSER,
      IdGame: chat.IdGame,
      message: chat.message,
      date: new Date(),
    };
    try {
      console.log(chat);

      const chatsRef = collection(db, "Chat");
      const chatObject = Object.assign({}, sendData); // convertir l'objet Chat en objet simple
      console.log("object", chatObject);

      await addDoc(chatsRef, chatObject);
      console.log("Le message a été créé avec succès !");
    } catch (error) {
      console.error("Erreur lors de la création du chat :", error);
    }
  }
}
