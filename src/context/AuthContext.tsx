import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { FirebaseError } from "firebase/app";
import { FirebaseAuthProps } from "../interface";
import { FirebaseContext } from "./FirebaseContext";

export const FirebaseAuthContext = createContext<FirebaseAuthProps | undefined>(
  undefined
);

export const FirebaseAuthProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw Error("Context must be used within provider");
  }
  const { app } = context;
  const auth = getAuth(app);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<null | User>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);
  const signup = async ({
    email,
    password,
    displayName,
  }: {
    email: string;
    password: string;
    displayName: string;
  }): Promise<boolean> => {
    try {
      setLoading(true);
      const creds = await createUserWithEmailAndPassword(auth, email, password);
      if (creds.user) {
        await updateProfile(creds.user, { displayName });
      }
      return true;
    } catch (error) {
      handleError(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      handleError(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logOut = async (): Promise<boolean> => {
    try {
      setLoading(true);
      await signOut(auth);
      return true;
    } catch (error) {
      handleError(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error: any) => {
    if (error instanceof FirebaseError) {
      setError(error.message);
    }
    console.log(error);
  };
  return (
    <FirebaseAuthContext.Provider
      value={{
        signup,
        logOut,
        signin,
        error,
        loading,
        user,
        isAuth: !!user,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};
