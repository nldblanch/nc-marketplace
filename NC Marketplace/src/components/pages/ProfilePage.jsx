import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/User";
import { Login } from "./Login";


import "../css/ProfilePage.css";
import { Profile } from "../Profile";

export const ProfilePage = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState([]);

  

  if (!loggedInUser) return <Login setUserDetails={setUserDetails} />;
  
  else {
    return (
      <>
        <Profile userDetails={userDetails} setUserDetails={setUserDetails}/>
      </>
    );
  }
};
