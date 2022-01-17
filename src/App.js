import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Redirect,
  Switch,
  Route,
  BrowserRouter as ReactRouter,
  useHistory,
} from "react-router-dom";
import Login from "./pages/login/Login";
import SignIn from "./pages/signin/SignIn";
import Chat from "./pages/chat/Chat";

function App() {
  return (
    <div className="App">
      <div>
        <ReactRouter>
          <Switch>
            <Route path="/login" component={() => <Login />} />
            <Route path="/signin" component={() => <SignIn />} />
            <Route path="/chat" component={() => <Chat />} />
            <Redirect from="/" to="login" />
          </Switch>
        </ReactRouter>
      </div>
    </div>
  );
}

export default App;

/*
{data.map((img, key) => {
          return (
            <img
              key={key}
              src={img}
              style={{ margin: "20px", height: "100px", width: "100px" }}
            />
          );
        })}

*/
