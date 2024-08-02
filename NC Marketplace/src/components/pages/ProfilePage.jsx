import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/User";
import { Login } from "./Login";
import { getUserByUsername } from "../../api";
import EditIcon from "@mui/icons-material/Edit";
import "../css/ProfilePage.css";

export const ProfilePage = () => {
  const { loggedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getUserByUsername(loggedInUser).then((user) => {
      setUserDetails(user);
      console.log(userDetails)
      setIsLoading(false);
    });
  }, [loggedInUser]);

  if (!loggedInUser) return <Login setUserDetails={setUserDetails} />;
  else if (isLoading) return <h1>Loading</h1>;
  else {
    return (
      <>
        <h1>Hi {loggedInUser}!</h1>
        <header id="profile-banner">
          <div id="avatar-container">
            {/* <img src={userDetails.avatar_url}></img> */}
          </div>
          <section id="profile-details">
            <div>
              {/* <h2>{userDetails.username}</h2> */}
              {/* <p>Kudos: {userDetails.kudos}</p> */}
            </div>
            <EditIcon id="edit-picture-icon" />
          </section>
        </header>
      </>
    );
  }
};
