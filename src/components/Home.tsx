import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  console.log(user?.metadata);
  return (
    <>
      <div className="home">
        <div className="user">
          <b>Username</b>: <span>{user?.displayName}</span> <br />
          <b>Email</b>: <span>{user?.email}</span> <br />
          <b>Created At</b>: <span>{user?.metadata.creationTime}</span> <br />
          <b>Last Signin Time</b>: <span>{user?.metadata.lastSignInTime}</span>
        </div>
      </div>
    </>
  );
};

export default Home;
