import { useContext, useEffect, useState } from "react";
import { getUserByUsername } from "../api";
import EditIcon from "@mui/icons-material/Edit";
import { UserContext } from "../contexts/User";

export const ProfileBanner = ({
  userDetails,
  setUserDetails,
  setIsUpdatingUser,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getUserByUsername(loggedInUser).then((user) => {
      setUserDetails(user);
      setIsLoading(false);
    });
  }, []);

  const updateUser = () => {
    setIsUpdatingUser((prev) => !prev);
  };

  if (isLoading) return <h1>Loading</h1>;

  return (
    <header id="profile-banner">
      <div id="avatar-container">
        <img src={userDetails.avatar_url}></img>
      </div>
      <section id="profile-details">
        <div>
          <h2>{userDetails.username}</h2>
          <p>Kudos: {userDetails.kudos}</p>
        </div>
        <EditIcon onClick={updateUser} id="edit-picture-icon" />
      </section>
    </header>
  );
};
