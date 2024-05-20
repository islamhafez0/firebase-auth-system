import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinInputs } from "../constants";
import { useAuthContext } from "../hooks/useAuthContext";

const SigninForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { signin, loading, error } = useAuthContext();
  const { email, password } = userData;
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const signedIn = await signin({ email, password });
    if (signedIn) {
      setUserData({
        email: "",
        password: "",
      });
      navigate("/");
    }
  };
  console.log(error);
  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        {signinInputs.map(({ id, label, name, type }) => (
          <div>
            <label htmlFor={id}>{label}</label>
            <input
              onChange={handleChange}
              value={userData[name]}
              type={type}
              id={id}
              name={name}
            />
          </div>
        ))}
        <button type="submit" disabled={loading}>
          {loading ? "Loading...." : "Submit"}
        </button>
        {error ? <p>{error}</p> : null}
      </form>
    </div>
  );
};

export default SigninForm;
