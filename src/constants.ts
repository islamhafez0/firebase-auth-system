import { CreateAccountInputsProps, SigninInputsProps } from "./interface";

export const createAccountInputs: CreateAccountInputsProps[] = [
  {
    type: "text",
    name: "displayName",
    id: "username-input",
    label: "Username",
  },
  {
    type: "email",
    name: "email",
    id: "email-input",
    label: "Email",
  },
  {
    type: "password",
    name: "password",
    id: "password-input",
    label: "Password",
  },
];
export const signinInputs: SigninInputsProps[] = [
  {
    type: "email",
    name: "email",
    id: "email-input",
    label: "Email",
  },
  {
    type: "password",
    name: "password",
    id: "password-input",
    label: "Password",
  },
];
