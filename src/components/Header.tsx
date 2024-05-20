import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
const Header = () => {
  const { isAuth, loading, logOut } = useAuthContext();
  const navigate = useNavigate();
  const handleLogoout = async () => {
    const loggedOut = await logOut();
    if (loggedOut) {
      navigate("/sign_in");
    }
    console.log("Logged out");
  };
  return (
    <header className="header">
      <Link to="/">Firebase</Link>
      {isAuth ? (
        <button onClick={handleLogoout}>
          {loading ? "Loading..." : "Logout"}
        </button>
      ) : (
        <ul>
          <li>
            <Link to="/sign_up">Sign up</Link>
          </li>
          <li>
            <Link to="/sign_in">Sign in</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
