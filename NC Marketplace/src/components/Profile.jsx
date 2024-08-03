import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUserByUsername } from "../api";
import EditIcon from "@mui/icons-material/Edit";

export const Profile = ({userDetails, setUserDetails}) => {
    const { loggedInUser } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getUserByUsername(loggedInUser).then((user) => {
          setUserDetails(user);
          setIsLoading(false);
        });
      }, []);
    
    if (isLoading) return <h1>Loading</h1>;
    return (
        <>
          <h1>Hi {loggedInUser}!</h1>
          <header id="profile-banner">
            <div id="avatar-container">
              <img src={userDetails.avatar_url}></img>
            </div>
            <section id="profile-details">
              <div>
                <h2>{userDetails.username}</h2>
                <p>Kudos: {userDetails.kudos}</p>
              </div>
              <EditIcon id="edit-picture-icon" />
            </section>
          </header>
        </>
      );
}