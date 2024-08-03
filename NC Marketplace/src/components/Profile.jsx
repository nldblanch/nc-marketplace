import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";

import { UpdateUser } from "./UpdateUser";
import { ProfileBanner } from "./ProfileBanner";

export const Profile = ({ userDetails, setUserDetails }) => {
  const { loggedInUser } = useContext(UserContext);

  const [isUpdatingUser, setIsUpdatingUser] = useState(false);

  return (
    <>
      <h1>Hi {loggedInUser}!</h1>
      {isUpdatingUser ? (
        <UpdateUser
          userDetails={userDetails}
          setIsUpdatingUser={setIsUpdatingUser}
        />
      ) : (
        <>
          <ProfileBanner
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            setIsUpdatingUser={setIsUpdatingUser}
          />
        </>
      )}
    </>
  );
};
