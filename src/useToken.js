import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const getUserName = () => {
    const userNameString = sessionStorage.getItem("username");
    const userName = JSON.parse(userNameString);
    return userName?.username;
  };

  const [username, setUserName] = useState(getToken());

  const saveUserName = (userName) => {
    sessionStorage.setItem("username", JSON.stringify(userName));
    setUserName(userName.username);
  };

  return {
    setToken: saveToken,
    setUserName: saveUserName,
    token,
    username,
  };
}
