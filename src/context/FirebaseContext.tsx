import { initializeApp } from "firebase/app";
import { ReactNode, createContext } from "react";
import { FirebaseContextProps } from "../interface";
import { firebaseConfig } from "../firebaseConfig";
export const FirebaseContext = createContext<FirebaseContextProps | undefined>(undefined);


export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  const app = initializeApp(firebaseConfig);
  if(!app) {
    throw Error("Failed to initialize firebase app");
  }
  return (
    <FirebaseContext.Provider value={{ app }}>
      {children}
    </FirebaseContext.Provider>
  )
}