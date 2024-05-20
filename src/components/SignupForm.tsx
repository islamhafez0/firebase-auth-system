import { ChangeEvent, FormEvent, useState } from "react";
import { createAccountInputs } from "../constants";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const { signup, loading, error } = useAuthContext();
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setUserData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = await signup(userData);
    if (newUser) {
      setUserData({
        displayName: "",
        email: "",
        password: "",
      });
    }
    navigate("/");
  };
  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <h2>Create An Account</h2>
        {createAccountInputs.map(({ label, id, name, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              value={userData[name]}
              onChange={handleChange}
              name={name}
              id={id}
              autoComplete="false"
            />
          </div>
        ))}
        <button type="submit">{loading ? "Loading...." : "Submit"}</button>
        {error ? <p className="error">{error}</p> : null}
      </form>
    </div>
  );
};

export default SignupForm;
