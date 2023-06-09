import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Skeleton.css";

import { Bingo } from "../modules/Bingo";
import { Client } from "../modules/Client";
import Canvas from "./Canvas.js";

//DONE: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "129187030151-esru0agv2vkd0hc52na5q1322gvlkh5v.apps.googleusercontent.com";

const Skeleton = ({ userId, handleLogin, handleLogout }) => {
  // get Bingo board from API
  const bingo = new Bingo("abcdefghijklmnopqrstuvwxy".split(""));

  // start a new Client for active play
  const client = new Client(bingo);

  console.log(bingo.toString());

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {userId ? (
        <button
          onClick={() => {
            googleLogout();
            handleLogout();
          }}
        >
          Logout
        </button>
      ) : (
        <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
      )}
      <h1>actual bingo</h1>
      <h2>spend this summer doing actual things youknowwhadimean</h2>

      <Canvas client={client} />


    </GoogleOAuthProvider>
  );
};

export default Skeleton;
