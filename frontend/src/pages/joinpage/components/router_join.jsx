import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../../homepage/style/main.css";
import Evenement from "../../evenement";

function RouterJoin() {
  return (
    <>
      <div className="navbar">
        <ul className="list">
          <li>
            <Link to="/homepage"> Jouer </Link>{" "}
          </li>
          <li>
            <Link to="/join" className="activelink"> Rejoindre </Link>{" "}
          </li>
          <li>
            <Link to="/evenement"> Evenements </Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

export default RouterJoin;
