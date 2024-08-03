import { useContext, useState } from "react";
import "./css/UpdateUser.css";
import { patchUser } from "../api";
import { UserContext } from "../contexts/User";
export const UpdateUser = ({ userDetails, setIsUpdatingUser }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const cancel = () => {
    setIsUpdatingUser((prev) => !prev);
  };

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const avatar_url = event.target[0].value || userDetails.avatar_url;
    const username = event.target[1].value || loggedInUser;
    patchUser(loggedInUser, { avatar_url, username }).then((res) => {
      setLoggedInUser(username);
      setIsUpdatingUser((prev) => !prev);
      setIsLoading(false);
    });
  };

  return (
    <div id="update-user">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="update-profile-photo">Change Profile Photo</label>
        <input
          id="update-profile-photo"
          name="update-profile-photo"
          type="url"
        ></input>
        <label htmlFor="update-username">Change Username</label>
        <input id="update-username" name="update-username" type="text"></input>
        <button type="submit">Done</button>
      </form>
      <button type="button" onClick={cancel}>
        Cancel
      </button>
    </div>
  );
};
