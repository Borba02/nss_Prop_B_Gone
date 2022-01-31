import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews.js";

import { Login } from "./auth/Login.js";
import { Register } from "./auth/Register.js";
import { NavBar } from "./components/nav/NavBar.js";
import "./Prop-B-Gone.css";

export const PropBGone = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("pbg_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);