import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../style/main.css";
import Evenement from "../../evenement";

function Router() {
  return (
    <>
      <div className="router">
        <ul className="list-router">
          <li className="homepage">
            <Link to="/homepage"> Jouer </Link>{" "}
          </li>
          <li className="join">
            <Link to="/join"> Rejoindre </Link>{" "}
          </li>
          <li className="event">
            <Link to="/evenement"> Evenements </Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Router;
