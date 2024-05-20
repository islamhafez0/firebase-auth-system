import { FirebaseApp } from "firebase/app";
import { User } from "firebase/auth";
export type createAccountInputsNames = {
  displayName: "username";
  email: "email";
  password: "password";
};
export type signinInputsNames = {
  email: "email";
  password: "password";
};
export type CreateAccountInputsProps = {
  type: string;
  name: keyof createAccountInputsNames;
  id: string;
  label: string;
};
export type SigninInputsProps = {
  type: string;
  name: keyof signinInputsNames;
  id: string;
  label: string;
};
export type FirebaseContextProps = {
  app: FirebaseApp;
};
export type FirebaseAuthProps = {
  loading: boolean;
  error: string;
  user: User | null;
  isAuth: boolean;
  signup: ({
    email,
    password,
    displayName,
  }: {
    email: string;
    password: string;
    displayName: string;
  }) => Promise<boolean>;
  logOut: () => Promise<boolean>;
  signin: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<boolean>;
};
