import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { Login } from "./Login";

export const ProfilePage = () => {
  const { loggedInUser } = useContext(UserContext);

  return !loggedInUser ? (
    <Login />
  ) : (
    <>
      <h1>hello {loggedInUser}</h1>
    </>
  );
};
