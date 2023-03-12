import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { RequestService } from "../Services/Request.service";
import { Users } from "../assets/utils/models/Users";
import { useNavigate } from "react-router-dom";

export type UserContextProps = {
  currentUser: Users;
  signIn: (email: string, pwd: string) => Promise<any>;
  signUp: (email: string, pwd: string) => Promise<any>;
};

export const UserContext = createContext<UserContextProps>({
  currentUser: new Users(),
  signIn: async (email: string, pwd: string) => {
    return new Promise((resolve, reject) => {});
  },
  signUp: async (email: string, pwd: string) => {
    return new Promise((resolve, reject) => {});
  },
});

export function UserContextProvider(props: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<Users>(new Users());
  const [loadingData, setLoadingData] = useState(true);
  const navigate = useNavigate();

  let request: RequestService = new RequestService();

  const signUp = (email: string, pwd: string) =>
    createUserWithEmailAndPassword(auth, email, pwd);
  const signIn = (email: string, pwd: string) =>
    signInWithEmailAndPassword(auth, email, pwd);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser: any) => {
      if (currentUser) {
        let user: Users | null = await request.getUserByUid(currentUser.uid);
        if (user === null) {
          try {
            user = await request.createUser(currentUser);
          } catch (error) {
            console.log(
              "Une erreur est survenue lors de la création de votre utilisateur."
            );
          }
        }
        setCurrentUser(user as Users);
        setLoadingData(false);
        navigate("/dashboard/game");
      } else {
        setLoadingData(false);
        navigate("/auth/login");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ signUp, currentUser, signIn }}>
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
