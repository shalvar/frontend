import "../styles/globals.css";
import Header from "../components/header";
import { createContext } from "react";
import request from "../lib/request.js";
import { useEffect, useState } from "react";

// create context for user data and update user function
export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  const updateUser = (user) => {
    localStorage.getItem("access") &&
      request("/auth/me/", "GET")
        .then((res) => {
          console.log(res);
          setUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, updateUser }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
