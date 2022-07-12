import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/main.css";

function Router() {
  useEffect (() => {
    if (window.location.pathname.includes('home')) {
      document.getElementById('home').classList.add('activelink');
    }
    else if (window.location.pathname.includes('join')) {
      document.getElementById('join').classList.add('activelink');
    }
    else if (window.location.pathname.includes('evenement')) {
      document.getElementById('evenement').classList.add('activelink');
    }
  })

  return (
    <>
      <div className="router">
        <ul className="list-router">
          <li className="homepage" id="home">
            <Link to="/home"> Jouer </Link>{" "}
          </li>
          <li className="join" id="join">
            <Link to="/join" > Rejoindre </Link>{" "}
          </li>
          <li className="event" id="evenement">
            <Link to="/evenement"> Evenements </Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Router;
