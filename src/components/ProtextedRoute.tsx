import { ReactNode, useContext } from "react";
import { FirebaseAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtextedRoute = ({ element }: { element: ReactNode }) => {
  const context = useContext(FirebaseAuthContext);
  if (!context) {
    throw Error("Context must be used within provider");
  }
  const { isAuth } = context;
  return isAuth ? (
    element
  ) : location.pathname.includes("sign_in") ? (
    <Navigate to={"/sign_in"} />
  ) : (
    <Navigate to={"/sign_up"} />
  );
};

export default ProtextedRoute;
