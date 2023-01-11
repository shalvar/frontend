import "../styles/globals.css";
import Header from "../components/header";
import { createContext } from "react";
import request from "../lib/request.js";
import { useEffect, useState } from "react";

// create context for user data and update user function
export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
 
  return (
    <>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
