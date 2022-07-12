import React from "react";
import { Link } from "react-router-dom";
import "../../homepage/style/main.css";

function RouterJoin() {
  return (
    <>
      <div className="navbar">
        <ul className="list">
          <li>
            <Link to="/home"> Jouer </Link>{" "}
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
