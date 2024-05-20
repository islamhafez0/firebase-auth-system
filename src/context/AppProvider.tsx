import { ReactNode } from "react"
import { FirebaseAuthProvider } from "./AuthContext"
import { FirebaseProvider } from "./FirebaseContext"

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FirebaseProvider>
      <FirebaseAuthProvider>
        {children}
      </FirebaseAuthProvider>
    </FirebaseProvider>
  )
}