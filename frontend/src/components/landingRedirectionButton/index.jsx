import React from "react";
import "./styles/style.css";
import "../../fonts/Qualta/Qualta-Bold.ttf";
import "../../fonts/Qualta/Qualta-Regular.ttf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const LandingRedirectionButton = ({goto, innerButton}) => {
  return (
    <div className="connectcontainer">
      <div className="connect">
          <Link to={goto} className="connectext">{innerButton}</Link>
      </div>
      <div className="inscrip">
        <span>
          Vous n'avez pas encore de compte ?
          <Link
            to={{
              pathname: "/signup",
            }}
            href=""
          >
            {" "}
            Inscrivez-vous
          </Link>
        </span>
      </div>
    </div>
  );
};

LandingRedirectionButton.propTypes = {
    goto: PropTypes.string,
    innerButton: PropTypes.string
}

export default LandingRedirectionButton;
