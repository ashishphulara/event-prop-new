import React, { useContext } from "react";
import UserContext from "../../UserContext";

function UserHeader() {
  const { username } = useContext(UserContext);

  return <div>Welcome, {username}!</div>;
}

export default UserHeader;

