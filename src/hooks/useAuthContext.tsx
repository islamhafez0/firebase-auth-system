import { useContext } from "react";
import { FirebaseAuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(FirebaseAuthContext);
  if (!context) {
    throw new Error("Context must be used within provider!");
  }
  return context;
};
