import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import Header from "./components/Header";
import ProtextedRoute from "./components/ProtextedRoute";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path={"/"} element={<ProtextedRoute element={<Home />} />} />
        <Route path={"/sign_up"} element={<SignupForm />} />
        <Route path={"/sign_in"} element={<SigninForm />} />
      </Routes>
    </div>
  );
};

export default App;
